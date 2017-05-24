import React, { Component } from 'react';
import codingsastra from './codingsastra.jpg';
// import three from './three.jpg';
// import one from './one.jpg';
import {
  Carousel,Grid,Row,Col
} from 'react-bootstrap';



class Container extends Component {
  render() {
    return (

<Grid>
    <Row className="show-grid">
      <Col sm={12} md={12}><Carousel>
    <Carousel.Item>
      <img width={1500} src={codingsastra}/>
     
    </Carousel.Item>
    <Carousel.Item>
      <img width={1500} src={codingsastra}/>
      
    </Carousel.Item>
    <Carousel.Item>
      <img width={1500}  src={codingsastra}/>
      
    </Carousel.Item>
   
  </Carousel></Col>
      
    </Row>
    </Grid>

  );
  }
}


export default Container;