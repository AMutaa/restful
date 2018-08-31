const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());


//initiliaze routes
app.use('/api', require('./routes/api.js'));

//listen for requests

app.listen(process.env.port || 4000, function () {
  console.log('now listening for requests');
});