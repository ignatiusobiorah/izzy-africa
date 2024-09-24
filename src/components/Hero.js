import React from 'react'
import Navbar from './Navbar';

function Hero() {
  return (
    <div className='hero'>
        <Navbar />
        <div className='hero-content'>
            <div className='hero-text'>
            <h1>The Future of Event Management</h1> 
            <p>Seamlessly Create, Manage and Monetize Your Events.</p>
            </div>
            
            <button className='discover-btn'>
                 Discover Events
            </button>
        </div>

    </div>
  )
}

export default Hero;