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
                                    <label id="ReasonofEnquire">ReasonofEnquire</label>
                                    <input type="name"
                                     onKeyPress={this.onlyAlpha.bind(this)}
                                      ref="ReasonofEnquire" 
                                      name="ReasonofEnquire"
                                       id="ReasonofEnquire" 
                                       className="form-control" 
                                       placeholder="ReasonofEnquire"/>
                                </div>
                                <div className="form-group">
                                    <label id="StudentName">StudentName</label>
                                    <input type="name" 
                                    onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                     ref="StudentName" 
                                     name="StudentName" 
                                     id="StudentName" 
                                     className="form-control"
                                      placeholder="StudentName"/>
                                </div>
                                <div className="form-group">
                                    <label id="ParentName">ParentName</label>
                                    <input type="name" 
                                    onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                     ref="ParentName" 
                                     name="ParentName" 
                                     id="ParentName"
                                      className="form-control"
                                       placeholder="ParentName"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Parentmobile">Parentmobile</label>
                                    <input type="text" 
                                    onKeyPress={this.onlyNum.bind(this)} maxLength={10} minLength={0} 
                                    ref="Parentmobile" 
                                    name="Parentmobile" 
                                    id="Parentmobile" 
                                    className="form-control"
                                     placeholder="Parentmobile"/>
                                </div>
                                <div className="form-group">
                                    <label id="SeekingAdmission">SeekingAdmission</label>
                                    <input type="name"
                                     onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3}
                                      ref="SeekingAdmission" 
                                      name="SeekingAdmission"
                                       id="SeekingAdmission"
                                        className="form-control" 
                                        placeholder="SeekingAdmission"/>
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
                                    <label id="Mobileno">Mobileno</label>
                                    <input type="text" 
                                    onKeyPress={this.onlyNum.bind(this)} maxLength={10} minLength={0} 
                                    ref="Mobileno"
                                     name="Mobileno" 
                                     id="Mobileno" 
                                     className="form-control"
                                      placeholder="Mobileno"/>
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
                                    <label htmlFor="refferedId">refferedId</label>
                                    <input type="text"
                                     onKeyPress={this.onlyNum.bind(this)} maxLength={8} minLength={1} 
                                     ref="refferedId"
                                      name="refferedId" 
                                      id="refferedId"
                                       className="form-control" 
                                       placeholder="RefferedId"/>
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
                                    <label id="totalfee">totalfee</label>
                                       <input type="text" 
                                        ref="totalfee" 
                                        name="totalfee"
                                         id="totalfee" 
                                         className="form-control"
                                          placeholder="Totalfee"/>
                                </div>
                                <div className="form-group">
                                    <label id="discountfee">discountfee</label>
                                    <input type="text" 
                                     ref="discountfee"
                                      name="discountfee"
                                       id="discountfee" 
                                       className="form-control"
                                        placeholder="Discountfee"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="finalfee">finalfee</label>
                                    <input type="text"  
                                    ref="finalfee" 
                                    name="finalfee"
                                     id="finalfee" 
                                     className="form-control" 
                                     placeholder="Finalfee"/>
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
