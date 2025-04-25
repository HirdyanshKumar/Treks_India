"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop"
            alt="Mountainous landscape"
            fill
            className="object-cover brightness-50"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Join us on an unforgettable journey through the breathtaking landscapes of India. 
            Whether you're a beginner or an experienced trekker, we have the perfect adventure waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/destinations" 
              className="btn btn-secondary text-lg px-8 py-4"
            >
              Explore Treks
            </Link>
            <Link 
              href="/contact" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-gray-300">
            Questions? Call us at +91 98765 43210
          </p>
        </motion.div>
      </div>
    </section>
  );
} 