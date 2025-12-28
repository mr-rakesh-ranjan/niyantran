import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Heart, Target, Eye, Users, BookOpen, CheckCircle, ArrowRight, Sparkles, Shield, UserCircle } from 'lucide-react'

import ContactUsModal from '../components/ContactUsModal'

const About = () => {
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

  const founders = [
    {
      name: 'Keshav Raj',
      role: 'Co-Founder, Marketing and Human Resource',
      image: '/src/assets/keshav.jpeg'
    },
    {
      name: 'Kishore Kunal',
      role: 'Founder, CEO',
      image: '/src/assets/kunal.jpeg'
    },
    {
      name: 'Rakesh Ranjan',
      role: 'CTO, Technical Head',
      image: '/src/assets/rakesh.png'
    }
  ]

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue">
      <Header />
      <ContactUsModal open={modalOpen} onClose={() => setModalOpen(false)} />

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

      {/* Mission & CEO Vision Two Column */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-niyantran-deep-blue text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-niyantran-gold" />
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed">
                At Niyantran, our mission is to rebuild the habit of self-study, discipline, and focus among children in the digital age.<br /><br />
                In a time where mobile dependency, constant supervision, and pressure-based learning have weakened independent thinking, we aim to guide children back to structured routines, writing practice, and consistent self-learning. We do this through daily mentorship, personalized study routines, and continuous follow-ups — not by teaching content, but by teaching how to learn.<br /><br />
                Our mission is to support parents, empower children, and strengthen India’s learning culture by creating self-driven learners who study with responsibility, confidence, and clarity — preparing them not just for exams, but for life.
              </p>
            </div>
            {/* CEO Vision */}
            <div className="bg-niyantran-blue text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-niyantran-gold" />
                <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><span role="img" aria-label="globe"></span> Vision – Niyantran</h2>
              </div>
              <p className="text-lg leading-relaxed mb-2">Founded by Kishore Kunal, Niyantran envisions rebuilding India’s self-study culture in a digital-first world. As mobile dependency and constant supervision increase, children are gradually losing focus, discipline, and the ability to study independently. While access to education has expanded, the habit of self-driven learning has weakened.</p>
              <p className="text-lg leading-relaxed mb-2">Niyantran aims to help children learn how to learn, not just what to learn. Through structured routines, daily mentorship, and discipline-based guidance, we strive to create confident, responsible learners. Our vision is to strengthen India’s academic foundation by nurturing focused minds that can contribute meaningfully to the nation and compete on a global stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-niyantran-deep-blue mb-12 text-center">
              Our Founders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-niyantran-blue shadow-lg">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden bg-gradient-to-br from-niyantran-blue to-niyantran-deep-blue w-full h-full items-center justify-center">
                        <UserCircle className="w-20 h-20 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-niyantran-deep-blue mb-2">{founder.name}</h3>
                    <p className="text-gray-600 font-medium">{founder.role}</p>
                  </div>
                </div>
              ))}
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
              onClick={() => setModalOpen(true)}
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
