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
    //TODO: Rausfinden wie das im Browser geht....
    return require('../bower_components/dolphin-js/dist/dolphin.js');
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['dolphin', '$dolphinConfig', function (dolphin, $dolphinConfig) {
    return dolphin.connect($dolphinConfig.DOLPHIN_URL, $dolphinConfig);
}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', function (vanillaClientContext) {
    return {
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
    }
}]);