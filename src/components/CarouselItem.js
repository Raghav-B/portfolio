import React, { forwardRef, useEffect, useState } from 'react';

function CarouselItem(props) {
    const [maxHeight, setMaxHeight] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);

    useEffect(() => {
        // console.log(props.carouselRef.current.clientHeight);
        setMaxHeight(props.carouselRef.current.clientHeight);
        setMaxWidth(props.carouselRef.current.clientWidth);
    }, [props.carouselRef])

    return (
        <div
            style={{
                maxHeight: `${maxHeight}px`,
                maxWidth: `${maxWidth}px`,
                // backgroundColor: "#E6E6E6",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <img
                style={{
                    // maxHeight: `${maxHeight}px`,
                    // minHeight: `${maxHeight}px`,
                    // maxWidth: `${maxWidth}px`,
                    // maxHeight: "100%",
                    // maxWidth: "100%",
                    width: "auto",
                    height: "auto"
                }}
                src={props.img}
            />
            <div>
                {props.title}
            </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.title}
            </div>
            <div>
                {props.title}
            </div>
        </div>
    );
}

export default CarouselItem;