import React from 'react';
import '../ContactUs/contact.css';
import './Apply.css';
import Heading from '../../components/Heading/Heading';
import Fade from 'react-reveal/Fade';

export default function Apply() {
    return (
        <div>

            <div className="contact">
                <h1 className="contactTitle"> apply </h1>
                <div id="underline"></div>
                
                <a href='https://tinyurl.com/CodySP23App' target='_blank' rel="noopener noreferrer">
                    <button id='application-link'>APPLICATION LINK - DUE 1/26, 11:59 PST</button>
                </a>
               
                <h3 id='headline'>Fill out the interest form below to hear about updates!</h3>
                <a href='https://tinyurl.com/CodeologyMailing' target='_blank' rel="noopener noreferrer">
                    <button id='interest-link'>Interest Form</button>
                </a>
               
                <h3 id='apps-closed'>
                Applications are currently closed. Come visit our website during the first few weeks of the Fall 2023 semester to apply and check out our events!
                </h3>


                <Fade>
                     <div id='recruitment-timeline'>
                        <h2 id='timeline-title'>recruitment timeline</h2>

                        <div className='timeline-event'>
                            <b className='event-date'>1/19 - 1/26</b>
                            <div className='event-description'>
                                <h3>Tabling</h3>
                                <p>We will begin on-campus tabling during the first week of recruitment! Drop by any time to speak with a member about Codeology.</p>
                                <b>1/19 - 1/26 Weekdays, 10am - 3pm PST</b>
                                <ul>
                                    <li>In Person</li>
                                    <li>Location: Memorial Glade (Upper Sproul on 1/23)</li>
                                </ul>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/22 - 1/26</b>
                            <div className='event-description'>
                                <h3>Coffee Chats</h3>
                                <p>If you can't make tabling in person, 
                                    #sign up for a coffee chat *releasing on 1/19 
                                    <a href='https://www.notion.so/Codeology-Spring-2023-Coffee-Chats-1-22-1-26-9c470edbd00244a398128b338a563710' target='_blank' rel="noopener noreferrer"> sign up for a coffee chat!</a> 
                                    <br></br>
                                    If slots run out or you aren't available during these times, keep checking back — more slots may open.
                                </p>
                                <b>1/22 - 1/26, time varies by slot</b>
                                <ul>
                                    <li>In Person/Online</li>
                                    <li>Location: varies by slot</li>
                                </ul>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/23</b>
                            <div className='event-description'>
                                <h3>Clubs and Cookies</h3>
                                <p> New to the tech club scene at Cal? Craving some yummy cookies?</p>
                                <p> Come join us at Clubs and Cookies, an event to learn about some of the biggest tech clubs on campus  
                                    Get to know Launchpad, Codebase, Machine Learning at Berkeley, Blockchain at Berkeley, Blueprint, Product Space at Berkeley, Codeology, and Web Development at Berkeley all in one (delicious) event and chat directly with current members!
                                </p>    
                                # <p> If you'll be in attendance, please fill out this quick <a href="https://tinyurl.com/clubsandcookiesinterest-fa22">interest form</a>! </p> 
                                <b>1/23, 8-9:30 pm PST</b>
                                <ul>
                                    <li>In Person</li>
                                    <li>Location: VLSB 2050</li>
                                    # <li>View our <a href='https://fb.me/e/1YZKUc4F7' target='_blank' rel="noopener noreferrer">Facebook event</a> for more details!</li> 
                                </ul>                                
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/24</b>
                            <div className='event-description'>
                                <h3>Codeology Infosession #1</h3>
                                <p>Come to our infosession to speak with our officers and ask any questions you may have! 
                                    We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                </p>
                                <b>1/24, 8-9:30 pm PST</b>
                                <ul>
                                    <li>In Person</li>
                                    <li>Location: Mulford 240</li>
                                </ul>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/25</b>
                            <div className='event-description'>
                                <h3>ABCDs of Tech Infosession</h3>
                                <p>New to the tech scene at Berkeley? Come explore some of the most exciting tech clubs on campus while drinking some free boba! You'll hear from ANova, Blueprint, Codeology, and Mobile Developers at Berkeley at this infosession!</p>
                                <b>1/25, 8-9:30pm PST</b>
                                <ul>
                                    <li>Online</li>
                                    <li>Location: <a href='https://berkeley.zoom.us/my/abcds' target='_blank' rel="noopener noreferrer">Zoom</a> </li>
                                    # <li>View our <a href='https://fb.me/e/20oEH2rXi' target='_blank' rel="noopener noreferrer">Facebook event</a> for more details!</li> 
                                </ul>
                                # <b>More information about the event will be available when the application opens.</b> 
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/26</b>
                            <div className='event-description'>
                                <h3>Codeology Infosession #2</h3>
                                <p>Come to our infosession to speak with our officers and ask any questions you may have! 
                                    We’ll be introducing our projects for this semester and talking about what it’s like to be in Codeology.
                                </p>
                                <p>note: the content will be the same for both infosessions!</p>
                                <b>1/26, 8-9:30pm PST</b>
                                <ul>
                                    <li>In Person</li>
                                    <li>Location: Evans 9</li>
                                    # <li><a href='https://fb.me/e/1nq5RIAcQ' target='_blank' rel="noopener noreferrer">Facebook RSVP</a></li> 
                                </ul>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/26</b>
                            <div className='event-description'>
                                <h3>Applications Due!</h3>
                                <p>Fill out an application to share your story and what you can get out of being a part of Codeology.</p>
                                <b>Applications will be due on 1/26 at 11:59 pm PST.</b><br/>
                                <a href='https://tinyurl.com/CodySP23App' target='_blank' rel="noopener noreferrer">
                                    Start your application!
                                </a>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/28-1/30</b>
                            <div className='event-description'>
                                <h3>First Round Interviews (Invite Only)</h3>
                                <p>Applicants accepted past the written application will participate in first round interviews, 
                                    where we can get an idea of how you interact and solve problems.
                                </p>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>1/31</b>
                            <div className='event-description'>
                                <h3>Social Night (Invite Only)</h3>
                                <p> A fun event to meet fellow applicants, as well as current Codeology officers and members!</p>

                                <b>1/31, 8-9:30pm PST</b>
                                <ul>
                                    <li>In Person</li>
                                    <li>Location: *Refer to Invitation*</li>
                                </ul>
                            </div>
                        </div>

                        <div className='timeline-event'>
                            <b className='event-date'>2/1-2/2</b>
                            <div className='event-description'>
                                <h3>Final Individual Interviews (Invite Only)</h3>
                                <p>A casual interview for us to get to know you better! 
                                    # No technical experience needed; the interview will be strictly behavioral.
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
