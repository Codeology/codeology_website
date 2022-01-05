import React from 'react';
import './project-component.css';

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
                {this.props.github && <a href={this.props.github}><button className="github-button"> GITHUB REPO </button></a>}
                <div className="projects-row textSection">
                    {this.props.imageSrc &&
                    <div className="project-img-cropped-div">
                    <img className="project-img" src={require(`../../images/projects/${this.props.imageSrc}`)} alt={this.props.title} />
                    </div>}
                    
                    <p className="textSection">
                        {this.props.description}
                    </p>


                </div>

            </div>
        );
    }
}

export default PastProject;
