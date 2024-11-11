import React from 'react';
import './home.css';

function Hero() {
  return (
   <>
    <div id="hp_container_outer">
      <div id="hp_container_inner">
        <div className="image-tag">
          <img src="../../../public/img/books2.webp" className="top_img" loading="lazy" id="hp_books" />
        </div>
        <h1>
          Welcome to <span className="ptitle">FreeMind</span>, the most trusted how-to block site on the internet.
        </h1>
        <p>
          What will you learn on <span className="ptitle">FreeMind</span> today?
        </p>
      </div>
    </div>
    <hr />
   </>
  );
}

export default Hero;