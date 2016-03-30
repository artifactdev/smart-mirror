(function(annyang) {
    'use strict';

    function TramService($http) {
        var service = {};

        service.getData = function() {


        }

        return service;
    }

    angular.module('SmartMirror')
        .factory('TramService', TramService);

}(window.annyang));
