// FileName: index.js

// import express
let express = require('express');
// import body-parser
let bodyParser = require('body-parser');
// import mongoose
let mongoose = require('mongoose');

// initialize the app
let app = express();

// import routes
let apiRoutes = require('./routes/api-routes');
// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// connect to mongoose and set connection variable
// mongoose.connect('mongodb://localhost/expenses', { useNewUrlParser: true });
// var db = mongoose.connection;
mongoose.connect('mongodb://localhost/expenses', { useNewUrlParser: true }, function (err, res) {
  if (err) throw err;  
  console.log('Connected to DB'); 
});

// added check for db connection
// if(!db)
  // console.log("Error connecting DB")
// else
  // console.log("DB connected successfully")

// setup server post
var port = process.env.PORT || 8080;

// send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// use API routes in the App
app.use('/api', apiRoutes);

// launch app to listen to especified port
app.listen(port, () => console.log("Running on port " + port));