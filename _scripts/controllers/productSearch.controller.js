(function (controllers) {
   'use strict';

    controllers.controller('ProductSearchCtrl', ['$state', 'DataService', function ($state, data) {
        var vm = this;
        vm.term = null;
        vm.submit = function () {
            if (vm.term) {
                data.getProduct(vm.term).then(function (product) {
                    redirectToProduct(product.name);
                }, function (error) {
                    data.addProduct(vm.term).then(function (product) {
                        data.addSuccessMessage('Thank you for your contribution of "'+product.name+'" to our product eco-system!');
                        redirectToProduct(product.name);
                    }, function (error) {
                        data.addFailureMessage(error.name[0]);
                        redirectToProduct('defeats');
                    });
                });
            }
        };

        var redirectToProduct = function (productName) {
            $state.go('product', {productName: productName});
        };
    }]);

}(angular.module('bydreco.controllers')));
