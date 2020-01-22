import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Thumbnail from '../Thumbnail.js';
import '../App.css';
import "../Thumbnail.css";
import RoboMaster from "../WorkExperience/RoboMaster.js";

 
function Projects(props) {
    return (
        <BrowserRouter>
            <Route path="/robomaster" component={RoboMaster} />
            <br/><br/>
            <div>
                <h1>Projects</h1>
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/eggventory_ui.png")}
                    title="Eggventory, CLI-based Inventory Management"
                    category="Sep 2019 - Dec 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/cctv_crash_detector.jpg")}
                    title="AI-Based CCTV Accident Detector"
                    category="Jun 2019 - Sep 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/poke.ai_gui.png")}
                    title="poke.AI - AI that plays Pokemon"
                    category="May 2019 - Aug 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/fpga_audio_vis.jpeg")}
                    title="FPGA-Based Audio Sampler & Visualizer"
                    category="Mar 2019 - Apr 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/snr_bot.jpg")}
                    title="Remotely-Controller Search & Rescue Robot"
                    category="Feb 2019 - Apr 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/innoventure_exploded_cad.png")}
                    title="Automatic Inventory Management for SAF MCs"
                    category="Sep 2018 - Apr 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/hornet_robot.png")}
                    title="Team Hornet - Autonomous Underwater Vehicle"
                    category="Aug 2018 - Mar 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/dc_world_quiz.png")}
                    title="Dungeon Crawl - Quizzes Gamified as an RPG"
                    category="Feb 2019"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/video_frame.png")}
                    title="Path-Finding & Maze Traversal Robot"
                    category="Nov 2018 - Dec 2018"
                />
                <Thumbnail
                    link="robomaster"
                    image={require("./imgs/bloccad_mobile.jpg")}
                    title="Bloccad, Minecraft-esque CAD Modelling"
                    category="Jun 2017 - Aug 2018"
                />
            </div>
        </BrowserRouter>
    )
}
 
export default Projects;