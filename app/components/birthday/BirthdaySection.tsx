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
    title: "Birthday Planning & Coordination",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Creative Decor & Party Themes",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Birthday Photography & Videography",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Guest Management & Party Hosting",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop&q=60",
  },
];


const BirthdaySection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">

      {/* Heading */}
<div className="mb-16 text-center">
  <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
    Birthday Experiences
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
    We design and curate unforgettable birthday celebrations that reflect your
    personality and joy with creativity and precision. From intimate gatherings
    to grand birthday parties, every detail is thoughtfully planned to create
    moments that last a lifetime.
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

export default BirthdaySection;
