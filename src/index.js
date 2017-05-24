import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App';
import Whoops404 from './Whoops404'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Basic from './Basic'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const ThankYou = ()=>{
  return <h1>Thank You for your submission</h1>;
}

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/basic" component={Basic}/>
        <Route path="/thankyou" component={ThankYou}/>

        <Route path="*" component={Whoops404}/>
      </div>
  </Router>,
  document.getElementById('root')
);
