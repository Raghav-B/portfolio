import React from 'react';
import Thumbnail from '../Thumbnail.js';
import '../App.css';
import "../Thumbnail.css";
import "../Section.css";
import "./Projects.css";
 
function Projects(props) {
    return (
        <div className="section_container">
            <h1>Projects</h1>
            
            <div className="main_flex_container">
                <div className="row">
                    <div className="column">
                        <img src={require("./imgs/poke.ai_gui.png")}></img>
                        <img src={require("./imgs/fpga_audio_vis.jpeg")}></img>
                        <img src={require("./imgs/snr_bot.jpg")}></img>
                    </div>
                    <div className="column">
                        <img src={require("./imgs/innoventure_exploded_cad.png")}></img>
                        <img src={require("./imgs/hornet_robot.png")}></img>
                        <img src={require("./imgs/dc_world_quiz.png")}></img>
                    </div>
                    <div className="column">
                        <img src={require("./imgs/video_frame.png")}></img>
                        <img src={require("./imgs/bloccad_mobile.jpg")}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Projects;