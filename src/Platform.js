import React from 'react';

import{Container } from 'reactstrap';

class Platform extends React.Component {
    render(){
        return (<Container className="platform">
                <div className="platform-1">
                    <h1 className="platform-1-title"> 
                        The world's <br/>
                        biggest healthcare platform
                    </h1>
                    <p className="platform-1-ph">
                        We work from 6 offices all over the world, bringing Docplanner <br/>
                        Group to life in almost 20 countries.
                    </p>
                </div>
                <div className="platform-2">
                    <div className="platform-2-1">
                        <div className="platform-2-1-1">
                            <img src="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x" className="platform-2-1-1-logo"/>
                            <h3 className="platform-2-1-1-title"> Leader in <br/> 8 countries</h3>
                            <p className="platform-2-1-1-text">
                                Poland, Turkey, Spain, Italy, <br/>
                                Mexico, Brazil, Argentina and <br/>
                                Chile
                            </p> 
                        </div>
                        <div className="platform-2-1-2">
                            <img src="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x" className="platform-2-1-2-logo"/>
                            <h3 className="platform-2-1-2-title"> 600 000  <br/> appointments </h3>
                            <p className="platform-2-1-2-text">
                                booked last month 
                            </p>
                        </div>
                    </div>
                    <div className="platform-2-2">
                        <div className="platform-2-2-1">
                            <img src="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x" className="platform-2-2-1-logo"/>
                            <h3 className="platform-2-2-1-title"> 20 million unique  <br/> patients </h3>
                            <p className="platform-2-2-1-text">
                            visit us every month                
                            </p>
                        </div>
                        <div className="platform-2-2-2">
                            <img src="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x" className="platform-2-2-2-logo"/>
                            <h3 className="platform-2-2-title"> 35 000 active  <br/> doctors </h3>
                            <p className="platform-2-2-text">
                                trust in our solutions         
                            </p>
                        </div>
                    </div>
                </div> 
</Container>)
    }
}

export default Platform;