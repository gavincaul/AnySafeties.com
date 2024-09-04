import React from "react";
import './Home.css';
import NavBar from '../components/NavBar.tsx';
import SafetyDisplay from "../components/SafetyDisplay.tsx";

export default function Landing() {
  return (
    <div className="background">
      <NavBar></NavBar>
      <div className="container">
        <div className = "hometitle">
          <p>Any Safeties?</p>
          <div className="safetytitle">
            <p>Have there been any safeties this week?</p>
          </div>
        </div>
        
        

        {/* <div className="d-flex justify-content-between" style={{ position: 'relative', marginTop: '50px' }}>
          <img
            src="https://c.tenor.com/Ihbu3iBTjGcAAAAM/better-call-saul-loop.gif"
            alt="Better Call Saul Gif"
            className="animated-gif"
            style={{ width: '200px', height: 'auto' }}
          />
          <img
            src="https://c.tenor.com/Ihbu3iBTjGcAAAAM/better-call-saul-loop.gif"
            alt="Better Call Saul Gif"
            className="animated-gif"
            style={{ width: '200px', height: 'auto' }}
          />
        </div>

        <div className="d-flex justify-content-between" style={{ position: 'relative', marginTop: '20px' }}>
          <img
            src="https://c.tenor.com/Ikt7sU8aaJMAAAAM/thrust-dance.gif"
            alt="Thrust Dance Gif"
            className="animated-gif"
            style={{ width: '200px', height: 'auto' }}
          />
          <img
            src="https://c.tenor.com/Ikt7sU8aaJMAAAAM/thrust-dance.gif"
            alt="Thrust Dance Gif"
            className="animated-gif"
            style={{ width: '200px', height: 'auto' }}
          />
        </div> */}
        
        <SafetyDisplay></SafetyDisplay>
      </div>
    </div>
  );
}
