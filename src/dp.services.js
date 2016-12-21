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
            this.listeners = new Map();

            beanManager.onBeanUpdate(this.onBeanUpdateHandler);
            beanManager.onArrayUpdate(this.onArrayUpdateHandler);
        },
        onBeanUpdateHandler: function (bean, propertyName, newValue, oldValue) {
            if (oldValue === newValue) {
                return;
            }
            var listenerList = this.listeners.get(bean);
            if (this.exists(listenerList) && listenerList.length > 0) {
                var entry = listenerList[0];
                var element = entry.element;
                var path = entry.rootPath + '.' + propertyName;
                console.error("Hier fehlt nun das setzten der property in angular");
                //element.set(path, newValue);
            } else {
                console.error("Hier fehlt nun das setzten der property in angular");
               // bean[propertyName] = newValue;
            }
        },
        onArrayUpdateHandler: function (bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (this.deepEqual(newElements, oldElements)) {
                return;
            }
            var listenerList = this.listeners.get(bean);
            if (this.exists(listenerList) && listenerList.length > 0) {
                var entry = listenerList[0];
                var element = entry.element;
                var path = entry.rootPath + '.' + propertyName;
                if (typeof newElements === 'undefined') {
                    console.error("Hier fehlt nun das mutieren der liste in angular");
                    //element.splice(path, index, count);
                } else {
                    console.error("Hier fehlt nun das mutieren der liste in angular");
                    //element.splice.apply(element, [path, index, count].concat(newElements));
                }
            } else {
                if (typeof newElements === 'undefined') {
                    console.error("Hier fehlt nun das mutieren der liste in angular");
                    //array.splice(index, count);
                } else {
                    console.error("Hier fehlt nun das mutieren der liste in angular");
                    //array.splice.apply(array, [index, count].concat(newElements));
                }
            }
        },
        bind: function (element, rootPath, value) {
            if (!this.exists(value) || typeof value !== 'object') {
                return;
            }
            var listenerList = this.listeners.get(value);
            if (!this.exists(listenerList)) {
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
            if (!this.exists(value) || typeof value !== 'object') {
                return;
            }
            var listenerList = this.listeners.get(value);
            if (this.exists(listenerList)) {
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

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', 'dolphinBinding', '$window', function (vanillaClientContext, dolphinBinding, $window) {
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

    dolphinBinding.init(vanillaClientContext.beanManager);

    $window.onbeforeunload = clientContext.disconnect;

    return clientContext;
}]);



