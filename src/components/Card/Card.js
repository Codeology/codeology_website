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
                      <div className="cardName">{name}</div>
                        <p className="cardRole">{role}</p>
                      </div>}

                 position="top center">

            {/* Profile popup content */}
            <div className="profile-background">
            <div className="profile-name first-name"> {name}</div>
            <img className="profile-img" src={imgSrc} alt={name}/>

              <p className="profile-text">
                <span className="profile-category">Year:</span> {year} <br/>
                <span className="profile-category">Role:</span> {role}<br/>
                <span className="profile-category">Email:</span> {email}<br/>
                <span className="profile-category">Tree:</span> {tree} <br/>
                {leaf && 
                  <div className="profile-text">
                    <span className="profile-category">Leaf:</span> {leaf} <br/>
                  </div>
                }
                
                {display_links &&
                <div> 
                  <span className="profile-category">Links:</span>
                  {linkedin && <a className="profile-link profile-linkedin" href={linkedin}>LinkedIn</a>}
                  {resume && <a className="profile-link profile-resume" href={resume}>Resume</a>}
                  {website && <a className="profile-link profile-website" href={website}>Website</a>}
                </div>
              }
                
                <br/>

                <div className="profile-text profile-blurb">{blurb} </div>

              </p>
            </div>
          </Popup>

        );
    }
  }

  export default Card;
