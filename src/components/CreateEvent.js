import React from 'react';
import ticket from "../images/ticket-2974645_640.jpg";
import { Link } from 'react-router-dom';

const CreateEvent = () => {
  return (
    <div className='create-event'>
        <div className='create-event-text'>
            <h2>
            Say goodbye to manual ticketing: 
            Sell tickets online with our user-friendly platform.
            </h2>
            <p>
            Simplify your event planning with a centralized 
            platform for ticket sales, marketing, and organization.
            </p>
            <Link className='create-link' to="/login">
                <button>
                    Create Event
                </button>
            </Link>

        </div>
        <div className='create-event-image'>
            <img src={ticket} alt='ticket' />
        </div>
    </div>
  )
}

export default CreateEvent