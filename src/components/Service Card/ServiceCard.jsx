import  { Fade } from 'react-awesome-reveal';
import './ServiceCard.css';

function ServiceCard(props) {
    const {service, description} = props;

    return (<Fade>
        <div id="service-card">
            <p id="service">{service}</p>

            <p id="service-description">{description}</p>
        </div>
    </Fade>);
}

export default ServiceCard