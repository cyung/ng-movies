var express = require('express');
var router = express.Router();
var request = require('request');
var path = require('path');
var API_KEY = require('../config.json').RANDOMAPI_KEY;

router.get('/movies', function(req, res, next) {
  var options = {
    url: 'https://randomapi.com/api/',
    qs: {
      key: API_KEY,
      id: 'eis5p0u',
      noinfo: '',
      results: 25,
    },
  };

  request(options, function(err, response, body) {
    if (err) {
      console.log('There was an error retrieving from themovieDB');
      console.log('err =', err);
      return;
    }
    var data = JSON.parse(body).results;

    console.log('data =', data);

    var movies = data.map(function(item) {
      var movie = item.movie;
      return {
        title: movie.name,
        rating: movie.rating,
        description: movie.description,
        releaseDate: movie.release_date,
        imageUrl: movie.poster,
      };
    });

    res.send(movies);
  });
});

router.get('/shows', function(req, res, next) {
  var options = {
    url: 'https://randomapi.com/api/',
    qs: {
      key: API_KEY,
      id: 'eis5p0u',
      noinfo: '',
      results: 25,
    },
  };

  request(options, function(err, response, body) {
    if (err) {
      console.log('There was an error retrieving from themovieDB');
      console.log('err =', err);
      return;
    }
    var data = JSON.parse(body).results;

    console.log('data =', data);

    var movies = data.map(function(item) {
      var movie = item.movie;
      return {
        title: movie.name,
        rating: movie.rating,
        description: movie.description,
        releaseDate: movie.release_date,
        imageUrl: movie.poster,
      };
    });

    res.send(movies);
  });
});



module.exports = router;