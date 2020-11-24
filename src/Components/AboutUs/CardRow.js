import React from 'react';
import Card from './Card.js';
import {actives} from './Constants/members.js';
import './css/App.css';

function CardRow(props) {

	return (
			<div>
				<div className="cardHolder">
    			    {props.people.map(n => (<Card key={n.name} name={n.name} imgSrc={n.img} role={n.role}></Card> ))}
				</div>
			</div>
	)
	
}

export default CardRow;
