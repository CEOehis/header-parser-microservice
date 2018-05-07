var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  var projectUrl = req.protocol + '://' + req.get('host');
  res.render('index', { title: 'Header Parser Microservice', projectUrl });
});

app.get('/api/whoami', function (req, res) {
  var userDetails = {
    ipaddress: req.header('x-forwarded-for') || req.connection.remoteAddress || req.socket.remoteAddress,
    language: req.headers['accept-language'].slice(0, req.headers['accept-language'].indexOf(',')),
    software: req.headers['user-agent'],
  }
  res.send(userDetails);
});

// redirect other routes to index page for usage instructions
app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log('Server started. Listening on port: ', port);
})