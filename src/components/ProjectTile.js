import React, { forwardRef, useRef, useState } from 'react';
import ReactModal from "react-modal";
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem';
import "./Carousel.css"; // requires a loader
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ProjectTile.css";

ReactModal.setAppElement('#root');

function ProjectTile(props) {

    const [showModal, setShowModal] = useState(false);
    const carouselRef = useRef(null);

    return (
        <div>
            {/* <ReactModal
                isOpen={showModal}
                style={{
                    overlay: {
                        zIndex: 10,
                    },
                    content: {
                        maxWidth: "70%",
                        maxHeight: "90%",
                        // position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        borderRadius: 0,
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        // overflow: "hidden"
                    }
                }}
                shouldCloseOnEsc={true}
                onRequestClose={() => {
                    setShowModal(false);
                }}
            >
                <img
                    className="modalBackButton"
                    onClick={() => {
                        setShowModal(false);
                    }}
                    src={require("../imgs/PageArrows.png")}
                />

                <div
                    style={{
                        fontSize: "30px",
                        textAlign: "center",
                        fontWeight: "normal",
                    }}
                >
                    {props.title}
                </div>

                <div
                    style={{
                        fontSize: "20px",
                        textAlign: "center",
                        fontWeight: 200,
                        marginTop: "10px",
                        paddingLeft: "10%",
                        paddingRight: "10%"
                    }}
                >
                    {props.flavorText}
                </div>

                <div
                    ref={carouselRef}
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "2%",
                        backgroundColor: "orange"
                    }}
                >
                    <Carousel
                        showArrows={true}
                        showThumbs={false}
                    >
                        {
                            props.projects.map((item, index) => {
                                return <CarouselItem
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    carouselRef={carouselRef}
                                />
                            })
                        }

                        <div
                            style={{
                                maxHeight: "200px"
                            }}
                        >
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%"
                                }}
                                src={props.img}
                            />
                        </div>
                    </Carousel>
                </div >
            </ReactModal > */}



            < div
                // ref={ref}
                onClick={() => {
                    // props.onClick();
                    setShowModal(true);
                }
                }
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
                    style={{
                        // minWidth: "310px",
                        // width: "auto",
                        // minHeight: "210px",
                        // height: "auto",
                        // filter: "blur(2px)"
                    }}
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

// export default forwardRef(ProjectTile);
export default ProjectTile;