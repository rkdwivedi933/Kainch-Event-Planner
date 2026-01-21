'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface City {
  id: number;
  name: string;
  image: string;
}

const cities: City[] = [
  { id: 1, name: 'Satna', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800' },
  { id: 2, name: 'Rewa', image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800' },
  { id: 3, name: 'Maihar', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800' },
  { id: 4, name: 'Jabalpur', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' },
  { id: 5, name: 'Indore', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800' },
  { id: 6, name: 'Bhopal', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800' },
  { id: 7, name: 'Ujain', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800' },

];

export default function CityPresenceCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const total = cities.length;

  /** RESPONSIVE CARD COUNT */
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  /** AUTO SCROLL */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const slideWidth = 100 / visibleCards;

  return (
    <section className="bg-[#0F0F0F] py-20">
      <div className="mx-auto max-w-7xl px-2">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            Our Presence
          </h2>
          <p className="mt-6 text-lg text-gray-400">Cities We Serve</p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * slideWidth}%` }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            {[...cities, ...cities].map((city, i) => (
              <div
                key={`${city.id}-${i}`}
                className="w-full shrink-0 px-4 sm:w-1/2 lg:w-1/3"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-2xl border-2 border-[#4E3814]"
                >
                  <div className="relative aspect-4/2 overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-medium text-white">
                      {city.name}
                    </h3>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
