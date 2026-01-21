"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mic2, Sparkles } from "lucide-react";

const OpenMicDualSections: FC = () => {
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
              <Mic2 className="h-3.5 w-3.5" />
              Open Mic Nights
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              A Stage For{" "}
              <span className="text-[#C9A14A]">Every Voice</span>{" "}
              & Every Story
            </h2>

            <p className="mb-6 max-w-xl text-white/75 leading-relaxed">
              Open mic nights are all about expression, confidence, and raw
              talent. We create welcoming stages where singers, poets, comics,
              and storytellers shine.
            </p>

            <p className="max-w-xl text-white/70 leading-relaxed">
              Whether it’s your first performance or your hundredth, our open
              mic events are designed to feel warm, inspiring, and unforgettable.
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
              src="https://images.unsplash.com/photo-1760830477848-8dcfeb038f8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3BlbiUyME1pYyUyME5pZ2h0c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Open mic performance"
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
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1600&auto=format&fit=crop&q=80"
              alt="Audience enjoying open mic"
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
              <Sparkles className="h-3.5 w-3.5" />
              The Experience
            </span>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Intimate{" "}
              <span className="text-[#C9A14A]">Vibes</span>{" "}
              , Real Connections
            </h2>

            <p className="mb-6 max-w-xl text-white/75 leading-relaxed">
              From cozy cafés to creative venues, our open mic setups focus on
              sound clarity, audience comfort, and an engaging atmosphere.
            </p>

            <p className="max-w-xl text-white/70 leading-relaxed">
              We manage stage flow, performer coordination, and crowd energy so
              every event feels smooth, supportive, and inspiring.
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

export default OpenMicDualSections;
