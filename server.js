var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');

// Routes moved to routes.js
require('./server/config/routes.js')(app)

//mongoose.js in config
require("./server/config/mongoose");

//angular
app.use(express.static( __dirname + '/RateCakes/dist/RateCakes' ));

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
