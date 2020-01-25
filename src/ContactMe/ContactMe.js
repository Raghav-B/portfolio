import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import "../Section.css";
import "./ContactMe.css";
 
function ContactMe(props) {
    return (
        <BrowserRouter>
            <div className="section_container">
                <h1 className="scroll_anim init_bottom">Contact Me!</h1>
                
                <br/>
                <div className="contact_box">
                    Hi there!
                </div>

            </div>
        </BrowserRouter>
    )
}
 
export default ContactMe;