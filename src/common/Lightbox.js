import React, { useState, useEffect, useCallback } from "react";
import ReactModal from "react-modal";
import "./Lightbox.css";

const Lightbox = ({ selectedImage, onNext, onPrev, onClose, showModal, setShowModal }) => {

    const handleKeyPress = useCallback(
        e => {
            switch (e.code) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowRight":
                    onNext();
                    break;
                case "ArrowLeft":
                    onPrev();
                    break;
                default:
                    break;
            }
        },
        [onClose, onNext, onPrev]
    );

    useEffect(() => {
        window.addEventListener("keyup", handleKeyPress);
        return () => {
            window.removeEventListener("keyup", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <ReactModal
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
                    padding: "1%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }
            }}
            shouldCloseOnEsc={true}
            onRequestClose={() => {
                setShowModal(false);
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "1%",
                    width: "100%",
                    position: "relative"
                }}
            >
                <img
                    className="back-button"
                    src={require("../imgs/Icons/left-arrow.svg")}
                    alt="back-button-icon"
                    onClick={onClose}
                />
            </div>
            <div
                style={{
                    // backgroundColor: "blue",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {
                    (showModal) ?
                        <>


                            <div
                                className="arrow-container left-arrow"
                                onClick={onPrev}>
                                <img src={require("../imgs/Icons/chevron-left.svg")} alt="left arrow icon" />
                            </div>

                            <div
                                style={{
                                    textAlign: "center",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    marginBottom: "1%"
                                }}
                            >
                                {selectedImage.title}
                            </div>

                            <div
                                style={{
                                    textAlign: "center",
                                    fontSize: "20px",
                                    paddingLeft: "10%",
                                    paddingRight: "10%",
                                    marginBottom: "1%"
                                }}
                            >
                                {selectedImage.description}
                            </div>
                            <img
                                id="lightbox-image"
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                            />

                            <div
                                className="arrow-container right-arrow"
                                onClick={onNext}
                            >
                                <img src={require("../imgs/Icons/chevron-right.svg")} alt="right arrow icon" />
                            </div>
                        </> : null
                }

            </div>
        </ReactModal >

        // <>
        //     <div className="lightbox-backdrop" onClick={onClose} />
        //     <div className="lightbox-window">
        //         

        //         <div className="lightbox-image-container">
        //             
        //     </div>
        // </>
    );
};

export default Lightbox;
