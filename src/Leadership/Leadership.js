import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';
import "../Thumbnail.css";
import "../Section.css";
 
function Projects(props) {
    return (
        <BrowserRouter>
            <div className="section_container">
                <br/><br/>
                <h1>Leadership</h1>
                <br/><br/><br/><br/>
            </div>
            
            <div className="section_endline"></div>
        </BrowserRouter>
    )
}
 
export default Projects;