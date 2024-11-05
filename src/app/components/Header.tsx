'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Submitted email:', email)
    setEmail('')
    setIsNewsletterVisible(false)
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500 font-display">
          Gourmet Fusion
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-800 hover:text-orange-500 transition-colors">Home</Link></li>
            <li><Link href="/menu" className="text-gray-800 hover:text-orange-500 transition-colors">Menu</Link></li>
            <li><Link href="/about" className="text-gray-800 hover:text-orange-500 transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-gray-800 hover:text-orange-500 transition-colors">Contact</Link></li>
            <li>
              <button 
                onClick={() => setIsNewsletterVisible(true)}
                className="text-gray-800 hover:text-orange-500 transition-colors"
              >
                Newsletter
              </button>
            </li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4">
          <ul className="space-y-4">
            <li><Link href="/" className="block text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/menu" className="block text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
            <li><Link href="/about" className="block text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="block text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li>
              <button 
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsNewsletterVisible(true)
                }}
                className="block text-gray-800 hover:text-orange-500 transition-colors"
              >
                Newsletter
              </button>
            </li>
          </ul>
        </nav>
      )}
      {isNewsletterVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsNewsletterVisible(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header