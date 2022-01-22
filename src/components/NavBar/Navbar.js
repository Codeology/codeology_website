import React from 'react'
import './Navbar.css';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from "react-router-dom";

const Navbar = props => (
    <div className="topnav">
        <Link to="/" id="nav-logo">
            <img id="logo" className='row' src={require('../../images/logos/codeology_text.png')} alt='Codeology' />
            <img id="logo-square" className='col' src={require('../../images/logos/codeology.png')} alt='Codeology' />
        </Link>
        <div className="toggleDiv">
            <Hamburger click={props.drawerClickHandler}/>
        </div>
        <div id="nav-items">
            <Link className="not-apply b" to="/">Home</Link>
            <Link className="not-apply b" to="/about">About Us</Link>
            <Link className="not-apply b" to="/projects">Projects</Link>
            <Link className="not-apply b" to="/contact">Contact</Link>
            {/* <Link className="not-apply" to="/internal">Internal</Link> */}
            <Link to="/apply" className="apply button b">APPLY</Link>
        </div>
    </div>
)

export default Navbar