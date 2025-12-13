import React from 'react'

const NotAProduct = () => {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Not a Product. A Need.</h2>
          <div className="space-y-4 text-xl text-gray-300 mb-8">
            <p>Niyantran is not an app.</p>
            <p>Not a class.</p>
            <p>Not a tuition.</p>
          </div>
          <div className="space-y-2 text-2xl md:text-3xl font-bold mb-8">
            <p>Niyantran is a <span className="text-niyantran-gold">mindset</span>.</p>
            <p>A <span className="text-niyantran-orange">system</span>.</p>
            <p>A <span className="text-white">revolution</span>.</p>
          </div>
          <div className="bg-niyantran-orange rounded-2xl p-8 mt-12">
            <p className="text-2xl md:text-3xl font-bold">
              Niyantran is not a product.<br />
              <span className="text-4xl md:text-5xl">It's a NEED.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotAProduct
