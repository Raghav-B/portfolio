import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';
import "../Thumbnail.css";
import "../Section.css";
import Showcase from "../Showcase.js";
 
function Projects(props) {
    return (
        <BrowserRouter>
            <div className="section_container">
                <br/><br/>
                <h1>Work Experience</h1>
                
                <Showcase></Showcase>

                <h2>2020</h2>
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/workshop_members.jpg")}
                    title="Captain, NUS RoboMaster Team"
                    category="Nov 2019 - Present"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/anomaly_detection.png")}
                    title="AI & ML Part-Timer, Panasonic"
                    category="Nov 2019 - Jan 2020"
                />

                <h2>2019</h2>
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/code_blur.png")}
                    title="Teaching Assistant, NUS School of Computing"
                    category="Aug 2019 - Dec 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/detection_test.jpg")}
                    title="Deep Learning Intern, Panasonic"
                    category="May 2019 - Aug 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/zed_mini.jpg")}
                    title="Hardware Intern, Lemnis Technologies"
                    category="Dec 2018 - Jan 2019"
                />               
                

                <br/><br/><br/><br/>
            </div>

            <div className="section_endline"></div>
        </BrowserRouter>
    )
}
 
export default Projects;