"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, HeartHandshake } from "lucide-react";

const GettogetherAbout: FC = () => {
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
  Get-Together Events
</span>

<h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
  Crafting{" "}
  <span className="text-[#C9A14A]">Meaningful</span>{" "}
  Get-Together Experiences
</h2>

<p className="mb-6 max-w-xl text-white/75 leading-relaxed">
  Every get-together is about connection, comfort, and shared moments.
  We design gatherings that reflect warmth, style, and togetherness
  with thoughtful planning and effortless execution.
</p>

<p className="max-w-xl text-white/70 leading-relaxed">
  From planning to the final goodbye, our team ensures every detail comes
  together seamlessly for a relaxed and memorable get-together.
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
              src="https://images.unsplash.com/photo-1561539623-007d71660044?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2V0JTIwdG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D"
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
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2V0JTIwdG9nZXRoZXJ8ZW58MHx8MHx8fDA%3D"
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
  <span className="text-[#C9A14A]">Warmth</span>{" "}
  & Executed With Ease
</h2>

<p className="mb-6 max-w-xl text-white/75 leading-relaxed">
  We believe meaningful get-togethers are built on thoughtful details. From
  ambience and seating to guest comfort and event flow, every element is
  curated to feel relaxed, welcoming, and enjoyable.
</p>

<p className="max-w-xl text-white/70 leading-relaxed">
  Our experienced team blends planning and coordination to ensure your
  get-together runs smoothly, remains stress-free, and allows everyone to
  simply enjoy the moment.
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

export default GettogetherAbout;
