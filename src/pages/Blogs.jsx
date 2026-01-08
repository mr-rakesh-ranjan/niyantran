import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Blogs = () => {
  const blogPosts = [
    {
      title: "Niyantran: How a Founder from Bihar is Building the World's First Self-Study Revolution (Hindustan Metro)",
      excerpt: "Featured article on Hindustan Metro about Niyantran's journey and vision for self-study.",
      date: "Jan 8, 2026",
      readTime: "External Blog",
      url: "https://www.hindustanmetro.com/niyantran-how-a-founder-from-bihar-is-building-the-worlds-first-self-study-revolution/"
    },
    {
      title: "Niyantran: How a Founder from Bihar is Building the World's First Self-Study Revolution (Flipboard)",
      excerpt: "Flipboard coverage of Niyantran's innovative approach to self-study.",
      date: "Jan 8, 2026",
      readTime: "External Blog",
      url: "https://flipboard.com/@republicnewsind/-niyantran-how-a-founder-from-bihar-is-b/a-R5lnK3sJRcG0OgdK2LW6tg%3Aa%3A3544623556-2399a07a85%2Frepublicnewsindia.com"
    },
    {
      title: "Niyantran: How a Founder from Bihar is Building the World's First Self-Study Revolution (Republic News India)",
      excerpt: "Republic News India features Niyantran's founder and the self-study revolution.",
      date: "Jan 8, 2026",
      readTime: "External Blog",
      url: "https://republicnewsindia.com/niyantran-how-a-founder-from-bihar-is-building-the-worlds-first-self-study-revolution/"
    },
    {
      title: "Niyantran: How a Founder from Bihar is Building the World's First Self-Study Revolution (The News Brains)",
      excerpt: "The News Brains highlights Niyantran's impact on education and self-study.",
      date: "Jan 8, 2026",
      readTime: "External Blog",
      url: "https://thenewsbrains.com/niyantran-how-a-founder-from-bihar-is-building-the-worlds-first-self-study-revolution/"
    },
    {
      title: "Niyantran: How a Founder from Bihar is Building the World's First Self-Study Revolution (Prime Post Daily)",
      excerpt: "Prime Post Daily discusses the journey of Niyantran and its founder.",
      date: "Jan 8, 2026",
      readTime: "External Blog",
      url: "https://primepostdaily.com/niyantran-how-a-founder-from-bihar-is-building-the-worlds-first-self-study-revolution/"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue">
      <Header />
      <div className="section-container py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Niyantran Blog</h1>
        <p className="text-xl text-gray-300 mb-12">Insights on discipline, study routines, parent guides and more.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer">
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              {post.url ? (
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-niyantran-gold font-semibold hover:underline">Read More →</a>
              ) : (
                <button className="text-niyantran-gold font-semibold hover:underline">Read More →</button>
              )}
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs
