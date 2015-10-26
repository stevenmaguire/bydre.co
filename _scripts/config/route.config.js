(function (app) {
   'use strict';

    app.config(function ($urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider, $stateProvider, $provide) {

        $urlRouterProvider.otherwise('/');
        $urlMatcherFactoryProvider.strictMode(false)

        $provide.decorator('$state', function($delegate, $rootScope) {
            $rootScope.$on('$stateChangeStart', function(event, state, params) {
                $delegate.next = state;
                $delegate.toParams = params;
            });

            return $delegate;
        });

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home',
                resolve: {
                    randomProduct: function (DataService) {
                        return DataService.getRandomProduct();
                    }
                }
            })
            .state('product', {
                url: '/:productName',
                templateUrl: 'views/product.html',
                controller: 'ProductCtrl',
                controllerAs: 'product',
                resolve: {
                    product: function ($stateParams, DataService) {
                        return DataService.getProduct($stateParams.productName);
                    },
                    descriptions: function ($stateParams, DataService) {
                        return DataService.getProductDescriptions($stateParams.productName);
                    }
                }
            })

        //$locationProvider.html5Mode(true);
    });

}(angular.module('bydreco')));
