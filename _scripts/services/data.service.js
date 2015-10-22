(function (services) {
   'use strict';

    services.service('DataService', ['$q', 'DataApiService', function ($q, api) {
        return {
            addDescriptionToProduct: function (description, productId) {
                return api.addDescriptionToProduct(description, productId);
            },
            addDescriptionVote: function (descriptionId, up) {
                return api.addDescriptionVote(descriptionId, up);
            },
            getProduct: function (productId) {
                return api.getProduct(productId);
            },
            getProductDescriptions: function (productId) {
                return api.getProductDescriptions(productId);
            },
            getProductSearch: function (term) {
                return api.getProductSearch(term);
            },
            getRandomProduct: function () {
                return api.getRandomProduct();
            },
        };
    }]);

}(angular.module('bydreco.services')));
