import React, {Component} from 'react';
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
            </div>
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}