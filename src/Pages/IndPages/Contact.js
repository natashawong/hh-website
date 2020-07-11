import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"CONTACT"} pageHeaderSubtitle={"submit a question"}/>
            </div>
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}