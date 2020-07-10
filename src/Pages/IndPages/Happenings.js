import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

export default class Happenings extends Component {
    render() {
        return(
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"WHAT'S HAPPENING"} pageHeaderSubtitle={"Launch Symposium vol. 3: decolonizing christianity"}/>
                <Footer/>
            </div>
        )
    }
}