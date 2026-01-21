"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Music } from "lucide-react";

interface ConcertService {
  title: string;
  image: string;
}

const concertServices: ConcertService[] = [
  {
    title: "Live Concert Planning & Production",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Stage, Sound & Lighting Design",
    image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Artist Management & Coordination",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Crowd Control & Event Operations",
    image: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=600&auto=format&fit=crop&q=60",
  },
];

const LiveConcertServicesSection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            Live Concert Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We produce high-energy live concerts that blend powerful sound,
            immersive lighting, and seamless execution — creating unforgettable
            moments for artists and audiences alike.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {concertServices.map((service, index) => (
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

export default LiveConcertServicesSection;
