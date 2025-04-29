"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center">
              <Link href="/" className="inline-block">
                <Image
                  src="https://placehold.co/150x50/FFFFFF/1a73e8.png?text=TreksIndia"
                  alt="TreksIndia Logo"
                  width={150}
                  height={50}
                  unoptimized={true}
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the magic of Indian mountains with our expertly guided trekking adventures that prioritize safety, experience, and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations/valley-of-flowers" className="text-gray-300 hover:text-white transition-colors">
                  Valley of Flowers
                </Link>
              </li>
              <li>
                <Link href="/destinations/kedarkantha" className="text-gray-300 hover:text-white transition-colors">
                  Kedarkantha Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/hampta-pass" className="text-gray-300 hover:text-white transition-colors">
                  Hampta Pass
                </Link>
              </li>
              <li>
                <Link href="/destinations/sandakphu" className="text-gray-300 hover:text-white transition-colors">
                  Sandakphu Trek
                </Link>
              </li>
              <li>
                <Link href="/destinations/chadar-trek" className="text-gray-300 hover:text-white transition-colors">
                  Chadar Trek
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2 text-gray-300">
                123 Adventure Street
              </p>
              <p className="mb-2 text-gray-300">
                New Delhi, India - 110001
              </p>
              <p className="mb-2 text-gray-300">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="mb-2 text-gray-300">
                <strong>Email:</strong> info@treksindia.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>Made with ❤️ By Hirdyansh Kumar</p>
        </div>
      </div>
    </footer>
  );
} 