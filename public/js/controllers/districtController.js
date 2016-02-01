angular.module('gunVotesApp')
  .controller('DistrictController', districtController);

districtController.$inject = ['$scope', '$routeParams', 'districtService']

function districtController($scope, $routeParams, districtService){

  var representatives = [];
  var district = parseInt($routeParams.district);
  var state = $routeParams.state;

  // $scope.district = district;
  // $scope.state = state;
  $scope.tagline = "Hi, I'm the district tagline!";

  districtService.getCongressData().then(function(data){

    for(i=0; data[state].senators.length > i; i++) {
      console.log(data[state].senators[i]);
      representatives.push(data[state].senators[i]);
    }

    for(i=0; data[state].representatives.length > i; i++) {
      if (data[state].representatives[i].district === district){
        representatives.push(data[state].representatives[i]);
      }
    }
    $scope.representatives = representatives;
  });

};
