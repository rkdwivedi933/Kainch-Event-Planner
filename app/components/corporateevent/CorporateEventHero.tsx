'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Presentation,
  Users,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface Highlight {
  icon: React.ElementType;
  label: string;
}

const highlights: Highlight[] = [
  { icon: Briefcase, label: 'Corporate Event Planning' },
  { icon: Presentation, label: 'Conferences & Product Launches' },
  { icon: Sparkles, label: 'Premium & Professional Experience' },
  { icon: Users, label: 'Team & Audience Engagement' }
];

const images: string[] = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&auto=format&fit=crop&q=80'
];

export default function CorporateEventHero() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 bg-[#0F0F0F]">

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Corporate Event"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/15 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 mt-0 lg:mt-20"
        >
          <span className="text-white"> Corporate </span>
          <span className="text-[#C9A14A]">Events</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          We design and execute high-impact corporate events .
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-32 h-px bg-linear-to-r from-transparent via-[#C9A14A] to-transparent mx-auto mb-8"
        />

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-lg border border-[#C9A14A]/20 hover:border-[#C9A14A]/60 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#C9A14A]/40 text-[#C9A14A]">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-white/80 text-sm md:text-base text-center">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
  {/* CTA */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center "
        >
          <Link href="/contact">

          <button className="group cursor-pointer relative px-8 py-4 bg-transparent border border-[#C9A14A] text-[#C9A14A] rounded-sm overflow-hidden transition-all duration-300 hover:text-[#0F0F0F]">
            <span className="relative z-10 tracking-wider text-sm font-bold uppercase ">
              Plan Your Corporate
            </span>
            <div className="absolute inset-0 bg-[#C9A14A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
