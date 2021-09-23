import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Doodles from "./components/Doodles.js";
import NavBar from './common/NavBar.js';
import About from "./components/About.js";
import WorkExperience from './components/WorkExperience.js';
import Projects from './components/Projects.js';
import './App.css';
import Education from './components/Education.js';
import Press from './components/Press.js';
import Contact from './components/Contact.js';

import "./Animations.css";

function App() {

  const mainRef = useRef(null);
  const [mainHeight, setMainHeight] = useState(window.innerHeight);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const educationRef = useRef(null);
  const pressRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setMainHeight(mainRef.current.offsetHeight);
  }, []);

  return (
    <div>

      <Doodles
        mainHeight={mainHeight}
      />
      <NavBar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        workExperienceRef={workExperienceRef}
        educationRef={educationRef}
        pressRef={pressRef}
        contactRef={contactRef}
      ></NavBar>

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
          height: "100%",
          overflow: "hidden"
        }}>

        <div ref={aboutRef}></div>
        <About></About>

        <div ref={projectsRef}></div>
        <Projects></Projects>

        <div ref={workExperienceRef}></div>
        <WorkExperience></WorkExperience>

        <div ref={educationRef}></div>
        <Education></Education>

        <div ref={pressRef}></div>
        <Press></Press>

        <div ref={contactRef}></div>
        <Contact></Contact>
      </div>
    </div >
  );
}

export default App;

