var mongoose = require('mongoose');
var config=require('./config');

mongoose.connect(config.dbUrl);

exports.mongoose=mongoose;

var userSchema = mongoose.Schema({
  name:String,
  email:String,
  phone:String,
  password:String,
  createDate: {
    type: Date,
    default: Date.now
  }
})

exports.User = mongoose.model('User',userSchema,'users');


var basicSchema = mongoose.Schema({


  ReasonofEnquire:String,
  StudentName:String,
  ParentName:String,
  Parentmobile:Number,
  SeekingAdmission:String,
  DOB:Date,
  Address: String,
  Mobileno:Number,
  Email:String,
  refferedId:Number,
  College:String,
  occuption:String,
  totalfee: Number,
  discountfee:Number,
  finalfee:Number,
  Course:String,
  pictureId: String,
}
)

exports.Basic = mongoose.model('Basic',basicSchema,'basic');
