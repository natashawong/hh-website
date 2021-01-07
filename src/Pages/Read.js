import React, {Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/footer';

import {SPACING} from '../Enums/Enums';
import { COLORS } from '../Enums/Enums';
import pinkSkies from '../Assets/pinkskies.png';
import ContentGrid from '../Components/contentGrid';

const Airtable = require('airtable');

export default class Read extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);

        var tempArticles = [];

        var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base('appGcMtxqrvXJs8dX');
        base('Articles').select({})
        .eachPage((records) => {
            records.forEach(record => {
                tempArticles.push(record.fields)
            })
            this.setState({articles: tempArticles})
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    render() {
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
                <ContentGrid squareObject={this.state.articles}/>
                <div style={{padding: SPACING.SPACING_LARGE}}/>
            </div>
            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}