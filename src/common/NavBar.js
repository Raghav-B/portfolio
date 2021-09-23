import React, { useRef } from 'react';
import "./NavBar.css";

function NavBar({ aboutRef, projectsRef, workExperienceRef, educationRef, pressRef, contactRef }) {

    return (
        <div>
            <div
                style={{
                    height: "1%",
                    width: "100%",
                    // paddingTop: "1%",
                    // paddingBottom: "1%",
                    backgroundColor: "#E6E6E6"
                }}>
                H
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                    position: "fixed",
                    zIndex: 5,
                    top: 0,
                    left: 0,
                    textAlign: "center",
                    backgroundColor: "white",
                    borderBottomColor: "black",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    fontFamily: "JosefinSans"
                }}>
                <div
                    className="nav-bar-text"
                    onClick={() => {
                        window.scrollTo(0, aboutRef.current.offsetTop - 60)
                    }}
                >
                    About
                </div>
                <div
                    className="nav-bar-text"
                    onClick={() => {
                        window.scrollTo(0, projectsRef.current.offsetTop - 60)
                    }}
                >
                    Projects
                </div>
                <div
                    className="nav-bar-text"
                    onClick={() => {
                        window.scrollTo(0, workExperienceRef.current.offsetTop - 60)
                    }}
                >
                    Work Experience
                </div>
                <div
                    className="nav-bar-text"
                    onClick={() => {
                        window.scrollTo(0, educationRef.current.offsetTop - 60)
                    }}
                >
                    Education
                </div>
                <div
                    className="nav-bar-text"
                    onClick={() => {
                        window.scrollTo(0, pressRef.current.offsetTop - 60)
                    }}
                >
                    In the Press
                </div>
                <div
                    className="nav-bar-text"
                    onClick={() => {
                        window.scrollTo(0, contactRef.current.offsetTop - 60)
                    }}
                >
                    Contact
                </div>
            </div>
        </div>
    );
}

export default NavBar;