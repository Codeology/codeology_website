import React from 'react';
import './contact.css';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import PageDescription from '../../components/PageDescription/PageDescription';
import { Fade } from 'react-awesome-reveal';

export default function ContactUs() {
    const description = "Do you have questions or concerns for us? Fill out our form or email us at" + <a href="mailto:info@codeology.club">info@codeology.club</a> + ", and we'll get back to you as soon as possible!";
    
    return (
        <div>

            <Helmet>
                <title>Codeology | Contact Us</title>
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
                        <h2>Companies & Nonprofits</h2>
                        <p>Every semester, Codeology offers special projects geared to serve our community and organizations that have project ideas. 
                            If you or your organization have meaningful project ideas, please reach out to us!</p>
                    </div>
                    <div className='contact-text'>
                        <h2>Sponsors</h2>
                        <p>Thank you for your interest in supporting us! Codeology greatly appreciates your help in furthering our mission– 
                            please reach out to us for any inquiries!
                        </p>
                    </div>
                </div>
                <div id='contact-form-section'>
                    <iframe className="airtable-embed" src="https://docs.google.com/forms/d/e/1FAIpQLSdorMAt-8Pzl7vGDMDDjMJNxWN6lU9Lic4T7qrjsyAzdsiOgg/viewform"
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

