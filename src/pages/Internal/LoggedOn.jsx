import React, { useState, useLayoutEffect, useEffect } from 'react';
import '../ContactUs/contact.css';
import './internal.css';
import Logout from './Logout.jsx';
import TabContainer from './TabContainer.jsx';


function LoggedOn(props) {
    const [showSidebar, setSidebar] = useState(true);
    const [width, setWidth] = useState(0); /* allows for sidebar opening/closing based on window resize */

    const socials = {
        '👾 Discord': "https://discord.com/invite/6nGfjhg",
        '👥 Facebook': 'https://www.facebook.com/berkeleycodeology',
        '🐱 GitHub': 'https://github.com/Codeology',
        '📷 Instagram': 'https://www.instagram.com/berkeleycodeology/?hl=en',
        '🔗 LinkedIn': 'https://www.linkedin.com/company/berkeley-codeology/',
        '💡 Notion': "https://www.notion.so/Codeology-Notion-fc078bdfc07a488ab19eda6ea04fe2c7",
        '#️⃣ Slack': 'https://berkeley-codeology.slack.com'
    }
    const resources = {
        '📚 Class Master List': 'https://www.notion.so/a52cfbc125cd4a59ad792d9eeddb4996?v=a893d9046221443698c34651173388ed',
        '🍵 Committee Descriptions': 'https://docs.google.com/document/d/1sUFz0gS9LG0vo02zngor1QcA8F9tyuKcRh_vpzKShGs/edit',
        '⏰ Education OH': "https://www.notion.so/Education-1ad6bdfe4f4340669251e7274e122b52",
        '🥑 Figma Member Guide': "https://tinyurl.com/codyMemSp22",
        '🌟 Member Guidelines': "https://www.notion.so/calcodeology/Member-Guidelines-6b7b17643c78424dbda438af1d4eca1d",
        '🥰 Nice Things': 'https://airtable.com/shrEE3SJiDbtltp5v',
        '📝 Project Descriptions': 'https://www.notion.so/calcodeology/Project-Descriptions-be58334df4e742dcb24ad0abf7f50290',
        '📸 Photos': 'https://photos.app.goo.gl/DUYaCJbvDzfSyMHL7',
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
                            <b className='internal-subtitle'>SOCIALS</b>
                            {getLinks(socials)}
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

                        <li><b>Education:</b>
                            <ul>
                                <li>In-person Application/Leetcode Grind Sesh this Thursday 11/3!</li>
                                <li>Will be rewarding people who have been actively recruiting/practicing/doing HW</li>
                            </ul>
                        </li>

                        <li><b>Industry:</b>
                            <ul>
                                <li>Hallo Industry committee wants to help Cody members better "find their fit"! </li>
                                <li>Plz fill out this short, anon form about your interests in & out of tech </li>
                                <li>Thank u!https://forms.gle/7gVYi7nwYuEVh3KW7</li>
                            </ul>
                        </li>
                        
                        <li><b>Recurring Links: (forms also linked below :D)</b>
                            <ul>
                                <li>If you have feedback, please submit them anonymously 
                                <a href="https://tinyurl.com/codyF22Feedback" target="_blank" rel="noopener noreferrer"> here! </a>
                                    If you would like us to follow up, please put your name there in the note.</li>
                                <li>
                                    If you have bought something for Codeology, please fill out this 
                                    <a href="https://airtable.com/shrxpQyVJZctJ4pVw" target="_blank" rel="noopener noreferrer"> reimbursement form!</a>
                                </li>
                            </ul>

                        </li>

                        <li><b>Check out our GM Slides:</b>
                                <ul>
                                    <li><a href="https://docs.google.com/presentation/d/1AWgCnU4MLEEVClSUtU_DcZzTSD9g4KCuuR0Qa3wqNYg/edit#slide=id.g152bc3645e7_0_0" target="_blank" rel="noopener noreferrer">GM 7 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/d/1CJYCkd7A77kmVMSroIz_YKcZ2bLJVoFwA2jJS6hIOhQ/edit#slide=id.g1744af504cb_0_27" target="_blank" rel="noopener noreferrer">GM 6 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/d/1eOyBotRoG0KAqh9xggQn8Xd6UXqLYTRCuAeMbZpOemg/edit" target="_blank" rel="noopener noreferrer">GM 5 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/d/1mGnvXab50w9bqqK-D1UmOq12qjikiPodS-p8Vm-V6oU/edit#slide=id.g152bc3645e7_0_0" target="_blank" rel="noopener noreferrer">GM 4 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/d/1Vki92e1gqdJm5RTiEZwHq5TCJmXpiUC94ZwXr3oEyJ8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">GM 3 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/d/18Q66X9dEq__9Rq_e2mGpmuR9tKILZfh5Fn0EcG48HZc/edit" target="_blank" rel="noopener noreferrer">GM 2 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/u/1/d/1qWsgOozXF2RZKYwbUZl3ioiW68awpmxeAZyy0Hy8kzo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">GM 1 Slides</a></li>

                                    
                                </ul>
                        </li>
                    </ul>
                </div>

                <TabContainer />
                
            </div>
            </div>

        )
}

export default LoggedOn;
