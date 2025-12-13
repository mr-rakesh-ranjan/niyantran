import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Blogs = () => {
  const blogPosts = [
    {
      title: "How the 4 AM Club Improves Focus",
      excerpt: "Scientific research shows early morning hours boost cognitive performance. Discover why waking up at 4 AM transforms learning habits.",
      date: "Dec 5, 2025",
      readTime: "5 min read"
    },
    {
      title: "Building Handwriting Stamina in 7 Days",
      excerpt: "Many students struggle with writing speed. Our proven 7-day program increases handwriting stamina by 40%.",
      date: "Dec 3, 2025",
      readTime: "6 min read"
    },
    {
      title: "Parental Playbook: Supporting Self-Study",
      excerpt: "Parents play a crucial role in building discipline. Learn the do's and don'ts of supporting your child's self-study journey.",
      date: "Dec 1, 2025",
      readTime: "8 min read"
    }
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
              <button className="text-niyantran-gold font-semibold hover:underline">Read More →</button>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs
