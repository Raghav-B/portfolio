import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import TimelineTile from './TimelineTile';
import "../App.css";
import "./Timeline.css";

function Education(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                zIndex: 1,
                marginBottom: "2%"
            }}
        >
            <div
                className="scroll_anim init_right"
                style={{
                    fontSize: "50px",
                }}
            >
                Education
            </div>

            <div
                style={{
                    marginTop: "1%",
                    width: "100%",
                }}
            >
                <VerticalTimeline
                    layout="1-column"
                >
                    <TimelineTile
                        date="Aug 2018 - Present"
                        company="National University of Singapore"
                        role="Bachelor of Engineering in Computer Engineering, Honours"
                        img={require("../imgs/CompanyLogos/NUS.png")}
                        list={[
                            <div><b>Core Modules:</b> Data Structures & Algorithms, Software Engineering & OOP,
                                Real-time Operating Systems, Computer Networking, Parallel Computing, Machine Learning,
                                Artificial Intelligence</div>
                        ]}
                    />

                    <TimelineTile
                        date="Aug 2011 - Jul 2016"
                        company="United World College of South East Asia"
                        role="International Baccalaureate Diploma"
                        img={require("../imgs/CompanyLogos/UWC.png")}
                        list={[
                            <div><b>Primary Subjects:</b> Physics, Maths, Design & Technology</div>
                        ]}
                    />

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education