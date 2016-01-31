angular.module('gunVotesApp')
  .service('districtService', districtService);

  districtService.$inject = ['$http'];

  function districtService($http){

    var congress = $http.get('/js/congressman.js')
      .then(function(response){
        console.log(response);
        return response.data;
      });

    this.serviceTest = function() {
      return 'Some Asshole';
    }
  };