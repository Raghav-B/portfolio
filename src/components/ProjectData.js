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
                description: <div>Collaboration platform to help social workers help displaced individuals become financially indendent and move into better accommodation. Developed PWA in <b>React</b> with a <b>Flask</b> backend.<br /><b><i>Winner of JPMorgan Code For Good 2020</i></b></div>,
                img: require("../imgs/Projects/Software/CodeForGood.png"),
                url: ""
            },
            {
                title: "SIA AppChallenge 2020",
                description: <div>PWA built in <b>React</b> with AI-driven personal assistant to provide end-to-end assistance to a flyer during their journey with SIA. <br /><b><i>Top 10 Finalist in SIA AppChallenge 2020</i></b></div>,
                img: require("../imgs/Projects/Software/SIAAppChallenge.jpg"),
                url: ""
            },
            {
                title: "Command-based Inventory Management",
                description: <div><b>Java</b> application with <b>JavaFX</b>-based developed for NUS Faculty of Engineering to help lab technicians perform faster inventory management. Full test coverage with <b>JUnit</b> and CI/CD with <b>TravisCD</b></div>,
                img: require("../imgs/Projects/Software/Eggventory.png"),
                url: ""
            },
            {
                title: "Razer Fintech Hackathon 2020",
                description: <div>Crowdlending platform for Android written in <b>Java</b> linked to a <b>NoSQL database</b>. Used <b>REST API</b> for performing transactions, account creation, and ID validation.</div>,
                img: require("../imgs/Projects/Software/Razer.png"),
                url: ""
            },

        ]
    },
    {
        title: "AI & ML",
        flavorText: <div>Projects involving <b>Neural Networks</b>, <b>Object Detection</b>, <b>Reinforcement Learning</b> and more using <b>TensorFlow</b>, <b>Keras</b>, <b>OpenCV</b>, etc.</div>,
        img: require("../imgs/Projects/AIML.jpg"),
        projects: [
            {
                title: "Illegal Gathering Detection",
                description: <div>dgf</div>,
                img: require("../imgs/Projects/AIML/IllegalGathering.png"),
                url: ""
            },
            {
                title: "poke.AI - AI that learns to play Pokemon",
                description: <div>dgf</div>,
                img: require("../imgs/Projects/AIML/poke.AI.png"),
                url: ""
            },
            {
                title: "CCTV Traffic Accident Detector",
                description: <div></div>,
                img: "",
                url: ""
            },
            {
                title: "Automated Inventory Management System",
                description: <div></div>,
                img: "",
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
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
            {
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
        ],
    },
    {
        title: "IOT",
        flavorText: <div>Embedded systems programming using <b>C/C++</b> and <b>freeRTOS</b> with sensor interfacing and protocols including <b>CAN</b>, <b>UART</b>, <b>SPI</b>, <b>I2C</b>, <b>BLE</b>, etc.</div>,
        img: require("../imgs/Projects/IOT.png"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
            {
                title: "",
                description: <div></div>,
                img: "",
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
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
            {
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
        ],
    },
    {
        title: "Creative",
        flavorText: <div>An outlet for my artistic side!</div>,
        img: require("../imgs/Projects/Creative.jpg"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
            {
                title: "",
                description: <div></div>,
                img: "",
                url: ""
            },
        ],
    },
]