"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Presentation } from "lucide-react";

const CorporateEventDualSections: FC = () => {
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
              <Briefcase className="h-3.5 w-3.5" />
              Corporate Events
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Delivering{" "}
              <span className="text-[#C9A14A]">Impactful</span>{" "}
              Corporate Experiences
            </h2>

            <p className="mb-6 max-w-xl text-white/75 leading-relaxed">
              We design and execute professional corporate events that reflect
              your brand identity, engage your audience, and leave a lasting
              impression.
            </p>

            <p className="max-w-xl text-white/70 leading-relaxed">
              From conferences and annual meets to product launches, every
              detail is managed with precision and excellence.
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
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80"
              alt="Corporate conference"
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
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&auto=format&fit=crop&q=80"
              alt="Business presentation"
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
              <Presentation className="h-3.5 w-3.5" />
              Our Expertise
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Seamless{" "}
              <span className="text-[#C9A14A]">Planning</span>{" "}
              & Professional Execution
            </h2>

            <p className="mb-6 max-w-xl text-white/75 leading-relaxed">
              From venue setup and stage design to audiovisual production and
              guest management, we handle everything end-to-end.
            </p>

            <p className="max-w-xl text-white/70 leading-relaxed">
              Our corporate event team ensures smooth coordination, clear
              communication, and an experience aligned with your business goals.
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

export default CorporateEventDualSections;
