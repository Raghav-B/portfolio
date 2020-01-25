import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import "../Section.css";
import "./ContactMe.css";
 
function ContactMe(props) {
    return (
        <div className="section_container">
            <h1 className="scroll_anim init_bottom">Contact Me</h1>
            
            <div className="contact_container">
                <div className="contact_body_text scroll_anim init_right">
                    I am always on the lookout for new and interesting opportunities! 
                    Please feel free to contact me by email or phone.<br/> 
                    <br/>
                    I look forward to talking to you!<br/>
                    <br/>
                    
                    <b>Email</b><br/>
                    raghavbhardwaj@u.nus.edu<br/>
                    <br/>
                    <b>Phone</b><br/>
                    +65 96270794<br/>
                    <br/>

                </div>
                <img className="contact_image scroll_anim init_right" src={require("./new_zealand.JPG")}></img>
            </div>

            <br/><br/><br/><br/>
        </div>
    )
}
 
export default ContactMe;