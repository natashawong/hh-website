import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import { SPACING } from '../Enums/Enums';
import pinkSkies from '../Assets/pinkskies.png';
import { COLORS } from '../Enums/Enums';
import './Subpage.css';

// NOTE: ALL SUBPAGE IMAGES ARE CROPPED TO 1265 x 451px

export default class AboutUs extends Component {
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
            <link rel="stylesheet" href="https://use.typekit.net/umq8csv.css"></link>
            <Header pageHeader={true}/>
            <div className = "container" style={{backgroundColor: COLORS.LIGHT_GREEN}}>
                <img className="img" src={pinkSkies} alt={pinkSkies}/>
                <p className="bigText">ARCHIVES</p>
            </div>
            </div>
            <div className="footerStyling">
            <Footer/>
            </div>
            </div>
        )
    }
}