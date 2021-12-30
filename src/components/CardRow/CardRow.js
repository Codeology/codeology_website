import React from 'react';
import Card from '../Card/Card.js';
import {actives} from '../../constants/members.js';

function CardRow(props) {

	return (
			<div>
				<div className="cardHolder">
					{props.people.map(n => 
						(<Card key={n.name} 
							name={n.name} 
							imgSrc={n.img} 
							role={n.role}
							year={n.year}
							email={n.email}
							committee={n.committee}
							project={n.project}
							tree={n.tree}
							leaf={n.leaf}
							linkedin={n.linkedin}
							resume={n.resume}
							website={n.website}
							blurb={n.blurb}
							>

						</Card> ))}
				</div>
			</div>
	)
	
}

export default CardRow;
