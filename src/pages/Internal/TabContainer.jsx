import React, { useState } from 'react';
import './internal.css';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import TabList from '@material-ui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Box from '@mui/material/Box';

function TabContainer() {
    const [value, setValue] = useState("0");

    function handleSwitch(e, value) {
        setValue(value);
    }

    return (
        <div id='tab-container'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', 
                    '& .MuiButtonBase-root': { color: 'var(--darkgrey)', fontWeight: 'bold', fontFamily: 'Karla', marginRight: '25px'},
                    '& .MuiButtonBase-root.Mui-selected': { outline: 'none' },
                    '& .MuiTabs-indicator': { backgroundColor: 'var(--forestgreen)', height: '4px'}}}>
                        <TabList onChange={handleSwitch} aria-label="scrollable wrapped auto tabs example" variant="scrollable" scrollButtons="auto">
                            <Tab label="Calendar" value="0" />
                            <Tab label="[DUE 2/8]: RETREAT" value="1" />
                            <Tab label="[DUE 2/8, 2/11]: RETREAT COVID TEST" value="2" />
                            <Tab label="[DUE 2/9]: Project Preference" value="3" />
                            <Tab label="[DUE 2/15]: Media Committee" value="4" />
                        </TabList>
                    </Box>

                    <TabPanel value={"0"}>
                        <div>
                        <iframe title='sp22 calendar' src="https://calendar.google.com/calendar/embed?src=c_56lpkkmm17m8s86h84sbe2j6l8%40group.calendar.google.com&ctz=Pacific%2FPitcairn" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                        </div>
                    </TabPanel>

                    <TabPanel value={"1"}>
                        {/*
                            <div className='tab-description'>
                            <b>go to retreat (if you can)! but only if you fill out this form!</b>
                        </div>

                        */ }
                        
                        <iframe title='retreat' className="airtable-embed" src="https://airtable.com/embed/shrCqUy3IPoKZnDKV" frameBorder="0" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                    </TabPanel>

                    <TabPanel value={"2"}>
                        <iframe title='covid test' className="airtable-embed" src="https://airtable.com/embed/shrnrCQfTqMJuHJwX" frameBorder="0" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                    </TabPanel>

                    <TabPanel value={"3"}>
                        <iframe title='project' className="airtable-embed" src="https://airtable.com/embed/shr8YEVdiMAh2FB9f" frameBorder="0" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                    </TabPanel>

                    <TabPanel value={"4"}>
                        <iframe title='media' className="airtable-embed" src="https://airtable.com/embed/shreSWuwPWb4QqDJZ" frameBorder="0" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
                    </TabPanel>
                    </TabContext>
                </div>
    )
}
 
export default TabContainer;
