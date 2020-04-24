import React, { Component } from 'react';
import './Header.css';
import logo from '../Assets/hearhere.png';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <span>
                    <img src={logo} alt={"logo"}/>
                </span>

                <span>
                    <a href='/'>about</a>
                    <a href='/'>archives</a>
                    <a href='/'>read</a>
                    <a href='/'>what's happening</a>
                    <a href='/'>partner</a>
                    <a href='/'>contact</a>
                </span>
            </div>
        )
    }
}
