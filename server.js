var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/api/whoami', function(req, res) {
  var userDetails = {
    ipaddress: req.ip || req.connection.remoteAddress || req.socket.remoteAddress,
    language: req.headers['accept-language'].slice(0, req.headers['accept-language'].indexOf(',')),
    software: req.headers['user-agent'],
  }
  res.send(userDetails);
})

app.listen(port, function(err) {
  if(err) throw err;
  console.log('Server started. Listening on port: ', port);
})