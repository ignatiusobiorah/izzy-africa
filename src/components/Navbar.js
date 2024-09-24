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
      <div className="nav-links">
      <nav ref={navRef}>
        <a href="#">Events</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Login</a>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>


      </nav>
      </div>


      
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>

        <button className="sign-up-btn">
          Sign Up
        </button>

    </header>
  );
};

export default Navbar;
