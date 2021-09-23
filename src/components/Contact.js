import React, { useState, useEffect } from 'react';
import "./Contact.css";


function Contact(props) {
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
                style={{
                    fontSize: "50px",
                }}
            >
                Contact
            </div>

            <div className="contact_container">
                <div className="contact_body_text scroll_anim init_right">
                    I am always on the lookout for new and interesting opportunities. Please feel free to contact me via email.

                    <br /><br />
                    I look forward to hearing from you!
                    <br /><br />

                    <b>Email</b><br />
                    raghavbhardwaj@u.nus.edu<br />
                </div>
                <img className="contact_image scroll_anim init_right" src={require("../imgs/new_zealand.JPG")}></img>
            </div>

            <br /><br />

            <b><a href="https://github.com/Raghav-B/portfolio">Website source code</a></b>
        </div>
    );
}

export default Contact;