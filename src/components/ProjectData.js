import React, { useRef, createRef, useEffect } from 'react';

export const projectData = [
    {
        title: "Software Dev",
        flavorText: <div>Web and mobile development using <b>React</b>, <b>React Native</b>, <b>Java</b>, etc.</div>,
        img: require("../imgs/Projects/SoftwareEngineering.jpg"),
        projects: [
            {
                title: "Floramis Companion App",
                description: <div>A companion app for a smart planter coded in <b>React Native.</b> Employs <b>Bluetooth</b> connectivity with smart planter and uses <b>THREE.js</b> for in-app minigames.</div>,
                img: require("../imgs/Projects/Software/FloramisApp.png"),
                url: ""
            },
            {
                title: "Online Robot Control Showcase",
                description: <div><b>WebRTC</b>-enabled <b>React</b> website with real-time queueing to enable 20+ zoom participants to remotely control 4 robots.</div>,
                img: require("../imgs/Projects/Software/RemoteRobot.png"),
                url: ""
            },
            {
                title: "TCS Sustainathon 2020",
                description: <div>Progressive Web App built with <b>React</b> with a <b>Flask</b> backend as a rewards platform for students who cut down their food waste. <br /><b><i>Winner of TCS Sustainathon 2020</i></b></div>,
                img: require("../imgs/Projects/Software/TCSSustainathon.jpg"),
                url: ""
            },
            {
                title: "JPMC Code For Good 2020",
                description: <div>Collaboration platform to help social workers help displaced individuals become financially independent
                    and move into better accommodation. Developed PWA in <b>React</b> with a <b>Flask</b> backend.<br /><b>
                        <i>Winner of JPMorgan Code For Good 2020</i></b></div>,
                img: require("../imgs/Projects/Software/CodeForGood.png"),
                url: ""
            },
            {
                title: "SIA AppChallenge 2020",
                description: <div>PWA built in <b>React</b> with AI-driven personal assistant to provide end-to-end assistance to a
                    flyer during their journey with SIA. <br /><b><i>Top 10 Finalist in SIA AppChallenge 2020</i></b></div>,
                img: require("../imgs/Projects/Software/SIAAppChallenge.jpg"),
                url: ""
            },
            {
                title: "Command-based Inventory Management",
                description: <div><b>Java</b> application with <b>JavaFX</b>-based developed for NUS Faculty of Engineering to help lab
                    technicians perform faster inventory management. Full test coverage with <b>JUnit</b> and CI/CD with <b>TravisCD</b></div>,
                img: require("../imgs/Projects/Software/Eggventory.png"),
                url: ""
            },
            {
                title: "Razer Fintech Hackathon 2020",
                description: <div>Crowdlending platform for Android written in <b>Java</b> linked to a <b>NoSQL database</b>.
                    Used <b>REST API</b> for performing transactions, account creation, and ID validation.</div>,
                img: require("../imgs/Projects/Software/Razer.png"),
                url: ""
            },

        ]
    },
    {
        title: "AI & ML",
        flavorText: <div>Projects involving <b>Neural Networks</b>, <b>Object Detection</b>, <b>Reinforcement Learning</b>
            and more using <b>TensorFlow</b>, <b>Keras</b>, <b>OpenCV</b>, etc.</div>,
        img: require("../imgs/Projects/AIML.jpg"),
        projects: [
            {
                title: "Illegal Gathering Detection",
                description: <div><b>Python</b> Computer vision pipeline for detecting gathering of people breaking max group size
                    guidelines. Uses <b>YOLOv4</b> and <b>DeepSORT</b>-based object tracking with <b>DBSCAN</b> for detecting
                    clusters (groups) of people</div>,
                img: require("../imgs/Projects/AIML/IllegalGathering.png"),
                url: ""
            },
            {
                title: "poke.AI - AI that learns to play Pokemon",
                description: <div>Agent written in <b>Python</b> that used <b>RetinaNET</b>, <b>Deep Q-Learning</b>,
                    and a custom exploration and mapping algorithm to learn to play Pokemon games. Wrote custom fork of GameBoy
                    emulator in <b>C++</b> to interact with AI<br /><b><i>Winner of Judge's Choice Award for NUS School of Computing Orbital</i></b></div>,
                img: require("../imgs/Projects/AIML/poke.AI.png"),
                url: ""
            },
            {
                title: "CCTV Traffic Accident Detector",
                description: <div>Computer vision pipeline that uses <b>object detection</b> implemented using <b>Keras</b>and a
                    custom object-vector-tracking algorithm to detect accidents through real-time CCTV feeds.
                    <br /><b><i>Finalist in Singapore Computer Society's Splash Awards AI Innovation Challenge 2019</i></b></div>,
                img: require("../imgs/Projects/AIML/CCTV.png"),
                url: ""
            },
            {
                title: "Automated Inventory Management System",
                description: <div>Trained <b>Convolutional Neural Network</b> for object detection implemented in <b>TensorFlow</b> to
                    perform inventory management with item misplacement detection using <b>OpenCV</b></div>,
                img: require("../imgs/Projects/AIML/InventoryManagement.jpg"),
                url: ""
            },
        ],
    },
    {
        title: "Robotics",
        flavorText: <div>Work on <b>robot intelligence</b>, <b>sensors</b>, <b>actuators</b>, <b>feedback control</b>, <b>ROS</b>, etc.</div>,
        img: require("../imgs/Projects/Robotics.jpg"),
        projects: [
            {
                title: "Team LumiNUS - DJI RoboMaster Robotics Competition 2020",
                description: <div>Independently developed initial firmware for robots using <b>freeRTOS</b> on an ARM microcontroller.
                    Additionally setup intra-robot communication through <b>CAN bus</b> and <b>UART</b>, designed <b>PID control system</b>
                    for actuator control. This firmware continues to be used as backbone code for the team to this day.</div>,
                img: require("../imgs/Projects/Robotics/RoboMaster.jpg"),
                url: ""
            },
            {
                title: "Team Hornet - Singapore Autonomous Underwater Vehicle Challenge",
                description: <div>Developed computer vision capabilities of the vehicle using <b>OpenCV</b> in <b>C++</b> to perform
                    autonomous underwater feature recognition. Interfaced this computervision pipeline with the rest of the robot
                    using <b>ROS</b></div>,
                img: require("../imgs/Projects/Robotics/Hornet.png"),
                url: ""
            },
            {
                title: "LiDAR-powered Search and Rescue Robot",
                description: <div>Interfaced LiDAR with robot chassis using <b>ROS</b> and setup the robot to use <b>Simultaneous Localization and Mapping
                    (SLAM)</b> algorithm. Wrote baseline software architecture for robot functionality using <b>ROS</b></div>,
                img: require("../imgs/Projects/Robotics/snrbot.png"),
                url: ""
            },
            {
                title: "Simple Arduino Maze-Running Bot",
                description: <div>Simple <b>Arduino</b>-based robot that interfaced with <b>Infrared</b>, <b>Ultrasonic</b>, <b>LDR</b>
                    and other sensors to follow directions to navigate a maze.</div>,
                img: require("../imgs/Projects/Robotics/mazebot.png"),
                url: ""
            },
        ],
    },
    {
        title: "IOT",
        flavorText: <div>Embedded systems programming using <b>C/C++</b> and <b>freeRTOS</b> with sensor interfacing and
            protocols including <b>CAN</b>, <b>UART</b>, <b>SPI</b>, <b>I2C</b>, <b>BLE</b>, etc.</div>,
        img: require("../imgs/Projects/IOT.png"),
        projects: [
            {
                title: "Floramis Smart Planter",
                description: <div>Smart planter that uses various digital and analog sensors to monitor a plant's health and
                    updates the owner on how to better take care of it. Implemented firmware in <b>C++</b> on <b>ESP32</b>-based
                    microcontroller with <b>BLE</b> functionality. Used <b>freeRTOS</b> for task scheduling.</div>,
                img: require("../imgs/Projects/IOT/Floramis.jpg"),
                url: ""
            },
            {
                title: "Wearable-based Dance Detection",
                description: <div>Used time-series IMU data from wearable bluetooth devices on wrists to detect dance moves in real-time
                    using a neural network running on an FPGA. Wrote central networking code in <b>Python</b> and wearable microcontroller code in <b>C</b>.</div>,
                img: require("../imgs/Projects/IOT/DanceDetection.png"),
                url: ""
            },
            {
                title: "Weight-based Inventory Management",
                description: <div>Designed medical trolley trays with load sensors to perform automated inventory management and tracking of items.
                    Tracking system used <b>Python Flask</b> for the backend and vanilla <b>JavaScript</b> for the frontend.
                    <br /><b><i>Finalist in InnoVenture Leadership & Innovation Challenge 2019</i></b></div>,
                img: require("../imgs/Projects/IOT/InventoryManagement.png"),
                url: ""
            },
            {
                title: "Gamified Food Waste Solution",
                description: <div>IOT-based rewards system to help students develop a lasting habit of reducing food waste. Independently
                    handled full tech stack for team with <b>React</b> for frontend, <b>Flask + Firebase</b> for backend, and a <b>Raspberry Pi</b>
                    with <b>Arduino</b> for the smart dustbin system that detects food waste.
                    <br /><b><i>Winner of TCS Sustainathon 2020</i></b>
                </div>,
                img: require("../imgs/Projects/IOT/TCS.jpg"),
                url: ""
            },
        ],
    },
    {
        title: "Product Design",
        flavorText: <div>Designing and prototyping products using <b>CAD</b>, <b>3D printing</b>, etc. and manufacturing work in <b>workshops and makerspaces</b></div>,
        img: require("../imgs/Projects/ProductDesign.png"),
        projects: [
            {
                title: "Floramis Smart Planter",
                description: <div>Smart planter that helps plant owners take better care of ther plants. Raised pre-seed funding uder SMU BIG
                    incubator.</div>,
                img: require("../imgs/Projects/Product/Floramis.png"),
                url: ""
            },
            {
                title: "Smart Medical Trolley",
                description: <div>Medical trolley trays with load sensors to perform automated inventory management and tracking of items.</div>,
                img: require("../imgs/Projects/Product/Trolley.png"),
                url: ""
            },
            {
                title: "Minimalist Study Lamp",
                description: <div>Minimalist lamp fully manufactured using various workshop techniques.</div>,
                img: require("../imgs/Projects/Product/Lamp.jpg"),
                url: ""
            },
            {
                title: "Semiconductor Processing Machine",
                description: <div>Collabored on design of semiconductor processing machine by prototyping design of the machine using <b>SolidWorks</b></div>,
                img: require("../imgs/Projects/Product/Cabinet.png"),
                url: ""
            },
            {
                title: "Siemens NX PLM Engineering Course",
                description: <div>Designed assorted engineering parts in formal training course for <b>NX PLM</b> CAD modelling software</div>,
                img: require("../imgs/Projects/Product/AssortedEngineering.png"),
                url: ""
            },
            {
                title: "Others",
                description: <div>Other products prototyped using <b>Fusion 360</b></div>,
                img: require("../imgs/Projects/Product/Others.png"),
                url: ""
            },
        ],
    },
    {
        title: "Creative",
        flavorText: <div>My artistic and creative side!</div>,
        img: require("../imgs/Projects/Creative.jpg"),
        projects: [
            {
                title: "Music Composition",
                description: <div>Composing rock and metal music in my free time with my trusty electric guitar.</div>,
                img: require("../imgs/Projects/Creative/guitar.jpg"),
                url: ""
            },
            {
                title: "Gamified Education RPG",
                description: <div>
                    Prototype game coded using <b>C#</b> in <b>Unity3D</b> that automatically generates in-game levels based on quizzes that
                    teachers can input into the game to improve students' engagement.
                    <br /><b><i>2nd Runner-up in IEEE Hackathon 2019</i></b>
                </div>,
                img: require("../imgs/Projects/Creative/EducationGamified.png"),
                url: ""
            },
            {
                title: "GMTK GameJam 2020",
                description: <div>
                    Created art assets and wrote code for a <b>Unity3D</b> game that follows a blind wizard trying to battle unspecified spherical
                    entities.
                </div>,
                img: require("../imgs/Projects/Creative/GameJam.png"),
                url: ""
            },
            {
                title: "Bloccad",
                description: <div>
                    A multi-platform CAD modelling app that introduces children and inexperiences users to 3D printing and basic CAD design
                    through a Minecraft-inspired interface.
                    <br /><b><i>Published app on Google Play Store</i></b>
                </div>,
                img: require("../imgs/Projects/Creative/Bloccad.png"),
                url: ""
            },
        ],
    },
]