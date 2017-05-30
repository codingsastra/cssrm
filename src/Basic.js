import React, { Component } from 'react';
import './App.css';
import Header from './Header';

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

    const formData = new FormData();
    const files = this.refs.photo.files;

    for (var key in files) {
      if (files.hasOwnProperty(key) && files[key] instanceof File) {
        formData.append("photo", files[key]);
      }
    }

    fetch(`/api/basic/upload`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic '+btoa('cssrm:cssrm')
        },
        body: formData
    }).then(function(response){
        response.json().then(function(data) {
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
          const pictureId=data.pictureId;

          const requestBody = `ReasonofEnquire=${ReasonofEnquire}&StudentName=${StudentName}&ParentName=${ParentName}&Parentmobile=${Parentmobile}&SeekingAdmission=${SeekingAdmission}&DOB=${DOB}&Address=${Address}&Mobileno=${Mobileno}&Email=${Email}&refferedId=${refferedId}&College=${College}&occuption=${occuption}&totalfee=${totalfee}&discountfee=${discountfee}&finalfee=${finalfee}&Course=${Course}&pictureId=${pictureId}`;

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
                                    <label htmlFor="ReasonofEnquire" >Reason of Enquire :</label>
                                    <input type="name" value="Course" onKeyPress={this.onlyAlpha.bind(this)} ref="ReasonofEnquire" name="ReasonofEnquire" id="ReasonofEnquire" className="form-control" placeholder="Reason of Enquire" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="StudentName" >Student Name :</label>
                                    <input type="name" value="John Doe" onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3} ref="StudentName" name="StudentName" id="StudentName" className="form-control" placeholder="Student Name" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ParentName" >Parent/Guardian Name :</label>
                                    <input type="name" value="John Smith" onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3} ref="ParentName" name="ParentName" id="ParentName" className="form-control" placeholder="Parent/Guardian Name" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Parentmobile" >Parent/Guardian Mobile Number:</label>
                                    <input type="text" value="9493742114" onKeyPress={this.onlyNum.bind(this)} maxLength={10} minLength={0} ref="Parentmobile" name="Parentmobile" id="Parentmobile" className="form-control" placeholder="Parent/Guardian Mobile Number" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="SeekingAdmission">Seeking Admission :</label>
                                    <input type="name" value="JavaScript Course" onKeyPress={this.onlyAlpha.bind(this)} maxLength={25} minLength={3} ref="SeekingAdmission" name="SeekingAdmission" id="SeekingAdmission" className="form-control" placeholder="Seeking Admission" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="DOB">Date Of Birth :</label>
                                    <input type="date" ref="DOB" name="DOB" id="DOB" className="form-control" placeholder="Date of Birth" required/>
                                </div>


                            <h3 className="loginTop" id="color"><center><font color="white">Contact Information</font></center></h3>

                                <div className="form-group">
                                    <label htmlFor="Address">Address :</label>
                                    <input type="textarea" value="17 Brookfield" ref="Address" name="Address" id="Address" className="form-control" placeholder="Address" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Mobileno" >Mobile Number:</label>
                                    <input type="text" value="9493742114" onKeyPress={this.onlyNum.bind(this)} maxLength={10} minLength={0} ref="Mobileno" name="Mobileno" id="Mobileno" className="form-control" placeholder="Mobile Number" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Email">Email :</label>
                                    <input type="email" value="varmab@gmail.com" ref="Email" name="Email" id="Email" className="form-control" placeholder="Email" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="refferedId" >Reffered Id(optional) :</label>
                                    <input type="text" value="12321" ref="refferedId" name="refferedId" id="refferedId" className="form-control" placeholder="Reffered Id"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="College" >College,Degree & Year :</label>
                                    <input type="name" value="MVGR" ref="College" name="College" id="College" className="form-control" placeholder="College,Degree & Year" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="occuption" >Occupation :</label>
                                    <input type="name" value="Student" ref="occuption" name="occuption" id="occuption" className="form-control" placeholder="Occuption" required/>
                                </div>

                                <h3 className="loginTop" id="color"><center><font color="white">Fee Commitment</font></center></h3>

                                <div className="form-group">
                                    <label htmlFor="totalfee" >Total fee :</label>

                                    <input type="text" value="10000" ref="totalfee" name="totalfee" id="totalfee" className="form-control" placeholder="Total fee" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discountfee">Discount Fee :</label>
                                    <input type="text" value="2000" ref="discountfee" name="discountfee" id="discountfee" className="form-control" placeholder="Discount fee" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="finalfee" >Final Fee :</label>
                                    <input type="text" value="8000" ref="finalfee" name="finalfee" id="finalfee" className="form-control" placeholder="Final fee" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Course" >Joining Date :</label>
                                    <input type="date" ref="Course" name="Course" id="Course" className="form-control" placeholder="Joining Date" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Photo" >Student Photo :</label>
                                    <input type="file" onChange={this.handlePhotoChange}  ref="photo" name="photo" id="photo" className="form-control" placeholder="Photo"/>
                                </div>
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
