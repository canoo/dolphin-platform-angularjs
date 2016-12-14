angular.module('app.controllers', []).controller('MyController', function ($scope, clientContext) {

    clientContext.createControllerProxy($scope, 'MyController').
    then(function (controllerProxy) {

        $scope.save = function() {
            controllerProxy.invoke('save');
        };
    });
});


