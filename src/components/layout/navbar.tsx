"use client";

import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { APP_NAME, NAV_LINKS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Site navigation with responsive mobile menu.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="z-sticky fixed top-4 right-0 left-0 flex w-full justify-center sm:top-[30px]"
    >
      <div className="relative w-full px-4 md:px-8">
        <nav
          className={cn(
            "mx-auto flex h-[64px] w-full max-w-[1380px] items-center justify-between rounded-[60px] px-5 py-2 shadow-sm ring-1 ring-black/5 transition-all duration-300 sm:h-[72px] sm:px-[30px] sm:py-[10px]",
            isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white",
          )}
          aria-label="Main navigation"
        >
          <Link
            href={ROUTES.home}
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            <Image
              src="/svg/logo.svg"
              alt={APP_NAME}
              width={180}
              height={48}
              className="h-9 w-auto sm:h-12"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group/link text-basic text-foreground hover:text-primary relative flex items-center gap-1 rounded-md px-3 py-2 font-medium transition-colors",
                    pathname === link.href && "text-primary font-semibold",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {/* Text Container */}
                  <span className="relative inline-block">
                    {link.label}
                    <span
                      className={cn(
                        "bg-primary absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/link:scale-x-100",
                        pathname === link.href && "scale-x-100",
                      )}
                    />
                  </span>

                  {"hasDropdown" in link && link.hasDropdown && (
                    <ChevronDown className="size-4 opacity-50" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              asChild
              className="gap-3 rounded-full border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-7 py-6 text-white shadow-md transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#091E46_0%,#0053FA_50%,#075FF3_100%)] hover:px-7.5"
            >
              <Link href={ROUTES.contact}>
                Book a discovery call <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>

        {/* Floating Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Darkened Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
                className="fixed inset-0 -z-10 bg-slate-900/40 backdrop-blur-xs md:hidden"
              />

              {/* Floating Menu Card */}
              <motion.nav
                id="mobile-menu"
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mx-auto mt-3 max-h-[calc(100dvh-120px)] w-full max-w-[1380px] overflow-y-auto rounded-[28px] border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-0">
                  <ul className="space-y-1" role="list">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                            pathname === link.href
                              ? "bg-slate-100 text-[#0053FA]"
                              : "text-slate-800 hover:bg-slate-50 hover:text-[#0053FA]",
                          )}
                          onClick={closeMenu}
                          aria-current={
                            pathname === link.href ? "page" : undefined
                          }
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="size-4 opacity-40" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 border-t border-slate-100 pt-4">
                    <Button
                      asChild
                      className="w-full gap-3 rounded-full border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] px-6 py-6 text-white shadow-md"
                    >
                      <Link href={ROUTES.contact} onClick={closeMenu}>
                        Book a discovery call{" "}
                        <ArrowRight className="ml-1 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
