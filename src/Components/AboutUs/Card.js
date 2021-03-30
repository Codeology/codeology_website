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
            <div className="profile-name first-name"> {this.props.name}</div>
            <div className="profile-name"> {name_arr[0]} </div>
            <img className="profile-img" src={this.props.imgSrc}/>

              <p className="profile-text">
                <span className="profile-category">Year:</span> Freshman <br/>
                <span className="profile-category">Role:</span> {this.props.role}<br/>
                <span className="profile-category">Email:</span> email@berkeley.eduf<br/>
                <span className="profile-category">Tree:</span> Your mom <br/>
                <span className="profile-category">Leaf:</span> Your dad <br/>
                <span className="profile-category">Links:</span>
                  <a className="profile-link linkedin">linkedin</a>
                  <a className="profile-link resume">resume</a>
                  <a className="profile-link website">website</a>

                <br/>

                <div className="profile-blurb"> Hi this is the blurb sadlfkjasld lkasdjf lkasdjf lksadj ldskaj </div>

              </p>
            </div>
          </Popup>

        );
    }
  }

  export default Card;
