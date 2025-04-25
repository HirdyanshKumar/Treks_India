"use client";

import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaMountain, FaRupeeSign } from "react-icons/fa";
import { motion } from "framer-motion";

// Featured trek data
const featuredTreks = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 12500,
    description: "Experience the UNESCO World Heritage site famous for its meadows of endemic alpine flowers.",
  },
  {
    id: "brahmatal",
    name: "Brahmatal Trek",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 9500,
    description: "Experience breathtaking views of Mt. Trishul and Nanda Ghunti with alpine lakes and meadows.",
  },
  {
    id: "hampta-pass",
    name: "Hampta Pass",
    image: "https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?q=80&w=800&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Moderate to Difficult",
    price: 9999,
    description: "Experience dramatic landscape changes from lush green valleys of Kullu to the barren lands of Lahaul.",
  },
  {
    id: "sandakphu",
    name: "Sandakphu Trek",
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=800&auto=format&fit=crop",
    location: "West Bengal",
    duration: "7 Days",
    difficulty: "Moderate to Difficult",
    price: 14999,
    description: "The highest peak in West Bengal offering spectacular views of four of the five highest peaks in the world.",
  }
];

export default function FeaturedTreks() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Treks</h2>
          <p className="section-subtitle">
            Discover our most popular trekking adventures across the beautiful landscapes of India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredTreks.map((trek, index) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-52">
                <div className="absolute inset-0 bg-gray-400 animate-pulse" />
                <Image
                  src={trek.image}
                  alt={trek.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  <FaRupeeSign className="inline-block mr-1" />{trek.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{trek.name}</h3>
                
                <div className="mb-4 flex flex-wrap gap-y-2">
                  <div className="w-full sm:w-1/2 flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    {trek.location}
                  </div>
                  <div className="w-full sm:w-1/2 flex items-center text-sm text-gray-600">
                    <FaClock className="mr-2 text-primary" />
                    {trek.duration}
                  </div>
                  <div className="w-full sm:w-1/2 flex items-center text-sm text-gray-600">
                    <FaMountain className="mr-2 text-primary" />
                    {trek.difficulty}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2">{trek.description}</p>

                <Link
                  href={`/destinations/${trek.id}`}
                  className="btn btn-outline w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="btn btn-primary"
          >
            View All Treks
          </Link>
        </div>
      </div>
    </section>
  );
} 