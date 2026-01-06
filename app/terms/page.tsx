"use client";

import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
            Terms & <span className="text-[#C9A14A]">Conditions</span>
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
              By accessing or using our website and services, you agree to be
              bound by these Terms & Conditions. If you do not agree, please do
              not use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              2. Services
            </h2>
            <p>
              We provide wedding planning, event management, and related
              services. All services are subject to availability and
              confirmation.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              3. Bookings & Payments
            </h2>
            <p>
              Bookings are confirmed only after advance payment. Remaining
              payments must be completed as per the agreed schedule. Payments
              once made are non-refundable unless stated otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              4. Cancellations
            </h2>
            <p>
              Any cancellation must be communicated in writing. Cancellation
              charges may apply depending on the stage of planning and expenses
              already incurred.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              5. Client Responsibilities
            </h2>
            <p>
              Clients must provide accurate information and approvals on time.
              Delays in responses may affect timelines and final outcomes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              6. Intellectual Property
            </h2>
            <p>
              All content, designs, images, and concepts remain our intellectual
              property unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              7. Limitation of Liability
            </h2>
            <p>
              We shall not be liable for indirect, incidental, or consequential
              damages arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of our services implies acceptance of the
              updated terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              9. Contact Us
            </h2>
            <p>
              For any questions regarding these Terms & Conditions, please
              contact us through our official communication channels.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
