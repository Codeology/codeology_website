import React from 'react';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Fade } from 'react-awesome-reveal';
import './WallImageFullSize.css';


class WallImageFullSize extends React.Component {
    constructor(props) {
        super(props);
        /* loaded: true when image is loaded (gets rid of awkward image loading transition) */
        this.state = {
            loaded: false
        }
    }

    render() {
        const wall_image_height = `
            .img-container, .imageContainer, .parallaxBanner : {
                height : ${this.props.height};
                max-height: 215px;
            }
        `
        return (
            <div>
                {/* header photo */}
                <style>
                    {wall_image_height}
                </style>
                <div className="imageContainer">
                    {/* placeholder image to load */}
                    <img onLoad={() => this.setState({ loaded: true })} style={{ display: 'none'}} src={this.props.image} alt={this.props.title} />

                    {/* If the element is loaded, display the banner and text */}
                    {this.state.loaded && 
                    <Fade>
                        <ParallaxBanner className="parallaxBanner" style={{ aspectRatio: '2 / 1' }}>
                            <h1 className="textOverlay-white">{this.props.title}</h1>
                            <ParallaxBannerLayer id="parallax-image" image={this.props.image} speed={-20} />
                        </ParallaxBanner>
                    </Fade>}
                </div>
            </div> 
        )
    }
}

export default WallImageFullSize;