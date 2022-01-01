import React from 'react';
import './Footer.css'
import logo from '../../images/logos/codeology.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <div id='footer-header'>
                <div id='footer-title'>
                    <img id='footer-logo' src={logo} alt='Codeology logo' />
                    <h2>C O D E O L O G Y</h2>
                </div>
                <p>University of California, Berkeley</p>
                <div className='footer-media-container footer-row'>
                    <a href="https://www.instagram.com/berkeleycodeology/" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/instagram.png")} />
                    </a>
                    <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/linkedin.png")}/>
                    </a>
                    <a href="https://www.facebook.com/berkeleycodeology/" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/facebook.png" )}/>
                    </a>
                    <a href="https://github.com/Codeology" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/github-footer.png" )}/>
                    </a>
                </div>
            </div>

            <div id='footer-links'>
                <div className='footer-links-col'>
                    <b>GENERAL</b>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/apply'>Apply</Link>
                </div>
                <div className='footer-links-col'>
                    <b>CONTACT</b>
                    <Link to='/contact'>Contact Us</Link>
                    <a href='mailto: info@codeology.club' target='_blank' rel="noreferrer">Email</a>
                </div>
            </div>

            <div className='footer-media-container footer-col'>
                    <a href="https://www.instagram.com/berkeleycodeology/" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/instagram.png")} />
                    </a>
                    <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/linkedin.png")}/>
                    </a>
                    <a href="https://www.facebook.com/berkeleycodeology/" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/facebook.png" )}/>
                    </a>
                    <a href="https://github.com/Codeology" target="_blank" rel="noreferrer">
                        <img src={require("../../images/logos/github-footer.png" )}/>
                    </a>
            </div>
        </footer>
    )
}

export default Footer;