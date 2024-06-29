import  { Fade } from 'react-awesome-reveal';
import './ServiceCard.css';

function ServiceCard(props) {
    const {service, description} = props;

    return (<Fade>
        <div id="card">
            <p id="service">{service}</p>

            <p id="description">{description}</p>
        </div>
    </Fade>);
}

export default ServiceCard