'use client';

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

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
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Work Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const contactInfo: ContactItem[] = [
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "hello@kainchevents.com", href: "mailto:hello@kainchevents.com" },
  { icon: MapPin, label: "Mumbai, Maharashtra" },
];

const socialLinks: SocialLink[] = [
  { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
  { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
];

const services = [
  { href: "/services/wedding", label: "Wedding Event" },
  { href: "/services/live-concert", label: "Live Concert" },
  { href: "/services/open-mic", label: "Open Mic" },
  { href: "/services/corporate", label: "Corporate Event" },
  { href: "/services/exhibition", label: "Exhibition" },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
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
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto h-px w-full bg-linear-to-r from-transparent via-[#C9A14A] to-transparent"
      />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariants}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h2 className="font-serif text-2xl font-light tracking-wide text-[#C9A14A] lg:text-3xl">
              Kainch Event Planner
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-gray-400">
              Crafting unforgettable luxury weddings & premium events with elegance, creativity, and impeccable attention to detail.
            </p>

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

          {/* Column 3 - Services */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h3 className="font-serif text-xl font-light tracking-wide lg:text-2xl">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group relative inline-block text-base text-gray-400 transition-colors duration-300 hover:text-[#C9A14A]"
                  >
                    {service.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C9A14A] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
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

            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <Link href="/terms" className="hover:text-[#C9A14A]">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-[#C9A14A]">Privacy Policy</Link>
              <Link href="/rules" className="hover:text-[#C9A14A]">Rules</Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>Powered by</span>
              <img
                src="/logo.png" // <-- replace with your actual logo path
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
