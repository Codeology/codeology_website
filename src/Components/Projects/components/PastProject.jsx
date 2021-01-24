import React from 'react';
import './project.css';

class PastProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            imageSrc: "",
            title:"Project Title",
            time: "Spring 2020",
            description:"",
            leaders: "",
            developers: ""
        }
    }

    render() {
        return (
            <div className="project-div">
                <h3 className="project-title">{this.props.title}</h3>
                <p className="project-time">{this.props.time}</p>
                <a href={this.props.github}><button className="github-button"> GITHUB REPO </button></a>
                <p className="project-text">{this.props.description}</p>

            </div>
        );
    }
}

export default PastProject;
