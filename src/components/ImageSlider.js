import React, { useEffect, useRef, useState } from 'react';
import "./ImageSlider.css";

var imgArray = [
    {
        url: require("../imgs/ImageSlider/3.jpg"),
        description: "Receiving the 2017 NYAA Gold Award from H.E. Madam President Halimah Yacob"
    },
    {
        url: require("../imgs/ImageSlider/10.jpg"),
        description: "Receiving top prize for TCS Sustainathon 2020 from H.E. Madam President Halimah Yacob"
    },
    {
        url: require("../imgs/ImageSlider/2.jpg"),
        description: "Emceeing for NUS Freshman Orientation Camp"
    },
    {
        url: require("../imgs/ImageSlider/5.jpg"),
        description: "Presenting about the NUS RoboMaster robotics team to Engineering deanery"
    },
    {
        url: require("../imgs/ImageSlider/6.jpg"),
        description: "Showcase for poke.AI - an AI that learns to play Pokemon"
    },
    {
        url: require("../imgs/ImageSlider/7.jpg"),
        description: "Public showcase for AI-enabled CCTV accident detector in SCS Splash Awards 2019"
    },
    {
        url: require("../imgs/ImageSlider/8.jpg"),
        description: "First completed robots for inaugural NUS RoboMaster robotics team"
    },
    {
        url: require("../imgs/ImageSlider/9.jpg"),
        description: "Leading NUS RoboMaster robotics team meeting as Captain"
    },
];
imgArray = imgArray.concat(imgArray);

function ImageSlider(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
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
            paddingTop: `${Math.round(windowHeight * 0.05)}px`,
            paddingBottom: `${Math.round(windowHeight * 0.05)}px`,
            zIndex: 1
        }}>
            <div
                className="slideDiv"
            >
                {
                    imgArray.map((item, i) => {
                        return <div
                            key={i}
                            className="slideImg"
                            style={{
                                position: "relative",
                                width: "100%",
                                height: `${Math.round(windowHeight * 0.35)}px`,
                                marginLeft: "5px",
                                marginRight: "5px"
                            }}
                        >
                            <div
                                className="slideText"
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    margin: "auto",
                                    fontWeight: "normal",
                                    fontSize: 20,
                                    textAlign: "center",
                                    zIndex: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-end",
                                    paddingBottom: "10px",
                                    backgroundColor: "rgb(0,0,0,0)",
                                    opacity: 0
                                }}>
                                <div

                                    style={{
                                        backgroundColor: "white",
                                        paddingTop: "10px",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    {item["description"]}
                                </div>
                            </div>

                            <img
                                style={{
                                    display: "block",
                                    minWidth: "0px",
                                    height: "100%",
                                }}
                                src={item["url"]}>
                            </img>


                        </div>

                    })
                }
            </div>
        </div >
    );
}

export default ImageSlider;