import React from 'react';
import '../Home/assets/stylesheet/stylesheet.css';
import '../ContactUs/assets/stylesheets/contact.css';

export default function Apply() {
    return (
        <div>

            <div className="contact">
                <h1 className="contactTitle"> apply </h1>
                <div id="underline"></div>
                <img className="applyImages" src={require("./images/flyer.png")} alt="flyer"/>
                <img className="applyImages" src={require("./images/info.png")} alt="info"/>
                <div id="apply-subtext">
                    <p>Application deadline is 9/3 at 11:59PM. Come join us at one of our infosessions (8-9:30PM) to learn more about projects and our club!</p>
                </div>
                <div id="bottombox">

                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrHGk5wO0o8dcdYQ?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="4945" style={{background: "transparent", border: "1px solid #ccc;"}}></iframe>
                </div>


            </div>

        </div>
    )
}
