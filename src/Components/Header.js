import React, { Component } from 'react';
import './Header.css';
import logo from '../Assets/hearhere.png';
import whiteLogo from '../Assets/whitehearhere.png';
import { COLORS } from '../Enums/Enums';

export default class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.pageHeader ? COLORS.LIGHT_GREEN : null, paddingBottom: 75}}>
                <span className="logo">
                    <img src={this.props.pageHeader ? whiteLogo : logo} alt={"logo"} style={{height: 30}}/>
                </span>

                <span className={this.props.pageHeader ? "pageHeaderButtons" : "buttons"}>
                    <a href='/'>about</a>
                    <a href='/'>archives</a>
                    <a href='/'>read</a>
                    <a href='/'>what's happening</a>
                    <a href='/'>partner</a>
                    <a href='/'>contact</a>
                </span>


                {
                    this.props.pageHeaderTitle && 
                    <div>
                        <div className="pageHeaderTitle">
                            <p style={{color: "white", fontWeight: "bold"}}>{this.props.pageHeaderTitle}</p>
                        </div>

                        <hr style={{
                            backgroundColor: "white",
                            height: 2,
                            border: 0,
                        }}/>
                        <div className="pageHeaderSubtitle">
                            <p style={{color: "white", fontWeight:"bold", size: 32}}>{this.props.pageHeaderSubtitle}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
