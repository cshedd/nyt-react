// Server dependencies

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Create express instance

var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
// app.get('/', function(req, res){
//   res.sendFile('./public/index.html');
// })

// // GET request to query MONGODB for all saved articles
// app.get('/api/saved', function(req, res) {

// // POST request to save an article to database
// app.post('/api/saved', function(req, res) {
// 	-------
// })