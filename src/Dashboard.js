import React, { Component } from 'react';

import Header from './Header';
import Studentslist from './Studentslist';

class Dashboard extends Component {
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
                  </div>
            	    <div className="col-xs-12">
                	    <div className="form-wrap">
                            
                           <Studentslist />
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


export default Dashboard;
