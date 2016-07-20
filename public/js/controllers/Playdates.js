'use strict';

angular.module('wriggleApp', ['ngRoute'])
.controller('PlaydatesCtrl', ['$scope', function($scope) {

  console.log('hello Playdates ctrl');

  this.getAllPlaydates = function(){
    Playdates.getPlaydates()
    .then(function(response){
      console.log(response)
    })
  }

}])