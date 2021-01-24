import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';

import {SPACING} from '../../Enums/Enums';
import {COLORS} from '../../Enums/Enums';
import pinkSkies from '../../Assets/pinkskies.png';
import {MemberGrid} from '../../Components/contentGrid';

const Airtable = require('airtable');

export default class Members extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);

        var tempMembers = [];

        var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base('appQOx2TyY4UYmCtr');
        base('Members').select({})
        .eachPage((records) => {
            records.forEach(record => {
                tempMembers.push(record.fields)
            })
            this.setState({members: tempMembers})
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
                    <p className="bigText">STAFF</p>
                </div>

                <div style={{padding: SPACING.SPACING_MEDIUM}}/>
                <MemberGrid squareObject={this.state.members}/>
                <div style={{padding: SPACING.SPACING_LARGE}}/>
            </div>
            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}