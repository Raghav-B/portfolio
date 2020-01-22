import React from 'react';
import logo from './logo.svg';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/" component={Projects} />
      
        <br/>

        <div className="navigation" align="center">
          <div className="navigation-sub">
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
          </div>

          <img src={logo} className="logo" alt="Logo Image" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
