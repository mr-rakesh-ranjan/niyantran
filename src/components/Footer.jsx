import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactUsModal from './ContactUsModal'
import { Send, CheckCircle, Phone, User, GraduationCap, Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { submitLead } from '../services/api'
import logo from '../assets/3D.jpg'

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
    const [showContactModal, setShowContactModal] = useState(false)

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
        <footer className="bg-gradient-to-br from-niyantran-deep-blue via-niyantran-blue to-niyantran-deep-blue text-white pt-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-niyantran-gold/20">
                    {/* Categories */}
                    <div>
                        <h4 className="font-bold mb-4 tracking-wider text-niyantran-gold">CATEGORIES</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-niyantran-gold transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-niyantran-gold transition-colors">About Us</Link></li>
                            <li><Link to="/blogs" className="hover:text-niyantran-gold transition-colors">Blogs</Link></li>
                            <li><Link to="/careers" className="hover:text-niyantran-gold transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                    {/* Our Pages */}
                    <div>
                        <h4 className="font-bold mb-4 tracking-wider text-niyantran-gold">OUR PAGES</h4>
                        <ul className="space-y-2">
                            <li><Link to="/careers" className="hover:text-niyantran-gold transition-colors">Career</Link></li>
                            <li><button type="button" className="hover:text-niyantran-gold transition-colors bg-transparent border-0 p-0 m-0 cursor-pointer" onClick={() => setShowContactModal(true)}>Contact Us</button></li>
                        </ul>
                    </div>
                    {/* Social Accounts */}
                    <div>
                        <h4 className="font-bold mb-4 tracking-wider text-niyantran-gold">SOCIAL ACCOUNTS</h4>
                        <ul className="space-y-2">
                            <li><a href="https://www.facebook.com/profile.php?id=61584661715396" target="_blank" rel="noopener noreferrer" className="hover:text-niyantran-gold transition-colors">Facebook</a></li>
                            <li><a href="https://x.com/theniyantran" target="_blank" rel="noopener noreferrer" className="hover:text-niyantran-gold transition-colors">Twitter</a></li>
                            <li><a href="https://www.instagram.com/theniyantran" target="_blank" rel="noopener noreferrer" className="hover:text-niyantran-gold transition-colors">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/niyantran/" target="_blank" rel="noopener noreferrer" className="hover:text-niyantran-gold transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                    {/* Our Location */}
                    <div className="md:col-span-1">
                        <h4 className="font-bold mb-4 tracking-wider text-niyantran-gold">OUR LOCATION</h4>
                        <div className="text-sm leading-relaxed text-gray-200">
                            Hatsharganj, HOUSE-35,<br />
                            Damodar Colony, Sector-A,<br />
                            Hajipur, Vaishali, Bihar - 844101<br />
                            INDIA
                        </div>
                    </div>
                    {/* Branding & Contact */}
                    <div className="flex flex-col items-start md:items-end">
                        <img src={logo} alt="Niyantran" className="h-12 mb-2" />
                        <div className="font-bold text-lg mb-1 text-niyantran-gold">Niyantran Pvt Ltd</div>
                        <div className="text-xs text-gray-200 mb-2">India's First Self-Study Revolution</div>
                        <div className="text-sm">
                            <div><span className="font-semibold text-niyantran-gold">Phone:</span> <a href="tel:+919162530024" className="hover:text-niyantran-gold transition-colors">+91 91625 30024</a></div>
                            <div><span className="font-semibold text-niyantran-gold">Email:</span> <a href="mailto:contact@niyantran.in" className="hover:text-niyantran-gold transition-colors">contact@niyantran.in</a></div>
                            <div><span className="font-semibold text-niyantran-gold">Website:</span> <a href="https://niyantran.in" className="hover:text-niyantran-gold transition-colors" target="_blank" rel="noopener noreferrer">niyantran.in</a></div>
                        </div>
                    </div>
                </div>
                {/* Social Icons Row */}
                <div className="flex justify-center md:justify-end items-center gap-6 py-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-300 hover:text-niyantran-gold transition-colors duration-300`}
                            aria-label={social.name}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
                {/* Copyright Row */}
                <div className="text-center text-xs text-gray-300 py-3 bg-niyantran-deep-blue/80 mt-2 rounded-b-lg border-t border-niyantran-gold/20">
                    © 2025 Niyantran — All Rights Reserved
                </div>
            </div>
        {showContactModal && <ContactUsModal open={showContactModal} onClose={() => setShowContactModal(false)} />}
        </footer>
    )
}

export default Footer
