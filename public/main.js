'use strict';

let app = angular.module('myApp', [])

app.controller('mainCtrl', function($scope){
  $scope.transactions = [];

  $scope.deleteIt = (index) => {
    console.log("index: ",index);
    $scope.transactions.splice(index, 1);
  }

  $scope.addTransaction = () => {
    $scope.newTransaction.date = new Date();
    // $scope.newTransaction.type = $scope.newTransaction.type || debit;
    let newTransaction = angular.copy($scope.newTransaction);
    $scope.transactions.push($scope.newTransaction);

    $scope.newTransaction = null;



  }



});
