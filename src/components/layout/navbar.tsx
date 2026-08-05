"use client";

import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { APP_NAME, NAV_LINKS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="z-sticky fixed top-[30px] right-0 left-0 flex w-full justify-center"
    >
      <div className="w-full px-4 md:px-8">
        <nav
          className={cn(
            "mx-auto flex h-[72px] w-full max-w-[1380px] items-center justify-between rounded-[60px] px-[30px] py-[10px] shadow-sm ring-1 ring-black/5 transition-all duration-300",
            isScrolled ? "bg-white/60 backdrop-blur-md" : "bg-white",
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
              className="h-12 w-auto"
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
                    /* Added 'group/link' scoped strictly to this anchor tag */
                    "group/link text-basic text-foreground hover:text-primary relative flex items-center gap-1 rounded-md px-3 py-2 font-medium transition-colors",
                    pathname === link.href && "text-primary font-semibold",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {/* Text Container */}
                  <span className="relative inline-block">
                    {link.label}
                    {/* Underline only triggers when THIS specific link is hovered */}
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
            className="md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="border-t bg-white/90 py-4 backdrop-blur-md md:hidden"
            aria-label="Mobile navigation "
          >
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                    onClick={closeMenu}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full">
                  <Link href={ROUTES.contact} onClick={closeMenu}>
                    Get in Touch
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
