import React from 'react';
import './front.svg';
import Fade from 'react-reveal/Fade';

import Wall from '../../images/group/Wall.png';
import PageDescription from '../../components/PageDescription/PageDescription.js';
import PictureSection from '../../components/PictureSection/PictureSection.js';
import WallImage from '../../components/WallImage/WallImage.js';
import Heading from '../../components/Heading/Heading';

import {actives} from '../../constants/members.js';
import {leadership} from '../../constants/members.js'
import {projectLeaders} from '../../constants/members.js';
import { Helmet } from 'react-helmet';
import './AboutUs.css';

function AboutUs() {

  const description = `Codeology is a UC Berkeley student-run club fostering self-exploration and self-development within the tech field. `
  const destinations = ['rivian', 'meta', 'google', 'microsoft', 'paypal', 'amazon', 'nasajpl', 'asana', 'atlassian', 'citadel', 'databricks', 'datadog', 'uber', 'imc', 
                            'optiver', 'scale', 'squarespace', 'statefarm', 'hp']
  
  return (
    <div className="AboutUs">
      <Helmet>
        <title>Codeology | About Us</title>
      </Helmet>

      <WallImage image={Wall} title={'about us'} />

      <Fade><PageDescription text={description} /></Fade>

      
      <div id='about-us-intro'>
      <Fade>
        <Heading className='no-margin'>Find Your Fit</Heading>
        {/* would like to make this an img carousel/scroll display */}
        <div id='about-us-img-container'>
          <img id='about-us-img' src={require('../../images/group/retreat_fa21.jpg')} alt='Codeology' />
          <img id='about-us-img-person' src={require('../../images/illustrations/people/person4.png')} alt='' />
        </div>
        
        <p id='about-us-blurb'>
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
      
        <Heading className='no-margin'>Destinations</Heading>
        {/* would like to make this an img carousel/scroll display */}
        <div id='about-us-destinations-container'>
          {destinations.map(dest => (  
            <img className="destinations_img" src={require('../../images/destinations/' + dest + '.png')} alt={dest} />  
          ))}  
        </div>
      
      
    </div>
  );
}

export default AboutUs;