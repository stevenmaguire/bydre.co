(function (angular, jQuery) {
   'use strict';

    angular.module('bydreco.constants', []);
    angular.module('bydreco.controllers', []);
    angular.module('bydreco.directives', []);
    angular.module('bydreco.filters', []);
    angular.module('bydreco.services', []);

    var tacoshell = angular.module('bydreco', [
            'bydreco.constants'
            ,'bydreco.controllers'
            ,'bydreco.directives'
            ,'bydreco.filters'
            ,'bydreco.services'
            ,'ui.router'
            ,'ngMessages'
        ])
        .run(['$log', function ($log) {
            $(document).foundation();
        }]);
}(angular, $));
