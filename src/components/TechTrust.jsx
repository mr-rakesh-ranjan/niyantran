import React from 'react'
import { Camera, Clock, BarChart3, Smartphone, CheckCircle } from 'lucide-react'

const TechTrust = () => {
  const features = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photo Proof System",
      description: "Parents can see exactly what page the child wrote at 4:15 AM. Every study session documented with timestamps.",
      highlight: "100% Transparency"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Time Logs & Analytics",
      description: "See how long it actually took to finish Math homework. Track focus duration and identify improvement areas.",
      highlight: "Precision Tracking"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Gap Analysis Report",
      description: "Monthly data on focus improvement, topic mastery, and habit formation. Data-driven insights for parents.",
      highlight: "Scientific Progress"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-niyantran-blue/10 px-4 py-2 rounded-full mb-6">
            <Smartphone className="w-5 h-5 text-niyantran-blue" />
            <span className="text-sm font-semibold text-niyantran-blue">TECH-ENABLED LEARNING</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-niyantran-deep-blue mb-4">
            Technology Meets Tradition
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the best of modern technology with time-tested study methods. 
            Not just a tuition center - we're a tech-enabled learning system.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* App Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-niyantran-deep-blue to-niyantran-blue rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Phone Frame */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Phone Header */}
                <div className="bg-niyantran-blue text-white p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Niyantran Dashboard</h3>
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm opacity-90">Today's Progress</p>
                    <p className="text-2xl font-bold">4:05 AM - Session Active</p>
                  </div>
                </div>

                {/* Phone Content */}
                <div className="p-6 space-y-4 bg-gray-50">
                  {/* Recent Activity */}
                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div className="flex-1">
                        <p className="font-semibold text-niyantran-deep-blue text-sm">Wake-up Verified</p>
                        <p className="text-xs text-gray-500">Photo uploaded at 4:03 AM</p>
                      </div>
                      <span className="text-xs text-gray-400">Just now</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-start space-x-3">
                      <Camera className="w-5 h-5 text-blue-500 mt-1" />
                      <div className="flex-1">
                        <p className="font-semibold text-niyantran-deep-blue text-sm">Math - Ch 5, Page 87</p>
                        <p className="text-xs text-gray-500">15 problems solved</p>
                      </div>
                      <span className="text-xs text-gray-400">4:35 AM</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-orange-500 mt-1" />
                      <div className="flex-1">
                        <p className="font-semibold text-niyantran-deep-blue text-sm">Focus Duration</p>
                        <p className="text-xs text-gray-500">1 hour 25 minutes</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">+12%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-niyantran-orange text-white px-6 py-3 rounded-full shadow-lg font-bold">
                Live Tracking
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-niyantran-orange">
                <div className="flex items-start space-x-4">
                  <div className="bg-niyantran-light-blue text-niyantran-blue p-3 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-niyantran-deep-blue">{feature.title}</h3>
                      <span className="bg-niyantran-orange text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-niyantran-deep-blue to-niyantran-blue rounded-2xl p-8 md:p-12 text-white max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Why Parents Trust Our System</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-niyantran-gold mb-2">100%</div>
              <p className="text-lg">Verified Study Sessions</p>
              <p className="text-sm text-gray-300 mt-2">Every minute accounted for</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-niyantran-gold mb-2">24/7</div>
              <p className="text-lg">Parent Dashboard Access</p>
              <p className="text-sm text-gray-300 mt-2">Check progress anytime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-niyantran-gold mb-2">0</div>
              <p className="text-lg">Fake Homework Reports</p>
              <p className="text-sm text-gray-300 mt-2">Photo proof of every page</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechTrust
