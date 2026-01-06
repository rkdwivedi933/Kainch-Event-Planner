'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of events do you specialize in?",
    answer: "We specialize in luxury weddings, corporate galas, milestone celebrations, and exclusive private events. Each event is meticulously crafted to reflect your unique vision with unparalleled attention to detail and sophistication."
  },
  {
    question: "How far in advance should we book your services?",
    answer: "For luxury events, we recommend booking 12-18 months in advance for weddings and 6-12 months for corporate events. This ensures optimal venue availability and allows ample time for detailed planning and customization. However, we do accommodate shorter timelines when possible."
  },
  {
    question: "Do you offer full-service event planning?",
    answer: "Yes, we provide comprehensive full-service event planning including venue selection, design and décor, vendor coordination, timeline management, and day-of execution. We also offer partial planning and consulting services tailored to your specific needs."
  },
  {
    question: "What is your planning process?",
    answer: "Our process begins with an intimate consultation to understand your vision. We then develop a customized proposal, coordinate all logistics, curate exceptional vendor teams, and oversee every detail through execution. You'll have a dedicated planner ensuring seamless communication throughout."
  },
  {
    question: "Can you accommodate destination events?",
    answer: "Absolutely. We have extensive experience planning luxury destination events worldwide. Our global network of trusted partners ensures the same level of excellence whether your event is local or at an international locale."
  },
  {
    question: "What is included in your event packages?",
    answer: "Our packages are fully customizable and may include venue sourcing, event design, vendor management, guest services, timeline creation, budget management, and on-site coordination. Each package is tailored to your event's scope and requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0F0F0F] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl">
            FAQ
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Frequently Asked Questions
          </p>
          <div className="mx-auto mt-8 h-px  w-24 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-[#4E3814]/30 rounded-sm overflow-hidden bg-[#0F0F0F] hover:border-[#C9A14A]/50 transition-colors duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-white text-lg md:text-xl font-light pr-8 group-hover:text-[#C9A14A] transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#C9A14A] text-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-[#0F0F0F] transition-all duration-300">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="w-16 h-px bg-[#C9A14A]/30 mb-4" />
                      <p className="text-white/80 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6 font-light">
            Still have questions? We're here to help.
          </p>
          <Link href='/contact'>

          <button className="group cursor-pointer relative px-8 py-4 bg-transparent border border-[#C9A14A] text-[#C9A14A] rounded-sm overflow-hidden transition-all duration-300 hover:text-[#0F0F0F]">
            <span className="relative z-10 tracking-wider text-sm uppercase font-bold">
              Contact Us
            </span>
            <div className="absolute inset-0 bg-[#C9A14A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}