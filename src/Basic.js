import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ImageUpload from './ImageUpload';




class Basic extends Component {
  constructor(props){
    super(props);

    this.state = {
      errors: {},
      basic: {
        ReasonofEnquire: '',
        StudentName: '',
        ParentName: '',
        Parentmobile: '',
        SeekingAdmission: '',
        DOB: '',
        Address: '',
        Mobileno: '',
        Email: '',
        refferedId: '',
        College: '',
        occuption: '',
        totalfee: '',
        discountfee: '',
        finalfee: '',
        Course: ''

      }
    };

    this.submit = this.submit.bind(this);
  }

  onlyAlpha(event,t)
{
var regex = new RegExp("^[a-zA-Z ]+$");
   var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
   if (!regex.test(key)) {
       event.preventDefault();
       return false;
   }
}

onlyNum(event,t)
{
var regex = new RegExp("^[0-9]+$");
   var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
   if (!regex.test(key)) {
       event.preventDefault();
       return false;
   }
}


  submit(e){

    e.preventDefault();

    const ReasonofEnquire = encodeURIComponent(this.refs.ReasonofEnquire.value);
    const StudentName = encodeURIComponent(this.refs.StudentName.value);
    const ParentName = encodeURIComponent(this.refs.ParentName.value);
    const Parentmobile = encodeURIComponent(this.refs.Parentmobile.value);
    const SeekingAdmission = encodeURIComponent(this.refs.SeekingAdmission.value);
    const DOB = encodeURIComponent(this.refs.DOB.value);
    const Address = encodeURIComponent(this.refs.Address.value);
    const Mobileno = encodeURIComponent(this.refs.Mobileno.value);
    const Email = encodeURIComponent(this.refs.Email.value);
    const refferedId = encodeURIComponent(this.refs.refferedId.value);
    const College = encodeURIComponent(this.refs.College.value);
    const occuption = encodeURIComponent(this.refs.occuption.value);
    const totalfee = encodeURIComponent(this.refs.totalfee.value);
    const discountfee = encodeURIComponent(this.refs.discountfee.value);
    const finalfee = encodeURIComponent(this.refs.finalfee.value);
    const Course = encodeURIComponent(this.refs.Course.value);


    const requestBody = `ReasonofEnquire=${ReasonofEnquire}&StudentName=${StudentName}&ParentName=${ParentName}&Parentmobile=${Parentmobile}&SeekingAdmission=${SeekingAdmission}&DOB=${DOB}&Address=${Address}&Mobileno=${Mobileno}&Email=${Email}&refferedId=${refferedId}&College=${College}&occuption=${occuption}&totalfee=${totalfee}&discountfee=${discountfee}&finalfee=${finalfee}&Course=${Course}`;
    fetch(`/api/basic`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic '+btoa('cssrm:cssrm'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: requestBody
    }).then(function(response){
      response.json().then(function(data) {
        this.setState({
          errors: {}
        });


        this.props.history.push('/thankyou');


      }.bind(this))
    }.bind(this))
    .catch(function(error){
      const errors={}
      errors.error = error ? error : {};
      this.setState({
          errors
        });
    });
  }

  render(){
    return (
      <div>
            <Header />

            <div className="container">
              <div className="row">
                  <div className="col-xs-2">
                  </div>
                  <div className="col-xs-8">
                      <div className="form-wrap">
                      <center><h1 className="loginTop">Registration Form </h1></center>
                            <h3 className="loginTop" id="color"><center><font color="white">Basic Information</font></center></h3>
                            <form role="form" onSubmit={this.submit} id="basic-form">
                                <div className="form-group">
                                    <label id="Reason of Enquire">Reason of Enquire</label>
                                    <input type="name"
                                     onKeyPress={this.onlyAlpha.bind(this)}
                                      ref="Reason of Enquire" 
                                      name="Reason of Enquire"
                                       id="Reason of Enquire" 
                                       className="form-control" 
                                       placeholder="Reason of Enquire"/>
                                </div>
                                <div className="form-group">
                                    <label id="Student Name">Student Name</label>
                                    <input type="name" 
                                    onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                     ref="Student Name" 
                                     name="Student Name" 
                                     id="Student Name" 
                                     className="form-control"
                                      placeholder="Student Name"/>
                                </div>
                                <div className="form-group">
                                    <label id="ParentName">Parent Name</label>
                                    <input type="name" 
                                    onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                     ref="Parent Name" 
                                     name="Parent Name" 
                                     id="Parent Name"
                                      className="form-control"
                                       placeholder="Parent Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Parent mobile">Parent mobile</label>
                                    <input type="text" 
                                    onKeyPress={this.onlyNum.bind(this)} maxLength={10} minLength={0} 
                                    ref="Parent mobile" 
                                    name="Parent mobile" 
                                    id="Parent mobile" 
                                    className="form-control"
                                     placeholder="Parent mobile"/>
                                </div>
                                <div className="form-group">
                                    <label id="Seeking Admission">Seeking Admission</label>
                                    <input type="name"
                                     onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                      ref="Seeking Admission" 
                                      name="Seeking Admission"
                                       id="Seeking Admission"
                                        className="form-control" 
                                        placeholder="Seeking Admission"/>
                                </div>
                                <div className="form-group">
                                    <label id="Date of birth">Date of birth</label>
                                    <input type="date"
                                     ref="Date of birth" 
                                     name="Date of birth"
                                      id="Date of birth" 
                                      className="form-control"
                                       placeholder="Date of birth"/>
                                </div>


                            <h3 className="loginTop" id="color"><center><font color="white">Contact Information</font></center></h3>

                                <div className="form-group">
                                    <label id="Address">Address</label>
                                    <input type="textarea" 
                                    ref="Address" 
                                    name="Address" 
                                    id="Address" 
                                    className="form-control" 
                                    placeholder="Address"/>
                                </div>
                                <div className="form-group">
                                    <label id="Mobile no">Mobile no</label>
                                    <input type="text" 
                                    onKeyPress={this.onlyNum.bind(this)} maxLength={10} minLength={0} 
                                    ref="Mobile no"
                                     name="Mobile no" 
                                     id="Mobile no" 
                                     className="form-control"
                                      placeholder="Mobile no"/>
                                </div>
                                <div className="form-group">
                                    <label id="Email">Email</label>
                                    <input type="email" 
                                    ref="Email" 
                                    name="Email"
                                     id="Email" 
                                     className="form-control"
                                      placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reffered Id">reffered Id</label>
                                    <input type="text"
                                     onKeyPress={this.onlyNum.bind(this)} maxLength={8} minLength={1} 
                                     ref="refferedId"
                                      name="reffered Id" 
                                      id="reffered Id"
                                       className="form-control" 
                                       placeholder="Reffered Id"/>
                                </div>
                                <div className="form-group">
                                    <label id="College">College</label>
                                    <input type="name" 
                                    onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={4} 
                                    ref="College"
                                     name="College" 
                                     id="College"
                                      className="form-control"
                                       placeholder="College"/>
                                </div>
                                <div className="form-group">
                                    <label id="occuption">occuption</label>
                                    <input type="name"
                                     onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                      ref="occuption"
                                       name="occuption"
                                        id="occuption"
                                         className="form-control"
                                          placeholder="Occuption"/>
                                </div>

                  <h3 className="loginTop" id="color"><center><font color="white">Fee Commitment</font></center></h3>

                                <div className="form-group">
                                    <label id="total fee">total fee</label>
                                       <input type="text" 
                                        ref="total fee" 
                                        name="total fee"
                                         id="total fee" 
                                         className="form-control"
                                          placeholder="Total fee"/>
                                </div>
                                <div className="form-group">
                                    <label id="discountfee">discount fee</label>
                                    <input type="text" 
                                     ref="discount fee"
                                      name="discount fee"
                                       id="discount fee" 
                                       className="form-control"
                                        placeholder="Discount fee"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="final fee">finalfee</label>
                                    <input type="text"  
                                    ref="final fee" 
                                    name="final fee"
                                     id="final fee" 
                                     className="form-control" 
                                     placeholder="Final fee"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Course">Course</label>
                                    <input type="text" 
                                     ref="Course"
                                      name="Course"
                                       id="Course"
                                        className="form-control"
                                         placeholder="Course Commitment"/>
                                </div>
                                <ImageUpload/>
                               <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Submit"/>

                            </form>

                      </div>
                </div>


                <div className="col-xs-2">
                </div>
              </div>
          </div>
      </div>
    )
  }
}


export default Basic;
