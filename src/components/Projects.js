import React, { useRef, createRef, useEffect } from 'react';
import ProjectTile from './ProjectTile';
import { projectData } from './ProjectData';
import Tabs from '../common/Tabs';

function Projects(props) {

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
                className="scroll_anim init_left"
                style={{
                    fontSize: "50px",
                }}
            >
                Projects
            </div>

            <div
                className="scroll_anim init_top"
                style={{
                    marginTop: "1%",
                    fontSize: "30px",
                    textAlign: "center"
                }}
            >
                The best way to showcase my <b>breadth of skills</b>
            </div>

            <Tabs
                data={projectData}
            ></Tabs>
        </div>
    );
}

export default Projects;