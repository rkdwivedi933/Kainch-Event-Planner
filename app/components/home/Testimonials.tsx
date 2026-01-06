"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  eventType: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    eventType: "Luxury Wedding",
    rating: 5,
    quote: "Our wedding was nothing short of magical. Every detail was executed flawlessly, from the stunning floral arrangements to the impeccable service. The team transformed our vision into reality and exceeded all expectations.",
  },
  {
    id: 2,
    name: "James Richardson",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    eventType: "Corporate Event",
    rating: 5,
    quote: "The annual gala they organized for our company was spectacular. Professional, elegant, and seamlessly executed. Our clients were thoroughly impressed, and it strengthened our brand reputation significantly.",
  },
  {
    id: 3,
    name: "Emily & David Chen",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    eventType: "Destination Wedding",
    rating: 5,
    quote: "Planning a destination wedding seemed daunting, but they handled everything with grace and precision. From coordinating with local vendors to ensuring our guests were comfortable, it was perfect beyond words.",
  },
  {
    id: 4,
    name: "Robert Morrison",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    eventType: "Corporate Event",
    rating: 5,
    quote: "We've worked with many event planners, but none compare to this level of sophistication and attention to detail. Our product launch was elegant, memorable, and perfectly aligned with our luxury brand.",
  },
  
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(3);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  }, 4000); // 4 sec auto scroll

  return () => clearInterval(interval);
}, [maxIndex]);

  return (
    <section className="relative bg-[#0F0F0F] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            TESTIMONIALS
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            What Our Clients Say
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {testimonials
                  .slice(currentIndex, currentIndex + cardsPerView)
                  .map((testimonial, idx) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      
                      className="bg-linear-to-br from-[#1a1a1a] to-[#0F0F0F] rounded-2xl p-8 border border-[#4E3814] relative transition-all duration-300"
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-[#4E3814] opacity-30">
                        <Quote size={48} fill="currentColor" />
                      </div>

                      {/* Client Photo */}
                      <div className="flex flex-col items-center mb-6 relative z-10">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C9A14A] mb-4 shadow-lg">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-white text-xl font-light mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#C9A14A] text-sm uppercase tracking-wider">
                          {testimonial.eventType}
                        </p>
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill="#C9A14A"
                            className="text-[#C9A14A]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-gray-300 text-center leading-relaxed font-light">
                        "{testimonial.quote}"
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > cardsPerView && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(201, 161, 74, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full border-2 border-[#C9A14A] flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#C9A14A] hover:border-[#C9A14A] opacity-70 hover:opacity-100"
                }`}
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="text-[#C9A14A] hover:text-[#0F0F0F]" size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(201, 161, 74, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full border-2 border-[#C9A14A] flex items-center justify-center transition-all duration-300 ${
                  currentIndex >= maxIndex
                    ? "opacity-30 cursor-not-allowed"
                    : "hover:bg-[#C9A14A] hover:border-[#C9A14A] opacity-70 hover:opacity-100"
                }`}
                aria-label="Next testimonials"
              >
                <ChevronRight className="text-[#C9A14A] hover:text-[#0F0F0F]" size={24} />
              </motion.button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {testimonials.length > cardsPerView && (
          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-[#C9A14A] w-8"
                    : "bg-[#4E3814] hover:bg-[#C9A14A]"
                }`}
                aria-label={`Go to testimonial group ${idx + 1}`}
              />
            ))}
          </div>
        )}
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
    </section>
  );
}