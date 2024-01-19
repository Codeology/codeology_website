import React from 'react';
import './contact.css';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import PageDescription from '../../components/PageDescription/PageDescription';
import { Fade } from 'react-awesome-reveal';

export default function ContactUs() {
    const description = "Do you have questions or concerns for us? Fill out our form or email us at info@codeology.club, and we'll get back to you as soon as possible!";
    
    return (
        <div>

            <Helmet>
                <title>Codeology | Contact</title>
            </Helmet>

            
            <div className="contact">
                <h1 className="contactTitle"> contact us </h1>
                <div id="underline"></div>
            </div>

            <Fade>
            <PageDescription text={description} />
                
            <div id='contact-content'>
                <div id='contact-text-section'>
                    <div className='contact-text'>
                        <h2>Students</h2>
                        <p>Interested in joining us? Click <Link to="/apply"> here</Link> to apply, and email us if you have any questions!</p> 
                    </div>
                    <div className='contact-text'>
                        <h2>Companies & Nonprofits</h2>
                        <p>Every semester, Codeology offers special projects geared to serve our community and organizations that have project ideas. 
                            If you or your organization have meaningful project ideas, please reach out to us!</p>
                    </div>
                </div>
                <div id='contact-form-section'>
                    <iframe className="airtable-embed" src="https://airtable.com/embed/appDp58fEjBoqmI77/shrK6E3Uy9XY5F9vl?backgroundColor=tealLight"
                            frameBorder="0" width="100%" height="533" title='Codeology Contact Form'
                            style={{background: 'transparent', border: '1px solid #ccc'}} >
                    </iframe>
                </div>
            </div>

            </Fade>

            <img src={require('../../images/illustrations/puzzle/puzzle.png')} alt='' id='contact-puzzle1' />
            <img src={require('../../images/illustrations/puzzle/puzzle2.png')} alt='' id='contact-puzzle2' />
        </div>
    )
}

