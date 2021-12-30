import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="Footer">
            <a href="https://www.instagram.com/berkeleycodeology/" target="_blank">
                <img src={require("../../images/logos/instagram.png")} />
            </a>
            <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank">
                <img src={require("../../images/logos/linkedin.png")}/>
            </a>
            <a href="https://www.facebook.com/berkeleycodeology/" target="_blank">
                <img src={require("../../images/logos/facebook.png" )}/>
            </a>
        </footer>
    )
}

export default Footer;