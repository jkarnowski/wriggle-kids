var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var mongodb = require('mongodb');
var mode = process.env.NODE_ENV;
var mongoUri = process.env.MLAB_URI;
var ObjectID = mongodb.ObjectID;

var PLAYDATES_COLLECTION = "playdates";

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var db;
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

function handleError(res, reason, message, code){
  console.log("ERROR - " + reason);
  res.status(code || 500).json({"error": message});
}

// GET all playdates
app.get('/playdates', function(req, res){
  db.collection(PLAYDATES_COLLECTION).find({}).toArray(function(err, docs){
    if (err){
      handleError(res, err.message, 'failed to get playdates');
    } else {
      res.status(200).json(docs);
    }
  });
});

// POST a new playdate
app.post('/playdates', function(req, res){
  var newPlaydate = req.body;
  newPlaydate.createDate = new Date();

  if (!(req.body.title || req.body.host)){
    handleError(res, "invalid playdate input", "must provide a playdate title and host", 400);
  }

  db.collection(PLAYDATES_COLLECTION).insertOne(newPlaydate, function(err, doc){
    if (err){
      handleError(res, err.message, 'failed to create new playdate');
    } else{
      res.status(200).json(doc.ops[0]);
    }
  });
});

// GET a single playdate with an ID
app.get('/playdates/:id', function(req, res){
  var playdateId = new ObjectID(req.params.id);
  db.collection(PLAYDATES_COLLECTION).findOne({
    _id: playdateId}, function(err, doc){
      if (err){
        handleError(res, err.message, 'failed to get playdate');
      } else {
        res.status(200).json(doc);
      }
  });
});
// Update a single playdate with an ID
app.put('/playdates/:id', function(req, res){

});
// Delete a single playdate with an ID
app.delete('/playdates/:id', function(req, res){

});