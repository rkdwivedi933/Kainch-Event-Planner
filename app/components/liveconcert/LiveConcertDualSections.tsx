"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Music, Mic2 } from "lucide-react";

const LiveConcertDualSections: FC = () => {
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
              <Music className="h-3.5 w-3.5" />
              Live Concerts
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Powering{" "}
              <span className="text-[#C9A14A]">Electrifying</span>{" "}
              Live Music Experiences
            </h2>

            <p className="mb-6 max-w-xl text-white/75 leading-relaxed">
              Every concert is an energy-driven experience. We produce live
              shows that combine powerful sound, stunning visuals, and
              unforgettable crowd engagement.
            </p>

            <p className="max-w-xl text-white/70 leading-relaxed">
              From underground gigs to large-scale stadium concerts, we manage
              every aspect with precision and passion.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-115 w-full overflow-hidden rounded-3xl border-2 border-[#C9A14A]"
          >
            <Image
              src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1600&auto=format&fit=crop&q=80"
              alt="Live concert crowd"
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
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&auto=format&fit=crop&q=80"
              alt="Stage performance"
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
              <Mic2 className="h-3.5 w-3.5" />
              Our Expertise
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Built For{" "}
              <span className="text-[#C9A14A]">Sound</span>{" "}
              , Lights & Massive Crowds
            </h2>

            <p className="mb-6 max-w-xl text-white/75 leading-relaxed">
              From artist coordination and stage design to sound engineering
              and crowd flow, we handle every technical and creative detail.
            </p>

            <p className="max-w-xl text-white/70 leading-relaxed">
              Our experienced concert team ensures flawless execution, safety,
              and an atmosphere that keeps the audience energized throughout.
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

export default LiveConcertDualSections;
