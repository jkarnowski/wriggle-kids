// 'use strict';

// angular.module('wriggleApp', ['ngRoute'])
// .service('Playdates', ['$http', function($http) {

//     var urlBase = 'http://localhost:8080';

//     this.getPlaydates = function() {
//         return $http.get(urlBase + '/playdates')
//         .then(function(response){
//             console.log('SUCCESS - getting playdates! - ', response);
//             // return response;
//         }, function(response){
//             console.log('error getting playdates - ');
//         })
//     }

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
// }]);