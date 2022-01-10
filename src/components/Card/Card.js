import React from 'react';
import Popup from "reactjs-popup";
import './Card.css';

class Card extends React.Component {
    render() {
      const {name, role, linkedin, resume, website, imgSrc, year, email, tree, leaf, blurb} = this.props;
      var display_links = linkedin != null || resume != null || website != null;
        return (
          <Popup modal trigger={
            <div className="cardSheet">
              {/* Card info  */}
                <img className="cardImg" src={imgSrc} alt={name} />
                <div className='cardNameContainer'>
                  <b className="cardName">{name}</b>
                  <b className="cardRole subtext">{role}</b>
                </div>
                      
              </div>} 
          position="top center">

            {/* Profile popup content */}
            <div className="profile-background">
              <div className='profile-main'>
                <h2 className="profile-name first-name">{name}</h2>
                <img className="profile-img" src={imgSrc} alt={name}/>
              </div>
            

              <p className="profile-text">
                <span className="profile-category">Year:</span> {year} <br/>
                <span className="profile-category">Role:</span> {role}<br/>
                <span className="profile-category">Email:</span> {email}<br/>
                <span className="profile-category">Tree:</span> {tree} <br/>
                {leaf && <><span className="profile-category">Leaf:</span> {leaf}<br/></>}
                
                {display_links &&
                <div> 
                  <span className="profile-category">Links:</span>
                  {linkedin && <a className="profile-link profile-linkedin" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                  {resume && <a className="profile-link profile-resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>}
                  {website && <a className="profile-link profile-website" href={website} target="_blank" rel="noopener noreferrer">Website</a>}
                </div>
              }
                
                <br/>

                <p className="profile-blurb">{blurb} </p>

              </p>
            </div>
          </Popup>

        );
    }
  }

  export default Card;
