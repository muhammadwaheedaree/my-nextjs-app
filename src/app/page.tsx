'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const popularDishes = [
  { name: 'Crispy Calamari', category: 'Appetizers', image: '/crispy-calamari.jpg' },
  { name: 'Grilled Salmon', category: 'Main Dishes', image: '/grilled-salmon.jpg' },
  { name: 'Chocolate Lava Cake', category: 'Desserts', image: '/chocolate-lava-cake.jpg' },
  { name: 'Signature Cocktail', category: 'Beverages', image: '/signature-cocktail.jpg' },
]

export default function Home() {
  const [currentDish, setCurrentDish] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % popularDishes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display text-center">
            Gourmet Fusion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Experience culinary excellence with our modern twist on classic flavors
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
          >
            Explore Our Menu
          </motion.button>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ opacity }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-display text-gray-800">Popular Dishes</h2>
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: `-${currentDish * 100}%` }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              {popularDishes.map((dish, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4">
                    <div className="relative h-64">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{dish.name}</h3>
                      <p className="text-gray-600">{dish.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 font-display text-gray-800">Experience Culinary Excellence</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            At Gourmet Fusion, we blend traditional techniques with modern innovation to create unforgettable dining experiences. 
            Our expert chefs use only the finest ingredients to craft dishes that delight the senses.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
          >
            Make a Reservation
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}