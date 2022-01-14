import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs/AboutUs.js';
import Projects from './Projects/Projects.jsx';
import ContactUs from './ContactUs/ContactUs.js';
import Apply from './Apply/Apply.jsx';
import Internal from './Internal/Internal.jsx';
import Navbar from '../components/NavBar/Navbar.js';

import './stylesheet.css';

import SideDrawer from '../components/SideDrawer/SideDrawer';
import Footer from '../components/Footer/Footer.js';
import Backdrop from '../components/Backdrop/Backdrop';

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
                    <SideDrawer show={this.state.sideDrawerOpen} close={this.drawerToggleClickHandler} />
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
                      
                      <Route path="/internal-member-portal">
                        <Internal />
                      </Route>

                      <Route path="/apply">
                        <Apply />
                      </Route>

                      <Route path="/">
                        <Home />
                      </Route>

                    </Switch>

                    <Footer />

                </div>
            </Router>
        );
    }
}

export default HomeRouter;
