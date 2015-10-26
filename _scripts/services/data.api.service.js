(function (services) {
   'use strict';

    services.service('DataApiService', ['$http', '$q', '$location', 'Default', 'DataJob', function ($http, $q, $location, defaults, dataJob) {
        var privateMethods = {
            makeUrl: function (path) {
                switch ($location.host()) {
                    case 'www.bydre.co':
                    case 'dev.bydre.co':
                        return defaults.apiUrl + path;
                    default:
                        return defaults.devApiUrl + path;
                }
            },
            fetchData: function (options) {
                options = options || options;
                if (options.path) {
                    options.url = options.url || this.makeUrl(options.path);
                }

                var job = dataJob.create(options);
                var deferred = $q.defer();

                $http(job.request())
                    .success(function(response) {
                        deferred.resolve(response);
                    })
                    .error(function (msg, code) {
                        deferred.reject(msg);
                    });

                return deferred.promise;
            },
        };

        return {
            addDescriptionToProduct: function (description, productId) {
                return privateMethods.fetchData({
                    data: description,
                    method: 'post',
                    path: '/api/products/'+productId+'/descriptions'
                });
            },
            addDescriptionVote: function (descriptionId, up) {
                up = Boolean(up);
                return privateMethods.fetchData({
                    method: 'post',
                    path: '/api/descriptions/'+descriptionId+'/'+(up ? 'vote-up' : 'vote-down')
                });
            },
            addProduct: function (productName) {
                return privateMethods.fetchData({
                    data: {name: productName},
                    method: 'post',
                    path: '/api/products'
                });
            },
            getProduct: function (productId) {
                return privateMethods.fetchData({
                    method: 'get',
                    path: '/api/products/'+productId
                });
            },
            getProductDescriptions: function (productId) {
                return privateMethods.fetchData({
                    method: 'get',
                    path: '/api/products/'+productId+'/descriptions'
                });
            },
            getRandomProduct: function () {
                return privateMethods.fetchData({
                    method: 'get',
                    path: '/api/products?sort=random&take=1'
                });
            },
        };
    }]);

}(angular.module('bydreco.services')));
