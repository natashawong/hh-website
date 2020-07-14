import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';
import { SPACING } from '../Enums/Enums';
import arrowDown from '../Assets/arrowDown.png';
import './Home.css';
import ContentGrid from '../Components/contentGrid';

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const rowOne = [
            {image: "https://i.imgur.com/482Jxh9.jpg", title: "meet our staff", link: '/aboutus'},
            {image: "https://i.imgur.com/DCVSZhv.jpg", title: "what do we do when the rug is pulled out from underneath us?", link: '/read'},
            {image: "https://i.imgur.com/EvsaQXs.jpg", title: "love in the time of coronavirus", link: '/read'},
            {image: "https://i.imgur.com/UfmdehE.png", title: "queerness and christianity", link: '/read'},
            {image: "https://i.imgur.com/mMSEWHd.jpg", title: "launch symposium", link: '/happenings'},
            {image: "https://i.imgur.com/sEqJQ1p.jpg", title: "read volume 2", link: '/archives'},
            {image: "https://i.imgur.com/BFLl0yO.png", title: "join hearhere", link: '/contact', blackText: true},
            {image: "https://i.imgur.com/GMUIaoD.png", title: "veritas forum", externalLink: 'http://www.veritas.org/', blackText: true},
        ]

        return (
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
            <div style={{padding: SPACING.SPACING_LARGE}}/>
            </div>

            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}