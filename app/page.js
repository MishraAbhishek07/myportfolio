import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/About';

const page = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <Hero/>
      </div>
      <AboutMe/>
    
    </div>
  )
}

export default page