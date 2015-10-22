(function (directives) {
   'use strict';

    directives.directive('randomProductButton', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: '/views/random-product-button.html',
            controller: ['$state', 'DataService', function ($state, data) {
                var vm = this;

                vm.go = function () {
                    data.getRandomProduct().then(function (product) {
                        $state.go('product', {productId: product.id, productName: product.name});
                    }, function () {

                    });
                }
            }],
            controllerAs: 'random',
        };
    }]);

}(angular.module('bydreco.directives')));
