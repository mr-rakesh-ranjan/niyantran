import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className="bg-niyantran-deep-blue/80 backdrop-blur-sm border-b border-niyantran-gold/20 shadow-lg">
      <div className="section-container py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="Niyantran" className="h-16 w-auto" />
          </Link>
        </div>

        <nav>
          <ul className="flex items-center space-x-6">
            <li><Link to="/" className="text-white hover:text-niyantran-gold transition-colors font-semibold">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-niyantran-gold transition-colors font-semibold">About Us</Link></li>
            <li><Link to="/careers" className="text-white hover:text-niyantran-gold transition-colors font-semibold">Careers</Link></li>
            <li><Link to="/blogs" className="text-white hover:text-niyantran-gold transition-colors font-semibold">Blogs & Insights</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
