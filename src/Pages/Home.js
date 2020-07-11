import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import { SPACING } from '../Enums/Enums';
import arrowDown from '../Assets/arrowDown.png';
import './Home.css';
import ContentGrid from '../Components/contentGrid';

// Images
import staff from '../Assets/temp.jpeg';
import skyrug from '../Assets/skyrug.png';
import hawaiilove from '../Assets/hawaiilove.jpeg';
import qanc from '../Assets/qandc.png';

import ppllaunch from '../Assets/ppllaunch.jpeg';
import vol2 from '../Assets/vol2.jpeg';
import whitelogo from '../Assets/whitelogo.png';
import veritas from '../Assets/veritas.png';


export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const rowOne = [
            {image: staff, title: "meet our staff", link: '/aboutus'},
            {image: skyrug, title: "what do we do when the rug is pulled out from underneath us?", link: '/read'},
            {image: hawaiilove, title: "love in the time of coronavirus", link: '/read'},
            {image: qanc, title: "queerness and christianity", link: '/read'},
            {image: ppllaunch, title: "launch symposium", link: '/happenings'},
            {image: vol2, title: "read volume 2", link: '/archives'},
            {image: whitelogo, title: "join hearhere", link: '/contact', blackText: true},
            {image: veritas, title: "veritas forum", externalLink: 'http://www.veritas.org/', blackText: true},
        ]
        // const rowTwo = [
        //     {image: ppllaunch, title: "launch symposium", link: '/happenings'},
        //     {image: vol2, title: "read volume 2", link: '/archives'},
        //     {image: whitelogo, title: "join hearhere", link: '/contact', blackText: true},
        //     {image: veritas, title: "veritas forum", externalLink: 'http://www.veritas.org/', blackText: true},
        // ]

        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
            <Header/>
            <div className="bigContainer">
                <p className="centerText">we exist to generate conversations
                <br />on the deep questions in life.</p>
                <img src={arrowDown} alt={arrowDown} style={{height: 15, paddingTop: 20}}/>
            </div>
            <div style={{padding: SPACING.SPACING_MEDIUM}}/>
            <ContentGrid squareObject={rowOne}/>
            {/* <ContentGrid squareObject={rowTwo}/> */}
            <div style={{padding: SPACING.SPACING_LARGE}}/>
            </div>

            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}