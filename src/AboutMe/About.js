import React from "react"
import Showcase from "./AboutShowcase.js";
import "../Section.css"
import "./About.css"
import GithubLogo from "./imgs/github1.svg";
import LinkedInLogo from "./imgs/linkedin1.svg";
import ScrollArrow from "./imgs/Scrollarrow.png";
 
function About(props) {
  return (
    <div align="center" >
      <div className="section_container">
        <br/><br/>
        <h1>Raghav Bhardwaj</h1>
        <br/>
        <div className="about_body_text">
          <h2>Welcome!</h2>
          I am Raghav, a Computer Engineering sophomore at the National University of Singapore,
          and a receipient of the National Youth Achievement Award from H.E. Madam President Halimah Yacob.
          <br/><br/>
          I love experimenting with new ideas and tech, and am constantly on the lookout for opportunities
          to better myself - <i>I believe that it is only after pushing ourselves beyond our limits that
          innovation takes place.</i>
          <br/><br/>
          Some of my areas of interest include:
          <li>AI & Deep Learning</li>
          <li>Robotics</li>
          <li>Leadership & Volunteer Service</li>
          <li>Public Speaking & Pitching</li>
          <br/>
          This website serves as my portfolio and showcases my work experiences and noteworthy technical 
          and non-technical projects. 

          <div align="center">
            <a className="logo_row" href="https://github.com/Raghav-B">
              <img src={GithubLogo}></img>
            </a>
            <a className="logo_row" href="https://www.linkedin.com/in/raghav-b">
              <img src={LinkedInLogo}></img>
            </a>
          </div>
        </div>

        <div className="about_slide_showcase">
          <Showcase></Showcase>
        </div>

        <div className="scroll_arrow">
          <img src={ScrollArrow}></img>
        </div>
      </div>
    </div>
  )
}
 
export default About;