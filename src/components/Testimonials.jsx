import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "नियंत्रण ने मेरे बच्चे की पढ़ाई का रूटीन ही बदल दिया। अब बिना बोले वो खुद बैठ जाता है।",
    name: "सुनीता वर्मा",
    location: "पटना",
    language: "hindi"
  },
  {
    id: 2,
    quote: "ट्यूशन के बाद भी जो कमी थी, नियंत्रण ने वो पूरी कर दी।",
    name: "राजेश कुमार",
    location: "हाजीपुर",
    language: "hindi"
  },
  {
    id: 3,
    quote: "रोज़ का अपडेट मिलता है, अब अंदाज़ा नहीं लगाना पड़ता कि बच्चा पढ़ रहा है या नहीं।",
    name: "पूजा सिंह",
    location: "मुज़फ़्फ़रपुर",
    language: "hindi"
  },
  {
    id: 4,
    quote: "मेरा बेटा average student था, discipline आते ही confidence बढ़ने लगा।",
    name: "अनिल शर्मा",
    location: "दिल्ली",
    language: "hindi"
  },
  {
    id: 5,
    quote: "मोबाइल से ज़्यादा अब कॉपी पेन से दोस्ती हो गई है।",
    name: "कविता झा",
    location: "दरभंगा",
    language: "hindi"
  },
  {
    id: 6,
    quote: "Niyantran gave my child what tuition couldn't — discipline.",
    name: "Rohit Mehta",
    location: "Noida",
    language: "english"
  },
  {
    id: 7,
    quote: "For the first time, we feel involved in our child's daily study without pressure.",
    name: "Neha Agarwal",
    location: "Jaipur",
    language: "english"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-niyantran-light-blue to-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-niyantran-deep-blue mb-4">
            What Parents Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real parents who transformed their child's study habits with Niyantran
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-24 h-24 text-niyantran-orange" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-niyantran-gold fill-niyantran-gold" />
              ))}
            </div>

            {/* Quote */}
            <div className="relative z-10 min-h-[120px] flex items-center justify-center">
              <p className={`text-xl md:text-2xl text-center text-niyantran-deep-blue leading-relaxed ${
                testimonials[currentIndex].language === 'hindi' ? 'font-medium' : ''
              }`}>
                "{testimonials[currentIndex].quote}"
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-niyantran-orange to-niyantran-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-niyantran-deep-blue">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Language Badge */}
            <div className="absolute top-6 right-6">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                testimonials[currentIndex].language === 'hindi' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-blue-100 text-blue-700'
              }`}>
                {testimonials[currentIndex].language === 'hindi' ? 'हिंदी' : 'English'}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-niyantran-light-blue transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-niyantran-deep-blue" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-niyantran-light-blue transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-niyantran-deep-blue" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-niyantran-orange w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Trusted by <span className="font-bold text-niyantran-deep-blue">Thousands+</span> families across India
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
