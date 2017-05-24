import React, { Component } from 'react';
import Coding from './Coding.png';
import {
  Image
} from 'react-bootstrap';


class Img extends Component {
  render() {
    return (
    	<div>

         <center><Image src={Coding} width="350" height="120" responsive /> </center>
  
</div>
   );
  }
}

export default Img;