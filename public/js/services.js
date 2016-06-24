'use strict';

angular.module('myApp')
.service('myBank', function(http){
  this.getAll = () => {
    $http.get('/mybank');
  }
})
