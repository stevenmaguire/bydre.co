(function (controllers) {
   'use strict';

    controllers.controller('MessagesCtrl', ['MessageService', function (messages) {
        var vm = this;
        vm.failure = messages.failure;
        vm.success = messages.success;
    }]);

}(angular.module('bydreco.controllers')));
