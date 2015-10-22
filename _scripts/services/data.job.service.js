(function (services) {
   'use strict';

    services.factory('DataJob', ['Default', function (defaults) {
        var Job = function (options) {
            this.data = options.data || {};
            this.expires = options.expires || defaults.cacheTime;
            this.force = options.force || false;
            this.method = options.method || null;
            this.path = options.path || null;
            this.skipCache = options.skipCache || false;
            this.tags = options.tags || [];
            this.url = options.url || null;
            this.access_token = options.access_token || null;
            this.request = function () {
                var req = {
                    method: this.method,
                    url: this.url,
                    headers: {}
                }

                if (this.access_token) {
                    req.headers.Authorization = 'Bearer ' + this.access_token;
                }

                if (this.data) {
                    switch (this.method.toLowerCase()) {
                        case 'post':
                        case 'put':
                            req.data = this.data;
                            break;
                        case 'get':
                        case 'delete':
                        case 'options':
                        default:
                            req.params = this.data;
                            break;
                    }
                }

                return req;
            }
        };

        return {
            create: function (options) {
                return new Job(options);
            }
        }
    }]);

}(angular.module('bydreco.services')));
