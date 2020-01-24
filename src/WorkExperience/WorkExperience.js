import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import "../Section.css";
import "./WorkExperience.css";
 
function Projects(props) {
    return (
        <div className="section_container">
            <h1>Work Experience</h1>
            
            <div>
                <div className="experience_body_text">
                    <h3>Captain / CTO, NUS RoboMaster</h3>
                    <h4>Nov 2019 - Present</h4>
                    The DJI RoboMaster Robotics Competition is annually held in Shenzhen, China. 
                    It involves teams engaging in a MOBA-like (Massively Online Battle Arena) 
                    scenario often found in popular video games like DOTA 2 and League of Legends. 
                    The only difference is that instead of virtual in-game characters, custom-built robots are used.
                    <br/><br/>
                    As the Captain of the NUS RoboMaster team, I not only lead the team in the 
                    technical development of the robots, but also manage the operations and 
                    organization of the team.
                    <br/><br/>
                    This is the first year that NUS is taking part in the competition, and so 
                    it is very important that the team lays a strong foundation for the future 
                    NUS RoboMaster teams to come.
                </div>
                <div className="experience_showcase">
                    <div className="experience_showcase_containerx3">
                        <figure>
                            <img src={require("./imgs/robomaster/2019_arena.jpg")}></img>
                            <img src={require("./imgs/robomaster/workshop_members.jpg")}></img>
                            <img src={require("./imgs/robomaster/chassis_closeup.jpg")}></img>
                            <img src={require("./imgs/robomaster/2019_arena.jpg")}></img>
                        </figure>
                    </div>
                    <div className="experience_skills">
                        <li>C Programming</li>
                        <li>Embedded Systems Development - ARM</li>
                        <li>Drone Design & Development</li>
                        <li>Electrical Architecture Design</li>
                        <li>Computer Vision</li>
                    </div>
                </div>
            </div>

            <div>
                <div className="experience_body_text">
                    <h3>AI & Machine Learning Part-Timer, Panasonic R&D Center</h3>
                    <h4>Aug 2019 - Jan 2019</h4>
                    A project to design a system that is able to perform anomaly detection on the 
                    operation of refrigerators and other machinery based on past and real-time data 
                    collected by their various sensors. 
                    <br/><br/>
                    This required an unsupervised learning solution as there were no labels on \
                    the data that could be used to train a classification machine learning 
                    system. Thus, I employed clustering analysis techniques to determine 
                    discrete classes in the data, along with time series analysis to infer 
                    a confidence rating of certain behaviour of the machinery being a true 
                    positive anomaly.
                    <br/><br/>
                    In addition, this project also involved considerable elements of data science, 
                    as I analysed, cleaned and augmented months of data before using it to develop 
                    the anomaly detection system.
                </div>
                <div className="experience_showcase">
                    <div className="experience_showcase_container">
                        <img src={require("./imgs/panasonic/anomaly_detection.png")}></img>
                    </div>
                    <div className="experience_skills">
                        <li>Python</li>
                        <li>Unix</li>
                        <li>Data Analysis & Augmentation - Pandas</li>
                        <li>Unsupervised Learning - Anomaly Detection</li>
                    </div>
                </div>
            </div>

            <div>
                <div className="experience_body_text">
                    <h3>Teaching Assistant, NUS School of Computing</h3>
                    <h4>Aug 2019 - Dec 2019</h4>
                    Taught the C programming language to a class of 20 students taking the 
                    Programming Methodology module at the NUS School of Computing. I was 
                    selected as a Teaching Assistant upon receiving an A for the same module.
                    <br/><br/>
                    I often held live coding sessions to better demonstrate the thinking process
                    that goes into programming, and also encouraged students not to limit their
                    learning to the classroom alone by often delving into connection across
                    modules to give students a more holistic understanding and innate intuition
                    of basic programming.
                </div>
                <div className="experience_showcase">
                    <div className="experience_showcase_container">
                        <img src={require("./imgs/teaching_assistant/example_code.jpg")}></img>
                    </div>
                    <div className="experience_skills">
                        <li>C Programming</li>
                        <li>Unix & Command Line Interfaces</li>
                        <li>Data Structures & Algorithms</li>
                    </div>
                </div>
            </div>

            <div>
                <div className="experience_body_text">
                    <h3>Deep Learning Intern, Panasonic R&D Center</h3>
                    <h4>May 2019 - Aug 2019</h4>
                    An internship where I independently worked on a research project 
                    that performed real-time object detection, automated stock 
                    counting and misplacement detection in a commercial setting.
                    <br/><br/>
                    The project used the RetinaNet Convolutional Neural Network implemented 
                    in Keras that was trained on a custom dataset with 12 different classes.
                    <br/><br/>
                    This was my first foray into Machine Learning, and so I spent many days
                    reading textbooks, doing online courses and perusing research papers to
                    gain all the knowledge I needed to finish this project.
                </div>
                <div className="experience_showcase">
                    <div className="experience_showcase_containerx3">
                        <figure>
                            <img src={require("./imgs/panasonic/full_detection_test.jpg")}></img>
                            <img src={require("./imgs/panasonic/model_training.jpg")}></img>
                            <img src={require("./imgs/panasonic/detection_test.jpg")}></img>
                            <img src={require("./imgs/panasonic/full_detection_test.jpg")}></img>
                        </figure>
                    </div>
                    <div className="experience_skills">
                        <li>Python</li>
                        <li>Unix</li>
                        <li>Deep Learning - Keras & TensorFlow</li>
                        <li>Computer Vision - OpenCV</li>
                    </div>
                </div>
            </div>

            <div>
                <div className="experience_body_text">
                    <h3>Hardware Intern, Lemnis Technologies</h3>
                    <h4>Dec 2018 - Jan 2019</h4>
                    Lemnis Technologies is a start-up that designs specialized Virtual Reality 
                    headsets to combat motion sickness and to make the experience more immersive 
                    and comfortable for users.
                    <br/><br/>
                    I was involved in a variety of roles ranging from building and programming 
                    a 6-degree-of-freedom robotic arm for the testing of VR headsets, writing 
                    software flashing of firmware to the headsets, and even designing custom 
                    attachments for augmenting VR headsets with stereo vision capabilities.
                    <br/><br/>
                    I especially enjoyed the dynamic work environment at Lemnis Technologies 
                    where I had to rely on multidisciplinary skills and needed to learn as I 
                    went along to fulfil deliverables under tight deadlines. This was very 
                    different from the structured nature of future internships.
                </div>
                <div className="experience_showcase">
                    <div className="experience_showcase_containerx3">
                        <figure>
                            <img src={require("./imgs/lemnis/zed_mini.jpg")}></img>
                            <img src={require("./imgs/lemnis/unity_demo.jpg")}></img>
                            <img src={require("./imgs/lemnis/SuperToolUI.png")}></img>
                            <img src={require("./imgs/lemnis/zed_mini.jpg")}></img>
                        </figure>
                    </div>
                    <div className="experience_skills">
                        <li>C, C++, C#</li>
                        <li>MATLAB</li>
                        <li>Embeded Systems Development - Atmega328</li>
                        <li>Windows Software Development  - WPF</li>
                        <li>3D Software Development - Unity3D</li>
                        <li>CAD Modelling & 3D Printing</li>
                    </div>
                </div>
            </div>             
        </div>
    )
}
 
export default Projects;