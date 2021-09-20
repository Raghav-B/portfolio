import React, { useEffect, useRef, useState } from 'react';
import "./RoleSlider.css";

var roles = [
    "Software Engineer",
    "Electrical Engineer",
    "Industrial Designer",
    "Entrepreneur",
    "Leader",
];
roles = roles.concat(roles);

function RoleSlider(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "1%",
            }}
        >
            <div
                style={{
                    fontSize: "30px",
                }}
            >
                A holistic blend of
            </div>





            <div
                style={{
                    display: "flex",
                    position: "relative",
                    height: "100%",
                    maxHeight: "30px",
                    overflow: "hidden",
                    marginLeft: "10px",
                    paddingTop: "1px",
                    borderBottomWidth: "2px",
                    borderBottomColor: "black",
                    borderBlockEndStyle: "dashed"
                }}
            >
                <div
                    className="roleDiv"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%"
                    }}
                >
                    {
                        roles.map((item, index) => {
                            return <div
                                key={index}
                                style={{
                                    position: "relative",
                                    height: "30px",
                                    fontSize: "30px",
                                    textAlign: "center"
                                }}
                            >
                                {item}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default RoleSlider;