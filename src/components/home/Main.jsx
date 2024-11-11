import React from 'react';
import './home.css';
import NavScrollExampler from "./NavScrollExample"
import Hero from "./Hero"
import Footer from '../footer/Footer';

function Main() {
  return (
    <>
    <NavScrollExampler />
    <Hero />
    <main className="main-part">
      <h1>Schedule your focused time</h1>
      <p>Start sessions on-the-fly or schedule your FreeMInd time in advance. Plan out sessions that recur daily or weekly. With FreeMind, you'll make time for productivity and things that matter most.</p>
      <div className="container">
        <div className="step">
          <div className="number">1</div>
          <h2>Select Your Devices</h2>
          <img src="../../../public/img/block-apps.svg" alt="Select Devices" />
        </div>
        <div className="step">
          <div className="number">2</div>
          <h2>Choose Sites & Apps</h2>
          <img src="../../../public/img/block-website.svg" alt="Choose Sites and Apps" />
        </div>
        <div className="step">
          <div className="number">3</div>
          <h2>Set Your Schedule</h2>
          <img src="https://cdn2.freedom.to/assets/features/advance-scheduling-cf56b94a0a5b06c87b3c8d915bc28c7a4a9682f1fbd9231acb8e98534d1780bd.svg" alt="Set Your Schedule" />
        </div>
      </div>
      <button className="button"><a href="./dashboard" target="_blank">Try for Free!</a></button>
    <hr />
    </main>
    
    <Footer/>
    </>
  );
}

export default Main;