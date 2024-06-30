import  { Fade } from 'react-awesome-reveal';
import './IndustryCard.css';

function IndustryCard(props) {
    const {imgSrc, technology, description} = props;

    return (<Fade>
        <div id="industry-card">
            <img id="image" src={require(`../../images/industry/${imgSrc}`)} alt="" />

            <p id="technology">{technology}</p>

            <p id="client-description">{description}</p>
        </div>
    </Fade>);
}

export default IndustryCard