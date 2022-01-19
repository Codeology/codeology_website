import React from 'react';
import '../ContactUs/contact.css';
import './internal.css';
import Login from './Login.jsx';
import emails from '../../constants/emails';
import LoggedOn from './LoggedOn.jsx';


export default class Internal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            textVal: '',
            name: '',
            tab: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    
    handleChange(event) {
        this.setState({textVal: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.textVal  === 'password') {
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    onSuccess = (name, email) => {
        if (!emails.includes(email)) alert('Invalid email :(');
        else {
            const firstName = name.split(' ')[0];
            this.setState({
                authenticated: true,
                name: firstName
            });
        }
    }

    onFailure = (res) => {
        alert(`Failed to login. Reason: ${res} 😢`);
    }

    onLogout = () => {
        this.setState({
            authenticated: false,
            name: ''
        })
    }

    render() {
        var display =
        <div className="contact internal-container">
            <h1 className="contactTitle">internal member portal!</h1>
                <div id="underline"></div>
            <div className='internal-content'>
                <p className='midtext'>Sign in to access the internal portal. If you're an active Codeology member and 
                    verification isn't working, please message one of the officers! If you're a spy go away!!
                </p>
                <Login success={this.onSuccess} failure={this.onFailure} />  
            </div>   
        </div>  
               
        if (this.state.authenticated) { display = <LoggedOn name={this.state.name} onLogout={this.onLogout} /> }
        return (display);
    }
}