"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Trek options for the contact form
const trekOptions = [
  "Select a Trek",
  "Valley of Flowers",
  "Kedarkantha Trek",
  "Hampta Pass",
  "Sandakphu Trek",
  "Kheerganga Trek",
  "Brahmatal Trek",
  "Chadar Trek",
  "Goechala Trek",
  "Custom Trek Request"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trek: "Select a Trek",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || formData.trek === "Select a Trek") {
      setErrorMessage("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        trek: "Select a Trek",
        message: "",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-natural-dark">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512757576557-6551daf91bf9?q=80&w=1200&auto=format&fit=crop"
            alt="Contact Us"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
            unoptimized={true}
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Have questions or ready to plan your next adventure? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-natural-light p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p>We've received your message and will get back to you shortly.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-natural-dark mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-natural-dark mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-natural-dark mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="trek" className="block text-natural-dark mb-2">
                      Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="trek"
                      name="trek"
                      value={formData.trek}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      {trekOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-natural-dark mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary mt-1" />
                    <span>123 Adventure Street, New Delhi, India - 110001</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-primary" />
                    <span>+91 98765 43210</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-primary" />
                    <span>info@treksindia.com</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-natural-medium hover:text-primary transition-colors">
                    <FaWhatsapp className="text-2xl" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-natural-medium hover:text-primary transition-colors">
                    <FaInstagram className="text-2xl" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-natural-medium hover:text-primary transition-colors">
                    <FaFacebook className="text-2xl" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Google Maps embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.960221565291!2d77.20493012451531!3d28.632038675594027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1682234408212!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 bg-natural-light p-4 rounded-lg">
                  <span className="text-natural-dark font-semibold mb-2 block">Our Base Camps:</span>
                  <ul className="list-disc pl-5 text-natural-medium">
                    <li>Main Office: 123 Adventure Street, New Delhi</li>
                    <li>Uttarakhand Base: Near Jolly Grant Airport, Dehradun</li>
                    <li>Himachal Base: Manali Adventure Center, Old Manali</li>
                    <li>Sikkim Base: Gangtok Expedition Hub, MG Road</li>
                    <li>Ladakh Base: Leh Trekking Center, Near Leh Palace</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-natural-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find quick answers to common questions about our treks
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">What should I pack for a trek?</h3>
              <p className="text-natural-medium">
                Essential items include comfortable trekking shoes, weather-appropriate clothing (layered), a backpack, water bottle, sunscreen, hat, sunglasses, personal medication, and a basic first aid kit. We'll provide a detailed packing list based on your specific trek.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">How physically fit do I need to be?</h3>
              <p className="text-natural-medium">
                The required fitness level varies by trek. For beginners, we recommend being able to walk 5-7km comfortably. For moderate to difficult treks, regular cardio exercise and strength training are recommended. We're happy to suggest treks based on your fitness level.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">Can you arrange custom treks?</h3>
              <p className="text-natural-medium">
                Absolutely! We specialize in creating personalized trekking experiences. Contact us with your preferences, group size, and dates, and we'll craft a custom itinerary just for you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">What's your cancellation policy?</h3>
              <p className="text-natural-medium">
                Our standard policy allows full refunds for cancellations made 30+ days before the trek, 50% refund for 15-29 days notice, and no refund for less than 15 days notice. However, we do our best to accommodate date changes when possible.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="mb-4">Don't see your question here?</p>
            <Link href="#top" className="btn btn-primary">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 