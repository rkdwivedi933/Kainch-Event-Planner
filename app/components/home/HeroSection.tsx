'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { JSX } from 'react';
import Link from 'next/link'

export default function Hero(): JSX.Element {

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/5379128/" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gold Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4E3814]/20 via-transparent to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Top Accent */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '120px' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mb-8 h-0.5 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent"
        />

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 flex justify-center"
        >
          <Sparkles className="h-10 w-10 text-[#C9A14A]" strokeWidth={1.5} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6 font-serif text-5xl font-light leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl"
        >
          Crafting Luxury
          <span className="mt-2 block bg-linear-to-r from-[#C9A14A] via-[#F4E4C1] to-[#C9A14A] bg-clip-text text-transparent">
            Events & Weddings
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12 text-lg font-light text-gray-300 sm:text-xl lg:text-2xl"
        >
          Premium wedding & corporate event planning across India
        </motion.p>

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
              Plan Your Event
            </span>
            <div className="absolute inset-0 bg-[#C9A14A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          </Link>
        </motion.div>
      </div>

      
    </section>
  );
}
