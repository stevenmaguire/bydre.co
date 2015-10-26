(function (directives) {
   'use strict';

    directives.directive('productSearch', [function () {
        return {
            restrict: 'A',
            controller: 'ProductSearchCtrl',
            controllerAs: 'search',
        };
    }]);

}(angular.module('bydreco.directives')));
