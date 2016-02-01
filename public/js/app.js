angular.module('gunVotesApp', 
  [ 'ngRoute',
    'ngResource'
  ])
  .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController' 
      })

      .when('/district/:state/:district', {
        templateUrl: 'views/district.html',
        controller: 'DistrictController' 
      });

    // $locationProvider.html5Mode(true);
  }]
);