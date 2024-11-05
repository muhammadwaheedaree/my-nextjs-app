import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center font-display text-gray-800">About Gourmet Fusion</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/restaurant-interior.jpg"
              alt="Gourmet Fusion Interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Gourmet Fusion was born from a passion for culinary excellence and a desire to create unforgettable dining experiences. 
              Founded in 2010 by renowned chef Maria Rodriguez, our restaurant has become a beacon of innovative cuisine in the heart of the city.
            </p>
            <p  className="text-gray-600 mb-4">
              We believe in blending traditional techniques with modern innovation, sourcing the finest ingredients, and presenting each dish as a work of art. 
              Our team of talented chefs works tirelessly to push the boundaries of flavor and presentation, ensuring that every meal at Gourmet Fusion is a journey for the senses.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Meet Our Chefs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Maria Rodriguez', role: 'Executive Chef', image: '/chef-maria.jpg' },
              { name: 'John Smith', role: 'Sous Chef', image: '/chef-john.jpg' },
              { name: 'Emily Chen', role: 'Pastry Chef', image: '/chef-emily.jpg' },
            ].map((chef, index) => (
              <div key={index} className="text-center">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{chef.name}</h3>
                <p className="text-gray-600">{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}