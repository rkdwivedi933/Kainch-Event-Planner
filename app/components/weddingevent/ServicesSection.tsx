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
    title: "Wedding Planning & Coordination",
    image: "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Luxury Decor & Theme Design",
    image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Wedding Photography & Cinematography",
    image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Guest Management & Hospitality",
    image: "https://plus.unsplash.com/premium_photo-1673839631834-2854ce01be12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlubmVyJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const WeddingServicesSection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
<div className="mb-16 text-center">
  <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
     Wedding Experiences
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
    We design and curate unforgettable wedding celebrations that reflect your
    love story with elegance and precision. From intimate ceremonies to grand
    destination weddings, every detail is thoughtfully planned to create
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

export default WeddingServicesSection;
