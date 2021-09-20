import React, { useEffect, useRef, useState } from 'react';
import "./About.css";

var imgArray = [
    require("../imgs/AboutMe/1.jpg"),
    require("../imgs/AboutMe/2.jpg"),
    require("../imgs/AboutMe/3.jpg"),
    require("../imgs/AboutMe/4.jpg"),
    require("../imgs/AboutMe/5.jpg"),
    require("../imgs/AboutMe/6.jpg"),
    require("../imgs/AboutMe/7.jpg"),
    require("../imgs/AboutMe/8.jpg"),
    require("../imgs/AboutMe/9.jpg"),
    require("../imgs/AboutMe/10.jpg"),
];

function ImageSlider(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [windowHeight, setWindowHeight] = useEffect(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{
            display: "flex",
            position: "relative",
            width: "100%",
            maxWidth: `${windowWidth}px`,
            overflow: "hidden",
        }}>
            <div
                style={divStyle}>
                {
                    imgArray.map((item, i) => {
                        return <img
                            style={imgStyle}
                            key={i}
                            src={item}
                        >
                        </img>
                    })
                }
            </div>
            <div
                style={divStyle}
            >
                {
                    imgArray.map((item, i) => {
                        return <img
                            style={imgStyle}
                            key={i}
                            src={item}
                        >
                        </img>
                    })
                }
            </div>
        </div>
    );
}

const divStyle = {
    display: "flex",
    position: "relative",
    animation: "30s slide_animation linear infinite",
}

const imgStyle = {
    display: "block",
    minWidth: "0px",
    height: "200px",
    marginLeft: "10px"
}

export default ImageSlider;