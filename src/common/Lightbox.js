import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import "./Lightbox.css";

const Lightbox = ({ selectedImage, onNext, onPrev, onClose }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onNext(),
    onSwipedRight: () => onPrev(),
    onSwipedDown: e => onClose(),
    trackMouse: true,
    trackTouch: true,
    preventDefaultTouchmoveEvent: true
  });

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
    <>
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-window">
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
          {selectedImage.description}
        </div>

        <div {...swipeHandlers} className="lightbox-image-container">
          <div
            className="arrow-container left-arrow"
            onClick={onPrev}
          // onMouseEnter={() => setShowLeftArrow(true)}
          // onMouseLeave={() => setShowLeftArrow(false)}
          >
            {showLeftArrow ? (
              <img src={require("../imgs/Icons/chevron-left.svg")} alt="left arrow icon" />
            ) : null}
          </div>

          <img
            id="lightbox-image"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />

          <div
            className="arrow-container right-arrow"
            onClick={onNext}
          // onMouseEnter={() => setShowRightArrow(true)}
          // onMouseLeave={() => setShowRightArrow(false)}
          >
            {showRightArrow ? (
              <img src={require("../imgs/Icons/chevron-right.svg")} alt="right arrow icon" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
