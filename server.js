var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// Not using a db right now. Uncomment if needed.
// var db = require('./config/db');

// Uncomment after credentials entered in config/db.js)
// mongoose.connect(db.url); 

// Set static files location. Ex. Makes '/img' available at /img 
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);
console.log('Server started: http://localhost:8080');

