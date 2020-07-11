import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class MissionVission extends Component {
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"ABOUT"} pageHeaderSubtitle={"vision & mission"}/>
                <p>
                hearhere envisions a Claremont Colleges where students, faculty, and staff engage with Christian perspectives in vibrant discussions on the deep questions in life. We accomplish this through our mission: to generate conversations by offering diverse Christian perspectives on the world.
                </p>
            </div>
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}