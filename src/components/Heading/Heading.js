import React from 'react';
import './Heading.css';

class Heading extends React.Component {
    render() {
        return (
            <h2 className="prompt">{this.props.children}</h2>
        );
    }
  }

  export default Heading;
