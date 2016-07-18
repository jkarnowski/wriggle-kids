'use strict';

angular.module('wriggleApp')
.service('Playdates', ['$http', function($http) {

    this.getPlaydates = function() {
        return $http.get('/playdates')
        .then(function(response){
            console.log('SUCCESS - getting playdates! - ');
            return response;
        }, function(response){
            console.log('error getting playdates - ', response.status);
        })
    }

    // return {
    //     // call to get all playdates
    //     getPlaydates : function() {
    //         return $http.get('/playdates');
    //     },
    //     newPlaydateForm : function(){
    //         return $http.get('/playdates/new');
    //     }
    //     // call to POST and create a new playdate
    //     add : function(playdateData) {
    //         return $http.post('/playdates', playdateData);
    //     },
    //     getPlaydate: function(id) {
    //         return $http.get('/playdates/' + id);
    //     }
    //     update: function(id) {
    //         return $http.put('/playdates/' + id);
    //     }

        // call to DELETE a playdate
        // delete : function(id) {
        //     return $http.delete('/playdates/' + id);
        // }
    }
}]);