import React from 'react';
import '../Home/assets/stylesheet/stylesheet.css';
import './assets/stylesheets/contact.css';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

export default function ContactUs() {
    return (
        <div>

            <Helmet>
                <title>Codeology | Contact</title>
            </Helmet>
            <div className="contact">
                <h1 id="contactTitle"> contact us </h1>
                <div id="underline"></div>


                <div id="contactUs" className="section">
                    <p><br/>Every semester, Codeology offers special projects geared to serve our community and nonprofits that have project ideas. If you or your organization have meaningful project ideas, please reach out to us below and we'll get back to you as soon as possible!</p>
                    <p>Email: <a id="email" href="mailto:info@codeology.club">info@codeology.club</a></p>
                 </div>

                <div id="topbox">
                    {/* <h2>Companies & Nonprofits:</h2> */}
                    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrnVrZVnzcVqbGkM?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="100%" styles={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                    
                    

                {/* <a href = ""><button type="button" className="contact-button">SUBMIT</button></a> */}
            </div>

                <div id="bottombox">  
                    <h2>Prospective Applicants:</h2>
                    <p>Click <a href="/#/apply"> here</a> to apply! Email <a href="mailto:info@codeology.club">info@codeology.club</a> for any questions or concerns.</p> 
                </div>
            </div>

        </div>
    )
}

