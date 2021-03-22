import React from 'react';
import '../Home/assets/stylesheet/stylesheet.css';
import '../ContactUs/assets/stylesheets/contact.css';

export default function Apply() {
    return (
        <div>

            <div className="contact">
                <h1 id="contactTitle"> apply </h1>
                <div id="underline"></div>

                <img id="recruitment" src={require("./images/group.png")} alt="groupPic" width="100%"/>

                <div id="bottombox">
                  Applications to be a project developer for Spring 2021 have closed. Come back in Fall 2021! In the meantime, follow us on <a href="https://www.instagram.com/berkeleycodeology/?hl=en"> Instagram </a> and <a href="https://www.facebook.com/berkeleycodeology/"> Facebook</a> for updates and events.
                </div>


            </div>

        </div>
    )
}
