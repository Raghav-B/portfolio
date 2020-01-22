import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';
import "../Thumbnail.css";
import "../Section.css";
import "./ContactMe.css";
 
function ContactMe(props) {
    return (
        <BrowserRouter>
            <div className="section_container">
                <br/><br/>
                <h1>Contact Me</h1>
                
                <br/>
                <div className="contact_box">
                    Hi there!
                </div>

                <br/><br/><br/><br/>
            </div>
            
            <div className="section_endline"></div>
        </BrowserRouter>
    )
}
 
export default ContactMe;