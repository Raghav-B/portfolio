import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import logo from './logo.svg';
import './App.css';
 
function Projects(props) {
    return (
        // Render a Thumbnail component
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link=""
                image={logo}
                title="Hello world"
                category="HAHA"
            />

            <Thumbnail
            link="www.google.com"
            image={logo}
            title="Twitter Newsfeed"
            category="Mobile App"
            />
            
            <Thumbnail
            link="/airbnb"
            image={logo}
            title="Airbnb Experiences"
            category="Website"
            />
            
            <Thumbnail
            link="/photoshop"
            image={logo}
            title="Photoshop Redesign"
            category="Desktop App"
            />
        </div>
    )
}
 
export default Projects;