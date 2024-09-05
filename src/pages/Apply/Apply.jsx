import React from 'react';
import './Apply.css';
import Heading from '../../components/Heading/Heading';
import { Fade } from 'react-awesome-reveal';
import ScrollToTop from '../../utils/ScrollToTop.js';

export default function Apply() {
    function randomSquiggleRotation() {
        var max = 13
        var min = -3
        return Math.random() * (max-min) + min;
    }

    /* CHANGE THIS VARIABLE WHEN CHANGING THE APPLY PAGE */
    let is_off_season = false;

    /* ===================================================================================================
     * ========== OFF SEASON - DO NOT EDIT IF YOU ARE ADDING NEW RECRUITMENT TIMELINE ====================
     * ===================================================================================================
     */
    if (is_off_season) {
        return (
            <div>
                {/* Makes sure that page loads scrolled to the top */}
                <ScrollToTop/>
                
                <div className="contact">
                    <div className='header-container'>
                        <div className="header">
                            <img src={require('../../images/logos/avo.png')} alt='' id='header-logo' />
                            <div className="header-text">
                                <h1 id='header-title'>Apply to Codeology</h1>
                                <p id='header-subtext'>Start your journey in tech and become part of the Codeology family!</p>
                                <p id='header-subtext'>Our applications are closed at the moment. Please check back later for updates on the next recruitment season. Feel free to contact us or join our email list using the links below!</p>

                                <button id='application-closed-link'>Application Closed</button>
                                <br></br>
                                <a id='interest-link-container' href='http://tinyurl.com/SP24InterestForm' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-3split'>Join Our Email List</button>
                                </a>
                                <a id='interest-link-container' href='https://docs.google.com/forms/d/e/1FAIpQLSci1toyIHGzn_GoDk-QfjIA895cyN1EnrJFp3OyeazO2hbtaQ/viewform' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-3split'>Ask Us a Question</button>
                                </a>
                                <a id='interest-link-container' href='mailto:info@codeology.club' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-3split'>Email Us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Fade>
                        <div id='recruitment-timeline'>
                            <Heading>Typical Recruitment Timeline</Heading>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#1</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Tabling</h3>
                                    <p>We will begin on-campus tabling during the first week of recruitment! Drop by any time to speak with a member about Codeology.</p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#2</b>
                                </div>
                                <div className='event-description'>
                                    <h3>ABCDs of Tech Infosession</h3>
                                    <p>New to the tech scene at Berkeley? Come explore some of the most exciting tech clubs on campus! You'll hear from ANova, Blueprint, Codeology, and Mobile Developers at Berkeley at this infosession!</p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#3</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Tech Diversity Night</h3>
                                    <p>Interested in meeting those of diverse backgrounds in the tech space?</p>
                                    <p>Attend diversity night and learn more about the experiences of diverse groups in tech club scene at Berkeley.
                                        Meet Connex, Blueprint, Launchpad, Web Development at Berkeley, Machine Learning @ Berkeley, and Codeology to chat directly with our members!
                                    </p> 
                                </div>
                            </div>
                            
                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#4</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Coffee Chats</h3>
                                    <p>If you can't make tabling in person, sign up for a coffee chat! 
                                        <br></br>
                                        If slots run out or you aren't available during these times, keep checking back — more slots may open.
                                    </p>
                                </div>
                            </div>
                            
                            
                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#5</b>
                                </div>                            
                                <div className='event-description'>
                                    <h3>Clubs and Cookies</h3>
                                    <p> New to the tech club scene at Cal? Craving some yummy cookies?</p>
                                    <p> Come join us at Clubs and Cookies, an event to learn about some of the biggest tech clubs on campus  
                                        Get to know SAAS, Blueprint, Codeology, Codebase, Launchpad, Data Science Society, Girls Who Code, and Web Development at Berkeley all in one (delicious) event and chat directly with current members!
                                    </p>                               
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#6</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Codeology Infosession #1</h3>
                                    <p>Come to our infosession to speak with our officers and ask any questions you may have! 
                                        We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                    </p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#7</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Codeology Infosession #2</h3>
                                    <p>Come to our infosession to speak with our officers and ask any questions you may have! 
                                        We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                    </p>
                                    <p>note: the content will be the same for both infosessions!</p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#8</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Applications Due!</h3>
                                    <p>Fill out an application to share your story and what you can get out of being a part of Codeology.</p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>#9</b>
                                </div>
                                <div className='event-description'>
                                    <h3>First Round Interviews (Invite Only)</h3>
                                    <p>Applicants accepted past the written application will participate in first round interviews, 
                                    where we can get an idea of how you work in a group environment and solve problems.
                                    </p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}} />
                                    <b className='event-date'>#10</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Social Night (Invite Only)</h3>
                                    <p> A fun event to meet fellow applicants, as well as current Codeology officers and members!</p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' />
                                    <b className='event-date'>#11</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Final Individual Interviews (Invite Only)</h3>
                                    <p>A casual interview for us to get to know you better! 
                                        No technical experience needed; the interview will be strictly behavioral.
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        </Fade> 

                        <Fade>

                        <div id='faqs'>
                            <Heading>FAQs</Heading>
                            <div className='faq'>
                                <b className='faq-question'>What is Codeology, and what can it offer me?</b>
                                <p>
                                    Codeology is a student organization at UC Berkeley aiming to help you explore the tech industry with a supportive community!
                                    Every semester, new members work alongside a team and project leader to develop a project of their choice. 
                                    We believe in the power of mentorship, and offer help with resume building and mock interviews. 
                                    We also host tech talks from leading companies in the industry. 
                                    Most importantly, we’re a group of friends who support each other through and beyond our classes, and look forward to expanding our family!
                                </p>
                            </div>

                            <div className='faq'>
                                <b className='faq-question'>Do you have to be a CS/EECS major to join?</b>
                                <p>
                                    <b>No!</b> While they are common majors in Codeology, we accept students of all backgrounds and levels of experience. 
                                    Major and technical experience aren’t factors in our decisions; 
                                    we only require that applicants are committed to learning more about tech!
                                </p>
                            </div>

                            <div className='faq'>
                                <b className='faq-question'>What is the time commitment for an active member?</b>
                                <p>At minimum, new members have the following commitments:</p>
                                <ul>
                                    <li>General meetings: 1.5 hours/week</li>
                                    <li>Project meetings: 3 hours/week</li>
                                    <li>Individual project development: 2-4 hours/week (depending on project)</li>
                                </ul>
                                <p>This totals to around <b>7-9 hours per week.</b></p>
                                <p>However, we want to emphasize that the more time you put in, the more you get out. 
                                    While optional, we host tech talks and social events as well, and encourage all members to attend!
                                </p>
                            </div>
                        </div>
                        
                    </Fade>
                </div>

                <img src={require('../../images/illustrations/puzzle/puzzle.png')} alt='' id='contact-puzzle1' />
                <img src={require('../../images/illustrations/puzzle/puzzle2.png')} alt='' id='contact-puzzle2' />
                <img src={require('../../images/illustrations/puzzle/puzzle3.png')} alt='' id='contact-puzzle3' />
                <img src={require('../../images/illustrations/puzzle/puzzle2.png')} alt='' id='contact-puzzle4' />            
            </div>
        )
    } else {
    /* ===================================================================================================
     * ========== ON SEASON - EDIT IF YOU ARE ADDING NEW RECRUITMENT TIMELINE ====================
     * ===================================================================================================
     */
        return (
            <div>
                {/* Makes sure that page loads scrolled to the top */}
                <ScrollToTop/>
            
                <div className="contact">
                    <div className='header-container'>
                        <div className="header">
                            <img src={require('../../images/logos/avo.png')} alt='' id='header-logo' />
                            <div className="header-text">
                                <h1 id='header-title'>Apply to Codeology</h1>
                                <p id='header-subtext'>Start your journey in tech and become part of the Codeology family!</p>
                                <a href='https://airtable.com/appM69jQpcQpD9E3c/shrMx7jFhbWZItoUf' target='_blank' rel="noopener noreferrer">
                                    <button id='application-open-link'>Application</button>
                                </a>
                                <br></br>
                                {/* <a id='interest-link-container' href='https://berkeley.zoom.us/j/98348791355' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-1split'>Join Infosession</button>
                                </a> */}
                                <a id='interest-link-container' href='https://berkeley.zoom.us/j/91848203023' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-1split'>Join Diversity Opportunity Fair</button>
                                </a>
                                <br></br>
                                <a id='interest-link-container' href='https://tinyurl.com/FA24CodyInterestForm' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-3split'>Join Our Email List</button>
                                </a>
                                <a id='interest-link-container' href='https://docs.google.com/forms/d/e/1FAIpQLSci1toyIHGzn_GoDk-QfjIA895cyN1EnrJFp3OyeazO2hbtaQ/viewform' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-3split'>Ask Us a Question</button>
                                </a>
                                <a id='interest-link-container' href='mailto:info@codeology.club' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-3split'>Email Us</button>
                                </a>
                                {/* <a id='interest-link-container' href='http://tinyurl.com/SP24CodyCalendar' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link'>Recruitment Calendar</button>
                                </a> */}
                                <br></br>
                                <a id='interest-link-container' href='https://tinyurl.com/FA24CodyCoffeeChats' target='_blank' rel="noopener noreferrer">
                                    <button id='interest-link-1split'>Coffee Chats Signups Open</button>
                                </a>
                            </div>
                        </div>
                    </div>               
                
                    <Fade>
                        <div id='recruitment-timeline'>
                            <Heading>FA24 Recruitment Timeline</Heading>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>8/28</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Tabling</h3>
                                    <p>We will begin on-campus tabling during the first week of recruitment! Drop by any time to speak with a member about Codeology.</p>
                                    <b>8/28 - 8/30 Weekdays, 10am - 3pm PST</b>
                                    <ul>
                                        <li>In Person</li>
                                        <li>Location: Memorial Glade</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>1/18</b>
                                </div>
                                <div className='event-description'>
                                    <h3>ABCDs of Tech Infosession</h3>
                                    <p>New to the tech scene at Berkeley? Come explore some of the most exciting tech clubs on campus! You'll hear from ANova, Blueprint, Codeology, and Mobile Developers at Berkeley at this infosession!</p>
                                    <b>Thursday 1/18, 8-10pm PST</b>
                                    <ul>
                                        <li>In-Person</li>
                                        <li>Location: Dwinelle 155 </li>
                                        {/* # <li>View our <a href='https://fb.me/e/20oEH2rXi' target='_blank' rel="noopener noreferrer">Facebook event</a> for more details!</li>  
                                    </ul>
                                </div>
                            </div> */}

                            {/*<div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>1/19</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Tech Diversity Night</h3>
                                    <p>Interested in meeting those of diverse backgrounds in the tech space?</p>
                                    <p>Attend diversity night and learn more about the experiences of diverse groups in tech club scene at Berkeley.
                                        Meet Connex, Blueprint, Launchpad, Web Development at Berkeley, Machine Learning @ Berkeley, and Codeology to chat directly with our members!
                                    </p> 
                                    <b>Friday 1/19, 8-10:30 pm PST</b>
                                    <ul>
                                        <li>In Person</li>
                                        <li>Location: Chou N150</li>
                                    </ul>
                                </div>
                            </div> */}
                            
                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>9/2</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Coffee Chats</h3>
                                    <p>If you can't make tabling in person, 
                                        {/* sign up for a coffee chat *releasing on 1/18*  */}
                                        <a href='https://tinyurl.com/FA24CodyCoffeeChats' target='_blank' rel="noopener noreferrer"> sign up for a coffee chat!</a> 
                                        <br></br>
                                        If slots run out or you aren't available during these times, keep checking back — more slots may open.
                                    </p>
                                    <b>9/2 - 9/5, time varies by slot</b>
                                    <ul>
                                        <li>In Person/Online</li>
                                        <li>Location: varies by slot</li>
                                    </ul>
                                </div>
                            </div>
                            
                            
                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>8/29</b>
                                </div>                            
                                <div className='event-description'>
                                    <h3>Clubs and Cookies</h3>
                                    <p> New to the tech club scene at Cal? Craving some yummy cookies?</p>
                                    <p> Come join us at Clubs and Cookies, an event to learn about some of the biggest tech clubs on campus  
                                        Get to know SAAS, Blueprint, Codeology, Codebase, Launchpad, Data Science Society, Girls Who Code, and Web Development at Berkeley all in one (delicious) event and chat directly with current members!
                                    </p>    
                                    {/* # <p> If you'll be in attendance, please fill out this quick <a href="https://tinyurl.com/clubsandcookiesinterest-fa22">interest form</a>! </p>  */}
                                    <b>Thursday 8/29, 8-9:30 pm PST</b>
                                    <ul>
                                        <li>In person</li>
                                        <li>Location: Evans 10</li>
                                        {/* <li>View our <a href='https://fb.me/e/1YZKUc4F7' target='_blank' rel="noopener noreferrer">Facebook event</a> for more details!</li> */}
                                    </ul>                                
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>9/3</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Codeology Infosession #1</h3>
                                    <p>Come to our infosession to speak with our officers and ask any questions you may have! 
                                        We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                    </p>
                                    <b>Tuesday 9/3, 8-9:30 pm PST</b>
                                    <ul>
                                        <li>Hybrid</li>
                                        <li>Location: VLSB (Valley Life Sciences Building) 2060</li>
                                        <li>Zoom: <a id='interest-link-container' href='https://berkeley.zoom.us/j/98348791355' target='_blank' rel="noopener noreferrer">Join Link</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>9/4</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Diverse Opportunity Fair</h3>
                                    <p>Interested in meeting those of diverse backgrounds in the tech space?</p>
                                    <p>Attend diversity night and learn more about the experiences of diverse groups in tech club scene at Berkeley.
                                        Meet Connex, Blueprint, Launchpad, Web Development at Berkeley, Machine Learning @ Berkeley, and Codeology to chat directly with our members!
                                    </p> 
                                    <b>Wednesday 9/4, 8-10:00pm PST</b>
                                    <ul>
                                        <li>Online</li>
                                        <li>Zoom: <a id='interest-link-container' href='https://berkeley.zoom.us/j/91848203023' target='_blank' rel="noopener noreferrer">Join Link</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>9/5</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Codeology Infosession #2</h3>
                                    <p>Come to our infosession to speak with our officers and ask any questions you may have! 
                                        We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                    </p>
                                    <p>note: the content will be the same for both infosessions!</p>
                                    <b>Thursday 9/5, 8-9:30pm PST</b>
                                    <ul>
                                        <li>Hybrid</li>
                                        <li>Location: VLSB (Valley Life Sciences Building) 2060</li>
                                        <li>Zoom: <a id='interest-link-container' href='https://berkeley.zoom.us/j/98348791355' target='_blank' rel="noopener noreferrer">Join Link</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>9/5</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Applications Due!</h3>
                                    <p>Fill out an application to share your story and what you can get out of being a part of Codeology.</p>
                                    <b>Applications will be due on Thursday, 9/5 at 11:59 pm PST.</b><br/>
                                    <a href='https://airtable.com/appM69jQpcQpD9E3c/shrMx7jFhbWZItoUf' target='_blank' rel="noopener noreferrer">
                                        Start your application!
                                    </a>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}}/>
                                    <b className='event-date'>9/7-9/9</b>
                                </div>
                                <div className='event-description'>
                                    <h3>First Round Interviews (Invite Only)</h3>
                                    <p>Applicants accepted past the written application will participate in first round interviews, 
                                    where we can get an idea of how you work in a group environment and solve problems.
                                    </p>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' style={{transform: 'rotate(' + randomSquiggleRotation() + 'deg)'}} />
                                    <b className='event-date'>9/10</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Social Night (Invite Only)</h3>
                                    <p> A fun event to meet fellow applicants, as well as current Codeology officers and members!</p>

                                    <b>Tuesday 9/10, 8-9:30pm PST</b>
                                    <ul>
                                        <li>In Person</li>
                                        <li>Location: *Refer to Invitation*</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='timeline-event'>
                                <div className="event-date-container">
                                    <img src={require('../../images/illustrations/misc/squiggle.png')} alt='' id='event-date-design' />
                                    <b className='event-date'>9/11-9/13</b>
                                </div>
                                <div className='event-description'>
                                    <h3>Final Individual Interviews (Invite Only)</h3>
                                    <p>A casual interview for us to get to know you better! 
                                        No technical experience needed; the interview will be strictly behavioral.
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        </Fade> 

                        <Fade>

                        <div id='faqs'>
                            <Heading>FAQs</Heading>
                            <div className='faq'>
                                <b className='faq-question'>What is Codeology, and what can it offer me?</b>
                                <p>
                                    Codeology is a student organization at UC Berkeley aiming to help you explore the tech industry with a supportive community!
                                    Every semester, new members work alongside a team and project leader to develop a project of their choice. 
                                    We believe in the power of mentorship, and offer help with resume building and mock interviews. 
                                    We also host tech talks from leading companies in the industry. 
                                    Most importantly, we’re a group of friends who support each other through and beyond our classes, and look forward to expanding our family!
                                </p>
                            </div>

                            <div className='faq'>
                                <b className='faq-question'>Do you have to be a CS/EECS major to join?</b>
                                <p>
                                    <b>No!</b> While they are common majors in Codeology, we accept students of all backgrounds and levels of experience. 
                                    Major and technical experience aren’t factors in our decisions; 
                                    we only require that applicants are committed to learning more about tech!
                                </p>
                            </div>

                            <div className='faq'>
                                <b className='faq-question'>What is the time commitment for an active member?</b>
                                <p>At minimum, new members have the following commitments:</p>
                                <ul>
                                    <li>General meetings: 1.5 hours/week</li>
                                    <li>Project meetings: 3 hours/week</li>
                                    <li>Individual project development: 2-4 hours/week (depending on project)</li>
                                </ul>
                                <p>This totals to around <b>7-9 hours per week.</b></p>
                                <p>However, we want to emphasize that the more time you put in, the more you get out. 
                                    While optional, we host tech talks and social events as well, and encourage all members to attend!
                                </p>
                            </div>
                        </div>
                        
                    </Fade>
                </div>

                <img src={require('../../images/illustrations/puzzle/puzzle.png')} alt='' id='contact-puzzle1' />
                <img src={require('../../images/illustrations/puzzle/puzzle2.png')} alt='' id='contact-puzzle2' />
                <img src={require('../../images/illustrations/puzzle/puzzle3.png')} alt='' id='contact-puzzle3' />
                <img src={require('../../images/illustrations/puzzle/puzzle2.png')} alt='' id='contact-puzzle4' />

            </div>
        )
    }
}
