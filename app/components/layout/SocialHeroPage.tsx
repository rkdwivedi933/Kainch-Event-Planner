'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function SocialVertical() {
  return (
    <div
      className="
        fixed right-8 top-1/2 -translate-y-1/2
        flex flex-col items-center gap-5
        z-999
      "
    >
      <div className="h-16 w-px bg-[#C9A14A]/60" />

      {[
        { icon: Instagram, href: '#' },
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
      ].map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          whileHover={{ x: -6, scale: 1.15 }}
          className="
            text-[#C9A14A]
            hover:text-white
            transition
          "
        >
          <item.icon size={20} />
        </motion.a>
      ))}

      <div className="h-16 w-px bg-[#C9A14A]/60" />
    </div>
  );
}
