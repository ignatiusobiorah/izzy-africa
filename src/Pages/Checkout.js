import React from 'react'
import Ticket from '../components/Ticket';

const Checkout = () => {
  return (
    <div>
        <div><h4>Checkout</h4></div>
        <div>
            <button>Back</button>
            <h2>Choose Tickets</h2>
        </div>
        <div>
          <Ticket />
        </div>
    </div>
  )
}

export default Checkout;