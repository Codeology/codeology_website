import React from 'react';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import './WallImage.css';


class WallImage extends React.Component {
    constructor(props) {
        super(props);
        /* loaded: true when image is loaded (gets rid of awkward image loading transition) */
        this.state = {
            loaded: false
        }
    }

    render() {
        return (
            <div>
                {/* header photo */}
                <div className="imageContainer">

                {/* placeholder image to load */}
                <img onLoad={() => this.setState({ loaded: true })} style={{ display: 'none'}} src={this.props.image} alt={this.props.title} />
                    {this.state.loaded && 
                    <Fade>
                        <Parallax
                            className='parallax-banner'
                            bgImage={this.props.image}
                            strength={300}
                            height={"60vh"}
                            bgImageStyle={{width:"100%", height:"auto"}}>                        
                            <div className="img-container" ></div>
                        </Parallax>
                        <img className='banner' src={this.props.image} alt={this.props.title} />
                    </Fade>}
                    </div>
                   <h1 className="textOverlay-white">{this.props.title}</h1>
            </div>
              
        )
    }
}

export default WallImage;