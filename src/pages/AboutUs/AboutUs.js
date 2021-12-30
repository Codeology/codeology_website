import React from 'react';
import './front.svg';

import Wall from '../../images/group/Wall.png';
import PageDescription from '../../components/PageDescription/PageDescription.js';
import PictureSection from '../../components/PictureSection/PictureSection.js';
import WallImage from '../../components/WallImage/WallImage.js';

import {actives} from '../../constants/members.js';
import {leadership} from '../../constants/members.js'
import {projectLeaders} from '../../constants/members.js';
import { Helmet } from 'react-helmet';
import './AboutUs.css';


function AboutUs() {

  const description = `Codeology is a UC Berkeley student-run club fosters self-exploration and self-development within the field of tech. 
  Through collaborative projects and workshops, our community provides
  Cal students with a way to explore the various roles of the CS industry and develop technical
  expertise in their area of interest. Above all else, we value our community
  and strive to give our members a supportive family at Cal.`
  
  return (
    <div className="App">
      <Helmet>
        <title>Codeology | About Us</title>
      </Helmet>

      <WallImage image={Wall} />

      <PageDescription text={description} />

      <img id="RedHand" src={require('../../images/illustrations/arm/red arm.png')} />
      <PictureSection title={"Executive Leadership"} people={leadership}/>

      <img id="PinkHand" src={require('../../images/illustrations/arm/pink arm.png')} />
	  <PictureSection title={"Project Leaders"} people={projectLeaders}/>

	  <img id="GreenHand" src={require('../../images/illustrations/arm/green arm.png')} />
	  <PictureSection title={"Active Members"} people={actives}/>
		  
    </div>
  );
}

export default AboutUs;





