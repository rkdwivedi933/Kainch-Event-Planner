"use client";

import { motion, Variants } from "framer-motion";
import { useState, ChangeEvent, JSX } from "react";
import { Sparkles, Phone, Mail, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

interface ContactInfo {
  icon: typeof Phone | typeof Mail | typeof MapPin;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@kainchevents.com",
    href: "mailto:hello@kainchevents.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Luxury Lane, Bandra West, Mumbai, Maharashtra 400050",
  },
];

const eventTypes: string[] = [
  "Wedding",
  "Destination Wedding",
  "Corporate Event",
  "Engagement",
  "Reception",
  "Other",
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitStatus("success");

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

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
            Contact Form
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          >
            Let's create something extraordinary together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-8 h-px w-32 bg-linear-to-r from-transparent via-[#C9A14A] to-transparent"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              <h2 className="mb-8 font-serif text-3xl font-light text-white lg:text-4xl">
                Send Us a Message
              </h2>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#4E3814] bg-black px-4 py-3 text-white transition-all duration-300 placeholder:text-gray-600 focus:border-[#C9A14A] focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#4E3814] bg-black px-4 py-3 text-white transition-all duration-300 placeholder:text-gray-600 focus:border-[#C9A14A] focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#4E3814] bg-black px-4 py-3 text-white transition-all duration-300 placeholder:text-gray-600 focus:border-[#C9A14A] focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Event Type Select */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#4E3814] bg-black px-4 py-3 text-white transition-all duration-300 focus:border-[#C9A14A] focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50"
                  >
                    <option value="" disabled>
                      Select event type
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none rounded-md border border-[#4E3814] bg-black px-4 py-3 text-white transition-all duration-300 placeholder:text-gray-600 focus:border-[#C9A14A] focus:outline-none focus:ring-2 focus:ring-[#C9A14A]/50"
                    placeholder="Tell us about your event..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-sm border border-[#C9A14A] py-4 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {/* Hover Fill */}
                  <div className="absolute inset-0 origin-left scale-x-0 bg-[#C9A14A] transition-transform duration-300 group-hover:scale-x-100" />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#C9A14A] transition-colors duration-300 group-hover:text-[#0F0F0F]">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-5 w-5 rounded-full border-2 border-white border-t-transparent group-hover:border-[#0F0F0F] group-hover:border-t-transparent"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" strokeWidth={2} />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md border border-[#C9A14A] bg-[#C9A14A]/10 p-4 text-center text-sm text-[#C9A14A]"
                  >
                    Thank you! We'll get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainerVariants}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-8 font-serif text-3xl font-light text-white lg:text-4xl">
                  Contact Information
                </h2>
                <p className="text-base leading-relaxed text-gray-400">
                  Have questions? We're here to help. Reach out to us through
                  any of the channels below, and our team will respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <motion.div
                      variants={fadeUpVariants}
                      className="group flex items-start gap-4 rounded-lg border border-[#4E3814] bg-black p-6 transition-all duration-300 hover:border-[#C9A14A] hover:shadow-lg hover:shadow-[#C9A14A]/10"
                    >
                      <div className="shrink-0 rounded-sm bg-[#4E3814]/20 p-3 transition-all duration-300 group-hover:bg-[#4E3814]/40">
                        <IconComponent
                          className="h-6 w-6 text-[#C9A14A]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-gray-500">
                          {info.label}
                        </h3>
                        <p className="text-base text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <motion.div
                variants={fadeUpVariants}
                className="rounded-lg border border-[#4E3814] bg-black p-6"
              >
                <h3 className="mb-4 font-serif text-xl font-light text-white">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#C9A14A]">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#C9A14A]">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
