import React from 'react'
import './LandingPage.css'

import Footer from '../Components/LandingPage/Footer'
import HeroSection from '../Components/LandingPage/HeroSection'
import FeaturesSection from '../Components/LandingPage/FeaturesSection'
import TestimonialsSection from '../Components/LandingPage/TestimonialsSection'
import Navbar from '../Components/Common/Navbar'

function LandingPage() {
  return (
    <div className='LandingPage'>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
        <TestimonialsSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage