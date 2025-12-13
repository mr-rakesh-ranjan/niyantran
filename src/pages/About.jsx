import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Heart, Target, Eye, Users, BookOpen, CheckCircle, ArrowRight, Sparkles, Shield } from 'lucide-react'

const About = () => {
  const whoWeServe = [
    'Working parents',
    'Middle-class & upper-middle-class families',
    'Students who struggle with self-study',
    'Average & below-average learners who need guidance',
    'Parents who want peace of mind'
  ]

  const childImpact = [
    'Studying independently',
    'Becoming more disciplined',
    'Building confidence',
    'Taking responsibility for their learning'
  ]

  const parentImpact = [
    'Less stressed',
    'More informed',
    'More confident about their child\'s future'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="section-container py-20 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-200">Transforming Self-Study Habits Across India</p>
        </div>
      </section>

      {/* Why Niyantran Exists */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-niyantran-deep-blue mb-8 text-center">
              Why Niyantran Exists
            </h2>
            <div className="bg-niyantran-light-blue rounded-2xl p-8 md:p-12">
              <p className="text-xl text-niyantran-deep-blue mb-6 font-semibold">
                Every parent knows this struggle.
              </p>
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>Children are intelligent.<br />They have potential.<br />But self-study doesn't happen regularly.</p>
                <p className="text-niyantran-orange font-semibold">
                  Parents remind.<br />Parents push.<br />Parents worry.
                </p>
                <p className="font-bold text-niyantran-deep-blue text-xl">
                  And still — consistency is missing.
                </p>
              </div>
              <div className="bg-niyantran-deep-blue text-white rounded-xl p-6 text-center">
                <p className="text-xl font-bold">
                  Niyantran was born to solve this exact problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Niyantran */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-niyantran-deep-blue mb-8 text-center">
              What Is Niyantran?
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Niyantran is a <span className="font-bold text-niyantran-orange">child discipline and self-study monitoring revolution.</span>
            </p>
            <p className="text-lg text-center text-gray-600 mb-8">
              We help children build the habit of daily self-study through:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Structured Mentoring', icon: BookOpen },
                { title: 'Real-time Accountability', icon: Shield },
                { title: 'Parental Transparency', icon: Users },
                { title: 'Consistent Discipline', icon: Target }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="bg-niyantran-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-niyantran-blue" />
                  </div>
                  <h3 className="font-bold text-niyantran-deep-blue">{item.title}</h3>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600">
                We don't replace schools or tuitions.<br />
                <span className="font-bold text-niyantran-deep-blue">We strengthen what happens at home.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="bg-gradient-to-r from-niyantran-deep-blue to-niyantran-blue py-20 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Belief</h2>
            <div className="space-y-4 text-xl md:text-2xl mb-8">
              <p><span className="text-niyantran-gold font-bold">Talent</span> grows with discipline.</p>
              <p><span className="text-niyantran-gold font-bold">Discipline</span> grows with daily practice.</p>
              <p>And <span className="text-niyantran-gold font-bold">daily practice</span> needs Niyantran.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 mt-8">
              <p className="text-lg">
                Education is not just about syllabus completion.<br />
                <span className="font-bold">It's about habits, routine, and responsibility.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-niyantran-deep-blue mb-8 text-center">
              Who We Serve
            </h2>
            <p className="text-lg text-center text-gray-600 mb-8">Niyantran is designed for:</p>
            <div className="space-y-4 max-w-2xl mx-auto">
              {whoWeServe.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-md">
                  <CheckCircle className="w-6 h-6 text-niyantran-orange flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                Whether a child studies in an English-medium or regional school —<br />
                <span className="font-bold text-niyantran-deep-blue">Niyantran fits every home.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-gradient-to-r from-niyantran-orange to-niyantran-gold py-20 text-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Impact</h2>
            <div className="text-center mb-12">
              <p className="text-5xl md:text-6xl font-bold mb-2">Thousands+</p>
              <p className="text-xl">families have already transformed their child's self-study habits</p>
              <p className="text-sm opacity-80 mt-2">and the number is growing every day.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Children Impact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Sparkles className="w-6 h-6" />
                  <span>Children are:</span>
                </h3>
                <ul className="space-y-3">
                  {childImpact.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Parents Impact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Heart className="w-6 h-6" />
                  <span>Parents are:</span>
                </h3>
                <ul className="space-y-3">
                  {parentImpact.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-niyantran-deep-blue text-white rounded-2xl p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-10 h-10 text-niyantran-gold" />
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To build a generation of <span className="text-niyantran-gold font-bold">self-disciplined, self-motivated learners</span> across India.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-niyantran-blue text-white rounded-2xl p-8 md:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-10 h-10 text-niyantran-gold" />
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed">
                To make self-study a <span className="text-niyantran-gold font-bold">daily habit in every Indian household</span> and create a discipline-driven education revolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-niyantran-light-blue py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-niyantran-deep-blue mb-6">
              Join thousands of parents who have already taken control of their child's study habits.
            </p>
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-niyantran-orange hover:bg-niyantran-gold text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
