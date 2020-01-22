import React from 'react'; // Import the Component component from React
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import './Thumbnail.css';

function Thumbnail(props) {
  return (
    <Link to={props.link}>
      <div className="thumbnail_container">
        <div className="thumbnail_title">{props.title}</div>
        <div className="thumbnail_image_container">
          <img src={props.image} alt="Project Image" className="thumbnail_image"/>
        </div>
      </div>
    </Link>
  );
}
 
export default Thumbnail;

//        
