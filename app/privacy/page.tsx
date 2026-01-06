"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Privacy <span className="text-[#C9A14A]">Policy</span>
          </h1>
          <p className="mt-4 text-white/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-8 text-white/75 leading-relaxed">

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              1. Introduction
            </h2>
            <p>
              We respect your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, and safeguard your data when you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal details such as your name, contact number,
              email address, event details, and any other information you
              voluntarily provide through forms or communication.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p>
              The information we collect is used to provide our services,
              respond to inquiries, manage bookings, improve our offerings, and
              communicate important updates related to your events.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              4. Data Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              5. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal data to third parties.
              Information may be shared only with trusted partners strictly for
              service execution purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              6. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance user experience and analyze
              website performance. You can choose to disable cookies through
              your browser settings.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              8. Changes to This Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be effective immediately upon posting on this page.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us through our official communication channels.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
