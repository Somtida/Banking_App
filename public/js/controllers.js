'use strict';


angular.module('myApp')
.controller('mainCtrl', function($scope, $localStorage ){
  //delete $localStorage.balance;
  //delete $localStorage.transactions;
  $scope.mydata = $localStorage.$default({
    balance: 0,
    transactions: []
  });

  $scope.addTransaction = () => {
    $scope.newTransaction.date = new Date();
    if($scope.newTransaction.type === "debit"){
      $scope.mydata.balance -= parseInt($scope.newTransaction.amount);
    }else{
      $scope.mydata.balance += parseInt($scope.newTransaction.amount);
    }
    let newTransaction = angular.copy($scope.newTransaction);
    $scope.mydata.transactions.push(newTransaction);

    $scope.newTransaction=null;


  }


  $scope.deleteIt = (index) => {
    // swal({title: "Tobi is sexier", text: "take a pic in the club"});
    swal({
       title: "Are you sure?",
       text: "Your will not be able to recover this imaginary file!",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "Yes, delete it!",
       closeOnConfirm: false},
    function(){
      swal("Deleted!");

      if($scope.mydata.transactions[index].type === "debit"){
        $scope.mydata.balance += parseInt($scope.mydata.transactions[index].amount);
      }else if($scope.mydata.transactions[index].type === "credit"){
        $scope.mydata.balance -= parseInt($scope.mydata.transactions[index].amount);
      }
      $scope.mydata.transactions.splice(index, 1);

    });

    // if($scope.mydata.transactions[index].type === "debit"){
    //   $scope.mydata.balance += parseInt($scope.mydata.transactions[index].amount);
    // }else if($scope.mydata.transactions[index].type === "credit"){
    //   $scope.mydata.balance -= parseInt($scope.mydata.transactions[index].amount);
    // }
    // $scope.mydata.transactions.splice(index, 1);

  }


});
