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
        '💡 Notion': "https://www.notion.so/calcodeology/Codeology-Notion-4d0c00b95f734f7889e2b374dcf4aad3",
        '#️⃣ Slack': 'https://berkeley-codeology.slack.com'
    }
    const resources = {
        '📚 Class Master List': 'https://www.notion.so/calcodeology/4b880a65bec242d4a7708c63f0c13833?v=09ee1ccc47f14353ba67406951d284e2',
        '🍵 Committee Descriptions': 'https://www.notion.so/calcodeology/Committee-Descriptions-73e69520cf2e4fb387977622c31f5ffb',
        '⏰ Education OH': "https://bit.ly/cody-education-oh",
        '🥑 Figma Member Guide': "https://tinyurl.com/codyMemSp22",
        '🤝🏿 GM Slides': "https://tinyurl.com/codySp22Drive",
        '🌟 Member Guidelines': "https://www.notion.so/calcodeology/Member-Guidelines-6b7b17643c78424dbda438af1d4eca1d",
        '👵 Mentor Bios': 'https://bit.ly/cody-mentors-sp22',
        '🥰 Nice Things': 'https://tinyurl.com/NiceThingsSp22',
        '📝 Project Descriptions': 'https://www.notion.so/calcodeology/Project-Descriptions-be58334df4e742dcb24ad0abf7f50290',
        '📸 Photos': 'https://tinyurl.com/codyFotos',
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
                        <li><b>GM Slides:</b>
                            <ul>
                                <li>Check out our GM Slides!
                                <ul>
                                    <li><a href="https://docs.google.com/presentation/d/1Vki92e1gqdJm5RTiEZwHq5TCJmXpiUC94ZwXr3oEyJ8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">GM 3 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/d/18Q66X9dEq__9Rq_e2mGpmuR9tKILZfh5Fn0EcG48HZc/edit" target="_blank" rel="noopener noreferrer">GM 2 Slides</a></li>
                                    <li><a href="https://docs.google.com/presentation/u/1/d/1qWsgOozXF2RZKYwbUZl3ioiW68awpmxeAZyy0Hy8kzo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">GM 1 Slides</a></li>
                                </ul>
                                </li>
                            </ul>
                        </li>
                        <li><b>Media:</b>
                            <ul>
                                <li>Submit <a href="https://tinyurl.com/NiceThingsSp22" target="_blank" rel="noopener noreferrer">NICE THINGS!</a>
                                <ul>
                                    <li>BDAY EDITION: from this week on we’ll also be using NICE THINGS to put together bday cards! SO GO SUBMIT SOME NICE MESSAGES!! uwu</li>
                                    <li>UPCOMING BDAYS INCLUDE: Upcoming: Lincoln (3/19), Grace J (3/25), Cynthia (3/30), Kevin C (3/31)</li>
                                    <li>Old: Victoria (3/14) (pls fill out bday specific nice things by next GM - 3/29)</li>  
                                </ul>
                                </li>
                                <li>if you weren’t at this weeks GM but would like to order last sem’s merch (hoodies + tote bags) pls dm me! (Ash)</li>
                            </ul>
                        </li>

                        <li><b>Social:</b>
                            <ul>
                                <li>NO OFFICIAL SOCIALS OVER BREAK! But feel free to host ur own :)</li>
                                <li>Berkeley Project Day - April 16, Six Flags - April 23! (RSVP date passed)</li>
                                <li>Reach out to Daniel, Jasper, Joelle or Jun Hee if you have financial concerns! We want to make socials as accessible as possible and would love to answer qs/help you out!</li>
                            </ul>
                        </li>

                        <li><b>Education:</b>
                            <ul>
                                <li>Meet with your mentor! (study date or decompress)</li>
                                <li>Schedule <a href="https://bit.ly/cody-education-oh" target="_blank" rel="noopener noreferrer">education OH</a> with Cindy and Angela!</li>
                            </ul>
                        </li>

                        <li><b>Industry:</b>
                            <ul>
                                <li>Mark your calendars ~ APRIL 6TH 6:30pm - 8pm</li>
                                <li>This event is <b>SUPER mandatory</b> & please bring friends :D</li>
                                <li>Update your resumes~</li>
                            </ul>
                        </li>
                        
                        <li><b>Recurring Links: (forms also linked below :D)</b>
                            <ul>
                                <li>If you have feedback, please submit them anonymously 
                                <a href="https://airtable.com/shr0J7brwC6dtBqPG" target="_blank" rel="noopener noreferrer"> here! </a>
                                    If you would like us to follow up, please put your name there in the note.</li>
                                <li>
                                    If you have bought something for Codeology, please fill out this 
                                    <a href="https://airtable.com/shr3Vull6K4QVdU4U" target="_blank" rel="noopener noreferrer"> reimbursement form!</a>
                                </li>
                                <li>
                                    Drive containing all of our slides can be found 
                                    <a href="https://tinyurl.com/codySp22Drive" target="_blank" rel="noopener noreferrer"> here.</a>
                                </li>
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
