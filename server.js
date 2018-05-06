var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if(err) throw err;
  console.log('Server started. Listening on port: ', port);
})