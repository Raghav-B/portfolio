import React, { useRef } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

function NavBar(props) {

    const navHighlight = (event) => {
        // isClickScrolling = true;

        var curSection = event.target.id;
        var buttonArr = document.getElementsByClassName("content");

        for (var i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i].id == curSection) {
                buttonArr[i].className = "content nav_bar_selected";
            } else {
                buttonArr[i].className = "content nav_bar_unselected active";
            }
        }
    }

    return (
        <div>
            <div
                style={{
                    height: "2%",
                    width: "100%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
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
                    height: "2%",
                    position: "fixed",
                    zIndex: 5,
                    top: 0,
                    left: 0,
                    textAlign: "center",
                    backgroundColor: "white",
                    paddingTop: "1%",
                    paddingBottom: "1%"
                }}>
                <Link
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    About Me
                </Link>
                <Link
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Work Experience
                </Link>
                <Link
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Education
                </Link>
                <Link
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Skill Toolbox
                </Link>
                <Link
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Projects & More
                </Link>
                <Link
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    In the Press
                </Link>
            </div>
        </div>
    );
}

const navBarTextStyle = {
    textDecoration: "none",
    color: "black",
    fontFamily: "JosefinSans",
    fontWeight: 200,
    fontSize: 20
}

export default NavBar;