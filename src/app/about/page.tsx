"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { FaMountain, FaLeaf, FaUsers, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { 
    icon: <FaMountain className="text-4xl text-primary mb-3" />,
    count: "50+", 
    label: "Unique Treks" 
  },
  { 
    icon: <FaLeaf className="text-4xl text-primary mb-3" />,
    count: "15+", 
    label: "Years Experience" 
  },
  { 
    icon: <FaUsers className="text-4xl text-primary mb-3" />,
    count: "10,000+", 
    label: "Happy Trekkers" 
  },
  { 
    icon: <FaAward className="text-4xl text-primary mb-3" />,
    count: "25+", 
    label: "Awards Won" 
  },
];

const teamMembers = [
  {
    name: "Nikhil Rajput",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
    bio: "An experienced mountaineer with over 20 years of trekking experience across the Himalayas and beyond."
  },
  {
    name: "Chavi Rajput",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    bio: "With her exceptional organizational skills, Chavi ensures that every trek runs smoothly from beginning to end."
  },
  {
    name: "Gaurav Raghuvanshi",
    role: "Lead Guide",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&auto=format&fit=crop",
    bio: "A certified mountaineer who has led hundreds of expeditions across India's most challenging terrains."
  },
  {
    name: "Asmit Rajput",
    role: "Sustainability Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
    bio: "Passionate about environmental conservation, Asmit ensures our treks follow sustainable practices."
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-natural-dark">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527824404775-dce343118ebc?q=80&w=1200&auto=format&fit=crop"
            alt="About Us"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
            unoptimized={true}
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About TreksIndia
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Bringing people closer to nature, one trek at a time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-natural-medium mb-6">
                Founded in 2008 by Nikhil Rajput, TreksIndia began with a simple mission: to share the 
                breathtaking beauty of Indian mountains with adventure enthusiasts from around the world.
              </p>
              <p className="text-natural-medium mb-6">
                What started as a small operation with just two treks in Uttarakhand has now grown into 
                one of India's most respected trekking companies, offering diverse experiences across 
                the Himalayas, Western Ghats, and beyond.
              </p>
              <p className="text-natural-medium">
                Our journey has been defined by a deep respect for nature, commitment to local communities, 
                and passion for creating unforgettable adventures for our trekkers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 md:h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?q=80&w=800&auto=format&fit=crop"
                alt="Our story"
                fill
                style={{ objectFit: "cover" }}
                unoptimized={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-natural-beige">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Adventure with Responsibility</h3>
              <p className="text-natural-medium">
                We believe in exploring nature while preserving it for future generations. Our treks follow strict 
                eco-friendly practices, including waste management and minimal impact principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Safety Always Comes First</h3>
              <p className="text-natural-medium">
                From experienced guides to top-quality equipment and comprehensive emergency protocols, 
                we prioritize your safety above everything else.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Supporting Local Communities</h3>
              <p className="text-natural-medium">
                We work closely with local communities, employing guides from nearby villages and supporting 
                local businesses to ensure tourism benefits the regions we explore.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.icon}
                <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate individuals behind your trekking adventures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-natural-light rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-natural-medium">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-natural-light">
        <div className="container">
          <div className="bg-primary text-white p-10 md:p-16 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Adventure?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us on our next trek and discover the breathtaking landscapes of India with our experienced team.
            </p>
            <Link
              href="/destinations"
              className="btn bg-white text-primary hover:bg-natural-light text-lg px-8 py-4"
            >
              Explore Our Treks
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 