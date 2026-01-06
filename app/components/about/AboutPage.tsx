'use client';

import { motion, Variants } from 'framer-motion';
import { Award, Heart, Target, Users, Sparkles, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import { JSX } from 'react';

const fadeUpVariants:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const staggerContainerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-[#4E3814]/10 via-transparent to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-serif text-4xl font-light tracking-wide text-[#C9A14A] sm:text-5xl lg:text-6xl"
          >
            About Kainch Event Planner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          >
            Creating timeless memories through exceptional luxury events across India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-8 h-px w-32 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 ">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <h2 className="mb-8 font-serif text-4xl font-light text-[#C9A14A] lg:text-5xl">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Founded with a passion for perfection and an eye for detail, <span className="text-[#C9A14A]">Kainch Event Planner</span> has established itself as a premier name in luxury event planning and wedding design across India. Our journey began with a simple belief: every celebration deserves to be extraordinary.
              </p>
              <p>
                We specialize in creating bespoke experiences that blend traditional elegance with contemporary sophistication. From intimate gatherings to grand celebrations, we transform your vision into reality with meticulous attention to every detail.
              </p>
              <p>
                Our expertise spans luxury weddings, high-profile corporate events, and exclusive private celebrations. We pride ourselves on delivering seamless execution, innovative design, and unforgettable moments that exceed expectations.
              </p>
            </div>
          </motion.div>
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

      {/* Experience Highlights */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mb-16 text-center font-serif text-4xl font-light text-[#C9A14A] lg:text-5xl"
          >
            Our Expertise
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: Heart,
                title: 'Luxury Weddings',
                description: 'Crafting dream weddings with personalized touches, exquisite décor, and flawless coordination.',
              },
              {
                icon: Award,
                title: 'Premium Events',
                description: 'Delivering world-class corporate events and private celebrations with sophistication.',
              },
              {
                icon: TrendingUp,
                title: 'Years of Excellence',
                description: 'Proven track record of creating memorable experiences for discerning clients nationwide.',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.article
                  key={index}
                  variants={fadeUpVariants}
                  className="group text-center"
                >
                  <div className="mb-6 inline-flex rounded-full border border-[#4E3814] bg-black p-6 transition-all duration-300 group-hover:border-[#C9A14A] group-hover:shadow-lg group-hover:shadow-[#C9A14A]/20">
                    <IconComponent className="h-10 w-10 text-[#C9A14A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
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

      {/* Vision & Values */}
      <section className="px-6 ">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mb-16 text-center font-serif text-4xl font-light text-[#C9A14A] lg:text-5xl"
          >
            Vision & Values
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainerVariants}
            className="grid gap-10 md:grid-cols-2"
          >
            {[
              {
                icon: Target,
                title: 'Our Vision',
                content: 'To be recognized as India\'s most trusted luxury event planning company, setting new standards in creativity, excellence, and personalized service. We envision a future where every celebration we touch becomes a cherished memory that lasts a lifetime.',
              },
              {
                icon: Users,
                title: 'Our Values',
                content: 'Excellence in execution, integrity in every interaction, innovation in design, and unwavering commitment to our clients. We believe in building lasting relationships through transparency, dedication, and the relentless pursuit of perfection in everything we do.',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.article
                  key={index}
                  variants={fadeUpVariants}
                  className="group rounded-sm border border-[#4E3814] bg-black p-8 transition-all duration-300 hover:border-[#C9A14A] hover:shadow-xl hover:shadow-[#C9A14A]/10"
                >
                  <div className="mb-6 inline-flex rounded-sm bg-[#4E3814]/20 p-4">
                    <IconComponent className="h-10 w-10 text-[#C9A14A]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light text-white group-hover:text-[#C9A14A]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {item.content}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
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

      {/* Commitment Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="text-center"
          >
            <h2 className="mb-8 font-serif text-4xl font-light text-[#C9A14A] lg:text-5xl">
              Our Commitment
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                At Kainch Event Planner, we understand that your event is more than just a date on the calendar—it's a milestone, a celebration, a moment that deserves to be perfect. Our dedicated team of experienced planners works tirelessly to ensure every aspect of your event reflects your unique style and exceeds your highest expectations.
              </p>
              <p>
                From the initial consultation to the final farewell, we are with you every step of the way, offering personalized attention, creative solutions, and unwavering support. Your dream event is our mission, and your satisfaction is our ultimate reward.
              </p>
            </div>

            
          </motion.div>
        </div>
      </section>
    </main>
  );
}