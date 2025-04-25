"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { FaMapMarkerAlt, FaClock, FaMountain, FaRupeeSign, FaSearch, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

// Trek data
const treks = [
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    price: 12500,
    description: "Explore the UNESCO World Heritage site famous for its meadows of endemic alpine flowers and variety of flora.",
    region: "Uttarakhand",
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
    region: "Himachal Pradesh",
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
    region: "West Bengal",
  },
  {
    id: "kheerganga",
    name: "Kheerganga Trek",
    image: "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?q=80&w=800&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "3 Days",
    difficulty: "Easy to Moderate",
    price: 6999,
    description: "A picturesque trek to natural hot springs amidst the scenic landscape of Parvati Valley.",
    region: "Himachal Pradesh",
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
    region: "Uttarakhand",
  },
  {
    id: "chadar-trek",
    name: "Chadar Trek",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    location: "Ladakh",
    duration: "9 Days",
    difficulty: "Difficult",
    price: 22999,
    description: "Walk on the frozen Zanskar River with towering mountains on both sides in this unique winter adventure.",
    region: "Ladakh",
  },
  {
    id: "goechala",
    name: "Goechala Trek",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=800&auto=format&fit=crop",
    location: "Sikkim",
    duration: "11 Days",
    difficulty: "Difficult",
    price: 18500,
    description: "Get up close with the mighty Kanchenjunga, the third highest mountain in the world.",
    region: "Sikkim",
  },
  {
    id: "markha-valley",
    name: "Markha Valley",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    location: "Ladakh",
    duration: "8 Days",
    difficulty: "Moderate to Difficult",
    price: 17500,
    description: "One of the most popular treks in Ladakh, featuring stunning landscapes, Buddhist monasteries, and traditional villages.",
    region: "Ladakh",
  },
  {
    id: "har-ki-dun",
    name: "Har Ki Dun Trek",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "7 Days",
    difficulty: "Moderate",
    price: 11500,
    description: "Ancient trail in the Himalayas with spectacular valleys, dense forests, and villages with 3,000-year-old architecture.",
    region: "Uttarakhand",
  },
  {
    id: "roopkund",
    name: "Roopkund Trek",
    image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=800&auto=format&fit=crop",
    location: "Uttarakhand",
    duration: "8 Days",
    difficulty: "Difficult",
    price: 14800,
    description: "Trek to the mysterious skeleton lake at 16,470 feet surrounded by snow-clad mountains and breathtaking meadows.",
    region: "Uttarakhand",
  },
  {
    id: "pin-parvati",
    name: "Pin Parvati Pass",
    image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?q=80&w=800&auto=format&fit=crop",
    location: "Himachal Pradesh",
    duration: "11 Days",
    difficulty: "Very Difficult",
    price: 25000,
    description: "Cross from the lush Parvati Valley to the barren Pin Valley in Spiti through a challenging high-altitude pass at 17,457 feet.",
    region: "Himachal Pradesh",
  },
];

// Filter options
const regions = ["All Regions", "Uttarakhand", "Himachal Pradesh", "Sikkim", "Ladakh", "West Bengal"];
const difficulties = ["All Difficulties", "Easy", "Moderate", "Difficult"];
const durations = ["Any Duration", "1-3 Days", "4-7 Days", "8+ Days"];

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Difficulties");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");
  const [showFilters, setShowFilters] = useState(false);

  // Filter treks based on selected filters
  const filteredTreks = treks.filter((trek) => {
    const matchesSearch = trek.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         trek.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All Regions" || trek.region === selectedRegion;
    
    const matchesDifficulty = selectedDifficulty === "All Difficulties" || 
                             trek.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase());
    
    let matchesDuration = true;
    if (selectedDuration === "1-3 Days") {
      matchesDuration = parseInt(trek.duration.split(" ")[0]) <= 3;
    } else if (selectedDuration === "4-7 Days") {
      const days = parseInt(trek.duration.split(" ")[0]);
      matchesDuration = days >= 4 && days <= 7;
    } else if (selectedDuration === "8+ Days") {
      matchesDuration = parseInt(trek.duration.split(" ")[0]) >= 8;
    }

    return matchesSearch && matchesRegion && matchesDifficulty && matchesDuration;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-natural-dark">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1670268105408-2f8b2307e768?q=80&w=1200&auto=format&fit=crop"
            alt="Mountains in India"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
            unoptimized={true}
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Trekking Destinations
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover amazing trekking adventures across the stunning landscapes of India
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-natural-medium" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-natural-dark font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4 w-full md:w-2/3 justify-end">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 flex flex-col gap-4">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-3 border border-natural-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Trek List */}
      <section className="py-16 bg-natural-light">
        <div className="container">
          {filteredTreks.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No treks found</h3>
              <p className="text-natural-medium">Try adjusting your search criteria</p>
            </div>
          ) : (
            <>
              <p className="mb-8 text-natural-medium">
                Showing {filteredTreks.length} {filteredTreks.length === 1 ? 'trek' : 'treks'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTreks.map((trek, index) => (
                  <motion.div
                    key={trek.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-60">
                      <div className="absolute inset-0 bg-gray-400 animate-pulse" />
                      <Image
                        src={trek.image}
                        alt={trek.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                        className="object-cover"
                        unoptimized={true}
                      />
                      <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        <FaRupeeSign className="inline-block mr-1" />{trek.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-natural-dark">{trek.name}</h3>
                      
                      <div className="mb-4 flex flex-wrap gap-y-2">
                        <div className="w-full sm:w-1/2 flex items-center text-sm text-natural-medium">
                          <FaMapMarkerAlt className="mr-2 text-primary" />
                          {trek.location}
                        </div>
                        <div className="w-full sm:w-1/2 flex items-center text-sm text-natural-medium">
                          <FaClock className="mr-2 text-primary" />
                          {trek.duration}
                        </div>
                        <div className="w-full sm:w-1/2 flex items-center text-sm text-natural-medium">
                          <FaMountain className="mr-2 text-primary" />
                          {trek.difficulty}
                        </div>
                      </div>

                      <p className="text-natural-medium mb-6 line-clamp-2">{trek.description}</p>

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
            </>
          )}
        </div>
      </section>
    </Layout>
  );
} 