var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
const env = process.env.NODE_ENV || 'development';
var db = mongoose.connection;
var Pokemon = require('./client/src/models/pokemon.js');
// DB SETUP
MONGOLAB_URI = process.env.MONGOLAB_URI_MATHWEB;

mongoose.connect(MONGOLAB_URI, function (error) {
  if (error) console.error(error);
});

function getEm(i) {
  return new Promise((resolve, reject) => {
    request('http://pokeapi.co/api/v2/pokemon/' + i, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info.name);
        resolve(info);
        //res.send(info);
      }
    })
  })
}

// display all problems
app.get('/api/pokemons', function (req, res) {
  var all = [];
  for (var i = 1; i < 10; i++) {
    all.push(getEm(i));

  }
  setTimeout(function () {
    Promise.all(all).then(function (values) {
      console.log(values);
      res.send(values);
    });
    //console.log(all.Promise.resolve());
  }, 15000);
})

// calling server to listen on port
var server = app.listen(process.env.PORT || 3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
})
// --------------------------------------------------------------------------------------------
