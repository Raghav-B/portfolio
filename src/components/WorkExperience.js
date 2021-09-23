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
                marginBottom: "2%"
            }}
        >
            <div
                className="scroll_anim init_right"
                style={{
                    fontSize: "50px",
                }}
            >
                Work Experience
            </div>

            <div
                className="scroll_anim init_top"
                style={{
                    marginTop: "1%",
                    fontSize: "30px",
                    textAlign: "center"
                }}
            >
                Professional working experience
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

                    <TimelineTile
                        date="Jun 2020 - Nov 2020"
                        company="Huawei"
                        role="Vehicle Cybersecurity Intern"
                        img={require("../imgs/CompanyLogos/Huawei.png")}
                        list={
                            [
                                <div>Conceived and built Ethernet intrusion detection system using <b>C</b> on <b>AURIX microcontroller</b>
                                    to be used in company’s modern & self-driving vehicle security suite.
                                </div>,
                                <div>Implemented statically allocated hash-map and linked list data structures from scratch in <b>C</b> to
                                    follow static memory allocation conventions on embedded systems.
                                </div>,
                                <div>Researched common cybersecurity threats and attack vectors in automotive domain and performed analysis on
                                    fraudulent packets using <b>Wireshark.</b>
                                </div>
                            ]
                        }
                    />

                    <TimelineTile
                        date="Nov 2019 - Jul 2020"
                        company="NUS RoboMaster"
                        role="Captain & CTO"
                        img={require("../imgs/CompanyLogos/RoboMaster.png")}
                        list={
                            [
                                <div>Managed team of 60+ NUS students to build fleet of 10 robots for DJI RoboMaster Robotics competition.</div>,
                                <div>Independently developed initial firmware for robots using <b>freeRTOS</b> on an ARM microcontroller.
                                    Additionally setup intra-robot communication through <b>CAN bus</b> and <b>UART</b>, designed <b>PID control system </b>
                                    for actuator control. This firmware continues to be used as backbone code for the team to this day.</div>
                            ]
                        }
                    />

                    <TimelineTile
                        date="May 2019 - Aug 2019"
                        company="Panasonic R&D Centre Singapore"
                        role="Deep Learning Intern"
                        img={require("../imgs/CompanyLogos/Panasonic.png")}
                        list={
                            [
                                <div>Trained <b>Convolutional Neural Network</b> for object detection implemented in <b>TensorFlow</b> to
                                    perform inventory management with item misplacement detection using <b>OpenCV.</b></div>,
                                <div>Utilized <b>Python Pandas</b> library to clean and prepare data for training.</div>
                            ]
                        }
                    />

                    <TimelineTile
                        date="Dec 2018 - Jan 2019"
                        company="Lemnis Technologies"
                        role="Software & Hardware Intern"
                        img={require("../imgs/CompanyLogos/Lemnis.png")}
                        list={
                            [
                                <div>Overhauled flashing of firmware and calibration data to VR headsets by developing GUI in <b>C#</b> to
                                    manage connected headsets and syncing of firmware from a server.</div>,
                                <div>Designed and 3D-printed custom attachments with <b>Fusion 360</b> for adding stereo cameras to VR headsets.</div>,
                                <div>Collaborated on development of mobile and desktop mixed reality app using <b>Unity</b>
                                    for demonstration in the Consumer Electronics Show 2019.</div>,
                                <div>Built a 6-degree-of-freedom robotic arm controlled by sending commands to an <b>Arduino</b> through UART
                                    in <b>MATLAB</b> for testing of gyroscopes in VR headsets.</div>
                            ]
                        }
                    />

                    <TimelineTile
                        date="Feb 2017 - Aug 2018"
                        company="Singapore Armed Forced Detention Barracks"
                        role="Military Policeman"
                        img={require("../imgs/CompanyLogos/MP.png")}
                        list={
                            [
                                <div>Managed rehabilitation and incarceration of military offenders and cultivated strong conflict management and
                                    negotiation skills through daily interaction with detainees.</div>,
                                <div>Awarded Best Soldier of the Month and a Letter of Commendation from Commander of the Military Police unit for
                                    exceptional performance and resilience in the Detention Barracks’ taxing environment.</div>
                            ]
                        }
                    />

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default WorkExperience;