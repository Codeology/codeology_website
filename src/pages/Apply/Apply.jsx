import React from 'react';
import '../ContactUs/contact.css';
import './Apply.css';
import Heading from '../../components/Heading/Heading';
import Fade from 'react-reveal/Fade';

export default function Apply() {
    /*
    <div id="bottombox">  
        <h2>Come back in Spring 2022!</h2>
        <img src={require("../../images/group/group.png")} alt="groupPic" width="50%"/>
        <p><br/>Applications are currently closed. Come visit our website during the first few weeks of the Spring 2022 
        semester to apply! In the meantime, follow us 
        on <a href="https://www.facebook.com/berkeleycodeology/">Facebook</a> and <a href="https://www.instagram.com/berkeleycodeology/?hl=en">Instagram</a> for more updates.</p> 
    </div>
    */
    return (
        <div>

            <div className="contact">
                <h1 className="contactTitle"> apply </h1>
                <div id="underline"></div>
                <a href='https://airtable.com/shrYiTfYslEBym9GN?fbclid=IwAR2I3O2PuLN_Z_JbLAzZnWz0harbL1NavnyRYdetVghw78dYWtqm_5tU4qM' target='_blank' rel="noopener noreferrer">
                    <button id='application-link'>APPLICATION LINK - DUE 1/28, 11:59 PST</button>
                </a>
                <Fade>
                    <div id='recruitment-timeline'>
                        <h2 id='timeline-title'>recruitment timeline</h2>

                        <div className='timeline-event'>
                            <b className='event-date'>1/19 - 1/28</b>
                            <div className='event-description'>
                                <h3>Virtual Tabling + Coffee Chats</h3>
                                <p>We will be hosting virtual tabling on Discord! Drop in any time during the time window to speak with a member about Codeology.
                                   If you prefer speaking 1-on-1 or don't use Discord, sign up for a coffee chat instead! 
                                </p>
                                <div className='event-list'>
                                    <div className='event-list-item'>
                                        <b>Virtual Tabling</b>
                                        <ul>
                                            <li><a href='tinyurl.com/codyDiscordSp22' target='_blank' rel="noopener noreferrer">Discord Link</a></li>
                                            <li>Week 1 (1/19 - 1/21): 3 - 5 pm, 7 - 9 pm PST</li>
                                            <li>Week 2 (1/24 - 1/28): TBA</li>
                                        </ul>
                                    </div>
                                    <div className='event-list-item'>
                                        <b>Coffee Chats</b>
                                        <ul>
                                            <li><a href='tinyurl.com/codyCoffeeSp22' target='_blank' rel="noopener noreferrer">Sign Up Link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/25 - 27</b>
                            <div className='event-description'>
                                <h3>Infosessions</h3>
                                <p>Come to our infosessions to speak with our officers and ask any questions you may have! 
                                    We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                </p>
                                <div className='event-list'>
                                    <div className='event-list-item'>
                                        <b>Infosession #1: 1/25, 8 - 9:30 pm PST</b>
                                        <ul>
                                            <li>Hybrid</li>
                                            <li>Location: VLSB 2060 / <a href='https://berkeley.zoom.us/my/danieltseng1529' target='_blank' rel="noopener noreferrer">Zoom Link</a></li>
                                            <li><a href='https://fb.me/e/2YPPPtn8h' target='_blank' rel="noopener noreferrer">Facebook RSVP</a></li>
                                        </ul>
                                    </div>
                                    <div className='event-list-item'>
                                        <b>Infosession #2: 1/27, 8 - 9:30 pm PST</b>
                                        <ul>
                                            <li>Online</li>
                                            <li>Location: <a href='https://berkeley.zoom.us/my/danieltseng1529' target='_blank' rel="noopener noreferrer">Zoom Link</a></li>
                                            <li><a href='https://fb.me/e/1nq5RIAcQ' target='_blank' rel="noopener noreferrer">Facebook RSVP</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/28</b>
                            <div className='event-description'>
                                <h3>Applications Due!</h3>
                                <p>Fill out an application to share your story and what you can get out of being a part of Codeology.</p>
                                <b>Applications are due on 1/28 at 11:59 pm PST.</b><br/>
                                <a href='https://airtable.com/shrYiTfYslEBym9GN?fbclid=IwAR2I3O2PuLN_Z_JbLAzZnWz0harbL1NavnyRYdetVghw78dYWtqm_5tU4qM' target='_blank' rel="noopener noreferrer">
                                    Start your application!
                                </a>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/30 - 2/1</b>
                            <div className='event-description'>
                                <h3>Group Interviews</h3>
                                <p>Applicants accepted past the written application will participate in group interviews, 
                                    where we can get an idea of how you interact and solve problems in a group setting.
                                </p>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>2/2</b>
                            <div className='event-description'>
                                <h3>Social Night</h3>
                                <p>An event for accepted applicants to get to know Codeology members and fellow applicants. 
                                    We have some activities planned, so be sure to come out and have some fun with us!
                                </p>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>2/3 - 5</b>
                            <div className='event-description'>
                                <h3>1-on-1 Interviews</h3>
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

        </div>
    )
}
