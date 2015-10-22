(function (controllers) {
   'use strict';

    controllers.controller('ProductCtrl', ['DataService', 'product', 'descriptions', function (data, product, descriptions) {
        var vm = this;

        vm.currentProduct = product;
        vm.descriptions = descriptions.data;
        vm.newDescription = {};

        vm.addDescription = function (descriptionForm) {
            if (descriptionForm.$valid) {
                data.addDescriptionToProduct(vm.newDescription, vm.currentProduct.id).then(function (description) {
                    descriptionForm.$setPristine();
                    vm.newDescription = {};
                    addDescription(description);
                }, function () {

                });
            }
        };

        vm.voteDownDescription = function (description) {
            data.addDescriptionVote(description.id, false).then(function (description) {
                updateDescription(description);
            }, function () {

            });
        };

        vm.voteUpDescription = function (description) {
            data.addDescriptionVote(description.id, true).then(function (description) {
                updateDescription(description);
            }, function () {

            });
        };

        var addDescription = function (description) {
            vm.descriptions.push(description);

            sortDescriptions();
        };

        var sortDescriptions = function () {
            vm.descriptions.sort(function (a, b) {
                return parseFloat(b.score) - parseFloat(a.score);
            });
        };

        var updateDescription = function (description) {
            for (var i in vm.descriptions) {
                if (vm.descriptions[i].id == description.id) {
                    vm.descriptions[i] = description;
                    break;
                }
            }

            sortDescriptions();
        };

        sortDescriptions();
    }]);

}(angular.module('bydreco.controllers')));
