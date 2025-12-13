import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue">
      <Header />
      <div className="section-container py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Niyantran</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl mb-4">
            Niyantran is not just another coaching center. We are India's first discipline-first learning platform that focuses on building the foundation of self-study habits before teaching subjects.
          </p>
          <p className="text-lg mb-4">
            Founded by educators and technologists, we partner with parents to build discipline, focus and self-study habits in children through a structured observation-first approach, customised plans and the revolutionary 4 AM Club methodology.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-niyantran-gold">Our Mission</h2>
          <p className="text-lg mb-4">
            To transform the way students learn by building habits that last a lifetime, not just cramming for exams.
          </p>
          <h2 className="text-3xl font-bold mt-8 mb-4 text-niyantran-gold">Why the 4 AM Club?</h2>
          <p className="text-lg mb-4">
            Early morning hours (4-6 AM) are scientifically proven to be the most productive time for learning. Zero distractions. Maximum retention. Mental toughness building.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
