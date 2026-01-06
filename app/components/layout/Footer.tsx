'use client';

import { motion, Variants } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { JSX } from 'react';

interface QuickLink {
  href: string;
  label: string;
}

interface ContactItem {
  icon: typeof Phone | typeof Mail | typeof MapPin;
  label: string;
  href?: string;
}

const quickLinks: QuickLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    label: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'hello@kainchevents.com',
    href: 'mailto:hello@kainchevents.com',
  },
  {
    icon: MapPin,
    label: 'Mumbai, Maharashtra',
  },
];

const fadeUpVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white">
      {/* Top Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mx-auto h-px w-full bg-linear-to-r from-transparent via-[#C9A14A] to-transparent"
      />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariants}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-light tracking-wide text-[#C9A14A] lg:text-3xl">
              Kainch Event Planner
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-gray-400">
              Crafting unforgettable luxury weddings & premium events with
              elegance, creativity, and impeccable attention to detail.
            </p>
            <div className="h-px w-16 bg-linear-to-r from-[#C9A14A] to-transparent" />
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h3 className="font-serif text-xl font-light tracking-wide text-white lg:text-2xl">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-base text-gray-400 transition-colors duration-300 hover:text-[#C9A14A]"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9A14A] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h3 className="font-serif text-xl font-light tracking-wide text-white lg:text-2xl">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="group flex items-center gap-3 transition-colors duration-300">
                    <div className="shrink-0 rounded-sm bg-[#4E3814]/20 p-2.5 transition-all duration-300 group-hover:bg-[#4E3814]/40">
                      <IconComponent
                        className="h-5 w-5 text-[#C9A14A]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-base text-gray-400 transition-colors duration-300 group-hover:text-[#C9A14A]">
                      {item.label}
                    </span>
                  </div>
                );

                return (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block"
                        aria-label={`Contact via ${item.label}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="border-t border-[#4E3814]/30"
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-3">
              <div className="h-1 w-1 rounded-full bg-[#C9A14A]" />
              <p className="text-sm text-gray-500">
                © {currentYear} Kainch Event Planner. All rights reserved.
              </p>
              <div className="h-1 w-1 rounded-full bg-[#C9A14A]" />
            </div>
            <p className="text-xs text-gray-600">
              Designed with passion for excellence
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}