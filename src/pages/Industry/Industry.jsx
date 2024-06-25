import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import PageDescription from '../../components/PageDescription/PageDescription';
import Wall from '../../images/industry/industry_group_photo.jpg';
import WallImage from '../../components/WallImage/WallImage';
import ScrollToTop from '../../utils/ScrollToTop';
import Heading from '../../components/Heading/Heading';

class Industry extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (<div>
            <Helmet>
                <title>Codeology | Industry</title>
            </Helmet>

            {/* header photo */}
            <WallImage id="industry-wall-image" image={Wall} title={'industry'} />
        </div>);
    }
}

export default Industry