(function() {
  'use strict';

  angular.module('app')
  .factory('showsFactory', showsFactory);

  showsFactory.$inject = ['$http'];

  function showsFactory($http) {
    var services = {
      getShows: getShows,
    };

    return services;

    function getShows(cb) {
      $http.get('http://localhost:3000/shows')
      .then(function success(response) {
        cb(response.data);
      })
      .catch(function error(response) {
        console.log('Error retrieving shows.');
      })
    }
  }

})();