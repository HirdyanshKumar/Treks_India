"use client";

import Image from "next/image";
import { FaShieldAlt, FaUserFriends, FaGem, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    title: "Safety First",
    description: "Your safety is our top priority with certified guides, quality equipment, and comprehensive emergency protocols."
  },
  {
    icon: <FaUserFriends className="text-3xl text-primary" />,
    title: "Expert Guides",
    description: "Our experienced local guides know every trail and share deep knowledge of the region's culture and nature."
  },
  {
    icon: <FaGem className="text-3xl text-primary" />,
    title: "Premium Experience",
    description: "From accommodation to meals, we ensure high-quality services that enhance your trekking adventure."
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-primary" />,
    title: "Unique Routes",
    description: "Discover hidden gems and less-traveled paths for a more authentic and immersive trekking experience."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            What makes our trekking experiences in India truly special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Our Commitment to Responsible Tourism</h3>
              <p className="text-gray-600 mb-6">
                We believe in preserving the natural beauty of India's trekking destinations. Our tours follow eco-friendly 
                practices, support local communities, and promote sustainable tourism.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-xl">🌱</span>
                  <span className="text-gray-700">Waste management and Leave No Trace principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-xl">🏡</span>
                  <span className="text-gray-700">Support for local economies and communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-xl">🦊</span>
                  <span className="text-gray-700">Ethical wildlife observation practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 text-xl">👣</span>
                  <span className="text-gray-700">Small group sizes to minimize environmental impact</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden h-80 lg:h-96 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop"
                alt="Responsible Tourism"
                fill
                className="object-cover"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-bold">Preserving Nature</p>
                <p className="text-sm">For generations to come</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 