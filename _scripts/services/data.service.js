(function (services) {
   'use strict';

    services.service('DataService', ['$q', 'DataApiService', 'MessageService', function ($q, api, messages) {
        return {
            addDescriptionToProduct: function (description, productId) {
                return api.addDescriptionToProduct(description, productId);
            },
            addDescriptionVote: function (descriptionId, up) {
                return api.addDescriptionVote(descriptionId, up);
            },
            addFailureMessage: function (message) {
                return messages.addFailure(message);
            },
            addSuccessMessage: function (message) {
                return messages.addSuccess(message);
            },
            addProduct: function (productName) {
                return api.addProduct(productName);
            },
            getProduct: function (productId) {
                return api.getProduct(productId);
            },
            getProductDescriptions: function (productId) {
                return api.getProductDescriptions(productId);
            },
            getRandomProduct: function () {
                return api.getRandomProduct();
            },
        };
    }]);

}(angular.module('bydreco.services')));
