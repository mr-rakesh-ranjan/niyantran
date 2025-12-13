import React from 'react'
import { Search, ClipboardList, Sunrise, CheckCircle, ArrowRight } from 'lucide-react'

const Solution = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "The Observation (Days 1-7)",
      description: "We don't teach immediately. We watch. We analyze sitting capacity, focus, and handwriting speed.",
      color: "from-blue-500 to-blue-600",
      badge: "STEP 1"
    },
    {
      icon: <ClipboardList className="w-10 h-10" />,
      title: "The Custom Plan",
      description: "Every child is different. We design a timetable based on their stamina, not a generic rule.",
      color: "from-purple-500 to-purple-600",
      badge: "STEP 2"
    },
    {
      icon: <Sunrise className="w-10 h-10" />,
      title: "The 4 AM Club",
      description: "The golden hour. We wake them up, verify they are studying via photo-updates, and build the habit of morning revision.",
      color: "from-orange-500 to-orange-600",
      badge: "STEP 3"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Micro-Tracking",
      description: "From \"Start Time\" to \"End Time,\" every page written is verified by a mentor. No more fake homework.",
      color: "from-green-500 to-green-600",
      badge: "STEP 4"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-niyantran-deep-blue mb-4">
            How Niyantran Fills the Gap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, observation-first approach to building unshakeable study habits
          </p>
        </div>

        {/* Timeline/Cards */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-32 w-1 h-24 bg-gradient-to-b from-niyantran-blue to-niyantran-orange transform -translate-x-1/2"></div>
              )}

              {/* Card */}
              <div className={`relative bg-gradient-to-r ${step.color} rounded-2xl p-8 md:p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-3">
                      {step.badge}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block flex-shrink-0">
                      <ArrowRight className="w-8 h-8 text-white/50" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-niyantran-light-blue rounded-xl p-8 max-w-2xl">
            <p className="text-2xl font-bold text-niyantran-deep-blue mb-2">
              Not Just Teaching. Building Habits.
            </p>
            <p className="text-gray-700">
              Every child gets a personalized roadmap based on scientific observation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
