import React, { useRef, createRef, useEffect } from 'react';

export const projectData = [
    {
        title: "Software Dev",
        flavorText: <div>Web and mobile development using <b>React</b>, <b>React Native</b>, <b>C++</b>, <b>Java</b>, <b>Python</b>, etc.</div>,
        img: require("../imgs/Projects/SoftwareEngineering.jpg"),
        projects: [
            {
                title: "Floramis Companion App",
                description: <div></div>,
                // img: require("../imgs/Projects/Software/Floramis.gif"),
                url: ""
            },
            {
                title: "Hello",
                description: <div></div>,
                img: require("../imgs/Projects/SoftwareEngineering.jpg")
            },
            {
                title: "Hello",
                description: <div></div>,
                img: require("../imgs/Projects/SoftwareEngineering.jpg")
            },
            {
                title: "Hello",
                description: <div></div>,
                img: require("../imgs/Projects/SoftwareEngineering.jpg")
            },
        ]
    },
    {
        title: "AI & ML",
        flavorText: <div>Projects involving <b>Neural Networks</b>, <b>Object Detection</b>, <b>Reinforcement Learning</b> and more using <b>TensorFlow</b>, <b>Keras</b>, <b>OpenCV</b>, etc.</div>,
        img: require("../imgs/Projects/AIML.jpg"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: ""
            },
        ]
    },
    {
        title: "Robotics",
        flavorText: "",
        img: require("../imgs/Projects/Robotics.jpg"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: ""
            },
        ]
    },
    {
        title: "IOT",
        flavorText: <div>Hardware-focused projects </div>,
        img: require("../imgs/Projects/IOT.png"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: ""
            },
        ]
    },
    {
        title: "Product Design",
        flavorText: "",
        img: require("../imgs/Projects/ProductDesign.png"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: ""
            },
        ]
    },
    {
        title: "Creative",
        flavorText: "",
        img: require("../imgs/Projects/Creative.jpg"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: ""
            },
        ]
    },
    {
        title: "Others",
        flavorText: "",
        img: require("../imgs/Projects/Others.png"),
        projects: [
            {
                title: "",
                description: <div></div>,
                img: ""
            },
        ]
    },
]