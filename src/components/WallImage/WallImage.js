import React from 'react';
import { Parallax, Background } from 'react-parallax';


function WallImage(props) {
    return (
        <div>
            {/* header photo */}
            <div className="imageContainer">
                    <Parallax
                        bgImage={props.image}
                        strength={300}
                        height={"60vh"}
                        bgImageStyle={{width:"100%", height:"auto", brightness:"50%"}}
                    >                        
                        <div className="project-page-img" >
                            <div className="textOverlay-white">{props.title}</div>
                        </div>
                    </Parallax>
                </div>
        </div>
          
    )
}

export default WallImage;