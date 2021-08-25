import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import HomePage from './Home/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs/AboutUs.js';
import Projects from './Projects/Projects.jsx';
import ContactUs from './ContactUs/ContactUs.js';
import Apply from './Apply/Apply.jsx';
import Internal from './Internal/Internal.jsx';
import Navbar from './Home/Navbar.js';

import './Home/assets/stylesheet/Navbar.css';
import './AboutUs/css/Footer.css';
import './Home/assets/stylesheet/home.css';

import SideDrawer from './Home/SideDrawer';
import Footer from './Home/Footer.js';
import Backdrop from './Home/Backdrop';

class HomeRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        };
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <Router>
                <div>
                    {/* Nav bar */}
                    {/* <Navbar drawerClickHandler = {this.drawerToggleClickHandler}/>
                    {sideDrawer}
                    {backdrop} */}

                    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backdrop}
                    {/* Everything in Switch handles routing */}
                    <Switch>
                      <Route path="/about">
                        <AboutUs />
                      </Route>

                      <Route path="/projects">
                        <Projects />
                      </Route>

                      <Route path="/contact">
                        <ContactUs />
                      </Route>
                      
                      <Route path="/internal">
                        <Internal />
                      </Route>

                      <Route path="/apply">
                        <Apply />
                      </Route>

                      <Route path="/">
                        <HomePage />
                      </Route>

                    </Switch>

                    <Footer />

                </div>
            </Router>
        );
    }
}

export default HomeRouter;
