(function() {
  'use strict';

  angular.module('app')
  .controller('MoviesCtrl', MoviesCtrl);

  MoviesCtrl.$inject = ['moviesFactory'];

  function MoviesCtrl(moviesFactory) {
    var self = this;
    self.movies = [];
    activate();

    function activate() {
      moviesFactory.getMovies(function(movies) {
        self.movies = movies;
      });
    }
  }

})();