import React from 'react'
import HeroSection from './HeroSection'
import RealityCheck from './RealityCheck'
import Solution from './Solution'
import TechTrust from './TechTrust'
import Testimonials from './Testimonials'
import NotAProduct from './NotAProduct'
import Footer from './Footer'
import Header from './Header'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RealityCheck />
      <Solution />
      <TechTrust />
      <Testimonials />
      <NotAProduct />
      <Footer />
    </div>
  )
}

export default LandingPage
