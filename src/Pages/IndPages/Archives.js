import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class Vol2 extends Component {
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"ARCHIVES"} pageHeaderSubtitle={"Volume 2: harmony launch symposium"}/>
            </div>
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}