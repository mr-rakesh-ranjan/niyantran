import React from 'react'
import { X, BookOpen, Smartphone, TrendingDown, AlertTriangle } from 'lucide-react'

const RealityCheck = () => {
  const painPoints = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      text: "Wakes up late and rushes to school?"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      text: "Says 'Homework is done' but the diary is incomplete?"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      text: "Good tuition teacher, but the child doesn't practice at home?"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      text: "\"Ghee de rahe hain, par daal ka pata nahi?\" (You provide resources, but don't see results?)"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-niyantran-deep-blue mb-4">
            Does this sound familiar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You're not alone. Thousands of parents face these challenges every day.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full">
                    <X className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-gray-700 text-lg font-medium leading-relaxed">
                    {point.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-16 bg-gradient-to-r from-niyantran-deep-blue to-niyantran-blue rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            It's Time to Break This Cycle
          </h3>
          <p className="text-xl text-gray-200 mb-6">
            The problem isn't your child. It's the lack of a systematic approach to building study habits.
          </p>
          <div className="inline-flex items-center space-x-2 bg-niyantran-orange px-6 py-3 rounded-lg font-semibold">
            <span>Niyantran has the solution ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealityCheck
