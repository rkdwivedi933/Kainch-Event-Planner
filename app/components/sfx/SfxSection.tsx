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
    title: "Sound Design & Audio Engineering",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Stage Lighting & Visual Effects",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Event Filming & Live Production",
    image: "https://images.unsplash.com/photo-1515165562835-c4c9b4b7b30d?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Technical Crew & Event Operations",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60",
  },
];


const SfxSection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">
{/* Heading */}
<div className="mb-16 text-center">
  <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
    SFX Event Experiences
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
    We design and produce high-energy SFX events that captivate audiences
    through powerful sound, dynamic lighting, and immersive visual effects.
    From intimate live shows to large-scale productions, every element is
    precisely engineered to deliver unforgettable experiences.
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

export default SfxSection;
