import React, { useState } from 'react';
import './internal.css';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
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
                            <Tab label="Anon Feedback Form" value="1" />
                            <Tab label="Reimbursement Form" value="4" />
                            <Tab label="Update Website Bio" value="2" />
                            <Tab label="Member Guide Updates" value="3" />
                        </TabList>
                    </Box>

                    <TabPanel value={"0"}>
                        <div>
                        <iframe title='fa22 calendar' src="https://calendar.google.com/calendar/embed?src=c_56lpkkmm17m8s86h84sbe2j6l8%40group.calendar.google.com&ctz=Pacific%2FPitcairn" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                        </div>
                    </TabPanel>

                    <TabPanel value={"1"}>
                        <div>
                            <iframe title='feedback' className="airtable-embed" src="https://airtable.com/embed/shr0J7brwC6dtBqPG" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                        </div>
                    </TabPanel>

                    {/* IMPORTANT: make sure airtable links have /embed/ in the url (after .com) or else it will error! */}
                    <TabPanel value={"2"}>
                        <div className='tab-description'>
                            <b>Fill out this form any time if you would like to update your bio!</b>
                        </div>
                        <iframe title='web' className="airtable-embed" src="https://airtable.com/embed/shrsjslkkPVJZ9tFi" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    <TabPanel value={"3"}>
                        <iframe title='memUpdate' className="airtable-embed" src="https://airtable.com/embed/shrgkSI8Qv8fUU1mW" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    <TabPanel value={"4"}>
                        <iframe title='reimburse' className="airtable-embed" src="https://airtable.com/embed/shr3Vull6K4QVdU4U" frameBorder="0" width="100%" height="533" style={{border: 0, width: '100%', height: 600, frameBorder: 0, scrolling: 'no'}}></iframe>
                    </TabPanel>

                    
                    </TabContext>
                </div>
    )
}
 
export default TabContainer;
