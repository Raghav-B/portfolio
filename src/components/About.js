import React from "react";
import ImageSlider from "./ImageSlider.js";
import RoleSlider from "./RoleSlider.js";
import "./About.css";


function About(props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      zIndex: 1
    }}>
      <div
        // className="scroll_anim init_top"
        style={{
          fontSize: "50px",
          marginTop: "3%",
        }}
      >
        Raghav Bhardwaj
      </div>

      <RoleSlider></RoleSlider>

      <div
        // className="scroll_anim init_bottom"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "2%",
          width: "10%",
        }}
      >
        <a
          className="logoImage"
          href="https://github.com/Raghav-B">
          <img
            src={require("../imgs/Icons/github.svg")}
          ></img>
        </a>

        <a
          className="logoImage"
          href="https://www.linkedin.com/in/raghavbhardwaj/">
          <img
            src={require("../imgs/Icons/linkedin.svg")}
          >
          </img>
        </a>
      </div>

      <ImageSlider></ImageSlider>

      <div
        className="scroll_anim init_bottom"
        style={{
          fontSize: "50px",
          marginBottom: "20px",
          textAlign: "center"
        }}
      >
        What I bring to the table
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "3%"
        }}
      >
        <div
          className="tableText"
        >
          Demonstrated ability to <br /><b>learn anything quickly</b>
        </div>
        <div
          className="tableText"
        >
          Out-of-the-box <b>problem-solving</b> <br />through <b>multidisciplinary skills</b>
        </div>
        <div
          className="tableText"
        >
          Excellent <b>communication</b> <br />and <b>collaboration</b> skills
        </div>
      </div>




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