import React, { useState } from 'react';
import './stylesheet/about.css';
import './stylesheet/about-mobile.css';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../utils/ScrollToTop.js';
import Landing from '../../components/Landing/Landing.js';
import { Fade } from 'react-awesome-reveal';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel.js'
import Heading from '../../components/Heading/Heading.js';

export default function About() {
    const [imagesLoaded, setLoaded] = useState(false);

    const loaded = () => { setLoaded(true); }

    const destinations = ['rivian', 'meta', 'google', 'microsoft', 'paypal', 'amazon', 'nasaJpl', 'asana', 'atlassian', 'citadel', 'databricks', 'datadog', 'uber', 'imc', 
                            'optiver', 'scale', 'squarespace', 'statefarm', 'hp']
    const sponsors = ['eecs', 'skydeck']
    
    return (
        <div>
            {/* Makes sure that page loads scrolled to the top */}
            <ScrollToTop/>

            <Helmet>
                    <title>Codeology</title>
            </Helmet>

            {/* placeholder to load images in Landing */}
            <div className='hidden'>
                <Landing loaded={loaded} />
            </div>

            {/* only display Landing when images are loaded */}
            {!imagesLoaded ? <div id='landing'></div> : <div id='landing'><Fade><Landing loaded={loaded} /></Fade></div>}

            <div className="content">
                <Fade>
                    <div id="about" className="section text-left">
                        <div className="text">
                            <h2>Who We Are</h2>
                            <b>Codeology is a UC Berkeley student club focused on self-exploration
                            within the tech industry. By offering hands-on experience through
                            collaborative student projects and professional workshops, we aim to
                            bring the breadth of opportunities and roles within the tech field to
                            Cal students, as well as help our members explore their specific
                            technical and professional interests.</b>
                            <Link className="about-button learn" to="/members">
                                Learn More
                            </Link>
                            <div className="big puzzle">
                                <img src={require("../../images/illustrations/puzzle/big_puzzle.png")} alt='' />
                            </div>
                        </div>
                        <div className='section-img-container'>
                            <img className='section-img' src={require("../../images/group/group_fa21.jpg")} alt='About' />
                            <div className="sitting person">
                                <img src={require("../../images/illustrations/people/smallpeeps right.png")} alt='' />
                            </div>
                        </div> 
                    </div>
                </Fade>

                <Fade>
                    <div id="project" className="section text-right">
                        <div className='section-img-container'>
                        <PhotoCarousel image_folder = 'projects' pics={['cody.mp3', 'bearchainAI', 'OpenCavo', 'AvoMaps']} />
                            <div className="standing person">
                                <img src={require("../../images/illustrations/people/standing1.png")} alt='' />
                            </div>

                            <div className="standing2 person">
                                <img src={require("../../images/illustrations/people/standing2.png")} alt='' />
                            </div>
                        </div>

                        <div className="text projects">
                            <h2>Projects</h2>
                            <b>Every semester, we introduce varying projects as an opportunity for our 
                                members to explore interesting niches in the tech industry to gain experience 
                                as developers and to lead their own project teams. Topics can range from AI/ML 
                                to data analytics to iOS development and more. Check out what we're offering 
                                this semester!</b>
                            <Link className="about-button learn" to="/projects">Learn More</Link>
                            <div className="big2 puzzle">
                                <img src={require("../../images/illustrations/puzzle/big_puzzle2.png")} alt='' />
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div id="community" className="section text-left">
                        <div className="text">
                            <h2>Community</h2>
                            <b>Codeology offers a supportive environment for members to grow within 
                                the computer science community. We reward kindness and taking action 
                                in order to foster an enjoyable and motivated culture that encourages
                                the sharing of ideas. </b>
                            <div className="big3 puzzle">
                                <img src={require("../../images/illustrations/puzzle/big_puzzle.png")} alt='' />
                            </div>
                        </div>
                        <div className='section-img-container'>
                            <PhotoCarousel image_folder = 'group' pics={['skate_fa21', 'smallgroup_river', 'tree_doe', 'campus_blossoms', 'fun_glade', 'retreat_sp22']} />
                            <div className="standing3 person">
                                <img src={require("../../images/illustrations/people/smallpeeps left.png")} alt='' />
                            </div>
                        </div>
                    </div>
                </Fade>

                <div id="sponsors">
                    <Fade>
                        <Heading className='no-margin'>Sponsors</Heading>
                        {/* would like to make this an img carousel/scroll display */}
                        <div id='members-sponsor-container'>
                            {sponsors.map(sponsor => (
                                <img className="sponsors_img" src={require('../../images/sponsors/' + sponsor + '.png')} alt={sponsor} />
                            ))}
                        </div>
                    </Fade>
                </div>
                
                <div id="destinations">
                    <Fade>
                        <Heading className='no-margin'>Destinations</Heading>
                        {/* would like to make this an img carousel/scroll display */}
                        <div id='members-destinations-container'>
                            {destinations.map(dest => (  
                                <img className="destinations_img" src={require('../../images/destinations/' + dest + '.png')} alt={dest} />  
                            ))}  
                        </div>
                    </Fade>
                </div>
            </div>

        </div>
    )
}
