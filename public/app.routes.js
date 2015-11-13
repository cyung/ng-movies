(function() {
  'use strict';


  angular.module('app')
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/movies');

    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'movies/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies',
        data: {
          title: 'Movies'
        }
      })
      .state('shows', {
        url: '/shows',
        templateUrl: 'shows/shows.html',
        controller: 'ShowsCtrl',
        controllerAs: 'shows',
        data: {
          title: 'Shows'
        }
      })
      .state('people', {
        url: '/people',
        templateUrl: 'people/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people',
        data: {
          title: 'People'
        }
      });

  }
})();