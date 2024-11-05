'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const popularDishes = [
  { name: 'Crispy Calamari', category: 'Appetizers', image: '/crispy-calamari.jpg', price: '$12.99' },
  { name: 'Grilled Salmon', category: 'Main Dishes', image: '/grilled-salmon.jpg', price: '$24.99' },
  { name: 'Chocolate Lava Cake', category: 'Desserts', image: '/chocolate-lava-cake.jpg', price: '$8.99' },
  { name: 'Signature Cocktail', category: 'Beverages', image: '/signature-cocktail.jpg', price: '$9.99' },
]

const testimonials = [
  { name: 'Ethan Miller', comment: 'The best dining experience I\'ve had in years!', rating: 5 },
  { name: 'Carlos Mendoza', comment: 'Exquisite flavors and impeccable service.', rating: 5 },
  { name: 'Mike Johnson', comment: 'A culinary journey worth taking again and again.', rating: 4 },
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div>
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image
          src="/hero-image.jpg"
          alt="Gourmet dish"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-display"
            >
              Gourmet Fusion
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Experience culinary excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/menu" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                Explore Our Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">Popular Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDishes.map((dish, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-2">{dish.category}</p>
                  <p className="text-orange-500 font-bold">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">What Our Customers Say</h2>
          <div className="relative max-w-3xl mx-auto">
            <button 
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button 
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-4">&quot;{testimonials[currentTestimonial].comment}&quot;</p>
              <div className="flex items-center justify-between">
                <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                <div className="flex">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Experience Culinary Excellence</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            At Gourmet Fusion, we blend traditional techniques with modern innovation to create unforgettable dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Make a Reservation
            </Link>
            <button 
              onClick={() => setIsMenuVisible(true)}
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              View Today&apos;s Specials
            </button>
          </div>
        </div>
      </section>

      {isMenuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Today&apos;s Specials</h3>
            <ul className="mb-6">
              <li className="mb-2">Truffle Risotto - $22.99</li>
              <li className="mb-2">Seared Scallops - $26.99</li>
              <li className="mb-2">Mango Tart - $9.99</li>
            </ul>
            <button 
              onClick={() => setIsMenuVisible(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}