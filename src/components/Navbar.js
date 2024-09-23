import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header >
      <h3>izzy.africa</h3>
      <nav ref={navRef}>
        <a href="#">Events</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Login</a>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>

      </nav>
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>

      {/* <div className="overlay">
      <div className="header-inner container">
      <div className="logo-nav-btn">
        {/* <div> 
          <a href="/">
            <img src={logo} alt="plus2.34_logo" />
          </a>
        </div> */}
       
        {/* <div>
          <nav ref={navRef}>
            <a href="/">ABOUT</a>
            <a href="/">SHOP</a>
            <a href="/">GALLERY</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div> */}
       
        {/* <div>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
          
          <button id="support"  className="btn btn-light">
            support us
            </button>
        </div>
      </div> */}

    </header>
  );
};

export default Navbar;
