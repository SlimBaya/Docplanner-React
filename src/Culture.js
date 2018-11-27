import React from 'react';

import{Container } from 'reactstrap';

class Culture extends React.Component {
    render(){
        return (<Container className="culture">
            <p className="cultureText"> 
                We are a global <br/>
                company <br/>
                with local culture    
            </p>
            <div className="cultreLists">
                <a className="cultreList" href="#"> ZnanyLekarz </a>
                <a className="cultreList" href="#"> Doctoralia </a>
                <a className="cultreList" href="#"> MioDottre </a>
                <a className="cultreList" href="#"> DoktorTakvimi </a>
                <a className="cultreList" href="#"> ZnanyLekar </a>
            </div>
        </Container>)
    }
}
    export default Culture;