import React from 'react';
import './stylesheet/home.css';
import './stylesheet/home-mobile.css';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Landing from '../../components/Landing/Landing.js';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../utils/ScrollToTop';

export default function Home() {

    const createProjectCarousel = () => {
        const projects = ['flappy', 'classifai', 'bearyHungry', 'buildABear', 'shares', 'spotify',
                          'bounc', 'zen'];
        return ( 
            <Carousel wrap={true} touch={true}>
            {projects.map(project => {
                    return (
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require(`../../images/projects/${project}.png`)} alt={project} />
                        </Carousel.Item> 
                    )
                })}
            </Carousel> 
        )     
    }

    return (
        <div>

            <Helmet>
                    <title>Codeology</title>
            </Helmet>

            <Landing />

            <div className="content">

                <div className="big puzzle below">
                    <img src={require("../../images/illustrations/puzzle/big_puzzle.png")} alt='' />
                </div>

                <div className="small puzzle below">
                    <img src={require("../../images/illustrations/puzzle/small_puzzle.png")} alt='' />
                </div>

                <div className="sitting person">
                    <img src={require("../../images/illustrations/people/sitting_person.png")} alt='' />
                </div>

                <div className="big2 puzzle below">
                    <img src={require("../../images/illustrations/puzzle/big_puzzle2.png")} alt='' />
                </div>

                <div className="big3 puzzle below">
                    <img src={require("../../images/illustrations/puzzle/big_puzzle.png")} alt='' />
                </div>

                <div className="standing person">
                    <img src={require("../../images/illustrations/people/standing1.png")} alt='' />
                </div>

                <div className="standing2 person">
                    <img src={require("../../images/illustrations/people/standing2.png")} alt='' />
                </div>

                <div id="about" className="section">
                    <div className="text">
                        <h2>Who We Are</h2>
                        <b>Codeology is a UC Berkeley student club focused on self-exploration
                        within the tech industry. By offering hands-on experience through
                        collaborative student projects and professional workshops, we aim to
                        bring the breadth of opportunities and roles within the tech field to
                        Cal students, as well as help our members explore their specific
                        technical and professional interests.</b>
                        <ScrollToTop>
                            <Link className="home-button learn" to="/about">
                                Learn More
                            </Link>
                        </ScrollToTop>
                    </div>
                    <img src={require("../../images/group/group_fa21.jpg")} alt='About' />
                </div>

                <div id="project" className="section">
                    {createProjectCarousel()}

                    <div className="text projects">
                        <h2>Projects</h2>
                        <b>Every semester, we introduce varying projects as an opportunity for our 
                            members to explore interesting niches in the tech industry to gain experience 
                            as developers and to lead their own project teams. Topics can range from AI/ML 
                            to data analytics to iOS development and more. Check out what we're offering 
                            this semester!</b>
                        <ScrollToTop>
                            <Link className="home-button learn" to="/projects">
                                Learn More
                            </Link>
                        </ScrollToTop>
                    </div>
                 </div>

                 <div id="about" className="section">
                    <div className="text">
                        <h2>Community</h2>
                        <b>Codeology offers a supportive environment for members to grow within 
                            the computer science community. We reward kindness and taking action 
                            in order to foster an enjoyable and motivated culture that encourages
                             the sharing of ideas. </b>
                    </div>
                    <img src={require("../../images/group/skate_fa21.jpg")} alt='Community' />
                </div>

            </div>

        </div>
    )
}
