import React from 'react';
import './PageDescription.css';

function PageDescription(props) {

	return (
		<div id="textSection">

                {/* I hide this in desktop view but i added it because im bad at css */}
				{/* <div id="mobilePictureHolder">
                    <img id="pictureMobile" src={require('../../images/group/sample.png')} />
                </div>*/}
                
                <img id="puzzle2" src={require('../../images/illustrations/puzzle/puzzle2.png')} />
                <img id="puzzle3" src={require('../../images/illustrations/puzzle/puzzle3.png')} />

		        <div id="textHolder">{props.text}</div>
		        {/* <img id="PictureHolder" src={require('../../images/group/sample.png')} />

		        <img id="PeepsLeft" src={require('../../images/illustrations/people/smallpeeps left.png')} />
		        <img id="PeepsRight" src={require('../../images/illustrations/people/smallpeeps right.png')} /> */}

		</div>
	)

}


export default PageDescription;
