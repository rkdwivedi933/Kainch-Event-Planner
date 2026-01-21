"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";

interface WeddingService {
  title: string;
  image: string;
}

const weddingServices: WeddingService[] = [
  {
    title: "Kitty Party Planning & Coordination",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Elegant Decor & Kitty Party Themes",
    image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Kitty Party Photography",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Games, Hosting & Guest Management",
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&auto=format&fit=crop&q=60",
  },
];



const KitiSection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">

      {/* Heading */}
<div className="mb-16 text-center">
  <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
    Kitty Party Experiences
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
    We design and curate delightful kitty parties that celebrate friendship,
    laughter, and togetherness with style and care. From cozy home gatherings
    to elegant themed kitty parties, every detail is thoughtfully planned to
    create joyful moments worth remembering.
  </p>
</div>




        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {weddingServices.map((service, index) => (
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
              <div className="relative mb-6 h-52  w-full overflow-hidden rounded-2xl">
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

export default KitiSection;
