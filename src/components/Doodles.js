import React, { useEffect, useRef, useState } from "react";

function importAll(obj) {
    let images = [];
    obj.keys().map((item, index) => {
        // images[item.replace('./', '')] = obj(item);
        images.push(obj(item));
    });
    return images;
}

function Doodles(props) {

    const [imagesArr, setImagesArr] = useState([]);
    const bgRef = useRef(null);

    useEffect(() => {
        const images = importAll(require.context('../imgs/Doodles', false, /\.(png|jpe?g|svg)$/));
        setImagesArr(images.concat(images));
    }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    const handleParallax = () => {
        let scrollValue = window.pageYOffset;
        bgRef.current.style.transform = "translateY(" + (-scrollValue / 2) + "px";
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleParallax);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleParallax);
        };
    }, []);

    return (
        <div
            ref={bgRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                height: `${props.mainHeight}px`,
                width: "100%",
                backgroundColor: "#E6E6E6",
                overflow: "hidden",
            }}
        >
            {
                imagesArr.map((item, index) => {
                    return <img
                        key={index}
                        src={item}
                        style={{
                            position: "absolute",
                            // zIndex: 0,
                            top: `${Math.round(Math.random() * props.mainHeight)}px`,
                            left: `${Math.round(Math.random() * windowWidth)}px`,
                            opacity: "0.07",
                            minHeight: "0px",
                            width: `${Math.round(windowWidth * 0.2)}px`,
                        }}
                        draggable="false"
                    />
                })
            }
        </div>
    );
}

export default Doodles