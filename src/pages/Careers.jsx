import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue">
      <Header />
      <div className="section-container py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Niyantran</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl mb-6">
            We're building India's leading discipline-first learning platform. If you love mentoring, education technology, and making a real impact on students' lives, join us.
          </p>
          
          <h2 className="text-3xl font-bold mt-8 mb-4 text-niyantran-gold">Open Positions</h2>
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Senior Mentor (Math & Science)</h3>
              <p className="text-gray-300 mb-2">Location: Hybrid (Remote + Field)</p>
              <p className="mb-4">Looking for passionate educators who can mentor students for the 4 AM Club and build discipline-based learning habits.</p>
              <button className="btn-primary">Apply Now</button>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Full-Stack Developer</h3>
              <p className="text-gray-300 mb-2">Location: Remote</p>
              <p className="mb-4">Join our tech team to build the next-gen EdTech platform with React, Node.js, and AI integrations.</p>
              <button className="btn-primary">Apply Now</button>
            </div>
          </div>

          <div className="mt-12 bg-niyantran-orange/20 border border-niyantran-orange rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-lg">Send your CV and cover letter to: <span className="text-niyantran-gold font-bold">careers@niyantran.in</span></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Careers
