import React from 'react'
import HeroSection from './HeroSection'
import RealityCheck from './RealityCheck'
import Solution from './Solution'
import TechTrust from './TechTrust'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Header from './Header'
import Carousel from './Carousel'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Carousel />
      <HeroSection />
      <RealityCheck />
      <Solution />
      <TechTrust />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage
