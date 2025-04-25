"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Verma",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=500&auto=format&fit=crop",
    text: "The Valley of Flowers trek was a life-changing experience. The guides were knowledgeable and safety was always a priority. I've already booked my next adventure with TreksIndia!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mira Patel",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    text: "As a solo female traveler, I was concerned about safety, but the team at TreksIndia made me feel comfortable and secure throughout the journey. The Hampta Pass trek was breathtaking!",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Jaipur",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500&auto=format&fit=crop",
    text: "Professional organization from start to finish. The equipment was top-notch and the food was surprisingly good even at high altitudes. Kedarkantha was a perfect winter trek!",
    rating: 4,
  },
  {
    id: 4,
    name: "Anjali Sharma",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    text: "What sets TreksIndia apart is their commitment to sustainable tourism. It was refreshing to see how they work with local communities and maintain eco-friendly practices on all treks.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Trekkers Say</h2>
          <p className="section-subtitle">
            Real experiences from our community of adventurers
          </p>
        </div>

        {windowWidth >= 768 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <FaQuoteLeft className="text-gray-200 text-4xl absolute top-4 right-4" />
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 relative z-10">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative bg-white p-6 rounded-lg shadow-md">
            <FaQuoteLeft className="text-gray-200 text-4xl absolute top-4 right-4" />
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                <Image 
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[activeIndex].location}</p>
              </div>
            </div>
            <p className="text-gray-600 relative z-10 min-h-[100px]">{testimonials[activeIndex].text}</p>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    idx === activeIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 