import React from 'react';

function Footer() {
    return (
        <footer className="Footer">
            <a href="https://www.instagram.com/berkeleycodeology/" target="_blank">
                <img src={require("./assets/images/instagram.png")} />
            </a>
            <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank">
                <img src={require("./assets/images/linkedin.png")}/>
            </a>
            <a href="https://www.facebook.com/berkeleycodeology/" target="_blank">
                <img src={require("./assets/images/facebook.png" )}/>
            </a>
        </footer>
    )
}

export default Footer;