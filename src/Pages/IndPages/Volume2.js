import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/footer';
import {SPACING} from '../../Enums/Enums';

import ls from '../../Assets/ls.jpg';

export default class Vol2 extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return(
            <div>
            <div style={{padding: SPACING.PAGE_SPACE}}>
                <Header pageHeader={true} pageHeaderTitle={"ARCHIVES"} pageHeaderSubtitle={"Volume 2: harmony launch symposium"}/>

                <div className="splitLayout" style={{padding: SPACING.PAGE_SPACE, paddingBottom: 30}}>
                    <div className="section">
                    <p>hearhere is a Journal of Christian Thought. But what does that actually mean?</p>
                    <p>We’re a group of 5C students tackling the big questions in life: Does truth exist? What does living a good life mean? What’s our purpose in life? The primary way we investigate these questions is by observing, thinking, and writing about the world around us and how we experience it, and every semester we compile those thoughts into a magazine centered around a common theme — this semester, that theme is HARMONY. </p>
                    <p>Now, we invite you to come meet the authors, designers, and editors, learn more about the making of the journal, enjoy delicious Thai food from Sanamluang, and of course, read and experience harmony: the second volume of hearhere.</p>
                    <p>Heard of hearhere before or have a friend involved with us?</p>
                    <p>Come and support your friends! See what they’ve been spending all those hours and late nights working on. Get your hands on the finished product, hear your friends speak a little about their pieces, and enjoy some free Thai food!</p>
                    <p>Want to learn more about us? Follow us on Instagram: @claremont.hearhere and on Facebook at facebook.com/claremont.hearhere.</p>
                    </div>
                    <div style={{padding: SPACING.SPACING_MEDIUM}}/>
                    <div className="section">
                        <img src={ls} alt={"launch symposium"} style={{width: "100%"}}/>
                        <p><b>volume 2 launch symposium at the Hive</b></p>
                    </div>
                </div>

            </div>
            
            <div className="footerStyling" style={{position: "static"}}>
            <Footer/>
            </div>
            </div>
        )
    }
}