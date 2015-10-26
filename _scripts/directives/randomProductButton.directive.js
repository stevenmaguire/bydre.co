(function (directives) {
   'use strict';

    directives.directive('randomProductButton', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: '/views/random-product-button.html',
            controller: 'RandomProductCtrl',
            controllerAs: 'random',
        };
    }]);

}(angular.module('bydreco.directives')));
