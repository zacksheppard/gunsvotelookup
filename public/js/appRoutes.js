angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController' 
      })

      .when('/district/:state/:district', {
        templateUrl: 'views/district.html',
        controller: 'districtController' 
      });

    // $locationProvider.html5Mode(true);
}]);
