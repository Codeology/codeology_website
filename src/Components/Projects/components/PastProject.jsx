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
                <button className="github-button"> GITHUB REPO </button>
                <div className="project-text">
                    {/*<p><strong>Project Leader(s)</strong>: {this.state.leaders}</p>
                    <p><strong>Project Developers:</strong> {this.state.developers}</p>*/}
                    <p>{this.props.description}</p>
                </div>


            </div>
        );
    }
}

export default PastProject;
