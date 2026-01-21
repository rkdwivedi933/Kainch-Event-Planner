"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white flex items-center justify-center">
      <div className="mx-auto max-w-3xl text-center space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight">
            4<span className="text-[#C9A14A]">0</span>4
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Page Not <span className="text-[#C9A14A]">Found</span>
          </h2>

          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Sorry, the page you’re looking for doesn’t exist or may have been
            moved. Please check the URL or return to the homepage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#C9A14A]/40 px-8 py-3 text-sm font-semibold tracking-wide text-[#C9A14A] transition-all duration-300 hover:bg-[#C9A14A] hover:text-black"
          >
            Go Back Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
