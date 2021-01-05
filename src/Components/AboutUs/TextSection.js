import React from 'react';
import Heading from './Heading.js';

function TextSection() {

	return (
		<div id="textSection">
		        <img className="puzzle" id="GreenPuzzle" src={require('./Constants/images/Cartoons/puzzle.png')} />

                {/* I hide this in desktop view but i added it because im bad at css */}
                <div id="mobilePictureHolder">
                    <img id="pictureMobile" src={require('./Constants/images/sample.png')} />
                </div>
                <img id="puzzle2" src={require('./Constants/images/Cartoons/puzzle2.png')} />
                <img id="puzzle3" src={require('./Constants/images/Cartoons/puzzle3.png')} />
                
		        <div id="textHolder">
					Codeology is a UC Berkeley student-run club fosters self-exploration and self-development 
					within the field of tech. Through collaborative projects and workshops, our community provides 
					Cal students with a way to explore the various roles of the CS industry and develop technical 
					expertise in their area of interest. Above all else, we value our community 
					and strive to give our members a supportive family at Cal.
		        </div>
		        <img id="PictureHolder" src={require('./Constants/images/sample.png')} />

		        <img id="PeepsLeft" src={require('./Constants/images/Cartoons/smallpeeps left.png')} />
		        <img id="PeepsRight" src={require('./Constants/images/Cartoons/smallpeeps right.png')} />

		</div>
	)

}


export default TextSection;
