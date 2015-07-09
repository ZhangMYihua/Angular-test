var myApp = angular.module('myApp', ["ngMessages", "ngResource"]);


myApp.controller('mainController', ['$scope', function($scope)] {
// Order here matters, the argument in the function should line with the positon of $scope
// The name of the arguments doesn't matter, it can be called anything

  $scope.handle = '';
});


