(function() {
  'use strict';

  angular.module('app')
  .controller('ShowsCtrl', ShowsCtrl);

  ShowsCtrl.$inject = ['showsFactory'];

  function ShowsCtrl(showsFactory) {
    var self = this;

    self.shows = [];

    activate();

    function activate() {
      showsFactory.getShows(function(shows) {
        self.shows = shows;
      });
    }
  }

})();