(function(annyang) {
    'use strict';

    function RainService() {
        var service = {};

        service.generateMap = function() {
            return config.rain.url;
        };

        return service;
    }

    angular.module('SmartMirror')
        .factory('RainService', RainService);

}(window.annyang));
