/* Copyright 2015 Canoo Engineering AG.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var dolphinClient = require('../bower_components/dolphin-platform-js/dist/dolphin-platform.js');
window.platformClient = dolphinClient;
angular.module('DolphinPlatform', []);


angular.module('DolphinPlatform').provider('$dolphinConfig', [function () {

    var $cfg = {};
    this.configure = function (cfg) {
        $cfg = cfg;
    };

    this.$get = function () {
        return $cfg;
    };

}]);

angular.module('DolphinPlatform').factory('logger', function () {
    return dolphinClient.LoggerFactory.getLogger('DolphinPlatform');
});

angular.module('DolphinPlatform').factory('clientContextFactory', function () {
    return dolphinClient.getService('ClientContextFactory');
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['clientContextFactory', '$dolphinConfig', function (clientContextFactory, $dolphinConfig) {
    return clientContextFactory.create($dolphinConfig.DOLPHIN_URL, $dolphinConfig);
}]);

angular.module('DolphinPlatform').factory('handlerCache', ['$cacheFactory', function ($cacheFactory) {
    return $cacheFactory('handlers');
}]);

angular.module('DolphinPlatform').factory('dolphinBinding', ['$rootScope', '$timeout', 'vanillaClientContext', 'handlerCache', 'logger', function ($rootScope, $timeout, vanillaClientContext, handlerCache, logger) {

    $rootScope.waitingForGlobalDolphinApply = false;

    $rootScope.applyInAngular = function () {
        if (!$rootScope.waitingForGlobalDolphinApply) {
            $rootScope.waitingForGlobalDolphinApply = true;
            $timeout(function () {
                $rootScope.waitingForGlobalDolphinApply = false;
                logger.debug('Creating Dolphin Platform controller');
                $rootScope.$apply();
            }, 100);
        }
    };

    var dolphinBinding = {

        injectArray: function (baseArray, startIndex, insertArray) {
            baseArray.splice.apply(baseArray, [startIndex, 0].concat(insertArray));
        },
        exists: function (object) {
            return typeof object !== 'undefined' && object !== null;
        },
        deepEqual: function (array1, array2) {
            if (array1 === array2 || (!this.exists(array1) && !this.exists(array2))) {
                return true;
            }
            if (this.exists(array1) !== this.exists(array2)) {
                return false;
            }
            var n = array1.length;
            if (array2.length !== n) {
                return false;
            }
            for (var i = 0; i < n; i++) {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        },
        init: function (beanManager) {
            var handlers = [];
            var onBeanAddedHandlerResult = beanManager.onAdded(dolphinBinding.onBeanAddedHandler);
            handlers.push(onBeanAddedHandlerResult);
            var onBeanRemovedHandlerResult = beanManager.onRemoved(dolphinBinding.onBeanRemovedHandler);
            handlers.push(onBeanRemovedHandlerResult);
            var onBeanUpdateHandlerResult = beanManager.onBeanUpdate(dolphinBinding.onBeanUpdateHandler);
            handlers.push(onBeanUpdateHandlerResult);
            var onArrayUpdateHandlerResult = beanManager.onArrayUpdate(dolphinBinding.onArrayUpdateHandler);
            handlers.push(onArrayUpdateHandlerResult);

            handlerCache.put('handlers', handlers);
            logger.debug('Dolphin Platform binding listeners for Angular registered');
        },
        watchAttribute: function (bean, attribute) {
            logger.debug('Added Angular listener for property ' + attribute + ' of bean ' + JSON.stringify(bean));
            $rootScope.$watch(
                function () {
                    return bean[attribute];
                },
                function (newValue, oldValue) {
                    logger.debug('Value ' + attribute + ' of bean ' + JSON.stringify(bean) + ' changed from ' + oldValue + ' to ' + newValue);
                    vanillaClientContext.beanManager.classRepository.notifyBeanChange(bean, attribute, newValue);
                }
            );
        },
        onBeanAddedHandler: function (bean) {
            logger.debug('Bean ' + JSON.stringify(bean) + ' added');

            for (var attr in bean) {
                dolphinBinding.watchAttribute(bean, attr);
            }

            $rootScope.applyInAngular();
        },
        onBeanRemovedHandler: function (bean) {
            logger.debug('Bean ' + JSON.stringify(bean) + ' removed');
            $rootScope.applyInAngular();
        },
        onBeanUpdateHandler: function (bean, propertyName, newValue, oldValue) {
            var newProperty = true;
            for (var attr in bean) {
                if (attr === propertyName) {
                    newProperty = false;
                }
            }

            if (newProperty) {
                logger.debug('Value ' + propertyName + ' was added to bean ' + JSON.stringify(bean));
                dolphinBinding.watchAttribute(bean, propertyName);
            }

            if (oldValue === newValue) {
                logger.debug('Received bean update for property ' + propertyName + ' without any change');
                return;
            }

            logger.debug('Bean update for property ' + propertyName + ' with new value "' + newValue + '"');

            bean[propertyName] = newValue;
            $rootScope.applyInAngular();
        },
        onArrayUpdateHandler: function (bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (dolphinBinding.deepEqual(newElements, oldElements)) {
                return;
            }

            logger.debug('Array update for property ' + propertyName + ' starting at index ' + index + ' with ' + JSON.stringify(newElements));

            if (typeof newElements === 'undefined' || (newElements && newElements.length === 0)) {
                array.splice(index, count);
                $rootScope.applyInAngular();
            } else {
                dolphinBinding.injectArray(array, index, newElements);

                for (bean in newElements) {
                    for (var attr in bean) {
                        dolphinBinding.watchAttribute(bean, attr);
                    }
                }

                $rootScope.applyInAngular();
            }
        }
    };

    logger.debug('Dolphin Platform binding created');

    return dolphinBinding;

}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', 'dolphinBinding', '$window', 'handlerCache', 'logger', function (vanillaClientContext, dolphinBinding, $window, handlerCache, logger) {
    var clientContext = {
        createController: function (scope, controllerName) {
            return vanillaClientContext.createController(controllerName).then(function (controllerProxy) {
                logger.debug('Creating Dolphin Platform controller ' + controllerName);
                scope.$on('$destroy', function () {
                    logger.debug('Destroying Dolphin Platform controller ' + controllerName);
                    controllerProxy.destroy();
                });
                scope.model = controllerProxy.model;
                return controllerProxy;
            });
        },
        disconnect: function () {
            vanillaClientContext.disconnect().then(function () {
                logger.debug('Dolphin Platform context disconnected');
                //unsubscribe the handlers
                const handlerArray = handlerCache.get('handlers');
                for (var i = 0; i < handlerArray.length; i++) {
                    const handler = handlerArray[i];
                    handler.unsubscribe();
                }
                handlerCache.remove('handlers');
            });
        },
        connect: function () {
            vanillaClientContext.connect().then(function () {
                logger.debug('Dolphin Platform context connected');
            });
        },
        onConnect: function () {
            return vanillaClientContext.onConnect().then(function () {
                logger.debug('Dolphin Platform context connected');
            });
        }
    };

    dolphinBinding.init(vanillaClientContext.beanManager);
    $window.onbeforeunload = clientContext.disconnect;

    logger.debug('Dolphin Platform context created');

    return clientContext;
}]);
