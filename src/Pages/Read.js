import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';

import {SPACING} from '../Enums/Enums';
import { COLORS } from '../Enums/Enums';
import pinkSkies from '../Assets/pinkskies.png';
import ContentGrid from '../Components/contentGrid';

export default class Read extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const rowOne = [
            {image: "https://i.imgur.com/8I2RigD.png", title: "what do we do when the rug is pulled out from underneath us?", externalLink: 'https://medium.com/@hearhere.journal/what-do-we-do-when-the-rug-is-pulled-out-from-underneath-us-dfcc3bd37624'},
            {image: "https://i.imgur.com/BUzzjEG.png", title: "a christian's moral argument for double A grading", externalLink: 'https://medium.com/@hearhere.journal/a-christians-moral-argument-for-double-a-grading-907bcc4f59b9'},
            {image: "https://i.imgur.com/7KEkvqY.jpg", title: "the life of Christ and COVID-19", externalLink: 'https://medium.com/@hearhere.journal/the-life-of-christ-and-covid-19-b916b5f88551'},
            {image: "https://i.imgur.com/Q30LFbi.png", blackBorder: true, title: "why worldviews matter in a COVID-19 world", externalLink: 'https://medium.com/@hearhere.journal/why-worldviews-matter-in-a-covid-19-world-82abfb51dc7c'},
        ]

        const rowTwo = [
            {image: "https://i.imgur.com/iYbfpwE.jpg", title: "one community, one grading policy: in support of universal P/NRP/I grading", externalLink: 'https://medium.com/@hearhere.journal/one-community-one-grading-policy-in-support-of-universal-p-nrp-i-grading-9c2190c8506b'},
            {image: "https://i.imgur.com/puDWe9U.png", title: "the meaning behind our memes", blackBorder: true, externalLink: 'https://medium.com/@hearhere.journal/the-meaning-behind-our-memes-54bf88a069d2'},
            {image: "https://i.imgur.com/hi8UcwO.jpg", title: "motivation drought", externalLink: 'https://medium.com/@hearhere.journal/motivation-drought-c3d8ff28a7a4'},
            {image: "https://i.imgur.com/AYznNH9.jpg", title: "think about such things", externalLink: 'https://medium.com/@hearhere.journal/think-about-such-things-c6a3b841da38'},
        ]

        const rowThree = [
            {image: "https://i.imgur.com/tBvgdzN.png", title: "we must imagine ourseleves happy", blackBorder: true, externalLink: 'https://medium.com/@hearhere.journal/we-must-imagine-ourselves-happy-99574c2512d3'},
            {image: "https://i.imgur.com/tpqPQKM.jpg", title: "if God is good, why the virus?", externalLink: 'https://medium.com/@hearhere.journal/if-god-is-good-why-the-virus-c69a16f25e14'},
        ]

        return (
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <link rel="stylesheet" href="https://use.typekit.net/umq8csv.css"></link>
                <Header pageHeader={true}/>
                
                <div className = "container" style={{backgroundColor: COLORS.LIGHT_GREEN}}>
                    <img className="img" src={pinkSkies} alt={"pink skies"} />
                    <p className="bigText">READ ARTICLES</p>
                </div>

                <div style={{padding: SPACING.SPACING_MEDIUM}}/>
                <ContentGrid squareObject={rowOne}/>
                <ContentGrid squareObject={rowTwo}/>
                <ContentGrid squareObject={rowThree}/>
                <div style={{padding: SPACING.SPACING_LARGE}}/>
            </div>
            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}