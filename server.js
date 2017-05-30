var express=require('express');
var logger=require('morgan');
var bodyParser=require('body-parser');
var errorHandler=require('errorhandler');
var routes=require('./routes');

var app = express();
var host = 'localhost';
var port = 1337;

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.all('/*', routes.auth);

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '500mb'}));
app.use(express.static('build'));

app.use('/api/users',routes.user);
app.use('/api/basic',routes.basic);

app.use(errorHandler);

app.listen(port,function () {
  console.log('CSSRM on port ' + port);
});
