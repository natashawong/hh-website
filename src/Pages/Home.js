import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import { SPACING } from '../Enums/Enums';
import arrowDown from '../Assets/arrowDown.png';
import './Home.css';

export default class Home extends Component {
    render() {
        return(
            <div style={{padding: SPACING.PAGE_SPACE}}>
            <Header/>
            <div className="bigContainer">
                <p className="centerText">we exist to generate conversations
                <br />on the deep questions in life.</p>
                <img src={arrowDown} alt={arrowDown} style={{height: 15, paddingTop: 20}}/>
            </div>
            {// TO DO: add the content grid}
            <Footer/>
            </div>
        )
    }
}