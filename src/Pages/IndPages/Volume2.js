import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class Vol2 extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"ARCHIVES"} pageHeaderSubtitle={"Volume 2: harmony launch symposium"}/>

                <div className="splitLayout" style={{padding: SPACING.PAGE_SPACE, paddingBottom: 30}}>
                    <div className="section">
                        to put in event stuff
                    </div>
                    <div style={{padding: SPACING.SPACING_MEDIUM}}/>
                    <div className="section">
                        to put in pics
                    </div>
                </div>

            </div>
            
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}