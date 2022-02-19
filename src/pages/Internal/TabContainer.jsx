import React, { useState } from 'react';
import './internal.css';
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
                            <Tab label="[DUE 2/22]: Website" value="1" />
                            <Tab label="[DUE 2/22]: Tree/Leaf Preference" value="2" />
                            <Tab label="Member Guide Updates" value="3" />
                            <Tab label="Retreat Reimbursements" value="4" />
                        </TabList>
                    </Box>

                    <TabPanel value={"0"}>
                        <div>
                        <iframe title='sp22 calendar' src="https://calendar.google.com/calendar/embed?src=c_56lpkkmm17m8s86h84sbe2j6l8%40group.calendar.google.com&ctz=Pacific%2FPitcairn" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                        </div>
                    </TabPanel>

                    {/* IMPORTANT: make sure airtable links have /embed/ in the url (after .com) or else it will error! */}
                    <TabPanel value={"1"}>
                        <div className='tab-description'>
                            <b>NEW MEMBERS: Fill out this form so you can be added to the website!</b>
                            <b>Old members: Message Erin if there's any changes you want to make to your bio!</b>
                        </div>
                        <iframe title='web' className="airtable-embed" src="https://airtable.com/embed/shrsjslkkPVJZ9tFi" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    <TabPanel value={"2"}>
                        <iframe title='treeleaf' className="airtable-embed" src="https://airtable.com/embed/shr1LGDqxdbYIRE1k" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    <TabPanel value={"3"}>
                        <iframe title='memUpdate' className="airtable-embed" src="https://airtable.com/embed/shrgkSI8Qv8fUU1mW" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    <TabPanel value={"4"}>
                        <iframe title='reimburse' className="airtable-embed" src="https://airtable.com/embed/shrmwngeLGLSXhYvN" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    
                    </TabContext>
                </div>
    )
}
 
export default TabContainer;
