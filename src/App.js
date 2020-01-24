import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {NavHashLink as Link} from 'react-router-hash-link';
import About from "./AboutMe/About.js";
import Education from "./Education/Education.js";
import WorkExperience from "./WorkExperience/WorkExperience.js";
import Projects from "./Projects/Projects.js";
import Leadership from "./Leadership/Leadership.js";
import ContactMe from "./ContactMe/ContactMe.js";
import './App.css';
import "./Animations.css";

var isClickScrolling = false;
var scrollTimer = -1;

class App extends Component {  
  constructor() {
    super();
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  handleScroll() {
    if (isClickScrolling == false) {
      var sectionArr = document.getElementsByClassName("section");
      
      for (var i = 0; i < sectionArr.length; i++) {
        const top = sectionArr[i].getBoundingClientRect().top;
        
        if (top >= -40 && top <= window.innerHeight) {
          window.location.hash = sectionArr[i].id;

          var curSection = sectionArr[i].id+"_anchor";
          var buttonArr = document.getElementsByClassName("content");

          for (var i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i].id == curSection) {
              buttonArr[i].className = "content nav_bar_selected";
            } else {
              buttonArr[i].className = "content nav_bar_unselected active";
            }
          }  
        }
      }
    } else {
      if (scrollTimer != -1) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(function() {
        isClickScrolling = false;
      }, 150);
    }
  }

  navHighlight(event) {
    isClickScrolling = true;

    var curSection = event.target.id;
    var buttonArr = document.getElementsByClassName("content");

    for (var i = 0; i < buttonArr.length; i++) {
      if (buttonArr[i].id == curSection) {
        buttonArr[i].className = "content nav_bar_selected";
      } else {
        buttonArr[i].className = "content nav_bar_unselected active";
      }
    }  
  }

  render() {
    return (
      <BrowserRouter>

        <div className="App">
          
          <div id="navigation_bar" className="nav_bar">

            <Link 
              id="aboutme_anchor"
              className="content nav_bar_selected"
              onClick={(event) => this.navHighlight(event)}
              to="#aboutme">About
            </Link>
            <Link 
              id="education_anchor"
              className="content nav_bar_unselected"
              onClick={(event) => this.navHighlight(event)}
              to="#education">Education
            </Link>
            <Link 
              id="workexperience_anchor"
              className="content nav_bar_unselected" 
              onClick={(event) => this.navHighlight(event)} 
              to="#workexperience">Work Experience
            </Link>
            <Link 
              id="projects_anchor"
              className="content nav_bar_unselected" 
              onClick={(event) => this.navHighlight(event)} 
              to="#projects">Projects
            </Link>
            <Link 
              id="leadership_anchor"
              className="content nav_bar_unselected" 
              onClick={(event) => this.navHighlight(event)} 
              to="#leadership">Leadership
            </Link>
            <Link 
              id="contactme_anchor"
              className="content nav_bar_unselected" 
              onClick={(event) => this.navHighlight(event)} 
              to="#contactme">Contact
            </Link>
          </div>

          <div id="aboutme" className="section">
            <About></About>
          </div>
          <div id="education" className="section">
            <Education></Education>
          </div>
          <div id="workexperience" className="section">
            <WorkExperience></WorkExperience>
          </div>
          <div id="projects" className="section">
            <Projects></Projects>
          </div>
          <div id="leadership" className="section">
            <Leadership></Leadership>
          </div>
          <div id="contactme" className="section">
            <ContactMe></ContactMe>
          </div>

        </div>
      </BrowserRouter>
    );
  }  
}

export default App;

