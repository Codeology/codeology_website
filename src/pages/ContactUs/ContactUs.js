import React from 'react';
import './contact.css';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import PageDescription from '../../components/PageDescription/PageDescription';

export default function ContactUs() {
    const description = "Every semester, Codeology offers special projects geared to serve our community and nonprofits that have project ideas. If you or your organization have meaningful project ideas, please reach out to us below and we'll get back to you as soon as possible!";
    return (
        <div>

            <Helmet>
                <title>Codeology | Contact</title>
            </Helmet>
            <div className="contact">
                <h1 className="contactTitle"> contact us </h1>
                <div id="underline"></div>

                <PageDescription id='contact-page-desc' text={description} />

                <div id="topbox">
                    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrnVrZVnzcVqbGkM?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="100%" styles={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                    
                </div>

                <div id="bottombox">  
                    <h2 className="contactTitle">Prospective Applicants:</h2>
                    <p>Click <Link to="/apply"> here</Link> to apply! Email <a href="mailto:info@codeology.club">info@codeology.club</a> for any questions or concerns.</p> 
                </div>
            </div>

        </div>
    )
}

