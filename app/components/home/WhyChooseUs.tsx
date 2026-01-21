'use client';

import { motion, Variants } from 'framer-motion';
import { Award, Users, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { JSX } from 'react';

interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

const reasons: Reason[] = [
  {
    title: 'Premium Quality',
    description: 'We deliver excellence in every detail, ensuring your event exceeds expectations with world-class standards.',
    icon: Award,
  },
  {
    title: 'Experienced Planners',
    description: 'Our seasoned team brings years of expertise and creative vision to craft unforgettable experiences.',
    icon: Users,
  },
  {
    title: 'End-to-End Execution',
    description: 'From concept to completion, we handle every aspect seamlessly so you can enjoy your special moment.',
    icon: CheckCircle,
  },
];

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const iconVariants:Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      duration: 0.6,
    },
  },
};

const textVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export default function WhyChooseUs(): JSX.Element {
  return (
    <section className="relative bg-[#0F0F0F] px-6 py-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Experience the difference of working with true professionals dedicated to your vision
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <motion.article
                key={index}
                variants={containerVariants}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <motion.div
                  variants={iconVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6"
                >

                  
                  {/* Icon */}
                  <div className="relative rounded-full border border-[#4E3814] bg-black p-6 transition-all duration-300 group-hover:border-[#C9A14A]">
                    <IconComponent 
                      className="h-12 w-12 text-[#C9A14A] transition-transform duration-300 group-hover:scale-110" 
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div variants={textVariants} className="space-y-4">
                  {/* Title */}
                  <h3 className="font-serif text-2xl font-light text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto max-w-sm text-base leading-relaxed text-gray-400">
                    {reason.description}
                  </p>
                </motion.div>

                {/* Decorative Bottom Accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  className="mt-8 h-px w-16 bg-linear-to-r from-transparent via-[#4E3814] to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                />
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