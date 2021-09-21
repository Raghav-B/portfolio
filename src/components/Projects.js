import React, { useRef, createRef, useEffect } from 'react';
import ProjectTile from './ProjectTile';
import { projectData } from './ProjectData';

function Projects(props) {

    const projectsRef = useRef(null);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                zIndex: 1,
                marginBottom: "3%"
            }}
        >
            <div
                style={{
                    fontSize: "50px",
                }}
            >
                Projects
            </div>

            <div
                style={{
                    marginTop: "1%",
                    fontSize: "30px",
                    textAlign: "center"
                }}
            >
                The best way to showcase my breadth of skills
            </div>

            <div
                style={{
                    display: "flex",
                    marginTop: "1%",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    maxWidth: "80%"
                }}
            >
                {
                    projectData.map((item, index) => {
                        return <ProjectTile
                            key={index}
                            {...item}
                        />
                    })
                }

                {/* <ProjectTile
                    title="Software Engineering"
                    img={require("../imgs/Projects/SoftwareEngineering.jpg")}
                    ref={sengRef}
                    onClick={() => {
                        // window.scrollTo(0, sengRef.current.offsetTop - 60);
                    }}
                /> */}

                {/* <ProjectTile
                    title="AI & ML"
                    img={require("../imgs/Projects/AIML.jpg")}
                    ref={ainmlRef}
                    onClick={() => {
                        // window.scrollTo(0, ainmlRef.current.offsetTop - 60);
                    }}
                />

                <ProjectTile
                    title="Robotics"
                    img={require("../imgs/Projects/Robotics.jpg")}
                    ref={roboticsRef}
                    onClick={() => {
                        // window.scrollTo(0, roboticsRef.current.offsetTop - 60);
                    }}
                />

                <ProjectTile
                    title="IOT"
                    img={require("../imgs/Projects/IOT.png")}
                    ref={iotRef}
                    onClick={() => {
                        // window.scrollTo(0, iotRef.current.offsetTop - 60);
                    }}
                />

                <ProjectTile
                    title="Product Design"
                    img={require("../imgs/Projects/ProductDesign.png")}
                    ref={productRef}
                    onClick={() => {
                        // window.scrollTo(0, productRef.current.offsetTop - 60);
                    }}
                />

                <ProjectTile
                    title="Creative"
                    img={require("../imgs/Projects/Creative.jpg")}
                    ref={creativeRef}
                    onClick={() => {
                        // window.scrollTo(0, creativeRef.current.offsetTop - 60);
                    }}
                />

                <ProjectTile
                    title="Others"
                    img={require("../imgs/Projects/Others.png")}
                    ref={othersRef}
                    onClick={() => {
                        // window.scrollTo(0, othersRef.current.offsetTop - 60);
                    }}
                /> */}
            </div>
        </div>
    );
}

export default Projects;