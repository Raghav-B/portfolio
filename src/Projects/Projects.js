import React from 'react';
import '../App.css';
import "../Section.css";
import "./Projects.css";
 
function Projects(props) {
    return (
        <div className="section_container">
            <h1 className="scroll_anim init_bottom">Projects</h1>
            <div className="scroll_anim init_top">Hover over images to learn more.</div>
            <br/><br/>

            <div className="row">
                <div className="column scroll_anim init_left">
                    <a href="https://github.com/Raghav-B/poke.AI">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>poke.AI - AI that learns to play Pokemon</h3>
                                <div className="project_body_text">
                                A multi-faceted AI that learns to play the Nintendo Pokemon games. 
                                It uses a convolutional neural network coupled with an algorithm that employs
                                elements of SLAM and Frontier-Based Exploration to map and explore its 
                                environment together with a Deep Q Learning network for learning the Pokemon 
                                battle system.
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/poke.ai.png")}></img>
                        </div>
                    </a>
                    
                    <a href="https://github.com/Raghav-B/FPGA-audio-vis">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>FPGA-based Audio Sampler & Visualizer</h3>
                                <div className="project_body_text">
                                Used the Basys-3 FPGA for demonstrating 
                                different visual and audio analysis applications based on our processing 
                                of an input audio signal. 
                                <br/><br/>
                                These applications included a Flappy-bird-esque game based with input based
                                on amplitude, a real-time music visualizer with simulated physics, and an
                                accurate frequency detector.
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/fpga_wave_detection.jpg")}></img>
                        </div>
                    </a>
                    
                    <a href="https://github.com/Raghav-B/remote-snr-bot">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Remotely-Controlled SLAM-based <br/> Search & Rescue Robot</h3>
                                <div className="project_body_text">
                                Led a team of 4 to design a remotely-operated search 
                                and rescue robot with no live video feed. The robot was built around a 
                                Raspberry Pi running Robot Operating System so it could be controlled
                                by through any SSH client. 
                                <br/><br/>
                                The robot used a LIDAR to implement the Simultaneous Localization and 
                                Mapping (SLAM) algorithm to actively learn and navigate through its 
                                surroundings, with a small camera to perform autonomous feature 
                                detection using OpenCV independent of the client.
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/slam_example.png")}></img>
                        </div>
                    </a>

                    <a href="https://github.com/Raghav-B/dungeon-crawl">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Dungeon Crawl - <br/> MMORPG that Gamifies Education</h3>
                                <div className="project_body_text">
                                A prototype RPG written in C# using the Unity3D engine in 
                                a team of 4 
                                during the IEEE Hackathon 2019. It gamifies quizzes input by 
                                teachers in the form of levels and rewards students’ progress with 
                                collectibles and boss fights.
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/boss_battle.png")}></img>
                        </div>
                    </a>
                </div>

                <div className="column scroll_anim init_right">
                    <a href="https://github.com/Raghav-B/cctv-crash-detector">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>AI-based CCTV Traffic Accident Detector</h3>
                                <div className="project_body_text">
                                Uses a Convolutional Neural Network (CNN) together with an object-vector-
                                tracking algorithm to detect traffic accidents in real-time. The CNN was 
                                used to detect vehicles in every frame, along with a custom algorithm to 
                                track detected vehicles and their estimated velocity vectors across 
                                consecutive frames. 
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/cctv_crash_detector_ui.png")}></img>
                        </div>
                    </a>
                    
                    <a href="https://github.com/AY1920S1-CS2113T-F09-3/main">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Eggventory – Command-based <br/> Inventory Management</h3>
                                <div className="project_body_text">
                                A Java application developed in a team of 5 for the NUS Faculty of 
                                Engineering to help lab technicians perform faster inventory management. 
                                It used an easy-to-use command line interface for quick adding, editing, 
                                and deleting of stocks, supported by a predictive autocomplete 
                                functionality.
                                <br/><br/>
                                This project focused on OOP and other software engineering principles 
                                such as version control with Git, unit testing with JUnit, and continuous 
                                integration testing with TravisCI to ensure stability of application 
                                through all stages of development.
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/eggventory_ui.png")}></img>
                        </div>
                    </a>
                    
                    <div className="img_container">
                        <div className="project_text_panel">
                            <h3>Digitrolley - Automated Inventory Management <br/>for SAF Medical Centers</h3>
                            <div className="project_body_text">
                            An automated inventory management system for emergency resuscitation 
                            trolleys in Medical Centres in the Singapore Armed Forces (SAF). It aimed 
                            to reduce human errors and achieve better allocation of resources by 
                            avoiding the menial task of manual inventory checking.
                            <br/><br/>
                            The inventory management was written in Python and C++ and used pressure 
                            sensors to detect misplacement or loss of items by cross-checking with a 
                            SQL database.
                            </div>
                        </div>
                        <img className="project_image" src={require("./imgs/innoventure_exploded_cad.png")}></img>
                    </div>

                    <a href="https://www.longdom.org/open-access/the-ergonomic-development-of-video-game-controllers-2165-7556-1000209.pdf">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Research on Ergonomic Development <br/>of Video-Game Controllers</h3>
                                <div className="project_body_text">
                                Published research on the analysis of the development of video game 
                                controllers over the last 25 years in terms of their ergonomics. 
                                </div>
                                <h3>Click to view research paper</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/controller_research.png")}></img>
                        </div>
                    </a>
                </div>

                <div className="column scroll_anim init_right">
                    <div className="img_container">
                        <div className="project_text_panel">
                            <h3>Hornet Autonomous Underwater Vehicle</h3>
                            <div className="project_body_text">
                            An Autonomous Underwater Vehicle (AUV) developed in a team of 30 members 
                            to compete in the Singapore AUV Challenge 2019. The challenge drew teams 
                            from universities and educational institutions from across the globe. 
                            It consisted of a series of tasks such as placing balls in buckets, 
                            path-finding through specific gates, and others to be completed fully 
                            autonomously by each team’s AUV.
                            <br/><br/>
                            As a member of Team Hornet, I developed the AUV’s computer vision systems 
                            using Python and OpenCV, while learning to integrate my sub-system with 
                            the rest of the AUV’s systems using the Robot Operating System. 
                            </div>
                        </div>
                        <img className="project_image" src={require("./imgs/hornet_robot.png")}></img>
                    </div>

                    <a href="https://github.com/Raghav-B/arduino-mazebot">
                        <div className="img_container">
                            <div className="project_text_panel">
                                <h3>Path-finding & Maze-traversal Robot</h3>
                                <div className="project_body_text">
                                An Arduino-based autonomous robot created in a team of 5 that cleared 
                                colour detection, obstacle avoidance, and sound analysis challenges to 
                                traverse a maze.
                                <br/><br/>
                                Our team cleared the maze in the fastest time amongst the other teams’ 
                                robots, passing all the challenges with 0 collisions.
                                </div>
                                <h3>Click to view on GitHub</h3>
                            </div>
                            <img className="project_image" src={require("./imgs/video_frame.png")}></img>
                        </div>
                    </a>

                    <div className="img_container">
                        <div className="project_text_panel">
                            <h3>Bloccad – Minecraft-esque <br/> CAD Modelling App</h3>
                            <div className="project_body_text">
                            A CAD modelling app inspired by Minecraft to introduce inexperienced or 
                            young users to 3D printing and CAD modelling. It was developed in C# 
                            using the Unity3D engine and was published on the Google Play Store.
                            <br/><br/>
                            This was my first foray into computing. Inspired by the personal 
                            difficulties I faced when learning CAD software for Industrial Design, 
                            I decided to use Unity3D to develop my very own CAD modelling app 
                            catered towards beginners.
                            </div>
                        </div>
                        <img className="project_image" src={require("./imgs/bloccad_demo.png")}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Projects;