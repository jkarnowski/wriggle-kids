var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var mongodb = require('mongodb');
var mongoUri = 'mongodb://wriggle-admin:wrigglekids@ds055555.mlab.com:55555/wriggle-kids';
var ObjectID = mongodb.ObjectID;

var PLAYDATES_COLLECTION = "playdates";

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var db;
// THROUGH mLAB
// mongodb://wriggle-admin:wrigglekids@ds055555.mlab.com:55555/wriggle-kids
// HEROKU
// mongodb://heroku_zzvp10k6:rhqt0gq8i9jck2v4duqqinu7bo@ds011902.mlab.com:11902/heroku_zzvp10k6
mongodb.connect(process.env.MONGODB_URI || mongoUri, function (err, database){
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // saves database object from the callback to reuse
  db = database;
  console.log("Database connection is ready");

  // initialize app
  var server = app.listen(process.env.PORT || 8080, function(){
    var port = server.address().port;
    console.log("app is running on port: ", port);
  });
});

app.get('/', function(req, res){
  console.log('received a GET request!');
})