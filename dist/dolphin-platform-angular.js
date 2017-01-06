(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*global dolphin*/
'use strict';
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

angular.module('DolphinPlatform').factory('dolphin', function () {
    return dolphin;
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['dolphin', '$dolphinConfig', '$window', '$log', function (dolphin, $dolphinConfig, $window, $log) {
    var vanillaClientContext = dolphin.connect($dolphinConfig.DOLPHIN_URL, $dolphinConfig);
    $log.debug('Basic Dolphin Platform context created');
    return vanillaClientContext;
}]);

angular.module('DolphinPlatform').factory('dolphinBinding', ['$rootScope', '$timeout', 'vanillaClientContext', '$log', function ($rootScope, $timeout, vanillaClientContext, $log) {

    $rootScope.waitingForGlobalDolphinApply = false;

    $rootScope.applyInAngular = function () {
        if (!$rootScope.waitingForGlobalDolphinApply) {
            $rootScope.waitingForGlobalDolphinApply = true;
            $timeout(function () {
                $rootScope.waitingForGlobalDolphinApply = false;
                $log.debug('Angular apply is called by Dolphin Platform');
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
            beanManager.onAdded(dolphinBinding.onBeanAddedHandler);
            beanManager.onRemoved(dolphinBinding.onBeanRemovedHandler);
            beanManager.onBeanUpdate(dolphinBinding.onBeanUpdateHandler);
            beanManager.onArrayUpdate(dolphinBinding.onArrayUpdateHandler);

            $log.debug('Dolphin Platform binding listeners for Angular registered');
        },
        watchAttribute: function (bean, attribute) {
            $log.debug('Added Angular listener for property ' + attribute +  ' of bean ' + JSON.stringify(bean));
            $rootScope.$watch(
                function() { return bean[attribute]; },
                function(newValue, oldValue) {
                    $log.debug('Value ' + attribute + ' of bean ' + JSON.stringify(bean) +' changed from '+ oldValue+ ' to ' + newValue);
                    vanillaClientContext.beanManager.classRepository.notifyBeanChange(bean, attribute, newValue);
                }
            );
        },
        onBeanAddedHandler: function(bean) {
            $log.debug('Bean ' + JSON.stringify(bean) + ' added');

            for(var attr in bean) {
                dolphinBinding.watchAttribute(bean, attr);
            }

            $rootScope.applyInAngular();
        },
        onBeanRemovedHandler: function(bean) {
            $log.debug('Bean ' + JSON.stringify(bean) + ' removed');
            $rootScope.applyInAngular();
        },
        onBeanUpdateHandler: function (bean, propertyName, newValue, oldValue) {
            var newProperty = true;
            for(var attr in bean) {
                if(attr === propertyName) {
                    newProperty = false;
                }
            }

            if(newProperty) {
                $log.debug('Value ' + propertyName + ' was added to bean ' + JSON.stringify(bean));
                dolphinBinding.watchAttribute(bean, propertyName);
            }

            if (oldValue === newValue) {
                $log.debug('Received bean update for property ' + propertyName + ' without any change');
                return;
            }

            $log.debug('Bean update for property ' + propertyName + ' with new value "' + newValue + '"');

            bean[propertyName] = newValue;
            $rootScope.applyInAngular();
        },
        onArrayUpdateHandler: function (bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (dolphinBinding.deepEqual(newElements, oldElements)) {
                return;
            }

            $log.debug('Array update for property ' + propertyName + ' starting at index ' + index + ' with ' + JSON.stringify(newElements));

            if (typeof newElements === 'undefined') {
                array.splice(index, count);
                $rootScope.applyInAngular();
            } else {
                dolphinBinding.injectArray(array, index, newElements);

                for(bean in newElements) {
                    for(var attr in bean) {
                        dolphinBinding.watchAttribute(bean, attr);
                    }
                }

                $rootScope.applyInAngular();
            }
        }
    };

    $log.debug('Dolphin Platform binding created');

    return dolphinBinding;

}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', 'dolphinBinding', '$window', '$log', function (vanillaClientContext, dolphinBinding, $window, $log) {
    var clientContext = {
        createController: function (scope, controllerName) {
            return vanillaClientContext.createController(controllerName).then(function (controllerProxy) {
                $log.debug('Creating Dolphin Platform controller ' + controllerName);
                scope.$on('$destroy', function () {
                    $log.debug('Destroying Dolphin Platform controller ' + controllerName);
                    controllerProxy.destroy();
                });
                scope.model = controllerProxy.model;
                return controllerProxy;
            });
        },
        disconnect: function () {
            vanillaClientContext.disconnect();
            $log.debug('Dolphin Platform context disconnected');
        }
    };

    dolphinBinding.init(vanillaClientContext.beanManager);

    $window.onbeforeunload = clientContext.disconnect;

    $log.debug('Dolphin Platform context created');

    return clientContext;
}]);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZG9scGhpbi1wbGF0Zm9ybS1hbmd1bGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmdsb2JhbCBkb2xwaGluKi9cbid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5wcm92aWRlcignJGRvbHBoaW5Db25maWcnLCBbZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyICRjZmcgPSB7fTtcbiAgICB0aGlzLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgICAgJGNmZyA9IGNmZztcbiAgICB9O1xuXG4gICAgdGhpcy4kZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJGNmZztcbiAgICB9O1xuXG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCdkb2xwaGluJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb2xwaGluO1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCd2YW5pbGxhQ2xpZW50Q29udGV4dCcsIFsnZG9scGhpbicsICckZG9scGhpbkNvbmZpZycsICckd2luZG93JywgJyRsb2cnLCBmdW5jdGlvbiAoZG9scGhpbiwgJGRvbHBoaW5Db25maWcsICR3aW5kb3csICRsb2cpIHtcbiAgICB2YXIgdmFuaWxsYUNsaWVudENvbnRleHQgPSBkb2xwaGluLmNvbm5lY3QoJGRvbHBoaW5Db25maWcuRE9MUEhJTl9VUkwsICRkb2xwaGluQ29uZmlnKTtcbiAgICAkbG9nLmRlYnVnKCdCYXNpYyBEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgY3JlYXRlZCcpO1xuICAgIHJldHVybiB2YW5pbGxhQ2xpZW50Q29udGV4dDtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ2RvbHBoaW5CaW5kaW5nJywgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJ3ZhbmlsbGFDbGllbnRDb250ZXh0JywgJyRsb2cnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQsIHZhbmlsbGFDbGllbnRDb250ZXh0LCAkbG9nKSB7XG5cbiAgICAkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkgPSBmYWxzZTtcblxuICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5KSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkgPSB0cnVlO1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0FuZ3VsYXIgYXBwbHkgaXMgY2FsbGVkIGJ5IERvbHBoaW4gUGxhdGZvcm0nKTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZG9scGhpbkJpbmRpbmcgPSB7XG5cbiAgICAgICAgaW5qZWN0QXJyYXk6IGZ1bmN0aW9uIChiYXNlQXJyYXksIHN0YXJ0SW5kZXgsIGluc2VydEFycmF5KSB7XG4gICAgICAgICAgICBiYXNlQXJyYXkuc3BsaWNlLmFwcGx5KGJhc2VBcnJheSwgW3N0YXJ0SW5kZXgsIDBdLmNvbmNhdChpbnNlcnRBcnJheSkpO1xuICAgICAgICB9LFxuICAgICAgICBleGlzdHM6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBvYmplY3QgIT09IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZXBFcXVhbDogZnVuY3Rpb24gKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXkxID09PSBhcnJheTIgfHwgKCF0aGlzLmV4aXN0cyhhcnJheTEpICYmICF0aGlzLmV4aXN0cyhhcnJheTIpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpc3RzKGFycmF5MSkgIT09IHRoaXMuZXhpc3RzKGFycmF5MikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbiA9IGFycmF5MS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoYXJyYXkyLmxlbmd0aCAhPT0gbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGJlYW5NYW5hZ2VyKSB7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkFkZGVkKGRvbHBoaW5CaW5kaW5nLm9uQmVhbkFkZGVkSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vblJlbW92ZWQoZG9scGhpbkJpbmRpbmcub25CZWFuUmVtb3ZlZEhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKGRvbHBoaW5CaW5kaW5nLm9uQmVhblVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25BcnJheVVwZGF0ZShkb2xwaGluQmluZGluZy5vbkFycmF5VXBkYXRlSGFuZGxlcik7XG5cbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gYmluZGluZyBsaXN0ZW5lcnMgZm9yIEFuZ3VsYXIgcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaEF0dHJpYnV0ZTogZnVuY3Rpb24gKGJlYW4sIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQWRkZWQgQW5ndWxhciBsaXN0ZW5lciBmb3IgcHJvcGVydHkgJyArIGF0dHJpYnV0ZSArICAnIG9mIGJlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJHdhdGNoKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gYmVhblthdHRyaWJ1dGVdOyB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdWYWx1ZSAnICsgYXR0cmlidXRlICsgJyBvZiBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArJyBjaGFuZ2VkIGZyb20gJysgb2xkVmFsdWUrICcgdG8gJyArIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFuaWxsYUNsaWVudENvbnRleHQuYmVhbk1hbmFnZXIuY2xhc3NSZXBvc2l0b3J5Lm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgYXR0cmlidXRlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWFuQWRkZWRIYW5kbGVyOiBmdW5jdGlvbihiZWFuKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgYWRkZWQnKTtcblxuICAgICAgICAgICAgZm9yKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy53YXRjaEF0dHJpYnV0ZShiZWFuLCBhdHRyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5SZW1vdmVkSGFuZGxlcjogZnVuY3Rpb24oYmVhbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikgKyAnIHJlbW92ZWQnKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWFuVXBkYXRlSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmV3UHJvcGVydHkgPSB0cnVlO1xuICAgICAgICAgICAgZm9yKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICBpZihhdHRyID09PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG5ld1Byb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnVmFsdWUgJyArIHByb3BlcnR5TmFtZSArICcgd2FzIGFkZGVkIHRvIGJlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pKTtcbiAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy53YXRjaEF0dHJpYnV0ZShiZWFuLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnUmVjZWl2ZWQgYmVhbiB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdpdGhvdXQgYW55IGNoYW5nZScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQmVhbiB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdpdGggbmV3IHZhbHVlIFwiJyArIG5ld1ZhbHVlICsgJ1wiJyk7XG5cbiAgICAgICAgICAgIGJlYW5bcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkFycmF5VXBkYXRlSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cykge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgdmFyIG9sZEVsZW1lbnRzID0gYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgY291bnQpO1xuICAgICAgICAgICAgaWYgKGRvbHBoaW5CaW5kaW5nLmRlZXBFcXVhbChuZXdFbGVtZW50cywgb2xkRWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdBcnJheSB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHN0YXJ0aW5nIGF0IGluZGV4ICcgKyBpbmRleCArICcgd2l0aCAnICsgSlNPTi5zdHJpbmdpZnkobmV3RWxlbWVudHMpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdFbGVtZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLmluamVjdEFycmF5KGFycmF5LCBpbmRleCwgbmV3RWxlbWVudHMpO1xuXG4gICAgICAgICAgICAgICAgZm9yKGJlYW4gaW4gbmV3RWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gYmluZGluZyBjcmVhdGVkJyk7XG5cbiAgICByZXR1cm4gZG9scGhpbkJpbmRpbmc7XG5cbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ2NsaWVudENvbnRleHQnLCBbJ3ZhbmlsbGFDbGllbnRDb250ZXh0JywgJ2RvbHBoaW5CaW5kaW5nJywgJyR3aW5kb3cnLCAnJGxvZycsIGZ1bmN0aW9uICh2YW5pbGxhQ2xpZW50Q29udGV4dCwgZG9scGhpbkJpbmRpbmcsICR3aW5kb3csICRsb2cpIHtcbiAgICB2YXIgY2xpZW50Q29udGV4dCA9IHtcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlcjogZnVuY3Rpb24gKHNjb3BlLCBjb250cm9sbGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbmlsbGFDbGllbnRDb250ZXh0LmNyZWF0ZUNvbnRyb2xsZXIoY29udHJvbGxlck5hbWUpLnRoZW4oZnVuY3Rpb24gKGNvbnRyb2xsZXJQcm94eSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0NyZWF0aW5nIERvbHBoaW4gUGxhdGZvcm0gY29udHJvbGxlciAnICsgY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0Rlc3Ryb3lpbmcgRG9scGhpbiBQbGF0Zm9ybSBjb250cm9sbGVyICcgKyBjb250cm9sbGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJQcm94eS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGUubW9kZWwgPSBjb250cm9sbGVyUHJveHkubW9kZWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXJQcm94eTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YW5pbGxhQ2xpZW50Q29udGV4dC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgZGlzY29ubmVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9scGhpbkJpbmRpbmcuaW5pdCh2YW5pbGxhQ2xpZW50Q29udGV4dC5iZWFuTWFuYWdlcik7XG5cbiAgICAkd2luZG93Lm9uYmVmb3JldW5sb2FkID0gY2xpZW50Q29udGV4dC5kaXNjb25uZWN0O1xuXG4gICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGNyZWF0ZWQnKTtcblxuICAgIHJldHVybiBjbGllbnRDb250ZXh0O1xufV0pO1xuIl19
