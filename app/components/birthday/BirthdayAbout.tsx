"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, HeartHandshake } from "lucide-react";

const BirthdayAbout: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-24 px-6 space-y-28">
      <div className="mx-auto max-w-7xl space-y-28">

        {/* ================= Section 1: Text Left / Image Right ================= */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
           <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A14A]/40 px-4 py-1 text-xs uppercase tracking-widest text-[#C9A14A]">
  <Sparkles className="h-3.5 w-3.5" />
  Birthday Events
</span>

<h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
  Crafting{" "}
  <span className="text-[#C9A14A]">Joyful</span>{" "}
  Birthday Experiences
</h2>

<p className="mb-6 max-w-xl text-white/75 leading-relaxed">
  Every birthday is a celebration of life, happiness, and special moments.
  We design parties that reflect your personality with creativity, fun,
  and flawless execution.
</p>

<p className="max-w-xl text-white/70 leading-relaxed">
  From concept to celebration, our team ensures every detail comes together
  seamlessly for a truly unforgettable birthday experience.
</p>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-115 w-full overflow-hidden rounded-3xl border border-[#C9A14A]"
          >
            <Image
              src="https://images.unsplash.com/photo-1741969494307-55394e3e4071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBkZWNvcmF0aW9ufGVufDB8fDB8fHww"
              alt="Luxury wedding event"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </motion.div>
        </div>

        {/* ================= Section 2: Image Left / Text Right ================= */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-115 w-full overflow-hidden rounded-3xl border-2 border-[#C9A14A]"
          >
            <Image
              src="https://images.unsplash.com/photo-1710854897963-d45e8e26f7fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXklMjBkZWNvcmF0aW9ufGVufDB8fDB8fHww"
              alt="Wedding ceremony moments"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A14A]/40 px-4 py-1 text-xs uppercase tracking-widest text-[#C9A14A]">
  <HeartHandshake className="h-3.5 w-3.5" />
  Our Promise
</span>

<h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
  Designed With{" "}
  <span className="text-[#C9A14A]">Care</span>{" "}
  & Executed With Precision
</h2>

<p className="mb-6 max-w-xl text-white/75 leading-relaxed">
  We believe memorable birthdays are built on thoughtful details. From décor
  and themes to guest experience and event flow, every element is curated to
  feel joyful, effortless, and special.
</p>

<p className="max-w-xl text-white/70 leading-relaxed">
  Our experienced team blends creativity and coordination to ensure your
  birthday celebration runs smoothly, stress-free, and right on schedule.
</p>

          </motion.div>
        </div>
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
};

export default BirthdayAbout;
