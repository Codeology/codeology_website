import React from 'react';
import './Footer.css'
import ScrollToTop from '../../utils/ScrollToTop';
import logo from '../../images/logos/codeology_text.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <div id='footer-header'>
                <img id='footer-logo' src={logo} alt='Codeology' />
                
                <b>University of California, Berkeley</b>
                <div className='footer-media-container footer-row'>
                    <a href="https://www.instagram.com/berkeleycodeology/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/instagram.png")} alt='Instagram' />
                    </a>
                    <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/linkedin.png")} alt='LinkedIn' />
                    </a>
                    <a href="https://www.facebook.com/berkeleycodeology/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/facebook.png" )} alt='Facebook' />
                    </a>
                    <a href="https://github.com/Codeology" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/github-footer.png" )} alt='GitHub' />
                    </a>
                </div>
            </div>

            <div id='footer-links'>
                <div className='footer-links-col'>
                    <b>GENERAL</b>
                    <ScrollToTop><Link to='/'>Home</Link></ScrollToTop>
                    <ScrollToTop><Link to='/about'>About</Link></ScrollToTop>
                    <ScrollToTop><Link to='/projects'>Projects</Link></ScrollToTop>
                    <ScrollToTop><Link to='/apply'>Apply</Link></ScrollToTop>
                </div>
                <div className='footer-links-col'>
                    <b>CONTACT</b>
                    <ScrollToTop><Link to='/contact'>Contact Us</Link></ScrollToTop>
                    <a href='mailto: info@codeology.club' target='_blank' rel="noopener noreferrer">Email</a>
                </div>
            </div>

            <div className='footer-media-container footer-col'>
                    <a href="https://www.instagram.com/berkeleycodeology/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/instagram.png")} alt='Instagram' />
                    </a>
                    <a href="https://www.linkedin.com/company/berkeley-codeology/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/linkedin.png")} alt='LinkedIn' />
                    </a>
                    <a href="https://www.facebook.com/berkeleycodeology/" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/facebook.png" )} alt='Facebook' />
                    </a>
                    <a href="https://github.com/Codeology" target="_blank" rel="noopener noreferrer">
                        <img src={require("../../images/logos/github-footer.png" )} alt='GitHub' />
                    </a>
            </div>
        </footer>
    )
}

export default Footer;