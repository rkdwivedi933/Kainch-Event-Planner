"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Building2,
  MapPin,
  
  Video,
  Mic,
  Expand,
} from "lucide-react";

type EventCategory =
  | "All"
  | "Wedding"
  | "Corporate"
  | "Destination"
  | "Concert"
  | "OpenMic"
  | "Exhibition";

interface GalleryItem {
  id: number;
  title: string;
  category: EventCategory;
  location: string;
  image: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Royal Palace Wedding",
    category: "Wedding",
    location: "Jaipur, India",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 2,
    title: "Corporate Gala",
    category: "Corporate",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
  {
    id: 3,
    title: "Beachside Ceremony",
    category: "Destination",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
  {
    id: 4,
    title: "Grand Ballroom Reception",
    category: "Wedding",
    location: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
  },
  {
    id: 5,
    title: "Product Launch Event",
    category: "Corporate",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 6,
    title: "Vineyard Wedding",
    category: "Destination",
    location: "Nashik, India",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
  },
  {
    id: 7,
    title: "Intimate Garden Ceremony",
    category: "Wedding",
    location: "Udaipur, India",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    id: 8,
    title: "Executive Summit",
    category: "Corporate",
    location: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
  },
  {
    id: 9,
    title: "Lakeside Destination Wedding",
    category: "Destination",
    location: "Udaipur, India",
    image:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80",
  },
  {
    id: 10,
    title: "Live Music Night",
    category: "Concert",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
  },
  {
    id: 11,
    title: "Stand-up Open Mic",
    category: "OpenMic",
    location: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&q=80",
  },
  {
    id: 12,
    title: "Art & Business Expo",
    category: "Exhibition",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&q=80",
  },
];

const filterCategories: {
  label: string;
  value: EventCategory;
  icon: React.ElementType;
}[] = [
  { label: "All Events", value: "All", icon: Sparkles },
  { label: "Weddings", value: "Wedding", icon: Sparkles },
  { label: "Corporate", value: "Corporate", icon: Building2 },
  { label: "Live Concert", value: "Concert", icon: Video },
  { label: "Open Mic", value: "OpenMic", icon: Mic },
  { label: "Exhibition", value: "Exhibition", icon: Expand },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("All");

  const filteredGallery =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-[#0F0F0F] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            OUR WORK
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A Glimpse of Our Signature Events
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 "
        >
          {filterCategories.map((filter) => {
            const IconComponent = filter.icon;
            const isActive = activeFilter === filter.value;

            return (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  group relative px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-[#C9A14A] border-[#C9A14A] text-[#0F0F0F]"
                      : "bg-transparent border-[#4E3814] text-white hover:border-[#C9A14A]"
                  }
                `}
              >
                <span className="flex items-center gap-2 text-sm tracking-wider uppercase font-light">
                  <IconComponent className="w-4 h-4" />
                  {filter.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[#C9A14A] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-4/5 cursor-pointer"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <motion.img
                    src={item.image}
                    alt={`${item.title} - ${item.location}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C9A14A] transition-all duration-300 rounded-lg" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Category Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-3"
                  >
                    <span className="inline-block px-3 py-1 bg-[#C9A14A]/20 border border-[#C9A14A]/50 text-[#C9A14A] text-xs tracking-wider uppercase rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-white text-xl md:text-2xl font-serif mb-2 transform group-hover:-translate-y-2 transition-transform duration-300"
                  >
                    {item.title}
                  </motion.h3>

                  {/* Location */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-white/70 text-sm font-light flex items-center gap-2 transform group-hover:-translate-y-2 transition-transform duration-300"
                  >
                    <MapPin className="w-4 h-4 text-[#C9A14A]" />
                    {item.location}
                  </motion.p>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileHover={{ opacity: 1, width: "3rem" }}
                    className="h-0.5 bg-[#C9A14A] mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        
      </div>
    </section>
  );
}
