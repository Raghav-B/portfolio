import React, { useEffect, useRef, useState } from 'react';
import "./ImageSlider.css";

var imgArray = [
    require("../imgs/ImageSlider/1.jpg"),
    require("../imgs/ImageSlider/2.jpg"),
    require("../imgs/ImageSlider/3.jpg"),
    require("../imgs/ImageSlider/4.jpg"),
    require("../imgs/ImageSlider/5.jpg"),
    require("../imgs/ImageSlider/6.jpg"),
    require("../imgs/ImageSlider/7.jpg"),
    require("../imgs/ImageSlider/8.jpg"),
    require("../imgs/ImageSlider/9.jpg"),
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
                        return <img
                            className="slideImg"
                            style={{
                                display: "block",
                                minWidth: "0px",
                                height: `${Math.round(windowHeight * 0.4)}px`,
                                marginLeft: "10px"
                            }}
                            key={i}
                            src={item}
                        >
                        </img>
                    })
                }
            </div>
        </div >
    );
}

export default ImageSlider;