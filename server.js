var express = require('express');
var path = require('path');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mongodb://heroku_zzvp10k6:rhqt0gq8i9jck2v4duqqinu7bo@ds011902.mlab.com:11902/heroku_zzvp10k6', ['wriggle-kids']);
var ObjectID = db.ObjectID;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  console.log('received a GET request!')
  db.playdates.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  })
})