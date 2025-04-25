"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://placehold.co/150x50/1a73e8/FFFFFF.png?text=TreksIndia"
              alt="TreksIndia Logo"
              width={150}
              height={50}
              priority
              unoptimized={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-natural-medium hover:text-primary font-medium">
              Home
            </Link>
            <Link href="/destinations" className="nav-link text-natural-medium hover:text-primary font-medium">
              Treks
            </Link>
            <Link href="/destinations" className="nav-link text-natural-medium hover:text-primary font-medium">
              Destinations
            </Link>
            <Link href="/about" className="nav-link text-natural-medium hover:text-primary font-medium">
              About
            </Link>
            <Link href="/contact" className="nav-link text-natural-medium hover:text-primary font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="flex items-center text-natural-medium hover:text-primary">
              <FaUserCircle className="mr-2" />
              <span>Login</span>
            </Link>
            <Link
              href="/book-now"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-natural-medium focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-natural-medium hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/destinations" className="text-natural-medium hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Treks
            </Link>
            <Link href="/destinations" className="text-natural-medium hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Destinations
            </Link>
            <Link href="/about" className="text-natural-medium hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-natural-medium hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-3 border-t border-natural-light">
              <Link href="/login" className="flex items-center text-natural-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                <FaUserCircle className="mr-2" />
                <span>Login</span>
              </Link>
              <Link
                href="/book-now"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 