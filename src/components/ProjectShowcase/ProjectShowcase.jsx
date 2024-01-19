import React, { useEffect, useState } from 'react';
import './project-component.css';
import Popup from "reactjs-popup";
import  { Fade } from 'react-awesome-reveal';

function ProjectShowcase(props) {
    const [loaded, setLoaded] = useState(false); /* true when image is loaded (gets rid of awkward image loading transition) */
    const [currProject, setCurrProject] = useState('');
    const {title, imageSrc, github, leaders, developers, description, tech} = props;

    /* makes sure that loaded is reset when next semester's image is about to display (for aesthetic purposes) */
    useEffect(() => {
        if (currProject !== title && loaded) setLoaded(false);
        if (currProject !== title) setCurrProject(title);
    }, [currProject, title, loaded]);

    return ( 
        <Fade>
            <Popup modal trigger={
            <div className='project-container'>
                <div className="project-div">

                    {/* placeholder image for loading purposes :( this took so long for me to figure out argh */}
                    <img className="project-img" onLoad={() => setLoaded(true)} style={{display: 'none'}} src={require(`../../images/projects/${imageSrc}`)} alt={title} />
                    
                    <div className='project-img-container'>
                        {loaded ? 
                        <Fade><img className="project-img" src={require(`../../images/projects/${imageSrc}`)} alt={title} /></Fade>
                        : <Fade><div className='project-img-loader'></div></Fade>} 
                    </div>
                    
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

        </Fade>  
    );
}

export default ProjectShowcase;
