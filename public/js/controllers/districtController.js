angular.module('districtCtrl', [])

  .controller('districtController', function($scope, $routeParams){

    $scope.district = $routeParams.district;
    $scope.state = $routeParams.state;

  });
  