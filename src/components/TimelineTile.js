import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import "./Timeline.css";

function TimelineTile(props) {

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            iconStyle={{ background: '#2194f3', color: '#fff' }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        className="vertical-timeline-element-title"
                        style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                        }}
                    >
                        {props.company}
                    </div>
                    <div
                        style={{
                            fontSize: "20px",
                            fontWeight: "normal",
                            marginBottom: "15px"
                        }}
                        className="vertical-timeline-element-subtitle"
                    >
                        {props.role}
                    </div>
                    <div
                        style={{
                            fontSize: "20px"
                        }}
                    >
                        {props.date}
                    </div>
                </div>

                <img
                    style={{
                        maxHeight: "75px",
                        height: "auto",
                        width: "auto",
                        maxWidth: "30%"
                    }}
                    src={props.img}
                >
                </img>
            </div>
            <div>
                <ul>
                    {
                        props.list.map((item, index) => {
                            return <li
                                key={index}
                            >
                                {item}
                            </li>
                        })
                    }
                </ul>
            </div>
        </VerticalTimelineElement>
    );
}

export default TimelineTile;