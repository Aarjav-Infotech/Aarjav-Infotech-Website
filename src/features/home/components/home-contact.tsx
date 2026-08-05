"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Security & Compliance", href: "/security" },
  { name: "FAQs", href: "/faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 1. Lock/Unlock background body scroll when mobile menu opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount or navigation
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 2. Automatically close menu when navigating to a new route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          AARJAV<span className="text-[#2b2bad]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#2b2bad] ${
                pathname === link.href
                  ? "font-semibold text-[#2b2bad]"
                  : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#2b2bad] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1a1a8c]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
            />

            {/* Scrollable Mobile Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              /* 
                CRITICAL SCROLL FIXES:
                - h-dvh: Sets dynamic viewport height to fit mobile browsers with URL bars.
                - overflow-y-auto: Allows internal vertical scrolling if menu items exceed screen height.
                - touch-pan-y: Ensures touch drag gestures allow native vertical scrolling.
              */
              className="fixed top-0 right-0 z-40 flex h-dvh w-full max-w-xs touch-pan-y flex-col justify-between overflow-y-auto bg-white px-6 pt-24 pb-8 shadow-2xl md:hidden"
            >
              {/* Menu Navigation Links */}
              <div className="flex flex-col gap-5">
                <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Navigation
                </p>
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-semibold transition-colors ${
                        pathname === link.href
                          ? "text-[#2b2bad]"
                          : "text-slate-800 hover:text-[#2b2bad]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Menu Bottom Action Card */}
              <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Ready to automate?
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Let's build your workflow.
                  </p>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2b2bad] text-sm font-semibold text-white shadow-md transition-all active:scale-98"
                >
                  Book Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
