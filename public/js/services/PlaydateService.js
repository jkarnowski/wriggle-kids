'use strict';

angular.module('PlaydateService', [])
.factory('Playdate', ['$http', '$scope' function($http, $scope) {

// $scope.addContact = function() {
//   console.log($scope.contact);
//   $http.post('/contactlist', $scope.contact).success(function(response) {
//     console.log(response);
//     refresh();
//   });
// };

    return {
        // call to get all playdates
        getPlaydates : function() {
            return $http.get('/playdates');
        },
        newPlaydateForm : function(){
            return $http.get('/playdates/new');
        }
        // call to POST and create a new playdate
        add : function(playdateData) {
            return $http.post('/playdates', playdateData);
        },
        getPlaydate: function(id) {
            return $http.get('/playdates/' + id);
        }
        update: function(id) {
            return $http.put('/playdates/' + id);
        }

        // call to DELETE a playdate
        delete : function(id) {
            return $http.delete('/playdates/' + id);
        }
    }

}]);