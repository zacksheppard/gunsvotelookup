angular.module('gunVotesApp')
  .controller('HomeController', homeController);

homeController.$inject = ['$scope'];

function homeController($scope){

  this.text = '';
  this.lookup = function() {
    console.log('Submit');
    console.log(this.text);
  };

  $scope.tagline = "Home page tagline!";
  console.log('Ready');

};
