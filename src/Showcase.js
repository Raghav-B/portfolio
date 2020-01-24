import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './Showcase.css';

var slideIndex = 1;

function Showcase(props) {

  /*return (
    <div className="showcase_container">
        <figure className="showcase_sliding_region">
            <img src={require("./WorkExperience/imgs/anomaly_detection.png")}></img>
            <img src={require("./WorkExperience/imgs/code_blur.png")}></img>
            <img src={require("./WorkExperience/imgs/detection_test.jpg")}></img>
            <img src={require("./WorkExperience/imgs/anomaly_detection.png")}></img>
        </figure>
    </div>
  );*/
  var timer = clearTimeout();
  timer = setTimeout(() => showSlides(slideIndex), 100);

  return (
    <div className="container">

      <div className="slide m_hide">
        <div className="numbertext">1 / 3</div>
        <img src={require("./WorkExperience/imgs/anomaly_detection.png")}></img>
      </div>

      <div className="slide m_hide">
        <div className="numbertext">2 / 3</div>
        <img src={require("./WorkExperience/imgs/code_blur.png")}></img>
      </div>

      <div className="slide m_hide">
        <div className="numbertext">3 / 3</div>
        <img src={require("./WorkExperience/imgs/detection_test.jpg")}></img>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      <div className="caption-container">
        <p id="caption"></p>
      </div>

      <div className="row">
        <div className="column">
          <img className="demo cursor" src={require("./WorkExperience/imgs/anomaly_detection.png")} onClick={() => currentSlide(1)} alt="The Woods"></img>
        </div>
        <div className="column">
          <img className="demo cursor" src={require("./WorkExperience/imgs/code_blur.png")} onClick={() => currentSlide(2)} alt="Cinque Terre"></img>
        </div>
        <div className="column">
          <img className="demo cursor" src={require("./WorkExperience/imgs/detection_test.jpg")} onClick={() => currentSlide(3)} alt="Mountains and fjords"></img>
        </div>
      </div>
    </div>
  );
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  console.log(slides.length);


  //var slides = document.getElementsByClassName("mySlides");
  //console.log("slides: " + slides);
  //var dots = document.getElementsByClassName("demo");
  //console.log("dots: " + dots);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].className = "slide m_hide";
  }

  slides[slideIndex-1].className = "slide m+show";
    
    
    //slides[i].style.display = "none";
  //}
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  //slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}
 
export default Showcase;