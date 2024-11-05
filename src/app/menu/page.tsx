'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const menuCategories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Beverages']

const menuItems = [
  { name: 'Crispy Calamari', category: 'Appetizers', price: '$12.99', image: '/crispy-calamari.jpg', description: 'Lightly battered calamari rings served with zesty marinara sauce' },
  { name: 'Caprese Salad', category: 'Appetizers', price: '$10.99', image: '/caprese-salad.jpg', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze' },
  { name: 'Grilled Salmon', category: 'Main Courses', price: '$24.99', image: '/grilled-salmon.jpg', description: 'Atlantic salmon fillet grilled to perfection, served with roasted vegetables' },
  { name: 'Beef Tenderloin', category: 'Main Courses', price: '$29.99', image: '/beef-tenderloin.jpg', description: 'Prime beef tenderloin with a red wine reduction sauce' },
  { name: 'Chocolate Lava Cake', category: 'Desserts', price: '$8.99', image: '/chocolate-lava-cake.jpg', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream' },
  { name: 'Crème Brûlée', category: 'Desserts', price: '$7.99', image: '/creme-brulee.jpg', description: 'Classic French custard with a caramelized sugar topping' },
  { name: 'Signature Cocktail', category: 'Beverages', price: '$9.99', image: '/signature-cocktail.jpg', description: 'Our house special blend of premium spirits and fresh fruit juices' },
  { name: 'Artisanal Lemonade', category: 'Beverages', price: '$4.99', image: '/artisanal-lemonade.jpg', description: 'Freshly squeezed lemonade infused with seasonal fruits and herbs' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8 font-display">Our Menu</h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {menuCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 md:h-56 lg:h-64">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-orange-500 font-bold">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}