import React from 'react';
import logo from './logo.svg';
import Projects from './Projects.jsx';
import './App.css';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      
      <div>
          <Helmet>
            <title>Codeology | Projects</title>
          </Helmet>
          
          <Projects />
      </div>
    );
  }
  
}

export default App;
