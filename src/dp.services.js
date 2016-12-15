angular.module('DolphinPlatform', []);

angular.module('DolphinPlatform').provider('$dolphinConfig', function () {

    var $cfg = {};
    this.configure = function (cfg) {
        $cfg = cfg;
    };

    this.$get = function () {
        return $cfg;
    };

});

angular.module('DolphinPlatform').factory('dolphin', function () {
    return dolphin;
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['dolphin', '$dolphinConfig', '$window', function (dolphin, $dolphinConfig, $window) {
    var vanillaClientContext = dolphin.connect($dolphinConfig.DOLPHIN_URL, $dolphinConfig);

    return vanillaClientContext;
}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', '$window', function (vanillaClientContext, $window) {
    var clientContext = {
        createController: function (scope, controllerName) {
            return vanillaClientContext.createController(controllerName).then(function (controllerProxy) {
                scope.$on("$destroy", function () {
                    controllerProxy.destroy();
                });
                scope.model = controllerProxy.model;

                //TODO: Hier müssen Observer registeriert werden um scope.$apply() nach Änderungen aufzurufen /
                // Änderungen an BeanManager weiterzureichen...

                scope.$apply();
                return controllerProxy;
            });
        },
        disconnect: function () {
            vanillaClientContext.disconnect();
        }
    };

    $window.onbeforeunload = clientContext.disconnect;

    return clientContext;
}]);


angular.module('DolphinPlatform').factory('dolphinBinding', ['$rootScope', 'vanillaClientContext', function ($rootScope, vanillaClientContext) {

    $rootScope.waitingForGlobalDolphinApply = false;

    $rootScope.applyInAngular = function () {
        if (!$rootScope.waitingForGlobalDolphinApply) {
            $rootScope.waitingForGlobalDolphinApply = true;
            $timeout(function () {
                $rootScope.waitingForGlobalDolphinApply = false;
                $rootScope.$apply();
            }, 100);
        }
    };

    var dolphinBinding = {

        bindScope: function (scope, fn) {
            return function () {
                fn.apply(scope, arguments);
            };
        },
        init: function (beanManager) {
            this.listeners = new Map();

            beanManager.onBeanUpdate(bindScope(this, this.onBeanUpdateHandler));
            beanManager.onArrayUpdate(bindScope(this, this.onArrayUpdateHandler));
        },
        onBeanUpdateHandler: function (bean, propertyName, newValue, oldValue) {
            if (oldValue === newValue) {
                return;
            }
            var listenerList = this.listeners.get(bean);
            if (exists(listenerList) && listenerList.length > 0) {
                var entry = listenerList[0];
                var element = entry.element;
                var path = entry.rootPath + '.' + propertyName;
                element.set(path, newValue);
            } else {
                bean[propertyName] = newValue;
            }
        },
        onArrayUpdateHandler: function (bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (deepEqual(newElements, oldElements)) {
                return;
            }
            var listenerList = this.listeners.get(bean);
            if (exists(listenerList) && listenerList.length > 0) {
                var entry = listenerList[0];
                var element = entry.element;
                var path = entry.rootPath + '.' + propertyName;
                if (typeof newElements === 'undefined') {
                    element.splice(path, index, count);
                } else {
                    element.splice.apply(element, [path, index, count].concat(newElements));
                }
            } else {
                if (typeof newElements === 'undefined') {
                    array.splice(index, count);
                } else {
                    array.splice.apply(array, [index, count].concat(newElements));
                }
            }
        },
        bind: function (element, rootPath, value) {
            if (!exists(value) || typeof value !== 'object') {
                return;
            }
            var listenerList = this.listeners.get(value);
            if (!exists(listenerList)) {
                listenerList = [];
                this.listeners.set(value, listenerList);
            }
            listenerList.push({element: element, rootPath: rootPath});

            if (Array.isArray(value)) {
                for (var i = 0; i < value.length; i++) {
                    this.bind(element, rootPath + '.' + i, value[i]);
                }
            } else if (typeof value === 'object') {
                for (var propertyName in value) {
                    if (value.hasOwnProperty(propertyName)) {
                        this.bind(element, rootPath + '.' + propertyName, value[propertyName]);
                    }
                }
            }
        },
        unbind: function (element, rootPath, value) {
            if (!exists(value) || typeof value !== 'object') {
                return;
            }
            var listenerList = this.listeners.get(value);
            if (exists(listenerList)) {
                var n = listenerList.length;
                for (var i = 0; i < n; i++) {
                    var entry = listenerList[i];
                    if (entry.element === element && entry.rootPath === rootPath) {
                        listenerList.splice(i, 1);

                        if (Array.isArray(value)) {
                            for (var j = 0; j < value.length; j++) {
                                this.unbind(element, rootPath + '.' + j, value[j]);
                            }
                        } else if (typeof value === 'object') {
                            for (var propertyName in value) {
                                if (value.hasOwnProperty(propertyName)) {
                                    this.unbind(element, rootPath + '.' + propertyName, value[propertyName]);
                                }
                            }
                        }
                        return;
                    }
                }
            }
        }
    };

    return dolphinBinding;

}]);
