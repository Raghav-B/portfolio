import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './Showcase.css';

function Showcase(props) {
  return (
    <div className="showcase_container">
        <figure className="showcase_sliding_region">
            <img src={require("./WorkExperience/imgs/anomaly_detection.png")}></img>
            <img src={require("./WorkExperience/imgs/code_blur.png")}></img>
            <img src={require("./WorkExperience/imgs/detection_test.jpg")}></img>
            <img src={require("./WorkExperience/imgs/anomaly_detection.png")}></img>
        </figure>
    </div>
  );
}
 
export default Showcase;

//        
