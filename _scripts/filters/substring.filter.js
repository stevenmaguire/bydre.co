(function (filters) {
   'use strict';

    filters.filter('substring', function() {
        return function(input, index, length) {
            index = index || 0;
            length = length || 1;

            return input.substring(index, length);
        };
    });

}(angular.module('bydreco.filters')));
