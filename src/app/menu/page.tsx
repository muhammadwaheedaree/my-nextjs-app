'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const menuItems = [
  { name: 'Crispy Calamari', category: 'Appetizers', price: 12.99, image: '/crispy-calamari.jpg', description: 'Tender calamari rings, lightly breaded and fried to perfection.' },
  { name: 'Bruschetta', category: 'Appetizers', price: 9.99, image: '/bruschetta.jpg', description: 'Toasted baguette slices topped with fresh tomatoes, garlic, and basil.' },
  { name: 'Grilled Salmon', category: 'Main Dishes', price: 24.99, image: '/grilled-salmon.jpg', description: 'Fresh Atlantic salmon fillet, grilled and served with seasonal vegetables.' },
  { name: 'Beef Tenderloin', category: 'Main Dishes', price: 29.99, image: '/beef-tenderloin.jpg', description: 'Prime beef tenderloin, cooked to your liking, with a red wine reduction.' },
  { name: 'Chocolate Lava Cake', category: 'Desserts', price: 8.99, image: '/chocolate-lava-cake.jpg', description: 'Decadent chocolate cake with a molten center, served with vanilla ice cream.' },
  { name: 'Crème Brûlée', category: 'Desserts', price: 7.99, image: '/creme-brulee.jpg', description: 'Classic French dessert with a caramelized sugar crust.' },
  { name: 'Signature Cocktail', category: 'Beverages', price: 11.99, image: '/signature-cocktail.jpg', description: 'Our house special blend of premium spirits and fresh fruit juices.' },
  { name: 'Artisanal Lemonade', category: 'Beverages', price: 4.99, image: '/artisanal-lemonade.jpg', description: 'Freshly squeezed lemonade infused with seasonal fruits and herbs.' },
]

const categories = ['All', ...new Set(menuItems.map(item => item.category))]

export default function Menu() {
  const [filter, setFilter] = useState('All')

  const filteredItems = filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter)

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center font-display text-gray-800">Our Menu</h1>
        
        <div className="flex justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-bold">${item.price.toFixed(2)}</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Add to Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}