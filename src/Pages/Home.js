import Hero from "../components/Hero";
import EventCat from "../components/EventCat";
import CreateEvent from "../components/CreateEvent";

import React from 'react'

const Home = () => {
  return (
    <div>
        <Hero />
        <EventCat />
        <CreateEvent />
    </div>
  )
}

export default Home;