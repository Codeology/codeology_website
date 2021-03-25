import React from 'react';
import Popup from "reactjs-popup";
import './css/Card.css'

class Card extends React.Component {
    render() {
      var name_arr = this.props.name.split(this.props.name);
        return (
          <Popup trigger={
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

              <div className="profile-category">Year: </div>
              <div className="profile-category">Role: </div>
              <div className="profile-category">Email: </div>
              <div className="profile-category">Tree: </div>
              <div className="profile-category">Leaf: </div>
              <div className="profile-category">Links: </div>


            </div>
          </Popup>

        );
    }
  }

  export default Card;
