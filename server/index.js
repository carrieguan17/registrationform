// import dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const db = require('../database')

// middleware
app.use(express.static(__dirname + '/../client/dist'));

// start server
app.listen(3000, function() {
  console.log(`listening on port: ${PORT}`);
});