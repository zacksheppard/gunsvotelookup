angular.module('gunVotesApp')
  .controller('DistrictController', districtController);

districtController.$inject = ['$scope', '$routeParams', 'districtService']

function districtController($scope, $routeParams, districtService){

  var representatives = [];
  var district = parseInt($routeParams.district);
  var state = $routeParams.state;

  districtService.getCongressData().then(function(data){

    for(i=0; data[state].senators.length > i; i++) {
      representatives.push(data[state].senators[i]);
    }

    for(i=0; data[state].representatives.length > i; i++) {
      if (data[state].representatives[i].district === district){
        representatives.push(data[state].representatives[i]);
      }
    }

    $scope.representatives = representatives;
    $scope.state = state;
    $scope.district = district;
  });

};
