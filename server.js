var express=require('express');
var logger=require('morgan');
var bodyParser=require('body-parser');
var errorHandler=require('errorhandler');
var routes=require('./routes');
var app=express();
var port=1337;


app.all('/*', routes.auth);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('build'));

app.use('/api/doctors',routes.doctor);
app.use('/api/drugs',routes.drug);
app.use('/api/families',routes.family);
app.use('/api/patients',routes.patient);
app.use('/api/users',routes.user);
app.use('/api/basic',routes.basic);

app.use(errorHandler);

app.listen(port,function () {
  console.log('MedicalHall delivering drugs on port ' + port);
});
