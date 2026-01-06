"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";

interface ExhibitionService {
  title: string;
  image: string;
}

const exhibitionServices: ExhibitionService[] = [
  {
    title: "Exhibition & Expo Planning",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Custom Stall Design & Fabrication",
    image:
      "https://images.unsplash.com/photo-1581092334494-1e7a8b1d79e5?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Brand Showcases & Product Displays",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "On-site Operations & Visitor Management",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60",
  },
];

const ExhibitionServicesSection: FC = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-20 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            Exhibition & Expo Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We create visually striking and strategically planned exhibitions
            that attract visitors, elevate brand presence, and deliver
            measurable engagement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {exhibitionServices.map((service, index) => (
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

export default ExhibitionServicesSection;
