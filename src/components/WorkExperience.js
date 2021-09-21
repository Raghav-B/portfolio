import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import TimelineTile from './TimelineTile';
import "../App.css";
import "./Timeline.css";

function WorkExperience(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                zIndex: 1,
            }}
        >
            <div
                style={{
                    fontSize: "50px",
                }}
            >
                Work Experience
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
                        date="Jun 2021 - Present"
                        company="Floramis"
                        role="Co-Founder & CTO"
                        img={require("../imgs/CompanyLogos/Floramis.png")}
                        list={[
                            <div>Co-founded IOT startup that builds smart planters to help plant owners take better care of their
                                plants. Raised pre-seed funding under SMU BIG incubator and are top 10 finalists in ongoing
                                SMU Eagles PAK challenge.</div>,
                            <div>Developed app using <b>React Native</b> that interfaces with planter through <b>Bluetooth BLE </b>
                                and uses <b>THREE.js</b> for in-app games.</div>,
                            <div>Wrote planter firmware with <b>C++</b> and <b>freeRTOS</b> on ESP32-based microcontroller.
                                Interfaced microcontroller with analog and digital sensors and low-level Wi-Fi
                                and BLE libraries.
                            </div>,
                            <div>Designed and engineered smart planter using <b>Autodesk Fusion 360</b> and
                                produced initial prototype using <b>3D-printing.</b>
                            </div>
                        ]}
                    />

                    <TimelineTile
                        date="Jun 2021 - Aug 2021"
                        company="JPMorgan Chase & Co."
                        role="Software Engineering Summer Analyst"
                        img={require("../imgs/CompanyLogos/JPMorgan.png")}
                        list={[
                            <div>Developed cloud <b>Python microservice</b> microservice to lookup data to resolve issues in
                                payments space. Microservice automatically fetched renewed <b>Oracle database </b>
                                credentials to save an estimated 1-2 working days compared to manual
                                credentials ticket.</div>,
                            <div>Trained internal chatbot for Natural Language Understanding using <b>RASA</b> and proposed new
                                <b> NLP</b> pipeline to enable detection of multi-word entities.</div>,
                            <div>Identified and resolved multiple bugs in internal <b>Python</b> and <b>React (JavaScript) </b>
                                codebases, most notably solving a chatbot data input bug that affected ~100 applications/microservices.
                            </div>,
                            <div>Developed <b>React</b> dashboard for analyzing bond performance in company-wide
                                hackathon that performed live updates through <b>REST API</b> calls to <b>Express.js</b> backend.
                            </div>
                        ]}
                    />

                    {/* 
                        <VerticalTimelineElement
                            // style={{
                            //     marginTop: "-25%"
                            // }}
                            className="vertical-timeline-element--work"
                            date="Jun 2021 - Aug 2021"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">JPMorgan Chase & Co.</h3>
                            <h4 className="vertical-timeline-element-subtitle">Software Engineering Summer Analyst</h4>
                            <p>
                                <ul>
                                    <li>
                                        
                                    </li>
                                    <li>
                                        
                                    </li>
                                    <li>
                                        
                                    </li>
                                    <li>
                                        
                                    </li>
                                </ul>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        /> */}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default WorkExperience;