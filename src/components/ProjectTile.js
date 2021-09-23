import React, { forwardRef, useRef, useState } from 'react';
import "./ProjectTile.css";

function ProjectTile(props) {
    if (props.url !== "") {
        return (
            <a
                className="img_container"
                href={props.url}>
                <div className="project_text_panel">
                    <h4>{props.title}</h4>
                    <div className="project_body_text">
                        {props.description}
                    </div>
                    <h3>Click to view on GitHub</h3>
                </div>
                <img className="project_image" src={props.img}></img>
            </a>
        )
    } else {
        return (
            <div
                className="img_container"
            >
                <div className="project_text_panel">
                    <h4>{props.title}</h4>
                    <div className="project_body_text">
                        {props.description}
                    </div>
                </div>
                <img className="project_image" src={props.img}></img>
            </div>
        )
    }
}

export default ProjectTile;