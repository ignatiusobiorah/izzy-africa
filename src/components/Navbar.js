import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Link to="/">Events</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">About</Link>
        <Link to="/login">Login</Link>
        
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
