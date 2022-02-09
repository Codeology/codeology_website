import React, { useState, useLayoutEffect, useEffect } from 'react';
import '../ContactUs/contact.css';
import './internal.css';
import Logout from './Logout.jsx';
import TabContainer from './TabContainer.jsx';


function LoggedOn(props) {
    const [showSidebar, setSidebar] = useState(true);
    const [width, setWidth] = useState(0); /* allows for sidebar opening/closing based on window resize */

    const quickLinks = {
        '👾 Discord': "https://discord.com/invite/6nGfjhg",
        '👥 Facebook': 'https://www.facebook.com/berkeleycodeology',
        '🐱 GitHub': 'https://github.com/Codeology',
        '📷 Instagram': 'https://www.instagram.com/berkeleycodeology/?hl=en',
        '🔗 LinkedIn': 'https://www.linkedin.com/company/berkeley-codeology/',
        '💡 Notion': "https://www.notion.so/calcodeology/Codeology-Notion-4d0c00b95f734f7889e2b374dcf4aad3",
        '#️⃣ Slack': 'berkeley-codeology.slack.com'
    }
    const resources = {
        '📚 Class Master List': 'https://www.notion.so/calcodeology/4b880a65bec242d4a7708c63f0c13833?v=09ee1ccc47f14353ba67406951d284e2',
        '🍵 Committee Descriptions': 'https://www.notion.so/calcodeology/Committee-Descriptions-73e69520cf2e4fb387977622c31f5ffb',
        '⏰ Education OH': "https://bit.ly/cody-education-oh",
        '🥑 Figma Member Guide': "https://tinyurl.com/codyMemSp22",
        '🌟 Member Guidelines': "https://www.notion.so/calcodeology/Member-Guidelines-6b7b17643c78424dbda438af1d4eca1d",
        '📝 Project Descriptions': 'https://www.notion.so/calcodeology/Project-Descriptions-be58334df4e742dcb24ad0abf7f50290',
        '💼 Recruiting Master Sheet' : "https://docs.google.com/spreadsheets/u/2/d/1XyDlIqabP1eq0Hh3H3fMFNIiz1EceT6my8-rIrFbCsI/edit?usp=sharing"
    }

    const greetings = ['howdy', 'hello', 'welcome', 'hey', 'greetings', 'hi'];

    useEffect(() => { if (window.innerWidth <= 767) hideSide(); })

    /* doesn't work for resizing :( */
    function hideSide() {
    const sidebar = document.querySelector('#internal-sidebar');
    const showButton = document.querySelector('.show-sidebar');
    sidebar.style.display = 'none';
    showButton.style.display = 'block';
    document.querySelector('#loggedon-content').style.display = 'block';
    }

    function showSide() {
    const sidebar = document.querySelector('#internal-sidebar');
    const showButton = document.querySelector('.show-sidebar');
    sidebar.style.display = 'block';
    showButton.style.display = 'none';
    if (window.innerWidth <= 767) document.querySelector('#loggedon-content').style.display = 'none'; 
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const getGreeting = () => {
        const index = Math.floor(Math.random() * greetings.length);
        return `${greetings[index]} ${props.name} :D`;
    }

    const getLinks = (links) => {
        return (
            <div id='sidebar-links' className='b'>
                {Object.keys(links).map(link => {
                    return (
                        <a href={links[link]} target='_target' rel='noopener noreferrer' key={link}>{link}</a>
                    )
                })}
            </div>
        ) 
    }

    return (
        <div className="loggedon">
                <div id='internal-sidebar'>
                    <div id='internal-sidebar-content'>
                        <div className='sidebar-link-div sidebar-btn-row'>
                            <Logout success={props.onLogout} />
                            <button className='toggle-sidebar' onClick={hideSide}>{'<'}</button>
                        </div>
                        <div className='sidebar-link-div'>
                            <b className='internal-subtitle'>QUICK LINKS</b>
                            {getLinks(quickLinks)}
                        </div>
                        <div className='sidebar-link-div'>
                            <b className='internal-subtitle'>RESOURCES</b>
                            {getLinks(resources)}
                        </div>
                        <div className='sidebar-link-div'>
                            <img src={require("./pictures/avo.png")} className='avobooty' height="200px" alt='avobooty' />
                        </div>
                    </div>
                </div>

                <div id='loggedon-content'>

                <div id='internal-header'>
                    <button className='toggle-sidebar show-sidebar' onClick={showSide}>{'>'}</button>
                    <h1>{getGreeting()}</h1>
                </div>
                <div id="underline"></div>

                <div id='announcements'>
                    <h2>announcements</h2>
                    <ul className="announcements-text">
                        <li><b>THIS WEEK'S EVENTS: WELCOME NEW MEMBERS!!!</b></li>
                        <li><b>RETREAT THIS WEEKEND!!</b> Fill out all retreat forms ASAP + <b>get tested!!!</b> Details on the form below</li>
                        <li>Fill out <b>project preference forms!</b></li>
                        <li>Fill out the <b>media committee form</b> if you would like to help us make cute 
                            graphics + merch or photograph us! See Ash for more details
                        </li>
                        <li>
                            Are you interested in designing/adding features to the website? Message Erin if you're interested in joining web committee!!
                        </li>
                    </ul>
                </div>

                <TabContainer />
                
            </div>
            </div>

        )
}

export default LoggedOn;
