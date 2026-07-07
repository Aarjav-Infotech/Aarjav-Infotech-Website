"use client";

import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
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
      className="z-sticky group fixed top-[30px] right-0 left-0 w-full"
    >
      <Container>
        <nav
          className={cn(
            "flex h-[72px] items-center justify-between rounded-full px-8 shadow-sm ring-1 ring-black/5 transition-all duration-300",
            isScrolled
              ? "bg-white/60 backdrop-blur-md group-hover:bg-white"
              : "bg-white",
          )}
          aria-label="Main navigation"
        >
          {/* <Link
            href={ROUTES.home}
            className="text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            {APP_NAME}
          </Link> */}

          <Link
            href={ROUTES.home}
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            {/* {APP_NAME}  */}
            <Image
              src="/images/logo.png"
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
                    "text-foreground hover:text-primary flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === link.href && "text-primary font-semibold",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
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
              className="rounded-full bg-black text-white hover:bg-black/90"
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
            className="border-t py-4 md:hidden"
            aria-label="Mobile navigation"
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
      </Container>
    </motion.header>
  );
}
