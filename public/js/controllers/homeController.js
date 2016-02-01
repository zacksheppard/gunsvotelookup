angular.module('gunVotesApp')
  .controller('HomeController', homeController);

homeController.$inject = ['$scope'];

function homeController($scope){
  $scope.tagline = "Home page tagline!";
};
