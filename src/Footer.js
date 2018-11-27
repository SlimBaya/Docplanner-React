import React from 'react';

import{Container } from 'reactstrap';

class Footer extends React.Component {
    render(){
        return (<Container className="footer">
            <p className="footer-1"> We are leaders in 8 countries: 
            <a className="footer-link" href="#"> Poland </a>,
            <a className="footer-link" href="#"> Turkey </a>,
            <a className="footer-link" href="#"> Spain </a>,
            <a className="footer-link" href="#"> Italy </a>,
            <a className="footer-link" href="#"> Mexico </a>,
            <a className="footer-link" href="#"> Brazil </a>,
            <a className="footer-link" href="#"> Argentina </a>,
                and 
            <a className="footer-link" href="#"> Chile </a>
        </p>
        <p className="footer-2"> This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
        <p className="footer-sit"> www.docplanner.com © 2018 </p>
            
        
        
        </Container>)

    }
}

export default Footer