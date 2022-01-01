import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Helmet } from 'react-helmet';

import PastProject from '../../components/Projects/PastProject.jsx';
import UpcomingProject from '../../components/Projects/UpcomingProject.jsx';
import ProjectInfo from '../../constants/ProjectInfo.jsx';
import PageDescription from '../../components/PageDescription/PageDescription';
import Wall from '../../images/group/projectsRec.png';
import WallImage from '../../components/WallImage/WallImage';

import '../Home/stylesheet/stylesheet.css'
import './project.css'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            selectedUpcoming: true,
            pastClass: "project-button-unselected",
            upcomingClass: "project-button-selected",
        }
        this.upcomingPress = this.upcomingPress.bind(this);
        this.pastPress = this.pastPress.bind(this);
        this.pressRight = this.pressRight.bind(this);
        this.pressLeft = this.pressLeft.bind(this);
        this.description = `Every semester, we introduce a set of projects, including web, mobile, and game development, where 
        new and returning members are able to work with a team and project leader to complete during the semester. If you are part of an organization 
        that has a project for us, contact us and we would love to help out! Check out our upcoming project opportunities for Spring 2021 below!`
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
        /*
        var pastSemester = "Fall 2020"
        var pastProjects = ProjectInfo["2021"]["Spring"].map(project =>
            <PastProject title={project.title}
                         imageSrc={project.imageSrc}
                         github={project.github}
                         description={project.description}
                         time={pastSemester} />
            );
        var upcomingProjects = ProjectInfo["2021"]["Fall"].map(project => 
            <UpcomingProject title={project.title}
                             imageSrc={project.imageSrc}
                             description={project.description}
                             leaders ={project.leaders}
                             technologies={project.technologies} />
            );
        */
       const currSemester = Object.keys(ProjectInfo)[this.state.clicked];
       const projects = ProjectInfo[currSemester].map(project => 
            <PastProject title={project.title}
                         imageSrc={project.imageSrc}
                         github={project.github}
                         description={project.description}
                         time={currSemester} />
       );
        return (
            <div>

                <Helmet>
                    <title>Codeology | Projects</title>
                </Helmet>

                {/* header photo */}
                <WallImage image={Wall} title={'projects'} />

                <div className="project-body">
                    { /* little peeps */}
                    <img src={require("../../images/illustrations/people/person1.png")} id="littlepeep1"/>
                    <img src={require("../../images/illustrations/people/person2.png")} id="littlepeep2"/>
                    <img src={require("../../images/illustrations/people/person3.png")} id="littlepeep3"/>
                    <img src={require("../../images/illustrations/people/person4.png")} id="littlepeep4"/>

                    <PageDescription text={this.description} />

                    <p className="prompt no-margin">Structure</p>

                    <img src={require("../../images/info/structure.png")} className="project-structure"/>
                    <img src={require("../../images/info/timeline.png")} className="project-timeline"/>

                    <p className="prompt no-margin">Projects</p>
                    <p>Our projects through the years, designed and developed by Codeology members. Check out our
                        <a href='https://github.com/Codeology' target='_blank' rel="noopener noreferrer"> GitHub!</a>
                    </p>

                    {/* buttons */}
                    <div className="button-row">
                        <div onClick = {this.pressLeft} className='projects-button projects-button-left unselectable'></div>
                        <h4>{currSemester}</h4>
                        <div onClick = {this.pressRight} className='projects-button projects-button-right'></div>
                    </div>

                    {/* projects */}
                    <div className="project-page-div">
                        {projects}
                    </div>

                    {/*
                        this.state.selectedUpcoming ?
                        <div className="project-page-div">
                            {upcomingProjects}
                        </div>
                        :
                        <div className="project-page-div">
                            {pastProjects}
                        </div>
                        */
                    }
                </div>

            </div>
        );
    }
}

export default Projects;
