import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Gourmet Fusion',
  description: 'Experience culinary excellence with our modern twist on classic flavors.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="bg-white font-sans">
        <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-8">
              <li><a href="/" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Home</a></li>
              <li><a href="/menu" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Menu</a></li>
              <li><a href="/about" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">About Us</a></li>
              <li><a href="/contact" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Contact</a></li>
              <li><a href="/order" className="text-gray-800 hover:text-orange-500 transition-colors font-medium">Order/Reservation</a></li>
            </ul>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Gourmet Fusion. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}