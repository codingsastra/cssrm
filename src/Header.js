import React, { Component } from 'react';

import {
  Grid,
  Navbar,
  Nav,
  NavItem,
  Jumbotron,
  Button
} from 'react-bootstrap';
import Img from './Img';
import AuthService from './AuthService';

class Header extends Component {
  constructor(){
    super();
    this.state={
      userid:''
    }

    this.logout=this.logout.bind(this);
  }

  componentDidMount(){
      var userId=localStorage.getItem("userid");

      if(userId){
        this.setState({userid: userId});
      }
  }

  logout(e){
    localStorage.removeItem("userid");
    window.location.assign('http://' + window.location.hostname + ':' + window.location.port + '/')
  }

  render(){
    return(
      <div>
      <Img/>
        <Navbar >
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">CSSRM</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            {
                  (this.state.userid === '') ?
                      <Nav pullRight>
                        <NavItem href="/login">
                          Login
                        </NavItem>
                        <NavItem href="/register">
                          Signup
                        </NavItem>
                      </Nav>
                      :
                      <Nav pullRight>
                        <NavItem href="/dashboard">
                          Registration
                        </NavItem>
                        <NavItem href="/basic">
                          Basic
                        </NavItem>
                        <NavItem  eventKey={ 1 } onClick={ this.logout } href='#'>
                          Logout
                        </NavItem>
                      </Nav>
            }
            </Navbar.Collapse>
          </Grid>
        </Navbar>
      </div>
    )
  }
}


export default Header;
