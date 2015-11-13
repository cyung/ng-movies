(function() {
  'use strict';

  angular.module('app')
  .factory('moviesFactory', moviesFactory);

  moviesFactory.$inject = ['$http'];

  function moviesFactory($http) {
    var services = {
      getMovies: getMovies,
    };

    return services;

    function getMovies(cb) {
      $http.get('http://localhost:3000/movies')
      .then(function success(response) {
        cb(response.data);
      }).catch(function error(response) {
        console.log('unable to retrieve movies');
        cb([]);
      });
    }
  }

})();