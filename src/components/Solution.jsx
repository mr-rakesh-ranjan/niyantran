import React from 'react'
import { Heart, Eye, Clock, Users, UserCheck, TrendingUp } from 'lucide-react'

const Solution = () => {
  const howWeWork = [
    { text: 'Each child is assigned a dedicated mentor', icon: UserCheck },
    { text: 'Daily self-study sessions are monitored', icon: Eye },
    { text: 'Study start & end times are tracked', icon: Clock },
    { text: 'Writing speed, consistency, and effort are observed', icon: TrendingUp },
    { text: 'Parents receive real-time updates', icon: Users },
    { text: 'Mentors guide children emotionally and academically', icon: Heart }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-niyantran-deep-blue mb-4 text-center">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-12">
            Niyantran works on a <span className="font-bold text-niyantran-orange">human-led, mentor-driven model</span>, not just technology.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeWork.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6 hover:bg-niyantran-light-blue transition-colors">
                <div className="bg-niyantran-orange/10 p-3 rounded-lg flex-shrink-0">
                  <item.icon className="w-6 h-6 text-niyantran-orange" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
            <p className="text-lg text-green-800 font-semibold">
              This creates <span className="text-green-600">accountability without fear</span> and <span className="text-green-600">discipline without stress</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
