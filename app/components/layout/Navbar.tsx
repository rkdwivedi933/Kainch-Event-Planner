"use client";

import { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },

  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/wedding", label: "Wedding Event" },
      { href: "/services/live-concert", label: "Live Concert" },
      { href: "/services/open-mic", label: "Open Mic" },
      { href: "/services/corporate", label: "Corporate Event" },
      { href: "/services/exhibition", label: "Exhibition" },
      { href: "/services/sfx", label: "SFX" },
      { href: "/services/birthday", label: "Birthday" },
      { href: "/services/kiti-party", label: "kiti-party" },
      { href: "/services/get-to-gether", label: "Get- Togaether" },
    ],
  },
  { href: "/gallery", label: "Work Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openServiceDesktop, setOpenServiceDesktop] = useState(false); // desktop only
  const [openServiceMobile, setOpenServiceMobile] = useState(false); // mobile only
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenServiceMobile(false);
    setOpenServiceDesktop(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg border border-[#4E3814]/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <div className="flex flex-col leading-none">
              {/* Main Brand */}
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="
        font-serif text-xl font-light tracking-wide
        text-white transition-colors duration-300
        group-hover:text-[#C9A14A]
        lg:text-2xl
      "
              >
                Kainch Event
              </motion.span>

              {/* Small subtitle */}
              <span
                className="
        mt-1 text-[10px] tracking-[0.25em] uppercase
        text-white/60 group-hover:text-[#C9A14A]/80
        transition-colors duration-300
      "
              >
                Planner
              </span>
            </div>

            {/* Underline */}
            <motion.div
              className="
      absolute -bottom-1 left-0 h-px w-0
      bg-linear-to-r from-[#C9A14A] to-transparent
      transition-all duration-300 group-hover:w-full
    "
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.children) {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenServiceDesktop(true)}
                    onMouseLeave={() => setOpenServiceDesktop(false)}
                  >
                    <button className="flex items-center gap-1 py-2 text-sm font-medium uppercase tracking-wider text-white hover:text-[#C9A14A]">
                      {link.label}
                      <span
                        className={`transition-transform duration-300 ${
                          openServiceDesktop ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    <AnimatePresence>
                      {openServiceDesktop && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-0 top-full mt-2 w-48 bg-[#0F0F0F] border border-[#4E3814]/30 rounded-md shadow-lg overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2 text-sm text-white hover:bg-[#C9A14A]/20 hover:text-[#C9A14A] uppercase tracking-wide"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`py-2 text-sm uppercase tracking-wider ${
                      isActive
                        ? "text-[#C9A14A]"
                        : "text-white hover:text-[#C9A14A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Link href="/contact">
                <button className="group cursor-pointer relative px-8 py-4 bg-transparent border border-[#C9A14A] text-[#C9A14A] rounded-sm overflow-hidden transition-all duration-300 hover:text-[#0F0F0F]">
                  <span className="relative z-10 tracking-wider text-sm uppercase font-bold">
                    Plan Your Event
                  </span>
                  <div className="absolute inset-0 bg-[#C9A14A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="relative z-50 text-white lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[#0F0F0F]/95 overflow-hidden"
            >
              <ul className="space-y-1 py-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setOpenServiceMobile((prev) => !prev)}
                          className="flex w-full justify-between items-center border-l-4 border-transparent py-3 pl-6 text-base uppercase tracking-wide text-white hover:text-[#C9A14A] transition-colors duration-200"
                        >
                          {link.label}
                          <span className="text-xl font-bold">
                            {openServiceMobile ? "−" : "+"}
                          </span>
                        </button>

                        <AnimatePresence>
                          {openServiceMobile && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="ml-6 overflow-hidden border-l border-[#4E3814]/30"
                            >
                              {link.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block py-2 pl-4 text-sm uppercase tracking-wide text-white hover:text-[#C9A14A] transition-colors duration-200"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block border-l-4 border-transparent py-3 pl-6 text-base uppercase tracking-wide text-white hover:text-[#C9A14A] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="border-t border-[#4E3814]/30 pt-6 px-6">
                <Link href="/contact">
                  <button className="group cursor-pointer relative w-full py-4 bg-transparent border border-[#C9A14A] rounded-sm overflow-hidden transition-all duration-300 hover:text-[#0F0F0F]">
                    <span className="relative z-10 text-white tracking-wider text-sm uppercase font-light">
                      Plan Your Event
                    </span>
                    <div className="absolute inset-0 bg-[#C9A14A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
