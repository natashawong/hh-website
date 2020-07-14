import React, { Component } from 'react';
import './Subpage.css';

import { SPACING } from '../Enums/Enums';
import { COLORS } from '../Enums/Enums';

import Header from '../Components/Header';
import Footer from '../Components/footer';
import ContentGrid from '../Components/contentGrid';

import whitelogo from '../Assets/whitelogo.png';
import groupPic from '../Assets/groupPic.png';
import emptySquare from '../Assets/emptySquare.png';

// NOTE: ALL SUBPAGE IMAGES ARE CROPPED TO 1265 x 451px

export default class AboutUs extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const squareObject = [
            {image: whitelogo, title: "vision \& mission", link: '/aboutus/missionvission', blackText: true},
            {title: "meet our staff", image: "https://i.imgur.com/482Jxh9.jpg", link: '/aboutus'},
            {title: "", image: emptySquare, link: '/aboutus'},
            {title: "", image: emptySquare, link: '/aboutus'},
        ]
        return (
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
            <link rel="stylesheet" href="https://use.typekit.net/umq8csv.css"></link>
            <Header pageHeader={true}/>
            
            <div className = "container" style={{backgroundColor: COLORS.LIGHT_GREEN}}>
                <img className="img" src={groupPic} alt={groupPic} />
                <p className="bigText">ABOUT US</p>
            </div>

            <div style={{padding: SPACING.SPACING_MEDIUM}}/>
            <ContentGrid squareObject={squareObject}/>
            <div style={{padding: SPACING.SPACING_LARGE}}/>

            </div>

            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}