import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        /* loaded: true when image is loaded (gets rid of awkward image loading transition) */
        this.state = {
            loaded: false,
            imagesLoaded: 0
        }
        this.numImages = 6;
        this.imageLoaded = this.imageLoaded.bind(this);
    }

    /* lets parent component know when all images are loaded & ready to display */
    componentDidUpdate() {
        if (!this.state.loaded && this.state.imagesLoaded === this.numImages) {
            this.setState({ loaded: true });
            this.props.loaded();
        }
    }

    imageLoaded() {
        this.setState({ imagesLoaded: this.state.imagesLoaded + 1 });
    }
    
    render() {
        return (
            <div id="landing">
            <div id="border-box">
                <div id="title">
                    <img id="findYourFit" onLoad={this.imageLoaded} src={require("../../images/illustrations/landing/findYourFit-temp.png")} alt="find-your-fit"/>
                </div>
                <div id="laptop-apply">
                    <img id="laptop" onLoad={this.imageLoaded} src={require("../../images/illustrations/landing/laptop1.png")} alt='' />
                    <Link id="apply" className='h2' to="/apply">apply</Link> 
                </div>
                
                <h3 id="landing-text">
                Here at Codeology, we provide opportunities for you to explore the tech industry with a supportive community.
                </h3>
             </div>

            <div id="hands">
                        <div className="handRow below">
                            <img id="blueHand" onLoad={this.imageLoaded} className="topHands hand" src={require("../../images/illustrations/landing/web_hand3.png")} alt='' />
                            <img id="greenHand" onLoad={this.imageLoaded} className="topHands hand" src={require("../../images/illustrations/landing/web_hand2.png")} alt='' />
                        </div>
                        <div className="handRow">
                            <img id="orangeHand" onLoad={this.imageLoaded} className="hand" src={require("../../images/illustrations/landing/web_hand1.png")} alt='' />
                            <img id="redHand" onLoad={this.imageLoaded} className="hand" src={require("../../images/illustrations/landing/web_hand4.png")} alt='' />
                        </div>
             </div>
        </div>
        )
    }
}

export default Landing;