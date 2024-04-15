import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase.jsx';
import {ClientProjectShowcase} from '../../components/ProjectShowcase/ProjectShowcase.jsx';
import ProjectInfo from '../../constants/ProjectInfo.jsx';
import {ClientProjectInfo} from '../../constants/ProjectInfo.jsx';
import PageDescription from '../../components/PageDescription/PageDescription';
import Wall from '../../images/group/project_fa21.jpg';
import WallImage from '../../components/WallImage/WallImage';
import ScrollToTop from '../../utils/ScrollToTop';
import Heading from '../../components/Heading/Heading';

import './project.css'

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
        const currSemester = Object.keys(ProjectInfo)[this.state.clicked];

        const projects = ProjectInfo[currSemester].map(project => 
                <ProjectShowcase title={project.title}
                            imageSrc={project.imageSrc}
                            github={project.github}
                            description={project.description}
                            leaders={project.leaders}
                            developers={project.developers}
                            tech={project.technologies}
                            time={currSemester}
                            key={project.title} />
        );
        const description = `Every semester, we introduce a diverse set of projects for our members to develop their skills in their area of interest. No matter your level of experience, there’s something here for everyone.`

        /* Client Projects */
        /* Currently grouping all client projects together into 1 chunk */
        const client_projects = ClientProjectInfo["All Client Projects"].map(project => 
            <ClientProjectShowcase title={project.title}
                        imageSrc={project.imageSrc}
                        github={project.github}
                        dev_description={project.dev_description}
                        company_description={project.company_description}
                        leaders={project.leaders}
                        developers={project.developers}
                        tech={project.technologies}
                        semester={project.semester}
                        key={project.title} 
                        id="projects-client-flex"/>
        );

        return (
            <div>

                <Helmet>
                    <title>Codeology | Projects</title>
                </Helmet>

                {/* header photo */}
                <WallImage image={Wall} title={'projects'} />

                <div className="project-body">
                    <Fade>
                    <PageDescription text={description} />
                    <div id='projects-intro'>
                        <div className='projects-type'>
                            <img src={require("../../images/illustrations/people/pink-blob-boy.png")} alt='' />
                            <h3>Internal Projects</h3>
                            <p>Projects topics range from web and mobile development to game development and AI. Members start from the basics, and end with their own completed project. All levels of experience welcome!</p>
                        </div>
                        <div className='projects-type'>
                            <img src={require("../../images/illustrations/people/green-blob-girl.png")} alt='' />
                            <h3>External Projects</h3>
                            <p>In our pro-bono and consulting projects, members work in teams to develop solutions for companies. If you are part of an organization that has a project for us,&nbsp;
                                <ScrollToTop>
                                    <Link to='/contact'>contact us</Link>
                                </ScrollToTop> 
                                &nbsp;and we would love to help out!</p>
                        </div>
                        </div>

                    </Fade>

                    <Fade>
                    <div className='heading-container'>
                        <Heading>Structure</Heading>
                        <img src={require("../../images/illustrations/people/person3.png")} id="littlepeep3" alt='' />
                    </div>
                    

                    <img src={require("../../images/info/structure.png")} className="project-structure"
                        alt='Project Manager: oversees all project teams. Project Leader: creates project ideas and leads team of developers. Project developer: work with your team to create a cool project!' />
                    <img src={require("../../images/info/timeline.png")} className="project-timeline"
                        alt='Project Timeline: Members are matched to groups. Research, workshops, design, etc. with your team. Midsemester showcase. Continue working on your project. Final Showcase!' />

                    </Fade>

                    <Fade>
                        <div className='heading-container'>
                            <Heading>Internal Projects</Heading>
                            <img src={require("../../images/illustrations/people/glassesguy2.svg")} id="littlepeep4" alt='' />
                        </div>
                        
                        <p id='projects-showcase-intro'>Our projects through the years, designed and developed by Codeology members. Check out our&nbsp;
                            <a href='https://github.com/Codeology' target='_blank' rel="noopener noreferrer">GitHub!</a>
                        </p>

                        {/* buttons */}
                        <div className="button-row">
                            <div onClick = {this.pressLeft} className='projects-button projects-button-left unselectable'></div>
                            <h3>{currSemester}</h3>
                            <div onClick = {this.pressRight} className='projects-button projects-button-right'></div>
                        </div>

                        {/* projects */}
                        <div className="project-page-div">
                            {projects}
                        </div>
                    </Fade>

                    {/* Client Projects */}
                    <Fade>
                        <div classname='heading-container'>
                            <Heading>Client Projects</Heading>
                        </div>

                        {/* A blurb */}
                        <p id='projects-showcase-intro'>
                            Companies we have worked with in the past!
                        </p>

                        {/* Client Project Info */}
                        <div className="project-page-div">
                            {client_projects}
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Projects;
