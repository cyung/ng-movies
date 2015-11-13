(function() {
  'use strict';

  angular.module('app')
  .directive('movieCard', movieCard);

  function movieCard() {
    var directive = {
      scope: {
        info: '=',
      },
      templateUrl: '../templates/movieCard.html',
      link: link,
    };

    return directive;

    function link(scope, elem, attrs) {
      var rating = scope.info.rating/100;
      rating = 5 + (rating*5);
      scope.info.rating = rating.toFixed(1);
    }
  }

})();