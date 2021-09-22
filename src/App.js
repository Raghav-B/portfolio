import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Doodles from "./components/Doodles.js";
import NavBar from './common/NavBar.js';
import About from "./components/About.js";
import WorkExperience from './components/WorkExperience.js';
import Projects from './components/Projects.js';
import './App.css';

var isClickScrolling = false;
var scrollTimer = -1;

function App() {

  const mainRef = useRef(null);
  const [mainHeight, setMainHeight] = useState(window.innerHeight);

  useEffect(() => {
    setMainHeight(mainRef.current.offsetHeight);
  }, []);

  return (
    <BrowserRouter>

      <Doodles
        mainHeight={mainHeight}
      />
      <NavBar></NavBar>

      <div
        ref={mainRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "JosefinSans",
          backgroundColor: "#E6E6E6",
          fontWeight: 200,
          width: "100%",
          height: "100%"
        }}>

        {/* <About></About> */}
        <Projects></Projects>
        <WorkExperience></WorkExperience>





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

