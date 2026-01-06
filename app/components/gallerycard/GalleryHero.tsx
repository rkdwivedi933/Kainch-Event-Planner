'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Camera, Heart, Users, Sparkles } from 'lucide-react';

interface GalleryHighlight {
  icon: React.ElementType;
  label: string;
}

const galleryHighlights: GalleryHighlight[] = [
  { icon: Heart, label: 'Luxury Weddings' },
  { icon: Users, label: 'Corporate Events' },
  { icon: Sparkles, label: 'Decor & Styling' },
  { icon: Camera, label: 'Captured Moments' }
];

export default function GalleryHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1661030190118-2c9a58e5610c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbGxlcnklMjB3ZWRkaW5nfGVufDB8fDB8fHww')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Decorative Background Blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-24 left-12 w-72 h-72 bg-[#C9A14A] rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-[#C9A14A] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center lg:mt-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-white"
        >
          <span>Our </span>
          <span className="text-[#C9A14A]">Event Gallery</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-white/80 text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A visual journey through unforgettable weddings, grand celebrations,
          and meticulously curated luxury events.
        </motion.p>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-32 h-px bg-linear-to-r from-transparent via-[#C9A14A] to-transparent mx-auto mb-12"
        />

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto"
        >
          {galleryHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-lg border border-[#4E3814]/20 hover:border-[#C9A14A]/50 transition-all duration-300 hover:bg-[#4E3814]/5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#C9A14A]/30 text-[#C9A14A] group-hover:border-[#C9A14A] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-white/80 text-sm md:text-base font-light group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact">
            <button className="group cursor-pointer relative px-8 py-4 bg-transparent border border-[#C9A14A] text-[#C9A14A] rounded-sm overflow-hidden transition-all duration-300 hover:text-[#0F0F0F]">
              <span className="relative z-10 tracking-wider text-sm font-bold uppercase">
                View Our Work
              </span>
              <div className="absolute inset-0 bg-[#C9A14A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
