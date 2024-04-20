import React from 'react';
// import './front.svg';
import { Fade } from 'react-awesome-reveal';

import Wall from '../../images/group/Wall.png';
import PageDescription from '../../components/PageDescription/PageDescription.js';
import PictureSection from '../../components/PictureSection/PictureSection.js';
import WallImage from '../../components/WallImage/WallImage.js';
import Heading from '../../components/Heading/Heading.js';

import {actives} from '../../constants/members.js';
import {leadership} from '../../constants/members.js'
import {projectLeaders} from '../../constants/members.js';
import { Helmet } from 'react-helmet';
import './Members.css';

function Members() {

  const description = `Codeology is a UC Berkeley student-run club fostering self-exploration and self-development within the tech field. `
  const destinations = ['rivian', 'meta', 'google', 'microsoft', 'paypal', 'amazon', 'nasaJpl', 'asana', 'atlassian', 'citadel', 'databricks', 'datadog', 'uber', 'imc', 
                            'optiver', 'scale', 'squarespace', 'statefarm', 'hp']
  const sponsors = ['eecs', 'skydeck']

  return (
    <div className="Members">
      <Helmet>
        <title>Codeology | Members</title>
      </Helmet>

      <WallImage image={Wall} title={'members'} />

      <Fade><PageDescription text={description} /></Fade>

      
      <div id='members-intro'>
      <Fade>
        <Heading className='no-margin'>Find Your Fit</Heading>
        {/* would like to make this an img carousel/scroll display */}
        <div id='members-img-container'>
          <img id='members-img' src={require('../../images/group/retreat_fa21.jpg')} alt='Codeology' />
          <img id='members-img-person' src={require('../../images/illustrations/people/person4.png')} alt='' />
        </div>
        
        <p id='members-blurb'>
          Whether coding is already your passion or you've yet to print your first “Hello World,” Codeology aims to provide a tight-knit community to support you in “finding your fit” in the world of tech.
          Through projects, professional development, industry events, and social events, we offer opportunities to help you explore different roles in the tech industry and develop technical expertise in your area of interest.
        </p>
        </Fade>
      </div>

        <img id="RedHand" src={require('../../images/illustrations/arm/red arm.png')} alt='' />
        <PictureSection title={"Officer Team"} people={leadership}/>

        <img id="PinkHand" src={require('../../images/illustrations/arm/pink arm.png')} alt='' />
        <PictureSection title={"Project Leaders"} people={projectLeaders}/>

        <img id="GreenHand" src={require('../../images/illustrations/arm/green arm.png')} alt='' />
        <PictureSection title={"Active Members"} people={actives}/>
      
        <Heading className='no-margin'>Sponsors</Heading>
        {/* would like to make this an img carousel/scroll display */}
        <div id='members-sponsor-container'>
          {sponsors.map(sponsor => (
            <img className="sponsors_img" src={require('../../images/sponsors/' + sponsor + '.png')} alt={sponsor} />
          ))}
        </div>
        
        <Heading className='no-margin'>Destinations</Heading>
        {/* would like to make this an img carousel/scroll display */}
        <div id='members-destinations-container'>
          {destinations.map(dest => (  
            <img className="destinations_img" src={require('../../images/destinations/' + dest + '.png')} alt={dest} />  
          ))}  
        </div>
      
      
    </div>
  );
}

export default Members;