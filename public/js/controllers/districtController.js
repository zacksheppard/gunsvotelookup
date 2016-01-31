angular.module('gunVotesApp')
  .controller('DistrictController', districtController);

    districtController.$inject = ['$scope', '$routeParams', 'districtService']
    
    function districtController($scope, $routeParams, districtService){

      $scope.district = $routeParams.district;
      $scope.state = $routeParams.state;
      $scope.tagline = "Hi, I'm the district tagline!";
      $scope.serviceTest = districtService.serviceTest();

      // Static data to use for prototyping front end
      $scope.representatives = [
        {
          "nra_grade": "A+",
          "id": 14679,
          "name_suffix": "",
          "bioguide_id": "S001141",
          "crp_id": 0,
          "firstname": "Jefferson",
          "state": "AL",
          "party": "Republican",
          "gender": "M",
          "lastname": "Sessions",
          "middlename": "B.",
          "webform": "http:\/\/www.sessions.senate.gov\/public\/index.cfm?FuseAction=ConstituentServices.ContactMe",
          "fec_id": "S6AL00195",
          "govtrack_id": "300088",
          "title": "Sen",
          "nickname": "Jeff",
          "congress_office": "U.S. Senate",
          "full_name": "Jeff Sessions",
          "phone": "202-224-4124",
          "congresspedia_url": "http:\/\/www.opencongress.org\/wiki\/Jefferson_Sessions",
          "nra_rating": "100",
          "votesmart_id": "443",
          "twitter_id": "SenatorSessions",
          "website": "http:\/\/www.sessions.senate.gov"
        },
        {
          "nra_grade": "A+",
          "id": 14882,
          "name_suffix": "",
          "bioguide_id": "S000320",
          "crp_id": 0,
          "firstname": "Richard",
          "state": "AL",
          "party": "Republican",
          "contributions": 5950,
          "gender": "M",
          "lastname": "Shelby",
          "middlename": "C.",
          "vote_1994": "Nay",
          "webform": "http:\/\/www.shelby.senate.gov\/public\/index.cfm\/emailsenatorshelby",
          "fec_id": "S6AL00013",
          "govtrack_id": "300089",
          "title": "Sen",
          "brady_rating": "0",
          "nickname": "",
          "congress_office": "U.S. Senate",
          "full_name": "Richard C. Shelby",
          "phone": "202-224-5744",
          "congresspedia_url": "http:\/\/www.opencongress.org\/wiki\/Richard_Shelby",
          "nra_rating": "100",
          "votesmart_id": "53266",
          "twitter_id": "SenShelbyPress",
          "website": "http:\/\/www.shelby.senate.gov"
        },
        {
          "nra_grade": "A",
          "id": 14895,
          "name_suffix": "",
          "y_position": 350,
          "bioguide_id": "A000055",
          "crp_id": 0,
          "firstname": "Robert",
          "state": "AL",
          "x_position": 390,
          "party": "Republican",
          "contributions": 2000,
          "gender": "M",
          "lastname": "Aderholt",
          "middlename": "B.",
          "webform": "http:\/\/aderholt.house.gov\/?sectionid=195&sectiontree=195",
          "fec_id": "H6AL04098",
          "govtrack_id": "400004",
          "title": "Rep",
          "brady_rating": "11",
          "nickname": "",
          "congress_office": "U.S. House",
          "full_name": "Robert B. Aderholt",
          "phone": "202-225-4876",
          "congresspedia_url": "http:\/\/www.opencongress.org\/wiki\/Robert_Aderholt",
          "nra_rating": "92",
          "votesmart_id": "441",
          "district": 4,
          "twitter_id": "Robert_Aderholt",
          "website": "http:\/\/aderholt.house.gov"
        }
      ];
    };
  