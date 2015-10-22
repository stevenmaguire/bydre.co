(function (controllers) {
   'use strict';

    controllers.controller('HomeCtrl', ['randomProduct', function (randomProduct) {
        var vm = this;

        vm.randomProduct = randomProduct;
    }]);

}(angular.module('bydreco.controllers')));
