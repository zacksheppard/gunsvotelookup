angular.module('gunVotesApp')
  .service('districtService', districtService);

districtService.$inject = ['$http'];

function districtService($http){
  var service = {
    getCongressData: getCongressData
  };

  function getCongressData() {
    var promise = $http.get('/js/congressman.js')
      .then(function(response){
        // console.log(response);
        return response.data;
      }
    );
    return promise;
  }

  return service;

};