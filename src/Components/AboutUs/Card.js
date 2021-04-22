import React from 'react';
import Popup from "reactjs-popup";
import './css/Card.css';

class Card extends React.Component {
    render() {
      var name_arr = this.props.name.split(this.props.name);
      var display_links = this.props.linkedin != null || this.props.resume != null || this.props.website != null;
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
                <span className="profile-category">Year:</span> {this.props.year} <br/>
                <span className="profile-category">Role:</span> {this.props.role}<br/>
                <span className="profile-category">Email:</span> {this.props.email}<br/>
                <span className="profile-category">Tree:</span> {this.props.tree} <br/>
                {this.props.leaf != null ? <div className="profile-text">
                  <span className="profile-category">Leaf:</span> {this.props.leaf} <br/>
                  </div> : ""}
                
                {display_links ? 
                <div> 
                  <span className="profile-category">Links:</span>
                  {this.props.linkedin != null ?
                    <a className="profile-link linkedin" href={this.props.linkedin}>LinkedIn</a> : ""}
                  {this.props.resume != null ?
                  <a className="profile-link resume" href={this.props.resume}>Resume</a> : ""}
                  {this.props.website != null ? 
                  <a className="profile-link website" href={this.props.website}>Website</a> : ""}
                </div>
               : ""
              }
                
                <br/>

                <div className="profile-text profile-blurb">{this.props.blurb} </div>

              </p>
            </div>
          </Popup>

        );
    }
  }

  export default Card;
