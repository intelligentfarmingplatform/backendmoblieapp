"use strict";

var express = require('express');

var bodyParser = require("body-parser");

var app = express();

var db = require('./models');

require('dotenv').config();

var port = process.env.PORT || 3000; // Api Router

var userRoute = require('./routes/user'); // parse requests of content-type - application/json


app.use(bodyParser.json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.use('/api/backend/user', userRoute);
db.sequelize.sync().then(function () {
  return app.listen(port, function () {
    return console.log("Example app listening at http://localhost:".concat(port, " \uD83D\uDC4F"));
  });
});