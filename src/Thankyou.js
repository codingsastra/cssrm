import React, { Component } from 'react';

import Header from './Header';

class Thankyou extends Component {
  constructor(){
    super();

    this.state = {
      errors: {},
    };

  }

  render(){
    return (
      <div>
            <Header />
            <div className="container">
            	<div className="row">
                      <div className="col-xs-12">
                	    <div className="form-wrap">
                            <h1>Thank You for your submission</h1>
                	    </div>
            		      </div>
              </div>
          </div>
      </div>
    )
  }
}


export default Thankyou;
