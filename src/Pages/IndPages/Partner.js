import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class Partner extends Component {
    render() {
        return(
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"PARTNER"} pageHeaderSubtitle={"Host and event with hearhere"}/>
                <Footer/>
            </div>
        )
    }
}