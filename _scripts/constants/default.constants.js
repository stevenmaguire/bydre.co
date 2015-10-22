(function (constants) {
   'use strict';

    constants.constant('Default', {
        apiUrl: 'http://service.bydre.co',
        devApiUrl: 'http://localhost:8000',
        cacheTime: 15 * 60 * 1000
    });

}(angular.module('bydreco.constants')));
