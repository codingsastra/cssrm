import React, { Component } from 'react';
import Header from './Header';
import AuthService from './AuthService';
import './App.css';

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: '',
    confirmpassword: ''
      }
    };
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(e) {
    e.target.classList.add('active');

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target.name);
  }

    handleSubmit(e) {
    e.preventDefault();

    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit')
    }
  }
  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }
    showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';

         if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 5   chars`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }


    error.textContent = '';
    return true;
  }


  submit(e){

    e.preventDefault();

    const name = encodeURIComponent(this.refs.name.value);
    const email = encodeURIComponent(this.refs.email.value);
    const password = encodeURIComponent(this.refs.password.value);

    

    const requestBody = `name=${name}&email=${email}&password=${password}`;

    fetch(`/api/users/register`, {
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

        localStorage.setItem("userid",data._id);
        //Temporary code - This is not ideal solution
        window.location.assign('http://' + window.location.hostname + ':' + window.location.port + '/dashboard')

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
                            <h1 className="loginTop">Register</h1>
                            <form role="form" onSubmit={this.submit} id="login-form">
                                <div className="form-group">
                                 <label id="nameLabel">Username</label>
                                       <input className="form-control"
                                             type="text"
                                            name="name"
                                            ref="name"
                                            value={ this.state.name }
                                            onChange={ this.handleChange }
                                            placeholder="Enter Username"
                                            required />
                                          <div className="error" id="nameError" />
                                  </div>

                                <div className="form-group">
                                     <label id="emailLabel">Email</label>
                                    <input type="email"
                                        ref="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={ this.state.email }
                                        onChange={ this.handleChange }
                                        required />
                                        <div className="error" id="emailError" />
                                </div>
                                 <div className="form-group">
                                    <label id="passwordLabel">Password</label>
                                    <input className="form-control"
                                      type="password"
                                      name="password"
                                      ref="password"
                                      value={ this.state.password }
                                      onChange={ this.handleChange }
                                      pattern=".{6,}"
                                      placeholder="enter password"
                                      required />
                                    <div className="error" id="passwordError" />
                                </div>
                                  <div className="form-group">
                                    <label id="passwordConfirmLabel">Confirm Password</label>
                                    <input className="form-control"
                                          type="password"
                                          name="passwordConfirm"
                                          placeholder="retype-Password"
                                          ref="passwordConfirm"
                                          value={ this.state.passwordConfirm }
                                          onChange={ this.handleChange }
                                          required />
                                    <div className="error" id="passwordConfirmError" />
                                  </div>
                                <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Register"/>
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


export default Register;
