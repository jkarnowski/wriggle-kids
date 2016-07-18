var wriggleApp = angular.module('wriggleApp', ['ngRoute'])

wriggleApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/playdates', {
    templateUrl: 'home.html',
    controller: 'MainCtrl',
    resolve: {
      playdates: function(Playdates) {
        return Playdates.getPlaydates();
      }
    }
  })
}])

wriggleApp.service('Playdates', function($http){
  this.getPlaydates = function(){
    return $http.get('/playdates')
    .then(function(response){
      return response;
    }, function(response){
      alert('error returning playdates');
    });
  }
})