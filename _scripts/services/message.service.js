(function (services) {
   'use strict';

    services.service('MessageService', ['$timeout', function ($timeout) {
        var addMessage = function (message, collection) {
            if (collection.indexOf(message) == -1) {
                collection.push(message);
                $timeout(function(){
                    var index = collection.indexOf(message);
                    if (index > -1) {
                        collection.splice(index, 1);
                    }
                }, 5000);
            }

            return true;
        }
        return {
            failure: [],
            success: [],
            addFailure: function (message) {
                return addMessage(message, this.failure);
            },
            addSuccess: function (message) {
                return addMessage(message, this.success);
            },
        };
    }]);

}(angular.module('bydreco.services')));
