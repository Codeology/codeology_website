import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Helmet } from 'react-helmet';

import PastProject from './components/PastProject.jsx';
import UpcomingProject from './components/UpcomingProject.jsx';
import ProjectInfo from './components/ProjectInfo.jsx';

import '../Home/assets/stylesheet/stylesheet.css'
import './components/project.css'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            selectedUpcoming: true,
            pastClass: "project-button-unselected",
            upcomingClass: "project-button-selected"
        }
        this.upcomingPress = this.upcomingPress.bind(this)
        this.pastPress = this.pastPress.bind(this)
    }

    upcomingPress() {
        if (!this.state.selectedUpcoming) {
            this.setState(({selectedUpcoming, pastClass, upcomingClass}) => ({
                selectedUpcoming: true,
                pastClass: "project-button-unselected",
                upcomingClass: "project-button-selected"
            }))
        }
    }

    pastPress() {
        if (this.state.selectedUpcoming) {
            this.setState(({selectedUpcoming, pastClass, upcomingClass}) => ({
                selectedUpcoming: false,
                pastClass: "project-button-selected",
                upcomingClass: "project-button-unselected"
            }))
        }
    }

    render() {
        var pastSemester = "Fall 2020"
        var pastProjects = ProjectInfo["2020"]["Fall"].map(project =>
            <PastProject title={project.title}
                         imageSrc={project.imageSrc}
                         github={project.github}
                         description={project.description}
                         time={pastSemester} />
            );
        var upcomingProjects = ProjectInfo["2021"]["Spring"].map(project => 
            <UpcomingProject title={project.title}
                             imageSrc={project.imageSrc}
                             description={project.description}
                             leaders ={project.leaders}
                             technologies={project.technologies} />
            );
        return (
            <div>

                <Helmet>
                    <title>Codeology | Projects</title>
                </Helmet>

                {/* header photo */}
                <div className="imageContainer">
                    <Parallax
                        bgImage={require('./images/projectsRec.png')}
                        strength={300}
                        height={"60vh"}
                        bgImageStyle={{minwidth:"100%", minheight:"100%", brightness:"50%"}}
                    >                        
                        <div className="project-page-img" >
                        <div className="textOverlay-white"> projects</div>
                        </div>
                    </Parallax>
                </div>

                

                <div className="project-body">
                    { /* little peeps */}
                    <img src={require("./images/person1.png")} id="littlepeep1"/>
                    <img src={require("./images/person2.png")} id="littlepeep2"/>
                    <img src={require("./images/person3.png")} id="littlepeep3"/>
                    <img src={require("./images/person4.png")} id="littlepeep4"/>

                    <div id="project-desc">Every semester, we introduce a set of projects, including web, mobile, and game development, where 
                        new and returning members are able to work with a team and project leader to complete during the semester. If you are part of an organization 
                        that has a project for us, we would love to help out- please contact us <a href="/contact">here!</a> 
                        <br/> <br/>Check out our upcoming project opportunities for Spring 2021 below!</div>


                    {/* buttons */}
                    <div className="button-row">
                        <button onClick = {this.upcomingPress} className={this.state.upcomingClass}>UPCOMING</button>
                        <a href= "https://github.com/Codeology">
                            <img className="icon-button" src={require("./images/github-icon.png")} />
                        </a>
                        <button onClick = {this.pastPress} className={this.state.pastClass}>PAST</button>
                    </div>

                    {/* projects */}

                    {
                        this.state.selectedUpcoming ?
                        <div className="project-page-div">
                            {upcomingProjects}
                        </div>
                        :
                        <div className="project-page-div">
                            {pastProjects}
                        </div>
                    }
                </div>

            </div>
        );
    }
}

export default Projects;
