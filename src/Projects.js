import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import RoboMaster from "./Experience/RoboMaster.js";
 
function Projects(props) {
    return (
        <BrowserRouter>
            <Route path="/robomaster" component={RoboMaster} />

            <div>
                <h1>Experience</h1>
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/workshop_members.jpg")}
                    title="Captain, NUS RoboMaster Team"
                    category="Nov 2019 - Present"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/anomaly_detection.png")}
                    title="AI & ML Part-Timer, Panasonic"
                    category="Nov 2019 - Jan 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/code_blur.png")}
                    title="Teaching Assistant, NUS School of Computing"
                    category="Aug 2019 - Dec 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/detection_test.jpg")}
                    title="Deep Learning Intern, Panasonic"
                    category="May 2019 - Aug 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="Hardware Intern, Lemnis Technologies"
                    category="Dec 2018 - Jan 2019"
                />

                <h1>Projects</h1>
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="Eggventory, CLI-based Inventory Management"
                    category="Sep 2019 - Dec 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="AI-Based CCTV Accident Detector"
                    category="Jun 2019 - Sep 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="poke.AI - AI that plays Pokemon"
                    category="May 2019 - Aug 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="FPGA-Based Audio Sampler & Visualizer"
                    category="Mar 2019 - Apr 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="Remotely-Controller Search & Rescue Robot"
                    category="Feb 2019 - Apr 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="Automatic Inventory Management for SAF MCs"
                    category="Sep 2018 - Apr 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="Eggventory, CLI-based Inventory Management"
                    category="Sep 2019 - Dec 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./Experience/imgs/zed_mini.jpg")}
                    title="Team Hornet - Autonomous Underwater Vehicle"
                    category="Aug 2018 - Dec 2019"
                />
            </div>
        </BrowserRouter>
    )
}
 
export default Projects;