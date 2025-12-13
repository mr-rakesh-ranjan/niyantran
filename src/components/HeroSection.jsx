import React from 'react'
import { ArrowRight, Sunrise, AlertCircle } from 'lucide-react'

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-blue min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="section-container py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-niyantran-orange/20 border border-niyantran-orange px-4 py-2 rounded-full">
              <Sunrise className="w-5 h-5 text-niyantran-gold" />
              <span className="text-sm font-semibold text-niyantran-gold">Join the 4 AM Club</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Is Your Child <span className="text-niyantran-orange">Studying</span>, or Just{' '}
              <span className="text-niyantran-gold">Sitting with Books?</span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              We don't just teach subjects. We build{' '}
              <span className="font-bold text-white">Discipline</span>,{' '}
              <span className="font-bold text-white">Focus</span>, and{' '}
              <span className="font-bold text-white">Self-Study Habits</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToForm}
                className="btn-primary flex items-center justify-center space-x-2 text-lg group"
              >
                <span>Start 7-Day Observation Period</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Limited Slots Badge */}
            <div className="flex items-center space-x-2 text-niyantran-gold">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Limited slots for the 4 AM Club</span>
            </div>
          </div>

          {/* Right Side - Split Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Left Image - Distracted Child */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 h-80 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">😔</div>
                  <p className="text-white text-center font-semibold">Distracted</p>
                  <p className="text-gray-400 text-sm text-center mt-2">Phone in hand</p>
                  <p className="text-gray-400 text-sm text-center">Books untouched</p>
                </div>
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  BEFORE
                </div>
              </div>

              {/* Right Image - Focused Child at 4 AM */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-500">
                <div className="bg-gradient-to-br from-niyantran-light-blue to-white p-8 h-80 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-niyantran-deep-blue text-center font-bold">4:00 AM</p>
                  <p className="text-niyantran-blue text-sm text-center mt-2">Writing in diary</p>
                  <p className="text-niyantran-blue text-sm text-center">Focused & Sharp</p>
                </div>
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  AFTER
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 w-64">
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-2xl font-bold text-niyantran-orange">98%</p>
                  <p className="text-xs text-gray-600">Focus Improvement</p>
                </div>
                <div className="border-l border-gray-300"></div>
                <div>
                  <p className="text-2xl font-bold text-niyantran-blue">7 Days</p>
                  <p className="text-xs text-gray-600">To See Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
