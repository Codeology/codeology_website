import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Fade from 'react-awesome-reveal';

import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase.jsx';
import ProjectInfo from '../../constants/ProjectInfo.jsx';
import PageDescription from '../../components/PageDescription/PageDescription';
import Wall from '../../images/group/projects.png';
import WallImage from '../../components/WallImage/WallImage';
import ScrollToTop from '../../utils/ScrollToTop';
import Heading from '../../components/Heading/Heading';

import PictureSection from '../../components/PictureSection/PictureSection.js';
import {resourceContacts} from '../../constants/members.js';

import './resources.css'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
        }
        this.pressRight = this.pressRight.bind(this);
        this.pressLeft = this.pressLeft.bind(this);
    }

    /* go back one semester */
    pressRight() {
        if (this.state.clicked < Object.keys(ProjectInfo).length - 1) {
            this.setState(({ clicked: this.state.clicked + 1 }));
            const leftButton = document.querySelector('.projects-button-left');
            if (leftButton.classList.contains('unselectable')) leftButton.classList.remove('unselectable');
            if (this.state.clicked === Object.keys(ProjectInfo).length - 2) {
                const button = document.querySelector('.projects-button-right');
                button.classList.add('unselectable');
            }
        }  
    }

    pressLeft() {
        if (this.state.clicked > 0) {
            this.setState(({ clicked: this.state.clicked - 1 }));
            const rightButton = document.querySelector('.projects-button-right');
            if (rightButton.classList.contains('unselectable')) rightButton.classList.remove('unselectable');
            if (this.state.clicked === 1) {
                const button = document.querySelector('.projects-button-left');
                button.classList.add('unselectable');
            }
        }  
    }

    render() {
       const onlineCourses = [
        {
            topic: "Web Development",
            link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.US&utm_content=deal4584&utm_term=_._ag_81829991707_._ad_532193666393_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1013585_._pd__._&matchtype=&gclid=Cj0KCQjwl8anBhCFARIsAKbbpyRojPrBGC94stBXDUL2PHgEKbyPYTc1W_XeR_iq4CUYKwh8eWjyWD4aAkWcEALw_wcB",
            img: "web_development"
        },
        {
            topic: "iOS App Development",
            link: "https://www.udemy.com/course/ios-13-app-development-bootcamp/?utm_source=adwords&utm_medium=udemyads&utm_campaign=iOSDevelopment_v.PROF_la.EN_cc.US_ti.6292&utm_content=deal4584&utm_term=_._ag_82041647684_._ad_622358215651_._kw__._de_c_._dm__._pl__._ti_dsa-774930045049_._li_1013585_._pd__._&matchtype=&gclid=Cj0KCQjwl8anBhCFARIsAKbbpyTRqeRcMIQ2ZzQkTRbXD5beNVUkB8HeKmc89aZDSiI4wyx4RDkFMU8aAguJEALw_wcB",
            img: "ios_app_development"
        }, 
        {
            topic: "Machine Learning",
            link: "https://www.udemy.com/course/python-data-science-machine-learning-bootcamp/",
            img: "machine_learning"
        },
        {
            topic: "Game Development",
            link: "https://www.udemy.com/course/unitycourse/",
            img: "game_development"
        }
       ]
       const description = `At Codeology, we are committed to guiding aspiring computer scientists in their journey to uncover their particular technology interests. Here are some of the valuable resources created by our members to help you "find your fit" in the tech field.`

        return (
            <div>

                <Helmet>
                    <title>Codeology | Resources</title>
                </Helmet>

                {/* header photo */}
                <WallImage image={Wall} title={'resources'} />

                <div className="project-body">
                    <Fade>
                        <PageDescription text={description} />
                        <a href='https://short-snowdrop-f9c.notion.site/Codeology-Additional-Resources-f137b8224baf456eae0d4cb5b3164e6f?pvs=4' target="_blank" rel="noreferrer noopener">
                            <button className='button'>Job Recruitment Resources</button>
                        </a>
                    </Fade>

                    <Fade>
                    <div className='heading-container'>
                        <Heading>project-based online coursework</Heading>
                        <img src={require("../../images/illustrations/people/standing1.png")} id="littlepeep3" alt='' />
                    </div>
                    
                    <div id='courses-container'>
                        {onlineCourses.map(course => (
                            <div className='course-wrapper'>
                                <a href={course.link} target="_blank" rel="noreferrer noopener"> 
                                    <img className="course_img" src={require('../../images/illustrations/techtopics/' + course.img + '.svg')} alt='topic_logo'/>
                                </a> 
                                <p className=''>{course.topic}</p>
                            </div>
                             
                        ))}  
                    </div>

                    </Fade>

                    <Fade>
                        <div id='resource-contact-container'>
                            <PictureSection title={"reach out for advice :)"} people={resourceContacts}/>
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Projects;
