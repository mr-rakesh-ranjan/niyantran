import React, { useState } from 'react'
import { Bell, Camera, Edit3, Clock } from 'lucide-react'

const steps = [
  { id: 1, time: '4:00 AM', title: 'Wake-Up Alert', icon: <Bell />, desc: 'Mentor sends personalized wake-up notification via WhatsApp/App' },
  { id: 2, time: '4:05 AM', title: 'Verification', icon: <Camera />, desc: 'Student shares photo proof of being at study desk with books open' },
  { id: 3, time: '4:10-5:30 AM', title: 'Focused Study', icon: <Edit3 />, desc: 'Deep work session - solving problems, writing summaries, revision' },
  { id: 4, time: '5:30 AM', title: 'Summary Lock', icon: <Clock />, desc: 'Student writes short summary to lock concepts' }
]

const InteractiveFourAM = () => {
  const [active, setActive] = useState(1)

  return (
    <section className="py-20 bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">The 4 AM Advantage</h2>
          <p className="text-gray-300 mt-2">Hover or click the steps to explore the workflow. Tap to expand on mobile.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(step => (
            <button
              key={step.id}
              onClick={() => setActive(step.id)}
              className={`text-left p-6 rounded-xl border ${active === step.id ? 'bg-white text-niyantran-deep-blue shadow-2xl' : 'bg-white/5 hover:bg-white/10'} transition-all`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-niyantran-orange flex items-center justify-center text-white">{step.icon}</div>
                <div>
                  <p className="text-sm text-niyantran-gold font-semibold">{step.time}</p>
                  <h3 className={`font-bold ${active === step.id ? '' : 'text-white'}`}>{step.title}</h3>
                </div>
              </div>

              <div className={`mt-4 text-sm ${active === step.id ? 'block' : 'hidden md:block'}`}>
                {step.desc}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveFourAM
