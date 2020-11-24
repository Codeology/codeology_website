import React from 'react';
import './css/Card.css'


//                <img className="cardImg" src={require(this.state.str)}></img>
//                <p className="cardRole">{this.props.role}</p>
//				<img className="cardImg" src={require("./Constants/images/people/kyle.jpg")}></img>

class Card extends React.Component {
    render() {
        return (
            <div className="cardSheet">
				<img className="cardImg" src={this.props.imgSrc}></img>
                <div className="cardName">{this.props.name}</div>
                <p className="cardRole">{this.props.role}</p>
            </div>
        );
    }
  }

  export default Card;
