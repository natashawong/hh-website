import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';
import ContentGrid from '../../Components/contentGrid';

export default class Read extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"READ"} pageHeaderSubtitle={"What do we do when the rug is pulled out from underneath us?"}/>
            </div>
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}