import React from 'react';
import CardRow from './CardRow';
import Heading from './Heading.js';

function PictureSection(props) {
    return (
        	<div className="test">
        	    <Heading>{props.title}</Heading>
        		<CardRow people={props.people}/>
        	</div>
    )
}

export default PictureSection;