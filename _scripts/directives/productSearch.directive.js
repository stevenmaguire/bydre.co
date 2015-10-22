(function (directives) {
   'use strict';

    directives.directive('productSearch', [function () {
        return {
            restrict: 'A',
            controller: ['$state', 'DataService', function ($state, data) {
                var vm = this;
                vm.term = null;
                vm.submit = function () {
                    if (vm.term) {
                        data.getProductSearch(vm.term).then(function (product) {
                            $state.go('product', {productId: product.id});
                        }, function () {
                            $state.go('product', {productId: 16});
                        });
                    }
                };
            }],
            controllerAs: 'search',
        };
    }]);

}(angular.module('bydreco.directives')));
