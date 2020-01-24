import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './About.css';

function Showcase(props) {

  return (
    <div className="about_showcase_container">
        <figure className="about_showcase_sliding_region">
            <img src={require("./imgs/NYAA.jpg")}></img>
            <img src={require("./imgs/freshman_emcee.JPG")}></img>
            <img src={require("./imgs/poke.AI.jpg")}></img>
            <img src={require("./imgs/engincamp_emcee.jpg")}></img>
            <img src={require("./imgs/NYAA.jpg")}></img>
        </figure>
    </div>
  );
}
 
export default Showcase;