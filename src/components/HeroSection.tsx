"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-900 text-white text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
          alt="Mountain landscape"
          fill
          priority
          className="object-cover brightness-50"
          unoptimized={true}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience the Magic of Trekking in India
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover breathtaking trails, explore hidden gems, and embrace the wild with our premium trekking adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/destinations" 
              className="btn btn-secondary"
            >
              Explore Packages <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/contact" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-5 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
} 