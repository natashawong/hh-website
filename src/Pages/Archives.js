import React, { Component } from 'react';
import './Subpage.css';

import Header from '../Components/Header';
import Footer from '../Components/footer';
import {ContentGrid} from '../Components/contentGrid';

import { SPACING } from '../Enums/Enums';
import { COLORS } from '../Enums/Enums';

import pinkSkies from '../Assets/pinkskies.png';
import whitelogo from '../Assets/whitelogo.png';
import emptySquare from '../Assets/emptySquare.png';
import launch from '../Assets/ppllaunch.jpeg';

// NOTE: ALL SUBPAGE IMAGES ARE CROPPED TO 1265 x 451px

export default class Archives extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const squareObject = [
            {title: "vision \& mission", image: whitelogo, link: '/aboutus/missionvission', blackBorder: true},
            {title: "vol 2: harmony launch symposium", image: launch, link: '/archives/volume2'},
            {title: "vol 2: harmony", image: "https://i.imgur.com/sEqJQ1p.jpg", externalLink: 'https://drive.google.com/file/d/10OLEOgZjtFHKuQFuPI3dr-EiUGyQztIf/view?usp=sharing'},
            {title: "", image: emptySquare, link: '/aboutus'},
        ]
        return (
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
            <link rel="stylesheet" href="https://use.typekit.net/umq8csv.css"></link>
            <Header pageHeader={true}/>

            <div className = "container" style={{backgroundColor: COLORS.LIGHT_GREEN}}>
                <img className="img" src={pinkSkies} alt={pinkSkies}/>
                <p className="bigText">ARCHIVES</p>
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