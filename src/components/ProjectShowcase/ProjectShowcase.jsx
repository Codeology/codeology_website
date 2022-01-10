import React from 'react';
import './project-component.css';
import Popup from "reactjs-popup";

class ProjectShowcase extends React.Component {
    render() {
       const {title, imageSrc, github, leaders, developers, description, tech} = this.props;
        return ( 
            <Popup modal trigger={
                <div className='project-container'>
                    <div className="project-div">
                        <img className="project-img" src={require(`../../images/projects/${imageSrc}`)} alt={title} />
                        <div id='project-row'>
                            <h3 id="project-title">{title}</h3>
                            {github && 
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <img src={require("../../images/logos/github-icon.png" )} alt='github' />
                            </a>}
                        </div>
                        <b className="project-subtext">{tech}</b>
                    </div>
                </div>}
                position="top center">

                {/* modal */}
                <div id='project-modal'>
                    <div className='project-modal-div'>
                        <div className="project-div">
                            <img className="project-img" src={require(`../../images/projects/${imageSrc}`)} alt={title} />
                            <div id='project-row'>
                                <h3 id="project-title">{title}</h3>
                                {github && 
                                <a href={github} target="_blank" rel="noopener noreferrer" >
                                    <img src={require("../../images/logos/github-icon.png" )} alt='github' />
                                </a>}
                            </div>
                            <b className="project-subtext">{tech}</b>
                        </div>
                    </div>
                    <div className='project-modal-div div-text'>
                        {leaders && 
                            <p><b className="project-subtext">Leader(s):&nbsp;</b>{leaders}</p>}
                        {developers && 
                            <p><b className="project-subtext">Developers:&nbsp;</b>{developers}</p>}
                        <p>{description}</p>
                    </div>
                    
                </div>
            </Popup>
        );
    }
}

export default ProjectShowcase;
