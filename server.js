var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
const env = process.env.NODE_ENV || 'development';

function requestOnePokemon(i) {
  return new Promise((resolve, reject) => {
    request('http://pokeapi.co/api/v2/pokemon/' + i, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info.name);
        resolve(info);
      }
    })
  })
}

// display all problems
app.get('/api/pokemons', function (req, res) {
  var all = [];
  for (var i = 1; i < 10; i++) {
    all.push(requestOnePokemon(i));
  }

  // test this without the setTimeout,
  // maybe it'll work with the .then
    Promise.all(all).then(function (values) {
      console.log(values);
      res.send(values);
    });
    //console.log(all.Promise.resolve());
})

// calling server to listen on port
var server = app.listen(process.env.PORT || 3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
})
// --------------------------------------------------------------------------------------------
