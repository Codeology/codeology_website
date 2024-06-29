/* React imports */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

/* Our Components and Functions */
import PageDescription from '../../components/PageDescription/PageDescription';
import Wall from '../../images/industry/industry_group_photo.jpg';
import WallImage from '../../components/WallImage/WallImage';
import ScrollToTop from '../../utils/ScrollToTop';
import Heading from '../../components/Heading/Heading';
import ServiceCard from '../../components/Service Card/ServiceCard'

/* Constants imoprt */
import {ServiceInfo, ClientInfo} from '../../constants/IndustryInfo.jsx'

import './Industry.css'

class Industry extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const description = "We partner with leading companies to develop custom software and facilitate student outreach."

        /* Service Cards */
        const services = ServiceInfo["Current Services"].map(service_item =>
            <ServiceCard service={service_item.service}
                description={service_item.description} />
        )

        /* Industry Cards */

        return (<div>
            {/* Makes sure that page loads scrolled to the top */}
            <ScrollToTop/>

            <Helmet>
                <title>Codeology | Industry</title>
            </Helmet>

            {/* header photo */}
            <WallImage image={Wall} title={'industry'} />

            <PageDescription  text={description}/>

            {/* services */}
            <div className="services-body">
                <Fade>
                    <Heading>Our Services</Heading>
                </Fade>
                
                <Fade>
                    <p className="section-description">We provide a comprehensive suite of technical services to accommodate clients from various industries. Our developers are always open to exploring new stacks.</p>
                </Fade>

                <div className="service-cards">
                    {services}
                </div>
            </div>
            
            {/* past clients */}
            <div className="services-body">
                <Fade>
                    <Heading>Past Projects</Heading>
                </Fade>
                
                <Fade>
                    <p className="section-description">Each semester, we equip our members with hands-on experience in various tools and technologies through diverse internal projects and professional client projects.</p>
                </Fade>
            </div>

            {/* past partners */}
            <div className="services-body">
                <Fade>
                    <Heading>Past Partners</Heading>
                </Fade>
                
                <Fade>
                    <p className="section-description">We promote our industry partners by hosting on-campus career panels, tech talks, and recruiting info-sessions attended by hundreds of Berkeley students every semester.</p>
                </Fade>
            </div>

            {/* Contact */}
            <Link id="contact-us" to='/contact'>
                Contact
            </Link>
        </div>);
    }
}

export default Industry