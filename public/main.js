'use strict';

let app = angular.module('myApp', ['ngStorage'])

app.controller('mainCtrl', function($scope, $localStorage){
  //delete $localStorage.balance;
  //delete $localStorage.transactions;
  $scope.transactions = $localStorage.$default({
    balance: 0,
    transactions: []
  });

  console.log("$scope.transactions.transactions", $scope.transactions.transactions);


  $scope.addTransaction = () => {
    $scope.newTransaction.date = new Date();
    if($scope.newTransaction.type === "debit"){
      $scope.transactions.balance -= parseInt($scope.newTransaction.amount);
    }else{
      $scope.transactions.balance += parseInt($scope.newTransaction.amount);
    }
    let newTransaction = angular.copy($scope.newTransaction);
    $scope.transactions.transactions.push(newTransaction);

  }


  $scope.deleteIt = (index) => {
    console.log("index: ",index);
    $scope.transactions.transactions.splice(index, 1);
  }

  // $scope.totalBalance = () => {
  //   let $scope.total = $scope.data.transactions.map(tran => {
  //     console.log("tran: ",tran);
  //   });
  // }
});
