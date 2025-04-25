"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaMapMarkedAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaMapMarkedAlt className={`text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-bold font-heading ${isScrolled ? 'text-primary' : 'text-white'}`}>
            TreksIndia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-natural-dark' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`btn ${isScrolled ? 'btn-primary' : 'border-2 border-white text-white hover:bg-white hover:text-primary'}`}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <FaTimes className={isScrolled ? 'text-natural-dark' : 'text-white'} />
          ) : (
            <FaBars className={isScrolled ? 'text-natural-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="font-medium text-natural-dark hover:text-primary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 