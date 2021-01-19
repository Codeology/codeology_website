import React from 'react'
import './assets/stylesheet/Navbar.css';
import Hamburger from './Hamburger';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = props => (
    <div className="topnav">
        <Link to="/" id="nav-logo">
            <img id="logo" src={require("./assets/images/logo.png")} />
            <div id="name"><strong>C O D E O L O G Y</strong></div>
        </Link>
        <div className="toggleDiv">
            <Hamburger click={props.drawerClickHandler}/>
        </div>
        <div id="nav-items">
            <Link className="not-apply" to="/">Home</Link>
            <Link className="not-apply" to="/about">About Us</Link>
            <Link className="not-apply" to="/projects">Projects</Link>
            <Link className="not-apply" to="/contact">Contact</Link>
            <a href="https://airtable.com/shrDD1wfWYSzjTBbY?fbclid=IwAR0cXGsRnEGZL4g7PNOYa4TJZSLBWOeYF72JvBVOE7SkBElhZdgP-uS71oM" className="apply button">APPLY</a>
        </div>
    </div>
)

export default Navbar