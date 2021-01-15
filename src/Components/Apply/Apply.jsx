import React from 'react';
import '../Home/assets/stylesheet/stylesheet.css';
import '../ContactUs/assets/stylesheets/contact.css';

export default function Apply() {
    return (
        <div>

            <div className="contact">
                <h1 id="contactTitle"> apply </h1>
                <div id="underline"></div>

                <div id="bottombox">  
                    <h2>Join us in Spring 2021!</h2>
                    <img src={require("./images/group.png")} alt="groupPic" width="80%"/>
                    <p><br/>Applications are currently closed. Come visit our website during the first week of the Spring 2021 
                    semester to apply! In the meantime, follow us 
                    on <a href="https://www.facebook.com/berkeleycodeology/">Facebook</a> and <a href="https://www.instagram.com/berkeleycodeology/?hl=en">Instagram</a> for more updates.</p> 
                </div>

            </div>

        </div>
    )
}

