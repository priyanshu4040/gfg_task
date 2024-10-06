import react from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <img src="../src/assets/logo.png" alt="logo" className='logo' />
        <ul className='ul'>
          <li className='li'>Products</li>
          <li className='li'>Resources</li>
          <li className='li'>Developers</li>
          <li className='li' id="op">Open App</li>
        </ul>

      </div>

    </>
  );
}

export default Navbar;