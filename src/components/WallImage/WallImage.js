import React from 'react';
import { Parallax } from 'react-parallax';
import './WallImage.css';


function WallImage(props) {
    return (
        <div>
            {/* header photo */}
            <div className="imageContainer">
                    <Parallax
                        className='parallax-banner'
                        bgImage={props.image}
                        strength={300}
                        height={"60vh"}
                        bgImageStyle={{width:"100%", height:"auto"}}
                    >                        
                        <div className="img-container" ></div>
                    </Parallax>
                    <img className='banner' src={props.image} alt={props.title} />
                </div>
                <h1 className="textOverlay-white">{props.title}</h1>
        </div>
          
    )
}

export default WallImage;