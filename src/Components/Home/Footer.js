import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="Footer">
          <div class="FooterSection1">
            <div className="Logo">
              <img src={require("./assets/images/logo.png")}/>
              <h1>Codeology</h1>
            </div>
            <p>University of California, Berkeley</p>
          </div>
          <div className="FooterSection">
            <h2>General</h2>
            <ul>
              <li>About Us</li>
              <li>Spring 2021 Projects</li>
              <li>Apply</li>
            </ul>
          </div>
          <div className="FooterSection2">
            <h2>Contact</h2>
            <ul>
              <li>info@codeology.club</li>
              <li>Contact Us</li>
            </ul>
            <a href="https://www.instagram.com/berkeleycodeology/" target="_blank">
                <img src={require("./assets/images/instagram.png")} />
            </a>
            <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank">
                <img src={require("./assets/images/linkedin.png")}/>
            </a>
            <a href="https://www.facebook.com/berkeleycodeology/" target="_blank">
                <img src={require("./assets/images/facebook.png" )}/>
            </a>
          </div>
        </footer>
    )
}

export default Footer;
