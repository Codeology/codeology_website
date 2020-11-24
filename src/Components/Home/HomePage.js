import React from 'react';
import './assets/stylesheet/stylesheet.css';
import './assets/stylesheet/home.css';
import './assets/stylesheet/home-mobile.css';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Landing from './Landing.js';
import { Helmet } from 'react-helmet';

export default function HomePage() {
    return (
        <div>

            <Helmet>
                    <title>Codeology</title>
            </Helmet>

            <Landing />

            <div className="content">

                <div className="big puzzle below">
                    <img src={require("./assets/images/big_puzzle.png")} />
                </div>

                <div className="small puzzle below">
                    <img src={require("./assets/images/small_puzzle.png")} />
                </div>

                <div className="sitting person">
                    <img src={require("./assets/images/sitting_person.png")} />
                </div>

                <div className="big2 puzzle below">
                    <img src={require("./assets/images/big_puzzle2.png")} />
                </div>

                <div className="standing person">
                    <img src={require("./assets/images/standing1.png")} />
                </div>

                <div className="standing2 person">
                    <img src={require("./assets/images/standing2.png")} />
                </div>

                <div id="about" className="section">
                    <div className="text">
                        <h2>Who We Are</h2>
                        <p>Codeology is a UC Berkeley student club focused on self-exploration
                        within the tech industry. By offering hands-on experience through
                        collaborative student projects and professional workshops, we aim to
                        bring the breadth of opportunities and roles within the tech field to
                        Cal students, as well as help our members explore their specific
                        technical and professional interests.</p>
                        <Link className="home-button learn" to="/about">
                            Learn More
                        </Link>
                    </div>
                    <img src={require("./assets/images/club.jpg")} />
                </div>

                <div id="project" className="section">

                    <Carousel wrap={true} touch={true}>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/seawarden.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/vscodeology.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/space.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/chicken.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/discord.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/movies.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require("./assets/images/projects/zoom.png")} />
                        </Carousel.Item>
                    </Carousel>

                    <div className="text projects">
                        <h2>Projects</h2>
                        <p>Every semester, we introduce varying projects as an opportunity for our 
                            members to explore interesting niches in the tech industry to gain experience 
                            as developers and to lead their own project teams. Topics can range from AI/ML 
                            to data analytics to iOS development and more. Check out what we're offering 
                            this semester!</p>
                        <Link className="home-button learn" to="/projects">
                            Learn More
                        </Link>
                    </div>
                 </div>

                 {/* <div id="contactUs" className="section">
                    <h2>Contact Us</h2>
                    <p>Email: <a id="email" href="mailto:info@codeology.club">info@codeology.club</a></p>
                    <p>Every semester, Codeology offers special projects geared to serve our community and nonprofits that have project ideas. If you or your organization have meaningful project ideas, please reach out to us below or head to our Contact page.</p>
                    <Link className="home-button learn more" to="/contact">
                        More Info
                    </Link>
                 </div> */}

            </div>

        </div>
    )
}
