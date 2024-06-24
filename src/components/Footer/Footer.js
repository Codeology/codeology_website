import React from 'react';
import './Footer.css'
import ScrollToTop from '../../utils/ScrollToTop';
import logo from '../../images/logos/codeology_text.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-wrapper'>
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
                        <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                        <Link style={{ textDecoration: 'none' }} to='/members'>Members</Link>
                        <Link style={{ textDecoration: 'none' }} to='/industry'>Industry</Link>
                        <Link style={{ textDecoration: 'none' }} to='/projects'>Projects</Link>
                        <Link style={{ textDecoration: 'none' }} to='/apply'>Apply</Link>

                        {/* <ScrollToTop><Link to='/'>Home</Link></ScrollToTop>
                        <ScrollToTop><Link to='/about'>About</Link></ScrollToTop>
                        <ScrollToTop><Link to='/projects'>Projects</Link></ScrollToTop>
                        <ScrollToTop><Link to='/apply'>Apply</Link></ScrollToTop> */}
                    </div>
                    <div className='footer-links-col'>
                        <b>CONTACT</b>
                        <Link style={{ textDecoration: 'none' }} to='/contact'>Contact Us</Link>
                        {/* <ScrollToTop><Link to='/contact'>Contact Us</Link></ScrollToTop> */}
                        <a style={{ textDecoration: 'none' }} href='mailto: info@codeology.club' target='_blank' rel="noopener noreferrer">Email</a>
                        <a href="https://www.ocf.berkeley.edu">
                            <img src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg"
                                alt="Hosted by the OCF" Style="border: 0; margin-top: 30px; height: 40px" />
                        </a>
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

            <p className='footer-note'>
                We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.
            </p>
        </div>
        
    )
}

export default Footer;