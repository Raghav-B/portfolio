import React, { useRef, useState } from 'react';
import "./ProjectAccordion.css";

function ProjectAccordion(props) {
    const title = "hello";
    const content = "HAJHJKDHKHGFJDH";
    const [isActive, setIsActive] = useState(false);
    const dropRef = useRef(null);

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div
                    className="accordion-title"
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <div>{title}</div>
                    <div>+</div>
                </div>
                {
                    isActive &&
                    <div
                        className="accordion-content"
                        ref={dropRef}
                    >
                        {content}
                    </div>
                }
            </div>
        </div>
    );
}

export default ProjectAccordion;
