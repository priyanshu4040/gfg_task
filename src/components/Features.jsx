import React from "react";
import "./Features.css"


function Features() {
  return (
    <section className="features">
      <h2>Workshop Features</h2>
      <div className="feature-cards">
        <div className="card">
          <div className="card-icon" id="icon1"></div>
          <h3>Game Mechanics</h3>
          <p>Master physics, collision detection, AI, and game loops.</p>
        </div>
        <div className="card">
          <div className="card-icon" id="icon2"></div>
          <h3>Visual Effects</h3>
          <p>Create 2D/3D graphics and animations.</p>
        </div>

        <div className="card">
          <div className="card-icon" id="icon3"></div>
          <h3>Game Balancing</h3>
          <p>Balance difficulty and progression.</p>
        </div>
        <div className="card">
          <div className="card-icon" id="icon4"></div>
          <h3>Cross-Platform Dev</h3>
          <p>Deploy games on PC, web, and mobile.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;