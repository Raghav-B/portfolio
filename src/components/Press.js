import React, { useState, useEffect } from 'react';
import "./Press.css";

function Press(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                zIndex: 1,
                marginBottom: "3%"
            }}
        >
            <div
                className="scroll_anim init_left"
                style={{
                    fontSize: "50px",
                }}
            >
                In the Press
            </div>

            <div
                className="scroll_anim init_top"
                style={{
                    marginTop: "1%",
                    fontSize: "30px",
                    textAlign: "center",
                    marginBottom: "2%"
                }}
            >
                Showing up in the news
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    rowGap: "10px"
                }}
            >

                <div
                    className="scroll_anim init_right"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        columnGap: "10px"
                    }}
                >
                    <a
                        className="press-img-container"
                        href="https://www.straitstimes.com/singapore/environment/programme-that-weighs-students-food-wastage-takes-top-prize-at-sustainability?xtor=CS3-18&utm_source=STiPhone&utm_medium=share&utm_term=2020-10-15%2023%3A10%3A08"
                    >
                        <img
                            s

                            className="press-img"
                            src={require("../imgs/Press/TCS.jpg")}
                        />
                        <div
                            className="press-img-text-panel"
                        >
                            <div
                                className="press-img-text"
                            >
                                TCS Sustainathon 2020<br /><b>Straits Times</b>
                            </div>
                        </div>
                    </a>

                    <a
                        className="press-img-container"
                        href="https://www.todayonline.com/singapore/nyaa-could-branch-new-areas-says-heng-swee-keat-180-youths-receive-gold-award"
                    >
                        <img
                            className="press-img"
                            src={require("../imgs/Press/NYAA.jpg")}
                        />
                        <div
                            className="press-img-text-panel"
                        >
                            <div
                                className="press-img-text"
                            >
                                National Youth Achievement Award 2017<br /><b>Today</b>
                            </div>
                        </div>
                    </a>
                </div>

                <div
                    className="press-img-container scroll_anim init_right"
                >
                    <img
                        className="press-img"
                        src={require("../imgs/Press/NYAAArticle.jpg")}
                    />
                    <div
                        className="press-img-text-panel"
                    >
                        <div
                            className="press-img-text"
                        >
                            National Youth Achievement Award 2017<br /><b>Straits Times</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Press;