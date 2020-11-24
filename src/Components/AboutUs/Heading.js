import React from 'react';
import './css/Heading.css';

class Heading extends React.Component {
    render() {
        return (
            <p className="prompt">{this.props.children}</p>
        );
    }
  }

  export default Heading;
