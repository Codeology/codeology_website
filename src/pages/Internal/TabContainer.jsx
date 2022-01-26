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
                    '& .MuiButtonBase-root': { color: 'var(--darkgrey)', fontWeight: 'bold', fontFamily: 'Karla' },
                    '& .MuiButtonBase-root.Mui-selected': { outline: 'none' },
                    '& .MuiTabs-indicator': { backgroundColor: 'var(--forestgreen)' }}}>
                        <TabList onChange={handleSwitch} aria-label="secondary tabs example">
                            <Tab label="Calendar" value="0" />
                            <Tab label="Web Bio Form" value="1" />
                        </TabList>
                    </Box>

                    <TabPanel value={"0"}>
                        <div>
                            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;ctz=America%2FLos_Angeles&amp;src=aW5mb0Bjb2Rlb2xvZ3kuY2x1Yg&amp;color=%230B8043&amp;title=Codeology%20Master%20Calendar&amp;showPrint=0" style={{border: "solid 1px #777"}} width="100%" height="600" frameborder="0" scrolling="no"/>
                        </div>
                    </TabPanel>

                    <TabPanel value={"1"}>
                        <div>
                            <b>Fill out whenever if you would like to update your bio! (or message Erin)</b>
                        </div>
                        <iframe title='web-bio' class="airtable-embed" src="https://airtable.com/embed/shrsjslkkPVJZ9tFi?backgroundColor=tealLight" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent; border: 1px solid #ccc;"}}></iframe>
                    </TabPanel>
                    </TabContext>
                </div>
    )
}

export default TabContainer;
