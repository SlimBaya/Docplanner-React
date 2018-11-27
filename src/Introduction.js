import React from 'react';
import img1 from './images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import{Container,Row,Col } from 'reactstrap';


class Introduction extends React.Component {
    render(){
        return (
        
           <Container>
            <Row>
            <Col md={5}></Col>
            <Col md={4}>
            <img  src={img1} alt="#"/> 
            </Col>  
            <Col md={3}></Col>
            </Row>
            <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <h2 className="introTitle"> Making the healthcare experience more human</h2>
            </Col>
            <Col md={2}></Col>
            </Row>
            <Row>
                <Col md={6}>
                <p className="introText"> We want patients to find the perfect doctor and book an 
                        appointment in the most easy way. The patient journey should be  
                        enjoyable, and that's why we are always next to them: to help them 
                        find the best possible care. Anytime, anywhere.
                </p>
                </Col>
                <Col md={6}>
                <p className="introText"> We also help doctors to better manage their practice and build their
                        online reputation. With our integrated end-to-end solution, doctors  
                        are able not only to improve their online presence, but also to  
                        devote their time to what really matters: their patients.
                </p>
                </Col>
            </Row>
            </Container>
      );
    }
    }
    export default Introduction;