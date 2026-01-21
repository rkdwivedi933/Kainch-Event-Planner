"use client";

import { motion } from "framer-motion";

export default function RulesAndGuidelines() {
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
            Rules & <span className="text-[#C9A14A]">Guidelines</span>
          </h1>
          <p className="mt-4 text-white/70">
            Please read and follow these rules to ensure a smooth and
            memorable wedding experience.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-8 text-white/75 leading-relaxed">

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              1. Booking Confirmation
            </h2>
            <p>
              All bookings are confirmed only after advance payment. Dates and
              services remain tentative until confirmation is completed.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              2. Timely Communication
            </h2>
            <p>
              Clients are required to provide approvals, details, and responses
              within agreed timelines to avoid delays or changes in execution.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              3. Event Schedule
            </h2>
            <p>
              Any changes to the event schedule must be informed in advance.
              Last-minute changes may not always be accommodated.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              4. Venue Rules
            </h2>
            <p>
              Clients and guests must strictly follow venue rules, regulations,
              and safety guidelines during the event.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              5. Damage & Responsibility
            </h2>
            <p>
              Any damage to venue property, décor, or equipment caused by guests
              will be the client’s responsibility.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              6. Photography & Media
            </h2>
            <p>
              Our team may capture photos or videos for portfolio and promotional
              purposes unless otherwise requested in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              7. Vendor Coordination
            </h2>
            <p>
              External vendors must coordinate with our team to ensure smooth
              workflow and event execution.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              8. Safety & Conduct
            </h2>
            <p>
              Guests are expected to behave respectfully. Any unsafe or
              disruptive behavior may result in immediate action.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              9. Policy Updates
            </h2>
            <p>
              These rules and guidelines may be updated from time to time.
              Continued engagement implies acceptance of revised rules.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
