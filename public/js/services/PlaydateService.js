'use strict';

angular.module('wriggleApp', ['ngRoute'])
.service('Playdates', ['$http', function($http) {

    this.getPlaydates = function() {
        console.log('inside playdates service')
    }
}]);