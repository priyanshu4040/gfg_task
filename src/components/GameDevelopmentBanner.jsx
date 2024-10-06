import React from 'react';
import './GameDevelopmentBanner.css'

const GameDevelopmentBanner = () => {
  return (
    <>

      < div className="announcement-bar" >
        <span>Introducing an era of new and exciting game development</span>
        <a href="#">Read more &rarr;</a>
      </div >


      < section className="hero" >
        <div className="hero-content">
          <h1>Access the full power of Python Game Development.</h1>
          <p>The ultimate game dev workshop for Python enthusiasts. Learn, create, and innovate with the most versatile
            platform.</p>
          <a href="#" className="btn">Get Started &rarr;</a>
        </div>
        <div className="hero-graphic">
        </div>

      </section >

      <div class="chart">
        <img src="../src/assets/chart.png" alt="chart" id="ch" />
      </div>




    </>
  );
};

export default GameDevelopmentBanner;