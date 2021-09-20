import React from "react";
import "../Section.css";
import UWCSEALogo from "./imgs/uwcsea_logo.png";
import NUSLogo from "./imgs/nus_logo.png";
import "./Education.css";
import "../Animations.css";

function Education(props) {
  return (
    <div align="center" >
      <div>
        <h1>Education</h1>

        <div className="education_panel scroll_anim init_left">
          <div className="logo_frame">
            <img src={NUSLogo}></img>
          </div>
          <div className="education_body_text">
            <div>
              <h3>National University of Singapore - B.E. Computer Engineering, Honours</h3>
              <h4>Aug 2018 - Present</h4>
              Current Cumulative Average Point (CAP): <b>4.43 / 5.00</b>
              <br />Expected Date of Graduation: <b>May 2022</b>
              <br />
              <br />Relevant modules:
              <li>Data Structures & Algorithms</li>
              <li>Software Engineering & OOP</li>
              <li>Real-time Operating Systems</li>
              <li>Artificial Intelligence</li>
              <li>Digital Design</li>
              <li>Transistor-level Digital Circuits</li>
              <li>Computer Organization</li>
            </div>
          </div>
        </div>

        <div className="education_panel scroll_anim init_left">
          <div className="logo_frame">
            <img src={UWCSEALogo}></img>
          </div>
          <div className="education_body_text">
            <h3>United World College of South East Asia - International Baccalaureate Diploma</h3>
            <h4>Aug 2011 - Jul 2016</h4>
            Subjects taken:
            <li>Higher Level Maths</li>
            <li>Higher Level Physics</li>
            <li>Higher Level Geography</li>
            <li>Standard Level Design & Technology</li>
            <li>Standard Level English A & Hindi A</li>
            <br />
            Achieved Bilingual Diploma in English & Hindi
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Education;