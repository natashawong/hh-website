import React, { Component } from 'react';
import './Header.css';
import logo from '../Assets/hearhere.png';
import whiteLogo from '../Assets/whitehearhere.png';
import { COLORS } from '../Enums/Enums';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.pageHeader ? COLORS.LIGHT_GREEN : null, paddingBottom: this.props.pageHeader ? null : 75}}>
                <span className="logo">
                    <Link to="/">
                        <img src={this.props.pageHeader ? whiteLogo : logo} alt={"logo"} style={{height: 30}}/>
                    </Link>
                </span>

                <span className={this.props.pageHeader ? "pageHeaderButtons" : "buttons"}>
                    <Link to='/aboutus' id="link" style={{color: this.props.pageHeader ? "white" : "black"}}>about</Link>
                    <Link to='/archives' id="link" style={{color: this.props.pageHeader ? "white" : "black"}}>archives</Link>
                    <Link to='/read' id="link" style={{color: this.props.pageHeader ? "white" : "black"}}>read</Link>
                    <Link to='/happenings' id="link" style={{color: this.props.pageHeader ? "white" : "black"}}>what's happening</Link>
                    <Link to='/partner' id="link" style={{color: this.props.pageHeader ? "white" : "black"}}>partner</Link>
                    <Link to='/contact' id="link" style={{color: this.props.pageHeader ? "white" : "black"}}>contact</Link>
                </span>


                {
                    this.props.pageHeaderTitle && 
                    <div>
                        <div className="pageHeaderTitle">
                            <p style={{color: "white", fontWeight: "bold", margin: 0}}>{this.props.pageHeaderTitle}</p>
                        </div>

                        <hr style={{
                            backgroundColor: "white",
                            height: 2,
                            border: 0,
                        }}/>
                        <div className="pageHeaderSubtitle">
                            <p style={{color: "white", fontWeight:"bold", textSize: 32, margin: 0}}>{this.props.pageHeaderSubtitle}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
