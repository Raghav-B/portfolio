import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../App.css';
import "../Section.css";
import "./Awards.css";
 
function ProgressBar(props) {
    return (
        <div className="skill_bar scroll_anim init_left">
            {props.skill}
            <div className="skill_bar_background">
                <div className="skill_bar_progress" style={{width: props.percent}}></div>
            </div>
        </div>
    )
}
 
export default ProgressBar;