import React from "react";
// import "../Section.css"
// import "./About.css"
// import GithubLogo from "./imgs/github1.svg";
// import LinkedInLogo from "./imgs/linkedin1.svg";
// import ScrollArrow from "./imgs/Scrollarrow.png";
// import "../Animations.css";
// import { BrowserRouter, Route } from 'react-router-dom';
// import { NavHashLink as Link } from 'react-router-hash-link';
import ImageSlider from "./ImageSlider.js";

function About(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}>
      <h1
        style={{
          marginTop: "5%"
        }}
      >
        Raghav Bhardwaj
      </h1>

      <ImageSlider></ImageSlider>
    </div>


    // <div align="center" >
    //   <div className="section_container">
    //     <br /><br /><br />
    //     <h2 className="scroll_anim init_invisible">Raghav Bhardwaj</h2>
    //     <br />

    //     <div className="about_container">
    //       <div className="about_body_text scroll_anim init_left">
    //         <h2>Welcome!</h2>
    //         I am Raghav, a Computer Engineering sophomore at the National University of Singapore,
    //         and a receipient of the National Youth Achievement Award from H.E. Madam President Halimah Yacob.
    //         <br /><br />
    //         I love experimenting with new ideas and tech, and am constantly on the lookout for opportunities
    //         to better myself. I gain great satisfaction in pushing the envelope no matter
    //         what I'm working on - <i>I believe that it is only after pushing ourselves beyond our limits that
    //           innovation takes place.</i>
    //         <br /><br />
    //         Some of my areas of interest include:
    //         <li>AI & Deep Learning</li>
    //         <li>Robotics</li>
    //         <li>Industrial Design & Rapid Prototyping</li>
    //         <li>Leadership & Volunteer Service</li>
    //         <li>Public Speaking & Pitching</li>
    //         <br />
    //         This website serves as my portfolio and showcases my work experiences and noteworthy technical
    //         and non-technical projects.

    //         <div align="center">
    //           <a className="logo_row" href="https://github.com/Raghav-B">
    //             <img src={GithubLogo}></img>
    //           </a>
    //           <a className="logo_row" href="https://www.linkedin.com/in/raghav-b">
    //             <img src={LinkedInLogo}></img>
    //           </a>
    //         </div>
    //       </div>

    //       <div className="about_slide_showcase scroll_anim init_right">
    //         <Showcase></Showcase>
    //       </div>
    //     </div>

    //     <h3 className="scroll_anim init_invisible">Scroll down for more</h3>

    //     <BrowserRouter>
    //       <div className="scroll_arrow scroll_anim init_invisible">
    //         <Link
    //           id="scroll_arrow"
    //           to="#education">
    //           <img src={ScrollArrow}></img>
    //         </Link>
    //       </div>
    //     </BrowserRouter>

    //   </div>
    // </div >
  )
}

export default About;