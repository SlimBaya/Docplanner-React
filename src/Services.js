import React from 'react';
import img2 from './images/patients.png'
import img3 from './images/doctors.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import{Container,Row,Col,select } from 'reactstrap';


class Services extends React.Component {
    render(){
        return (<Container className="services">
                    <Row>
                        <Col className="patients" md={5}>
                            <h6 className="patientsTitle"> For patients </h6>
                            <h3>Find a doctor, book a visit and solve any health-related doubt</h3>
                            <select className='country' type="select" name="select" id="exampleSelect">
                                <option value=""> Choose country </option>
                                <option value=""> Argentina </option>
                                <option value=""> Australia </option>
                                <option value=""> Brazil </option>
                                <option value=""> Chilie </option>
                                <option value=""> Colombia </option>
                                <option value=""> Czech </option>
                                <option value=""> France </option>                                
                                <option value=""> Italy </option>
                                <option value=""> Mexico </option>
                                <option value=""> Peru </option>
                                <option value=""> Poland </option>
                                <option value=""> Portugal </option>
                                <option value=""> Spain </option>
                                <option value=""> Turkey </option>
                                <option value=""> UK </option>
                            </select>   
                        <img className="patientsPhoto"  src={img2} alt="#"/> 
                        </Col>
                        <Col md={1}></Col>
                        <Col className="doctors" md={5}>
                            <h6 className="doctorsTitle"> For doctors </h6>
                            <h3>Save time managing visits and cut no-shows by half</h3>
                            <img  className="doctorsPhoto" src={img3} alt="#"/> 
                        </Col>

                    </Row>
        </Container>)
    }
}
export default Services;