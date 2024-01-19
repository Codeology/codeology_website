import React from 'react';
import Popup from "reactjs-popup";
import './Card.css';
import { Fade } from 'react-awesome-reveal';

class Card extends React.Component {
    render() {
      const {name, role, linkedin, website, imgSrc, year, email, tree, leaf, blurb} = this.props;

      const links = {
        email: {
          href: `mailto:${email}`,
          img: 'email_green.svg'
        },
        linkedin: {
          href: linkedin,
          img: 'linkedin_green.svg'
        },
        website: {
          href: website,
          img: 'web_green.svg'
        }
      }

      const getLinks = () => {
        return (
          <div className='profile-link-container'>
          {Object.keys(links).map(link => {
            if (this.props[link]) {
              return (
                <a className="profile-link" href={links[link].href} target="_blank" rel="noopener noreferrer">
                  <img src={require(`../../images/logos/${links[link].img}`)} alt={link} />
                </a>
              );
            } else return <></>;
          })}
          </div>
        )
      }

      return (
        <Fade>
          <Popup modal trigger={
          <div className="cardSheet">
            {/* Card info  */}
              <img className="cardImg" src={imgSrc} alt={name} />
              <div className='cardNameContainer'>
                <b className="cardName midtext">{name}</b>
                <b className="cardRole">{role}</b>
              </div>
                    
            </div>} 
        position="top center">

          {/* Profile popup content */}
          <div className="profile-background">
            <h2 className="profile-name">{name}</h2>
            <h3 className='profile-role'>{role}</h3>
            <img className="profile-img" src={imgSrc} alt={name}/>
            {getLinks()}
            <p className="profile-blurb">{blurb} </p>

            {/*
            <p className="profile-text">
              <span className="profile-category">Year:</span> {year} <br/>
              {tree && <><span className="profile-category">Tree:</span> {tree} <br/></>}
              {leaf && <><span className="profile-category">Leaf:</span> {leaf}<br/></>}
              <br/>

              <p className="profile-blurb">{blurb} </p>
            </p>
            */}
          </div>
        </Popup>
        </Fade>
      );
    }
  }

  export default Card;
