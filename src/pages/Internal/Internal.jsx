import React from 'react';
import '../ContactUs/contact.css';
import './internal.css';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import emails from '../../constants/emails';


export default class Internal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            textVal: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    
    handleChange(event) {
        this.setState({textVal: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.textVal  === 'password') {
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    onSuccess = (name, email) => {
        if (!emails.includes(email)) alert('Invalid email :(');
        else {
            const firstName = name.split(' ')[0];
            this.setState({
                authenticated: true,
                name: firstName
            });
        }
    }

    onFailure = (res) => {
        alert(`Failed to login. Reason: ${res} 😢`);
    }

    onLogout = () => {
        this.setState({
            authenticated: false,
            name: ''
        })
    }

    getGreeting = () => {
        const greetings = ['howdy', 'hello', 'welcome', 'hey', 'greetings'];
        const index = Math.floor(Math.random() * greetings.length);
        return `${greetings[index]} ${this.state.name} :D`;
    }

    render() {
        var display =
        <div className="contact internal-container">
            <h1 className="contactTitle">internal member portal!</h1>
                <div id="underline"></div>
            <div>
                <p>Sign in to access the internal portal. If you're an active Codeology member and 
                    verification isn't working, please message one of the officers! If you're a spy go away!!
                </p>
                <Login success={this.onSuccess} failure={this.onFailure} />  
            </div>   
        </div>  
               
        if (this.state.authenticated) {
            display = 
            <div className="contact internal-container">
                <h1 className="contactTitle">{this.getGreeting()}</h1>
                <Logout success={this.onLogout} />
                <div id="underline"></div>
                <div>
                    <div className="portal">
                        <div  id="bottombox"  className="row internal-announcements">
                        <h2 className="mint-highlight">ANNOUNCEMENTS</h2>
                            <ul className="text">
                                    <li>Welcome to our cute new members :^D </li>
                                    <li>Remember to fill out the  <a href="https://docs.google.com/spreadsheets/u/2/d/1XyDlIqabP1eq0Hh3H3fMFNIiz1EceT6my8-rIrFbCsI/edit?usp=sharing">Recruiting Master Sheet</a> for any interviews and  company info you have!</li>
                                    <li><a href="https://bit.ly/cody-education-oh">Education office hours link</a> to book with Cindy and Andrew!</li>
                                </ul>
                        </div>
                        <h2 className="mint-highlight">ATTENDANCE FORM</h2>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/shrR1qHh4LgImD7jg?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                        <div className="calendar-div">
                            <h2 className="mint-highlight">CALENDAR</h2>
                            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;ctz=America%2FLos_Angeles&amp;src=aW5mb0Bjb2Rlb2xvZ3kuY2x1Yg&amp;color=%230B8043&amp;title=Codeology%20Master%20Calendar&amp;showPrint=0" style="border:solid 1px #777" width="100%" height="600" frameborder="0" scrolling="no"/>
                        </div>
                    </div>
                    <div id="avo">
                        <img src={require("./pictures/avo.png")} height="300px"/>
                        
                        <a target={"_blank"} href="https://bit.ly/cody-education-oh " className="stickylink">Education OH</a>
                        <a target={"_blank"} href="https://www.notion.so/calcodeology/1f76d9fb9e67438297f327496519d059?v=5457d37e3cb046b3b2bc98af49102637"  className="stickylink">Class Master list</a>
                        <a target={"_blank"} href="https://www.notion.so/calcodeology/498ca81760b14f09b9fe5a63c98919b4?v=f14581dd21df49ebbc355beb365e2600"  className="stickylink">Member list</a>
                        {/* <a target={"_blank"} href="https://drive.google.com/drive/u/2/folders/1_mfrPx6mHgGRM_GTYnaKBxH-OdAe7e_D"  className="stickylink">Resume Drive</a> */}
                        <a target={"_blank"} href="https://discord.com/invite/6nGfjhg"  className="stickylink">Discord Link</a>
                    </div>
                </div>
            </div>
        }
        return (display);
    }
}