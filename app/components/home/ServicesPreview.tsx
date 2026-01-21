'use client';

import { motion,Variants } from 'framer-motion';
import { Heart, Briefcase, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { JSX } from 'react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: 'Wedding Planning',
    description: 'Bespoke wedding experiences that transform your dream celebration into an unforgettable reality with meticulous attention to every detail.',
    icon: Heart,
  },
  {
    title: 'Corporate Events',
    description: 'Professional corporate event management that elevates your brand image and creates lasting impressions on clients and stakeholders.',
    icon: Briefcase,
  },
  {
    title: 'Luxury Decorations',
    description: 'Exquisite décor solutions that blend elegance with innovation, creating stunning atmospheres for any occasion.',
    icon: Sparkles,
  },
];

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ServicesPreview(): JSX.Element {
  return (
    <section className="relative bg-[#0F0F0F] px-6 py-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            Our Services
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  
                  borderColor: 'rgba(201, 161, 74, 0.8)',
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-sm border border-[#4E3814] bg-black p-8 transition-all duration-300"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-[#4E3814]/0 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-flex rounded-sm bg-[#4E3814]/20 p-4"
                  >
                    <IconComponent 
                      className="h-8 w-8 text-[#C9A14A]" 
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-4 font-serif text-2xl font-light text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {service.description}
                  </p>

                  {/* Decorative Corner Accent */}
                  <div className="absolute bottom-0 right-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-10">
                    <div className="absolute bottom-0 right-0 h-full w-px bg-linear-to-t from-[#C9A14A] to-transparent" />
                    <div className="absolute bottom-0 right-0 h-px w-full bg-linear-to-l from-[#C9A14A] to-transparent" />
                  </div>
                </div>
              </motion.article>
            );
          })}
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
      </div>
    </section>
  );
}