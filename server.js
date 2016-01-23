var express = require('express');

var app = express();

app.listen(3000, function(err) {
  if(err) throw err;
  cosole.log("Server is Running on port 3000");
});
