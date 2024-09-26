import React from 'react'
import artCulture from "../images/activity-8122959_640.jpg";
import community from "../images/charity-8366471_640.png";
import foodDrinks from "../images/drink-462776_640.jpg";
import sports from "../images/skateboard-4030508_640.jpg";
import music from "../images/audience-1853662_640.jpg";
import career from "../images/job-5382501_640.jpg";
const EventCat = () => {
  return (
    <div className='events-category'>
        <div className='event-cat-text'>
            <h2>
                There is something here for everyone
            </h2>
            <p>
            From dance parties to power talks, there's something for everyone. 
            We make it easy for you to find events that match your vibe.
            </p>
        </div>
        <div className='event-cat-icons'>
          <div className='icons'>
            <img src= {artCulture} alt='spray-painting'/>
            <p>Arts & Culture</p>
          </div>
          <div className='icons'>
            <img src= {sports} alt='skateboarder'/> 
            <p>Sports</p>
          </div>
          <div className='icons'>
            <img src= {community} alt='hands-together'/>
            <p>Community</p>
          </div>
          <div className='icons'>
            <img src= {foodDrinks} alt='drink'/>
            <p>Food & Drinks</p>
          </div>
          <div className='icons'>
            <img src= {career} alt='job'/>
            <p>Career & Business</p>
          </div>
          <div className='icons'>
            <img src= {music} alt='audience'/>
            <p>Concerts & Music</p>
          </div>

        </div>
    </div>
  )
}

export default EventCat;