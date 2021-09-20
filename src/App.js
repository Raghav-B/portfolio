import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import About from "./components/About.js";
import Education from "./Education/Education.js";
import Awards from "./Awards/Awards.js";
import WorkExperience from "./WorkExperience/WorkExperience.js";
import Projects from "./Projects/Projects.js";
import Leadership from "./Leadership/Leadership.js";
import ContactMe from "./ContactMe/ContactMe.js";
import './App.css';
import "./Animations.css";
import NavBar from './common/NavBar.js';

var isClickScrolling = false;
var scrollTimer = -1;

function App() {

  return (
    <BrowserRouter>

      <NavBar></NavBar>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "JosefinSans",
        fontWeight: 200,
        backgroundColor: "#E6E6E6",
        height: "100%",
        width: "100%"
      }}>

        <div id="aboutme">
          <About></About>
        </div>
        {/* <div id="education" className="section">
          <Education></Education>
        </div>
        <div id="awards" className="section">
          <Awards></Awards>
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
        </div> */}

      </div>
    </BrowserRouter >
  );
}

// class App extends Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

// handleScroll() {
//   if (isClickScrolling == false) {
//     var sectionArr = document.getElementsByClassName("section");

//     for (var i = 0; i < sectionArr.length; i++) {
//       const top = sectionArr[i].getBoundingClientRect().top;

//       if (top >= -40 && top <= window.innerHeight) {
//         window.location.hash = sectionArr[i].id;

//         var curSection = sectionArr[i].id + "_anchor";
//         var buttonArr = document.getElementsByClassName("content");

//         for (var i = 0; i < buttonArr.length; i++) {
//           if (buttonArr[i].id == curSection) {
//             buttonArr[i].className = "content nav_bar_selected";
//           } else {
//             buttonArr[i].className = "content nav_bar_unselected active";
//           }
//         }
//       }
//     }
//   } else {
//     if (scrollTimer != -1) {
//       clearTimeout(scrollTimer);
//     }

//     scrollTimer = setTimeout(function () {
//       isClickScrolling = false;
//     }, 150);
//   }
// }

// navHighlight(event) {
//   isClickScrolling = true;

//   var curSection = event.target.id;
//   var buttonArr = document.getElementsByClassName("content");

//   for (var i = 0; i < buttonArr.length; i++) {
//     if (buttonArr[i].id == curSection) {
//       buttonArr[i].className = "content nav_bar_selected";
//     } else {
//       buttonArr[i].className = "content nav_bar_unselected active";
//     }
//   }
// }

//   render() {
//     return (

//     );
//   }
// }

export default App;

