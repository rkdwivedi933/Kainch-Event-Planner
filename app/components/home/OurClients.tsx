"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Four Seasons Hotels & Resorts",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 2,
    name: "The Ritz-Carlton",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Waldorf Astoria",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 4,
    name: "St. Regis Hotels",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Mandarin Oriental",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Peninsula Hotels",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Rosewood Hotels",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Aman Resorts",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Belmond Hotels",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Fairmont Hotels",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
  },
];

const cardClasses =
  "group bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] border border-[#4E3814] rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#C9A14A] ";

export default function OurClients() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!scrollRef.current || !autoScroll) return;

    const container = scrollRef.current;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [autoScroll]);

  const ClientCard = ({ client }: { client: Client }) => (
    <motion.div whileHover={{ scale: 1.05 }} className={cardClasses}>
      <img
        src={client.logo}
        alt={client.name}
        className="h-16 object-contain mb-4 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      />

      <p className="text-sm text-white/70 group-hover:text-[#C9A14A] transition-colors duration-300 tracking-wide">
        {client.name}
      </p>
    </motion.div>
  );

  return (
    <section className="bg-[#0F0F0F] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            OUR CLIENTS
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Trusted by Premium Brands & Families
          </p>
          <div className="mx-auto mt-8 h-px  w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-6">
          {clients.slice(0, 9).map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {/* Mobile Auto Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onTouchStart={() => setAutoScroll(false)}
            onTouchEnd={() => setAutoScroll(true)}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.id}-${index}`} className="min-w-65">
                <ClientCard client={client} />
              </div>
            ))}
          </div>
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

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
