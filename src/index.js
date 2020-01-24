import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./Animations.css";

ReactDOM.render(<App />, document.getElementById('root'));

var anim_callback = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var scrollPos = 0;
var isScrollingDown = true;
window.addEventListener("scroll", function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    isScrollingDown = false;
  } else {
    isScrollingDown = true;
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});

loop();

function loop() {
    var elementsToShow = document.getElementsByClassName("initially_invisible");
  
    for (var i = 0; i < elementsToShow.length; i++) {
      if (isScrollingDown == true) {
        if (isElementInViewport(elementsToShow[i])) {
          elementsToShow[i].classList.add("is_visible");
        }
      } else {
        var rect_top = elementsToShow[i].getBoundingClientRect().top;
        if (rect_top >= 0 + (window.innerHeight/2)) {
          elementsToShow[i].classList.remove("is_visible");
        }
      }
      console.log("hm: " + scrollPos + elementsToShow[i].id + elementsToShow[i].getBoundingClientRect().top);
      console.log(window.innerHeight);
    }
    
    anim_callback(loop);
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      !(rect.top >= 0 + (window.innerHeight/2))
      /*(rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))*/
    );
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
