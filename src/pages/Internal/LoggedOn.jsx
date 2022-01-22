import React, { useState } from 'react';
import '../ContactUs/contact.css';
import './internal.css';
import Logout from './Logout.jsx';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import TabList from '@material-ui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Box from '@mui/material/Box';

function LoggedOn(props) {
    const [value, setValue] = useState("0");
    const links = {
        'Class Master List': 'https://www.notion.so/calcodeology/4b880a65bec242d4a7708c63f0c13833?v=09ee1ccc47f14353ba67406951d284e2',
        'Discord Link': "https://discord.com/invite/6nGfjhg",
        'Education OH': "https://bit.ly/cody-education-oh",
        'Figma Member Guide': "https://www.figma.com/file/AQhDGu6cq5HPN6oh4CIOGd/Codeology-Member-guide---FALL-'21",
        'GitHub': 'https://github.com/Codeology',
        'Member Guidelines': "https://www.notion.so/calcodeology/Member-Guidelines-6b7b17643c78424dbda438af1d4eca1d",
        'Notion': "https://www.notion.so/calcodeology/Codeology-Notion-4d0c00b95f734f7889e2b374dcf4aad3",
        'Project Descriptions': 'https://www.notion.so/calcodeology/Project-Descriptions-be58334df4e742dcb24ad0abf7f50290',
    }
    const greetings = ['howdy', 'hello', 'welcome', 'hey', 'greetings', 'hi'];
    
    function handleSwitch(e, value) {
        setValue(value);
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const getGreeting = () => {
        const index = Math.floor(Math.random() * greetings.length);
        return `${greetings[index]} ${props.name} :D`;
    }

    const getLinks = () => {
        return (
            <div id='quick-links' className='b'>
                {Object.keys(links).map(link => {
                    return (
                        <a href={links[link]} target='_target' rel='noopener noreferrer' key={link}>{link}</a>
                    )
                })}
            </div>
        ) 
    }

    return (
        <div className="contact">

                <div id='internal-header'>
                    <Logout success={props.onLogout} />
                    <h1>{getGreeting()}</h1>
                    <img src={require("./pictures/avo.png")} className='avobooty row' height="200px" alt='avobooty' />
                </div>
                <div id="underline"></div>
                
                <div id='links-container'>
                    <b id='internal-subtitle'>QUICK LINKS</b>
                    {getLinks()}
                </div>

                <div id='announcements'>
                    <h2>announcements</h2>
                    <ul className="announcements-text">
                        <li><b>THIS WEEK'S EVENTS:</b> Recruitment is starting!! <span role='img' aria-label=''>🥶</span></li>
                        <li>Remember to fill out the  <a href="https://docs.google.com/spreadsheets/u/2/d/1XyDlIqabP1eq0Hh3H3fMFNIiz1EceT6my8-rIrFbCsI/edit?usp=sharing">Recruiting Master Sheet</a> for any interviews and  company info you have!</li>
                        <li><a href="https://bit.ly/cody-education-oh" target='_blank' rel='noopener noreferrer'>
                            Education office hours link</a> to book with Cindy and Angela!
                        </li>
                    </ul>
                </div>

                <div id='tab-container'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', 
                    '& .MuiButtonBase-root': { color: 'var(--darkgrey)', fontWeight: 'bold', fontFamily: 'Karla' },
                    '& .MuiButtonBase-root.Mui-selected': { outline: 'none' },
                    '& .MuiTabs-indicator': { backgroundColor: 'var(--forestgreen)' }}}>
                        <TabList onChange={handleSwitch} aria-label="secondary tabs example">
                            <Tab label="Calendar" value="0" />
                            <Tab label="Web Bio Form" value="1" />
                        </TabList>
                    </Box>

                    <TabPanel value={"0"}>
                        <div className="calendar-div">
                            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;ctz=America%2FLos_Angeles&amp;src=aW5mb0Bjb2Rlb2xvZ3kuY2x1Yg&amp;color=%230B8043&amp;title=Codeology%20Master%20Calendar&amp;showPrint=0" style={{border: "solid 1px #777"}} width="100%" height="600" frameborder="0" scrolling="no"/>
                        </div>
                    </TabPanel>

                    <TabPanel value={"1"}>
                        <div className='form-desc'>
                            <b>Fill out whenever if you would like to update your bio! (or message Erin)</b>
                        </div>
                        <iframe title='web-bio' class="airtable-embed" src="https://airtable.com/embed/shrsjslkkPVJZ9tFi?backgroundColor=tealLight" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent; border: 1px solid #ccc;"}}></iframe>
                    </TabPanel>
                    </TabContext>
                </div>
                <img src={require("./pictures/avo.png")} className='avobooty col' height="200px" alt='avobooty' />
            </div>

        )
}

export default LoggedOn;
