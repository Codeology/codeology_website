import React from 'react';
import CardRow from '../CardRow/CardRow';
import Heading from '../Heading/Heading.js';

function PictureSection(props) {
    return (
			<div>
        	    <Heading>{props.title}</Heading>
        		<CardRow people={props.people}/>
        	</div>
    )
}

export default PictureSection;