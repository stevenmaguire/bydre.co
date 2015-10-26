(function (directives) {
   'use strict';

    directives.directive('messages', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: '/views/messages.html',
            controller: 'MessagesCtrl',
            controllerAs: 'messages',
        };
    }]);

}(angular.module('bydreco.directives')));
