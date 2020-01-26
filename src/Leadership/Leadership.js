import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import "../Section.css";
import "../Projects/Projects.css";
 
function Leadership(props) {
    return (
        <div className="section_container">
            <h1 className="scroll_anim init_bottom">Leadership & Volunteer Service</h1>
            <div className="scroll_anim init_top">Hover over images to learn more.</div>
            <br/><br/>

            <div className="main_flex_container">
                <div className="row">

                    <div className="column scroll_anim init_left">
                        
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Captain / CTO, NUS RoboMaster</h3>
                                <div className="project_body_text">
                                Beyond leading the technical development of the robots for the DJI RoboMaster 
                                Competition, as the Captain of the team I am also involved in various efforts
                                to market our team to gain sponsorships or other additional support from NUS. 
                                </div>
                            </div>
                            <img className="project_image" src={require("./imgs/robomaster_talk.JPG")}></img>
                        </div>

                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Head of Publicity, <br/>Engineering Freshman Orientation Camp</h3>
                                <div className="project_body_text">
                                Marketed the annual freshman camp through Instagram and Facebook to incoming freshmen
                                to garner a turnout of about 200 participants. Apart from shaping promotional materials 
                                such as posters and videos, I also emceed in the camp's finale night and during other
                                camp-wide events.
                                </div>
                            </div>
                            <img className="project_image" src={require("./imgs/engincamp_emcee.jpg")}></img>
                        </div>
                        
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>General Secretary & Cohort Representative, <br/>NUS ECE Undergraduate Student Council</h3>
                                <div className="project_body_text">
                                Elected as Cohort Representative for the Computer Engineering 2018/2019 cohort 
                                of 170 students. Worked with the rest of the student council to enhance communication 
                                between the cohort and NUS staff to resolve any academic, administrative, or 
                                welfare-related issues the cohort might be facing. 
                                <br/><br/>
                                Later elected as the General Secretary of the USC in September 2019 in addition to my
                                role as a cohort representative. Was also involved with emceeing for various events 
                                such as the annual Freshman Party.
                                </div>
                            </div>
                            <img className="project_image" src={require("./imgs/freshman_emcee.JPG")}></img>
                        </div>
                    </div>

                    <div className="column scroll_anim init_right">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Singapore Computer Society <br/>AI & Innovation Challenge 2019</h3>
                                <div className="project_body_text">
                                While developing the CCTV Traffic Accident detector in a team of 3, I was also involved
                                with pitching our project to a panel of judges consisting of industry professionals working
                                with AI in Singapore. 
                                <br/><br/>
                                Our team ended this competition as one of the top 10 finalists from an initial pool 
                                of 70+ teams.
                                </div>
                            </div>
                            <img className="project_image" src={require("./imgs/splash_awards2.jpg")}></img>
                        </div>
    
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Frontend Web Development Tutor, <br/> Ulu Pandan Star Tuition</h3>
                                <div className="project_body_text">
                                Tutored a group of 10 Primary School students on web development using HTML, 
                                CSS, and JavaScript on behalf of the NUS School of Computing.
                                </div>
                            </div>
                            <img className="project_image" src={require("./imgs/web_dev.jpg")}></img>
                        </div>
                        
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Planner, Bintan Boat Restoration Project</h3>
                                <div className="project_body_text">
                                Planned and led a trip to a fishing village in Bintan to repair unseaworthy 
                                boats to create planters to use as edible gardens for the residents of the village. This
                                aimed to help alleviate unsustainable fishing by introducing alternate food sources.
                                <br/><br/>
                                In recognition of this project, was later awarded the National Youth Achievement Award by
                                H.E. Madam President Halimah Yacob.
                                </div>
                            </div>
                            <img className="project_image" src={require("./imgs/bintan_boat_restoration.png")}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Leadership;