import React, { useRef, useState, useEffect } from 'react';
import ProjectTile from './ProjectTile';
import Grid from "../common/Grid.js";

function getMeta(url) {
    return new Promise((resolve) => {
        var img = new Image();
        img.onload = function () {
            resolve({
                width: this.width,
                height: this.height
            });
        };
        img.src = url;
    })
}

function ProjectSlide(props) {

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

    const generateImages = () => {
        return new Promise((resolve) => {
            let images = Array(0);
            for (let project of props.projects) {
                getMeta(project.img)
                    .then((dims) => {
                        const aspect = dims.width / dims.height;
                        const newWidth = Math.round(dims.width / 2);
                        const newHeight = Math.round(newWidth / aspect);
                        const newImage = {
                            src: project.img,
                            width: newWidth,
                            height: newHeight,
                            description: project.description,
                            title: project.title
                        }
                        images.push(newImage);
                    })
            }
            resolve(images);
        });
    }

    const [imagesData, setImagesData] = useState(Array(0));

    useEffect(() => {
        generateImages()
            .then((images) => {
                setImagesData(images);
            })
    }, []);

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div
                style={{
                    marginBottom: "2%"
                }}
            >{props.flavorText}</div>

            {
                (imagesData.length === 0) ? <div></div> :
                    <Grid
                        images={imagesData}
                        rowHeight={350}
                        margin={10}
                        isLightboxEnabled={true}
                        width={windowWidth * 0.8}
                    />
            }
        </div >
    );
}

export default ProjectSlide;