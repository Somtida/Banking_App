'use strict';

angular.module('myApp')
.service('MyBank', function(http){
  this.getAll = () => {
    $http.get('/transactions');
  }

  this.add = () => {
    $http.post('/transactions')
  }
})
