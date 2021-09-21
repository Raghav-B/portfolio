import React, { useRef } from 'react';

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
                    height: "25px",
                    width: "100%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    backgroundColor: "#E6E6E6",
                }}>
                H
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                    height: "25px",
                    position: "fixed",
                    zIndex: 5,
                    top: 0,
                    left: 0,
                    textAlign: "center",
                    backgroundColor: "white",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    borderBottomColor: "black",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid"
                }}>
                <div
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    About Me
                </div>
                <div
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Projects
                </div>
                <div
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Work Experience
                </div>
                <div
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Education
                </div>
                {/* <div
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    Skill Toolbox
                </div> */}

                <div
                    style={navBarTextStyle}
                    to="#aboutme"
                >
                    In the Press
                </div>
            </div>
        </div>
    );
}

const navBarTextStyle = {
    textDecoration: "none",
    color: "black",
    fontFamily: "JosefinSans",
    fontSize: 20
}

export default NavBar;