import React from "react";
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-content">



          <img src="../src/assets/image.png" alt="logo" className='log' />

          <div className="description">
            <p>PyHack provides a wide range of resources and hands-on experience to help you master Python-based game development. Explore new techniques, share your creations, and collaborate with fellow developers. Whether you're looking to build indie games or start a career in the gaming industry, PyHack is the place to begin.</p>
          </div>

          <div className="list">
            <div>
              <ul>
                <h3>Resources</h3>
                <li>Brand</li>
                <li>FAQ</li>
                <li>Help & Support</li>
                <li>Governance</li>
              </ul>
            </div>

            <div >
              <ul>
                <h3>Developers</h3>
                <li>Technical Paper</li>
                <li>Security</li>
                <li>Game Design</li>
              </ul>
            </div>

            <div >
              <ul>
                <h3>Company</h3>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Contact</li>
              </ul>
            </div>


          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;