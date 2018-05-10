const express = require('express');
const app = express();
const http = require('http').Server(app);

// allows cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

http.listen(3001, function () {
  console.log(`Chat app running on port ${this.address().port}`);
});
