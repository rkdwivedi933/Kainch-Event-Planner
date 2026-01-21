"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mic2 } from "lucide-react";

interface OpenMicService {
  title: string;
  image: string;
}

const openMicServices: OpenMicService[] = [
  {
    title: "Open Mic Event Planning",
    image: "https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE9wZW4lMjBNaWMlMjBOaWdodHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Stage & Sound Setup",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Performer Coordination",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Audience Engagement & Flow",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60",
  },
];

const OpenMicServicesSection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            Open Mic Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We curate intimate open mic nights where creativity, confidence,
            and community come together — giving every performer a stage to
            express and every audience a moment to connect.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {openMicServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group rounded-3xl border border-[#C9A14A] bg-[#0F0F0F] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative mb-6 h-52 w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="text-center text-lg font-semibold text-white">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OpenMicServicesSection;
