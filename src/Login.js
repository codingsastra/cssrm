import React, { Component } from 'react';
import Header from './Header';

class Login extends Component {
  constructor(){
    super();

    this.submit = this.submit.bind(this);
  }

  submit(e){

    e.preventDefault();

    const email = encodeURIComponent(this.refs.email.value);
    const password = encodeURIComponent(this.refs.password.value);
    const requestBody = `email=${email}&password=${password}`;

    fetch(`/api/users/login`, {
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

        if(data._id){
          console.log('userid:'+ data._id)
          localStorage.setItem("userid",data._id);
          window.location.assign('http://' + window.location.hostname + ':' + window.location.port + '/dashboard')
        }
        else {
          alert(JSON.stringify(data));
        }

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
                            <h1 className="loginTop">Log in</h1>
                            <form role="form" onSubmit={this.submit} >
                                <div className="form-group">
                                    <label id="email">Email</label>
                                    <input type="email"
                        									ref="email"
                        									name="email"
                        									id="email"
                        									className="form-control"
                        									placeholder="Email"
                        									required/>
                                </div>
                                <div className="form-group">
                                    <label id="password">Password</label>
                                    <input type="password"
                      									ref="password"
                      									name="key"
                      									id="key"
                                        maxLength={10}
                                        minLength={4}
                      									className="form-control"
                      									placeholder="Password"
                      									required/>
                                </div>

                                <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Log in"/>
                            </form>
                            <a href="/Forgot" className="forget" data-toggle="modal" data-target=".forget-modal">Forgot your password?</a>

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



export default Login;
