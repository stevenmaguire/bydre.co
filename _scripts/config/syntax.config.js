(function (app) {
   'use strict';

    app.config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

}(angular.module('bydreco')));
