"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
          alt="Mountains in India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-50"
          unoptimized={true}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Experience the Majesty of India's Mountains
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Join our expert-guided treks through Himalayan wonders, lush valleys, and ancient trails. 
            Discover adventure, serenity, and natural beauty like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations" 
                  className="btn bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block">
              Explore Treks
            </Link>
            <Link href="/about" 
                  className="btn bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block">
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Bottom Feature */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-6 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-primary text-xl font-bold mb-1">150+</span>
              <p className="text-gray-700">Unique Trek Routes</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-xl font-bold mb-1">10,000+</span>
              <p className="text-gray-700">Happy Trekkers</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-xl font-bold mb-1">15+</span>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 