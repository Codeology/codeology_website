import React from 'react';
import '../Home/stylesheet/stylesheet.css';
import '../ContactUs/contact.css';

export default function Apply() {
    return (
        <div>

            <div className="contact">
                <h1 className="contactTitle"> apply </h1>
                <div id="underline"></div>
                <div id="bottombox">  
                    <h2>Come back in Spring 2022!</h2>
                    <img src={require("../../images/group/group.png")} alt="groupPic" width="50%"/>
                    <p><br/>Applications are currently closed. Come visit our website during the first few weeks of the Spring 2022 
                    semester to apply! In the meantime, follow us 
                    on <a href="https://www.facebook.com/berkeleycodeology/">Facebook</a> and <a href="https://www.instagram.com/berkeleycodeology/?hl=en">Instagram</a> for more updates.</p> 
                </div>
            </div>

        </div>
    )
}
