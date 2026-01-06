'use client';

import { motion, Variants } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
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

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
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

const socialLinks: SocialLink[] = [
  {
    icon: <Facebook className="h-5 w-5" />,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
          viewport={{ once: true, margin: '-50px' }}
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

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-sm bg-[#4E3814]/20 p-2 text-[#C9A14A] transition-all duration-300 hover:bg-[#4E3814]/40 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="h-px w-16 bg-linear-to-r from-[#C9A14A] to-transparent" />
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h3 className="font-serif text-xl font-light tracking-wide lg:text-2xl">
              Quick Links
            </h3>
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
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h3 className="font-serif text-xl font-light tracking-wide lg:text-2xl">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <li key={index}>
                    {item.href ? (
                      <a href={item.href} className="group flex items-center gap-3">
                        <div className="rounded-sm bg-[#4E3814]/20 p-2.5 group-hover:bg-[#4E3814]/40">
                          <IconComponent className="h-5 w-5 text-[#C9A14A]" />
                        </div>
                        <span className="text-gray-400 group-hover:text-[#C9A14A]">
                          {item.label}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="rounded-sm bg-[#4E3814]/20 p-2.5">
                          <IconComponent className="h-5 w-5 text-[#C9A14A]" />
                        </div>
                        <span className="text-gray-400">{item.label}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4E3814]/30">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Kainch Event Planner. All rights reserved.
            </p>

            {/* T&C Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <Link href="/terms" className="hover:text-[#C9A14A]">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-[#C9A14A]">
                Privacy Policy
              </Link>
              <Link href="/rules" className="hover:text-[#C9A14A]">
                Rules
              </Link>
              
            </div>
<div className="flex items-center gap-2 text-xs text-gray-600">
  <span>Powered by</span>

  <img
    src="data:image/jpeg;base64,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" // 👉 yaha apna logo path daalo
    alt="TFP Technology"
    className="h-4 w-auto object-contain rounded-full"
  />

  <span className="text-gray-500">TFP Technology</span>
</div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
