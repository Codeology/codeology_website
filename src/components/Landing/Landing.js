import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

function Landing() {
    return (
        <div id="landing">
            <div id="border-box">
                <div id="title">
                    <img id="findYourFit" src={require("../../images/illustrations/landing/findYourFit-temp.png")} alt="find-your-fit"/>
                </div>
                <div id="laptop-apply">
                    <img id="laptop" src={require("../../images/illustrations/landing/laptop1.png")} />
                    <Link id="apply" to="/apply">apply</Link> 
                </div>
                
                <div id="landing-text">
                Here at Codeology, we provide opportunities for you to explore the tech industry with a supportive community.
                </div>

               <div id="apply-contact">
                    <Link className="white-button" to="/contact">
                        Contact Us
                    </Link>
                </div>
             </div>

            <div id="hands">
                        <div className="handRow below">
                            <img id="blueHand" className="topHands hand" src={require("../../images/illustrations/landing/web_hand3.png")} />
                            <img id="greenHand" className="topHands hand" src={require("../../images/illustrations/landing/web_hand2.png")} />
                        </div>
                        <div className="handRow">
                            <img id="orangeHand" className="hand" src={require("../../images/illustrations/landing/web_hand1.png")} />
                            <img id="redHand" className="hand" src={require("../../images/illustrations/landing/web_hand4.png")} />
                        </div>
             </div>
        </div>
    )
}

export default Landing;