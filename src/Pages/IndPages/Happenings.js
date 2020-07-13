import React, {Component} from 'react';
import './Happenings.css';

import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class Happenings extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"WHAT'S HAPPENING"} pageHeaderSubtitle={"Launch Symposium vol. 3: decolonizing christianity"}/>

                <div className="splitLayout" style={{padding: SPACING.PAGE_SPACE, paddingBottom: 30}}>
                    <div className="section">
                        <p style={{fontSize: 32, margin: 0}}><b><span className="bigDay">00</span>d <span className="bigDay">00</span>m <span className="bigDay">00</span>s</b></p>
                        <p style={{fontSize: 24, margin: 0}}><b>TBD</b></p>
                        <br  />
                        <br  />
                        <p style={{textAlign: "justify"}}>
                        hearhere's Launch Symposium this semester is themed "Decolonising Christianity." During the Launch Symposium, you'll get to learn how a magazine is put together from start to finish, meet the authors, editors, and designers that produced the journal, and participate in a moderated discussion led by CMC Professor Esther Chung-Kim and student Natasha Wong CM '22. Light bites from the Cheese Cave, refreshments, dinner from Buca di Beppo, and dessert from the Claremont Culinary Institute will be served. If you would like to join us for dinner, please RSVP at tiny.cc/hhlaunchsp20! This event will be held on March 24th Tuesday 5:30-7:30pm Edmunds Ballroom!
                        </p>
                    </div>
                    <div style={{padding: SPACING.SPACING_MEDIUM}}/>
                    <div className="section">
                        <iframe height="450" frameborder="0" src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz7tUZb8xw4ARQepMEt7OSHc&key=" + process.env.REACT_APP_GOOGLE_MAPS_KEY} allowfullscreen></iframe>
                        <p><b>Edmunds Ballroom</b></p>
                    </div>
                </div>
                
                <div style={{padding: SPACING.SPACING_MEDIUM}}/>

            </div>
            <div className="footerStyling" style={{position:"static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}