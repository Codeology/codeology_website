import React from 'react';
import Popup from "reactjs-popup";
import './css/Card.css';

class Card extends React.Component {
    render() {
      var name_arr = this.props.name.split(this.props.name);
        return (
          <Popup modal trigger={
            <div className="cardSheet">
              {/* Card info  */}
                <img className="cardImg" src={this.props.imgSrc}></img>
                      <div className="cardName">{this.props.name}</div>
                        <p className="cardRole">{this.props.role}</p>
                      </div>}

                 position="top center">

            {/* Profile popup content */}
            <div className="profile-background">
              <div className="profile-name" id="first-name"> {this.props.name}</div>
              <div className="profile-name"> {name_arr[0]} </div>
              <img className="profile-img" src={this.props.imgSrc}/>

              <div className="profile-category">Year: Freshman </div>
              <div className="profile-category">Role: {this.props.role}</div>
              <div className="profile-category">Email: email@berkeley.edu </div>
              <div className="profile-category">Tree: Your mom</div>
              <div className="profile-category">Leaf: Your dad</div>
              <div className="profile-category">Links: </div>

            </div>
          </Popup>

        );
    }
  }

  export default Card;
