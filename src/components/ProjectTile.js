import React, { forwardRef, useRef, useState } from 'react';
import "./ProjectTile.css";

function ProjectTile(props) {

    return (
        <div>
            <div
                onClick={() => {
                    props.onClick();
                }}
                className="projectTile"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "300px",
                    height: "50px",
                    backgroundColor: "white",
                    margin: "10px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "3px 3px 10px -6px #000000"
                }}
            >
                <img
                    className="projectTileImg"
                    src={props.img}
                />

                <div
                    className="projectTileText"
                    style={{
                        position: "absolute",
                        fontSize: "30px",
                        textAlign: "center",
                        fontWeight: "normal",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgb(255,255,255,0.7)",
                        height: "200px",
                        width: "100%",
                        zIndex: 0
                    }}
                >
                    <div
                        style={{
                            padding: "10%"
                        }}
                    >
                        {props.title}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ProjectTile;