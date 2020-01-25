import React from 'react';
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
                        skill="JavaScript | CSS | HTML | ReactJS"
                        percent="30%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="Linux"
                        percent="85%">
                    </ProgressBar>
                    <ProgressBar
                        skill="Git | Gradle | TravisCI"
                        percent="70%">
                    </ProgressBar>
                </div>

                <div className="skill_bar_column">
                    <ProgressBar 
                        skill="AI & Computer Vision: TensorFlow | Keras | OpenCV"
                        percent="65%">
                    </ProgressBar>
                    <ProgressBar
                        skill="Embedded Systems Development: ARM | AVR"
                        percent="70%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="Robot Operating System | freeRTOS"
                        percent="50%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="3D App Development & Animation: Unity3D | Blender"
                        percent="55%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="CAD Modelling: Fusion360 | Solidworks | NX PLM"
                        percent="75%">
                    </ProgressBar>
                    <ProgressBar 
                        skill="Miscellaneous: Photoshop | Illustrator | Premiere Pro"
                        percent="75%">
                    </ProgressBar>
                    
                    
                    
                </div>
            </div>

            <div className="award_panel scroll_anim init_right">
                <div className="award_picture_frame">
                    <img src={require("./imgs/NYAA.jpg")}></img>
                </div>
                <div className="award_body_text">
                    <h3>National Youth Achievement Award - Gold</h3>
                    <h4>November 2017</h4>
                    Awarded by H.E. President Halimah Yacob and current Deupty Prime Minister Heng Swee
                    Keat for demonstrating exceptional leadership abilities and contributing in 
                    numerous volunteer service opportunities throughout High School.
                    <br/><br/>
                    I was also featured on the President’s Facebook page, Channel NewsAsia and 
                    The Straits Times for planning and leading an edible garden project for 
                    a fishing village in Bintan.
                </div>
            </div>

            <div className="award_panel scroll_anim init_right">
                <div className="award_picture_frame">
                    <img src={require("./imgs/BSOM.png")}></img>
                </div>
                <div className="award_body_text">
                    <h3>Best Soldier of the Month - SAF Military Police Command</h3>
                    <h4>July 2017</h4>
                    Awarded the Best Soldier of the Month Award and an additional Letter of 
                    Commendation from the Commander of the Military Police Command for my
                    exceptional performance and for demonstrating resilience under the 
                    taxing environment of the Singapore Armed Forces Detention Barracks.
                </div>
            </div>
            
        </div>
    )
}
 
export default Awards;