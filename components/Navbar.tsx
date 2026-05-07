"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute top-0 left-0 w-6 h-6 border-[2.5px] border-[#111827] rounded-[6px]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-[2.5px] border-[#8B5CF6] rounded-[6px]" />
            </div>
            <span className="font-extrabold text-[22px] tracking-tight text-[#111827]">
              Shraddha
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#8B5CF6]"
                      : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/courses"
              className="bg-[#111827] text-white px-6 py-3 rounded-full text-[15px] font-semibold hover:bg-[#374151] transition-colors"
            >
              Start Learning Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#111827] p-2 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={24} />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-0.5 bg-[#111827]"></div>
                <div className="w-4 h-0.5 bg-[#111827]"></div>
                <div className="w-6 h-0.5 bg-[#111827]"></div>
              </div>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden bg-white border-t border-[#E5E7EB] overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[20px] font-bold transition-colors ${
                      pathname === link.href ? "text-[#8B5CF6]" : "text-[#111827]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/courses"
                  className="mt-4 bg-[#8B5CF6] text-white px-6 py-4 rounded-[16px] text-[16px] font-bold text-center flex items-center justify-center gap-2"
                >
                  Start Learning Now <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
