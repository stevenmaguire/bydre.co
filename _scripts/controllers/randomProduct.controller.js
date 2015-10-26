(function (controllers) {
   'use strict';

    controllers.controller('RandomProductCtrl', ['$state', 'DataService', function ($state, data) {
        var vm = this;

        vm.go = function () {
            data.getRandomProduct().then(function (product) {
                $state.go('product', {productName: product.name});
            }, function () {

            });
        }
    }]);

}(angular.module('bydreco.controllers')));
