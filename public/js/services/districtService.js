angular.module('gunVotesApp')
  .service('districtService', districtService);

  districtService.$inject = ['$http'];

  function districtService($http){

    // var getCongressData;
    var service = {
      // getDistrictReps: getDistrictReps,
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

    // function getDistrictReps(state, district) {
    //   var representatives = [];
    //   var congressData;
    //   this.getCongressData().then(function(data) {
    //     // console.log(data[state]);
    //     return data[state];
    //   });
    // };

    return service;

  };