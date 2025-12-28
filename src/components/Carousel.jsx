import React, { useState } from 'react';

const slides = [
  {
    title: 'Personalized Self-Study Plans',
    description: 'Every child gets a unique, mentor-driven plan to build discipline and focus.',
    image: null // You can add image paths here if available
  },
  {
    title: 'Real Results in 7 Days',
    description: 'See measurable improvement in your child’s study habits within a week.',
    image: null
  },
  {
    title: 'Mentor Support, Always',
    description: 'Our mentors guide, motivate, and support your child every step of the way.',
    image: null
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center relative">
        {/* Slide Content */}
        <h3 className="text-2xl font-bold text-niyantran-deep-blue mb-2">{slides[current].title}</h3>
        <p className="text-gray-700 mb-4">{slides[current].description}</p>
        {/* Navigation */}
        <div className="flex justify-between w-full absolute top-1/2 left-0 px-4 -translate-y-1/2">
          <button onClick={prevSlide} className="bg-niyantran-blue text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-niyantran-gold transition-colors">&#8592;</button>
          <button onClick={nextSlide} className="bg-niyantran-blue text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-niyantran-gold transition-colors">&#8594;</button>
        </div>
        {/* Dots */}
        <div className="flex space-x-2 mt-6">
          {slides.map((_, idx) => (
            <span key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-niyantran-gold' : 'bg-gray-300'} inline-block`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
