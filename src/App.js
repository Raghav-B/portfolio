import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {NavHashLink as Link} from 'react-router-hash-link';
import About from "./AboutMe/About.js";
import WorkExperience from "./WorkExperience/WorkExperience.js";
import Projects from "./Projects/Projects.js";
import Leadership from "./Leadership/Leadership.js";
import './App.css';

function App() {  
  return (
    <BrowserRouter>
     
      <div className="App">
        
        <div id="navigation_bar" className="nav_bar">

          <Link id="content" onClick={() => test()} to="#aboutme">About</Link>
          <Link id="content" to="#workexperience">Work Experience</Link>
          <Link id="content" to="#projects">Projects</Link>
          <Link id="content" to="#leadership">Leadership</Link>
          <Link id="content" to="#contactme">Contact Me</Link>
        </div>

        <div id="aboutme">
          <About></About>
        </div>
        <div id="workexperience">
          <WorkExperience></WorkExperience>
        </div>
        <div id="projects">
          <Projects></Projects>
        </div>
        <div id="leadership">
          <Leadership></Leadership>
        </div>

      </div>
    </BrowserRouter>
  );

}

function test() {
  var btns = document.getElementsByName("content")
  alert(btns.length);
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("test");
    current[0].className = current[0].className.replace(" test", "");
    this.className += " test";
    });
}
}

export default App;

