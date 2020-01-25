import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import "../Section.css";
import "./Awards.css";
import ProgressBar from "./ProgressBar.js";
 
function Awards(props) {
    return (
        <div className="section_container">
            <h1 className="scroll_anim init_bottom">Skills & Awards</h1>

            <div className="skill_bar_container scroll_anim init_bottom">
                <div className="skill_bar_column">
                    <ProgressBar 
                        skill="C | C++ | C#"
                        percent="80%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="Python"
                        percent="80%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="Java"
                        percent="60%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="JavaScript | CSS | HTML"
                        percent="30%">
                    </ProgressBar>
                </div>

                <div className="skill_bar_column">
                    <ProgressBar 
                        skill="AI & Computer Vision: TensorFlow | Keras | OpenCV"
                        percent="60%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="JavaScript | CSS | HTML"
                        percent="30%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="Linux"
                        percent="90%">
                    </ProgressBar>
                    <ProgressBar
                        skill="Git | Gradle | TravisCI"
                        percent="70%">
                    </ProgressBar>
                    
                </div>
            </div>
        </div>
    )
}
 
export default Awards;