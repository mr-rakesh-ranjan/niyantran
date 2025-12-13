import React, { useState } from 'react'
import { Send, CheckCircle, Phone, User, GraduationCap, Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { submitLead } from '../services/api'
import logo from '../assets/logo.jpeg'

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/niyantran/',
        icon: Linkedin,
        hoverColor: 'hover:text-[#0A66C2]'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61584661715396',
        icon: Facebook,
        hoverColor: 'hover:text-[#1877F2]'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/theniyantran',
        icon: Instagram,
        hoverColor: 'hover:text-[#E4405F]'
    },
    {
        name: 'X (Twitter)',
        url: 'https://x.com/theniyantran',
        icon: Twitter,
        hoverColor: 'hover:text-white'
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@theniyantran',
        icon: Youtube,
        hoverColor: 'hover:text-[#FF0000]'
    }
]

const Footer = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        childClass: '',
        whatsappNumber: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear error when user starts typing
        if (error) setError(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // API call to save lead and trigger WhatsApp notification
            await submitLead(formData)

            setIsSubmitted(true)
            setFormData({ parentName: '', childClass: '', whatsappNumber: '' })

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setError('Something went wrong. Please try again or call us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer className="bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue text-white">
            {/* Main CTA Section */}
            <div className="section-container py-20" id="lead-form">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Give us 2 Weeks.
                            <br />
                            <span className="text-niyantran-gold">We will give you a Disciplined Child.</span>
                        </h2>
                        <p className="text-xl text-gray-200">
                            Start with a free 7-day observation period. No commitments. Just results.
                        </p>
                    </div>

                    {/* Lead Form */}
                    {isSubmitted ? (
                        <div className="bg-green-500 rounded-2xl p-8 text-center shadow-2xl animate-fade-in">
                            <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Thank You! 🎉</h3>
                            <p className="text-lg">
                                We've received your inquiry. Our Head Mentor will call you within 24 hours.
                            </p>
                            <p className="mt-4 text-sm">
                                You will also receive a WhatsApp confirmation shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white text-niyantran-deep-blue rounded-2xl p-8 md:p-12 shadow-2xl">
                            <div className="space-y-6">
                                {/* Parent Name */}
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                                        <User className="w-4 h-4" />
                                        <span>Parent's Name *</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-niyantran-orange focus:outline-none transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Child's Class */}
                                <div>
                                    <label htmlFor="childClass" className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>Child's Class *</span>
                                    </label>
                                    <select
                                        id="childClass"
                                        name="childClass"
                                        value={formData.childClass}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-niyantran-orange focus:outline-none transition-colors"
                                    >
                                        <option value="">Select class</option>
                                        <optgroup label="Primary Section">
                                            <option value="5">Class 5</option>
                                            <option value="6">Class 6</option>
                                            <option value="7">Class 7</option>
                                        </optgroup>
                                        <optgroup label="Secondary Section">
                                            <option value="8">Class 8</option>
                                            <option value="9">Class 9</option>
                                            <option value="10">Class 10</option>
                                        </optgroup>
                                    </select>
                                </div>

                                {/* WhatsApp Number */}
                                <div>
                                    <label htmlFor="whatsappNumber" className="block text-sm font-semibold mb-2 flex items-center space-x-2">
                                        <Phone className="w-4 h-4" />
                                        <span>WhatsApp Number *</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="whatsappNumber"
                                        name="whatsappNumber"
                                        value={formData.whatsappNumber}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-niyantran-orange focus:outline-none transition-colors"
                                        placeholder="10-digit mobile number"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">We'll send you updates via WhatsApp</p>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-niyantran-orange hover:bg-niyantran-gold text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span>Submitting...</span>
                                    ) : (
                                        <>
                                            <span>Book Free Consultation</span>
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>No Hidden Charges</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>7-Day Free Trial</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>Cancel Anytime</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-300 mb-4">
                            Join Thousands+ families who have transformed their child's learning journey
                        </p>
                        <div className="flex justify-center space-x-2">
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                            <span className="text-2xl">⭐</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">4.9/5 rating from parents</p>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <div className="section-container py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                            <img src={logo} alt="Niyantran" className="h-20 w-auto" />
                            <div className="text-center md:text-left">
                                <p className="text-sm text-gray-400">Building Discipline, Focus & Self-Study Habits</p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 ${social.hoverColor} transition-colors duration-300`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-sm text-gray-400">
                                © 2025 Niyantran. All rights reserved.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Made with ❤️ for India's Future Leaders
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
