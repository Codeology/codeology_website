import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {
    return (
        <div id="landing">
            <div id="border-box">
                <div id="title">
                    <img id="findYourFit" src={require("./assets/images/findYourFit-temp.png")} alt="find-your-fit"/>
                    {/* <img id="f" src={require("./assets/images/f.png")} />
                    <img id="r" src={require("./assets/images/r.png")} />
                    <img id="i" src={require("./assets/images/i.png")} /> */}

                </div>
                <div id="laptop-apply">
                    <img id="laptop" src={require("./assets/images/laptop1.png")} />
                    <a id="apply" href="/apply">apply ></a> 
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
                        <div className="first handRow below">
                            <img id="blueHand" className="topHands hand" src={require("./assets/images/web_hand3.png")} />
                            <img id="greenHand" className="topHands hand" src={require("./assets/images/web_hand2.png")} />
                        </div>
                        <div className="second handRow">
                            <img id="orangeHand" className="hand" src={require("./assets/images/web_hand1.png")} />
                            <img id="redHand" className="hand" src={require("./assets/images/web_hand4.png")} />
                        </div>
             </div>
        </div>
    )
}

export default Landing;