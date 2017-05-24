import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import {
  
  Jumbotron,
 
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <div>
              <Header />

              <Jumbotron>
                
                <Container />
                
              </Jumbotron>
             
        </div>
    );
  }
}

export default App;
