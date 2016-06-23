'use strict';

let app = angular.module('myApp', ['ngStorage'])

app.controller('mainCtrl', function($scope, $localStorage){
  //delete $localStorage.balance;
  //delete $localStorage.transactions;
  $scope.transactions = $localStorage.$default({
    balance: 0,
    transactions: []
  });

  $scope.addTransaction = () => {
    $scope.newTransaction.date = new Date();
    if($scope.newTransaction.type === "debit"){
      $scope.transactions.balance -= parseInt($scope.newTransaction.amount);
    }else{
      $scope.transactions.balance += parseInt($scope.newTransaction.amount);
    }
    let newTransaction = angular.copy($scope.newTransaction);
    $scope.transactions.transactions.push(newTransaction);

    $scope.newTransaction=null;


  }


  $scope.deleteIt = (index) => {
    console.log("index: ",index);
    console.log("$scope.transactions.transactions[index]: ",$scope.transactions.transactions[index])
    // debugger;
    if($scope.transactions.transactions[index].type === "debit"){
      console.log("amount before: ", $scope.transactions.balance);
      $scope.transactions.balance += parseInt($scope.transactions.transactions[index].amount);
      console.log("amount after: ", $scope.transactions.balance);
    }else if($scope.transactions.transactions[index].type === "credit"){
      console.log("amount before: ", $scope.transactions.balance);
      $scope.transactions.balance -= parseInt($scope.transactions.transactions[index].amount);
      console.log("amount after: ", $scope.transactions.balance);
    }
    $scope.transactions.transactions.splice(index, 1);

  }


});
