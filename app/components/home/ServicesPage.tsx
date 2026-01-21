'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/* ================= TYPES ================= */

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
}

/* ================= DATA ================= */

const services: Service[] = [
  {
    id: 1,
    title: 'Corporate Event',
    subtitle: 'Creating unforgettable events',
    description: 'tailored to your business needs.',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Exhibition',
    subtitle: 'Stall Design and Fabrication',
    description: 'engaging brand experiences.',
    image:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Corporate Gifting',
    subtitle: 'Premium gifting solutions',
    description: 'crafted for lasting impressions.',
    image:
      'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Concert',
    subtitle: 'Live music & stage production',
    description: 'high-energy concerts and shows.',
    image:
      'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Open Mic',
    subtitle: 'Comedy, poetry & performances',
    description: 'intimate and vibrant open mic nights.',
    image:
      'https://plus.unsplash.com/premium_photo-1661713795272-6ab29ccfbbf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9wZW4lMjBtaWN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    title: 'Exhibition',
    subtitle: 'Trade shows & large expos',
    description: 'end-to-end exhibition management.',
    image:
      'https://images.unsplash.com/photo-1561490497-43bc900ac2d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXhoaWJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
    {
    id: 7,
    title: 'SFX Event',
    subtitle: 'Special effects & visual impact',
    description: 'pyro, lighting, smoke & immersive effects.',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    title: 'Kitty Party',
    subtitle: 'Fun & themed gatherings',
    description: 'stylish kitty parties with games & decor.',
    image:
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    title: 'Birthday Party',
    subtitle: 'Celebrate your special day',
    description: 'custom themes, decor & entertainment.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    title: 'Get Together',
    subtitle: 'Moments with friends & family',
    description: 'warm, joyful and memorable gatherings.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  },

];



/* ================= ANIMATIONS ================= */

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ================= CARD ================= */

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative h-105 overflow-hidden rounded-xl border border-[#C9A14A]"
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 w-full px-6 pb-8 text-center">
        <h3 className="mb-2 text-3xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="text-sm italic text-gray-200">
          {service.subtitle}
        </p>

        {service.description && (
          <p className="mt-1 text-sm text-gray-300">
            {service.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ================= PAGE ================= */

export default function ServicesPage() {
  return (
    <main className="min-h-full bg-[#0F0F0F] text-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        
        <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
          Our Services
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Comprehensive event planning solutions crafted for luxury
          weddings and premium corporate events.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-32">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex items-center justify-center gap-4"
        >
          <div className="h-px w-32 bg-linear-to-r from-transparent to-[#4E3814]" />
          <div className="h-2 w-2 rotate-45 border border-[#C9A14A]" />
          <div className="h-px w-32 bg-linear-to-l from-transparent to-[#4E3814]" />
        </motion.div>
      </section>
    </main>
  );
}
