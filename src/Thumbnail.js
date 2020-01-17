import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Thumbnail(props) {
  return (
    <Link to={props.link}>
    <div className="project">
        <div className="thumbnail_title">{props.title}</div>
      
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="thumbnail_date">{props.category}</div>
    </div>
    </Link>
  );
}
 
export default Thumbnail;