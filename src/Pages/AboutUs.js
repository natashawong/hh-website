import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import { SPACING } from '../Enums/Enums';
import groupPic from '../Assets/groupPic.png';
import { COLORS } from '../Enums/Enums';
import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return(
            <div style={{padding: SPACING.PAGE_SPACE}}>
            <link rel="stylesheet" href="https://use.typekit.net/umq8csv.css"></link>
            <Header pageHeader={true}/>
            <div className = "container" style={{backgroundColor: COLORS.LIGHT_GREEN}}>
                <img className="img" src={groupPic} alt={groupPic}/>
                <p className="bigText">ABOUT US</p>
            </div>
            <Footer/>
            </div>
        )
    }
}