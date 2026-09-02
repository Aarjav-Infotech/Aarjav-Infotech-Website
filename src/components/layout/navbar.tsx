"use client";

import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  GitFork,
  Ticket,
  Network,
  Mic,
  FileText,
  Landmark,
  ShieldCheck,
  Building2,
  HeartPulse,
  Building,
  Factory,
  Briefcase,
  Gem,
  Bot,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { APP_NAME, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Navigation Links Configuration
const NAV_LINKS = [
  { label: "AI Services", href: "/services", hasDropdown: true },
  { label: "Digital Products", href: "/our-products", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Case Studies", href: "/case-study", hasDropdown: false },
  { label: "About", href: "/about", hasDropdown: true },
];

// Mega Menu Items - AI Services
const AI_SERVICES_ITEMS = [
  {
    icon: GitFork,
    title: "AI Workflow Automation",
    description: "Use insight to improve marketing strategy",
    href: "/services/ai-workflow-automation",
  },
  {
    icon: Ticket,
    title: "Support Triage & AI Ticketing",
    description: "Combine virtual number types for various ads",
    href: "/services/support-triage-ticketing",
  },
  {
    icon: Network,
    title: "Enterprise AI Ecosystem",
    description: "Connect disconnected tools so data flows where you need it",
    href: "/services/enterprise-ai-page",
  },
  {
    icon: Mic,
    title: "AI Voice Agent Deployment",
    description: "Determine productive channels",
    href: "/services/ai-voice-agent",
  },
  {
    icon: FileText,
    title: "AI Document Processing",
    description: "Launch pay-per-call campaigns and monitor commission",
    href: "/services/ai-document-processing",
  },
];

// Mega Menu Items - Digital Products
const DIGITAL_PRODUCTS_ITEMS = [
  {
    icon: Bot,
    title: "Vani Sahay",
    description: "Multilingual AI companion for digital financial security and fraud defense",
    href: "/our-products/vani-sahay",
  },
  {
    icon: Gem,
    title: "Diamond Stock Management",
    description: "Intelligent ERP platform for diamond manufacturing and global sales",
    href: "/our-products/diamond-stock",
  },
];

// Mega Menu Items - Industries
const INDUSTRIES_ITEMS = [
  {
    icon: Landmark,
    title: "Banking",
    description: "AI solutions powering modern financial institutions",
    href: "/industries/banking",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    description: "Automated underwriting, claims, and risk management",
    href: "/industries/insurance",
  },
  {
    icon: Building2,
    title: "Government",
    description: "Smart public services and administrative AI transformation",
    href: "/industries/government",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Connected clinical workflows and patient triage AI",
    href: "/industries/healthcare",
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Automated property management and lead engagement",
    href: "/industries/real-estate",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Predictive maintenance and supply chain intelligence",
    href: "/industries/industrial",
  },
  {
    icon: Briefcase,
    title: "Enterprise",
    description: "Scalable AI architecture across core business divisions",
    href: "/industries/enterprise",
  },
];

// Mega Menu Items - About
const ABOUT_ITEMS = [
  {
    icon: Building2,
    title: "Company Overview",
    description: "Learn about our vision, leadership, and enterprise mission",
    href: "/about",
  },
  {
    icon: ShieldCheck,
    title: "Security & Governance",
    description: "Enterprise compliance, zero-trust architectures, and protocols",
    href: "/about#security",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State tracking open mega menu on click
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when clicking outside of navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
    setActiveMegaMenu(null);
    setMobileSubmenuOpen(null);
  }, []);

  const toggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleMegaMenuToggle = (label: string) => {
    setActiveMegaMenu((prev) => (prev === label ? null : label));
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubmenuOpen((prev) => (prev === label ? null : label));
  };

  const getActiveMenuItems = (label: string | null) => {
    switch (label) {
      case "AI Services":
        return AI_SERVICES_ITEMS;
      case "Digital Products":
        return DIGITAL_PRODUCTS_ITEMS;
      case "Industries":
        return INDUSTRIES_ITEMS;
      case "About":
        return ABOUT_ITEMS;
      default:
        return [];
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="fixed top-4 right-0 left-0 z-50 flex w-full justify-center sm:top-[30px]"
    >
      <div ref={navRef} className="relative w-full px-4 md:px-8">
        <nav
          className={cn(
            "mx-auto flex h-[64px] w-full max-w-[1380px] items-center justify-between rounded-[60px] px-4 py-2 shadow-sm ring-1 ring-black/5 transition-all duration-300 sm:h-[72px] sm:px-6 sm:py-[10px] lg:px-[30px]",
            isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white",
          )}
          aria-label="Main navigation"
        >
          {/* Brand Logo */}
          <Link
            href={ROUTES.home || "/"}
            className="flex shrink-0 items-center transition-opacity hover:opacity-80"
            onClick={closeMenu}
          >
            <Image
              src="/svg/logo.svg"
              alt={APP_NAME}
              width={180}
              height={48}
              className="h-8 w-auto sm:h-10 lg:h-12"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul
            className="hidden items-center gap-0.5 lg:flex xl:gap-2"
            role="list"
          >
            {NAV_LINKS.map((link) => {
              const isDropdownActive = activeMegaMenu === link.label;

              return (
                <li key={link.label} className="static lg:relative">
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => handleMegaMenuToggle(link.label)}
                      className={cn(
                        "group/link text-foreground hover:text-primary lg:text-basic relative flex cursor-pointer items-center gap-1 rounded-md px-2 py-2 text-xs font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-sm",
                        isDropdownActive && "text-primary font-semibold",
                      )}
                    >
                      <span className="relative inline-block whitespace-nowrap">
                        {link.label}
                        <span
                          className={cn(
                            "bg-primary absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/link:scale-x-100",
                            isDropdownActive && "scale-x-100",
                          )}
                        />
                      </span>

                      <ChevronDown
                        className={cn(
                          "size-3.5 shrink-0 opacity-50 transition-transform duration-300 xl:size-4",
                          isDropdownActive && "rotate-180 opacity-100",
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "group/link text-foreground hover:text-primary lg:text-basic relative flex items-center gap-1 rounded-md px-2 py-2 text-xs font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-sm",
                        pathname === link.href && "text-primary font-semibold",
                      )}
                    >
                      <span className="relative inline-block whitespace-nowrap">
                        {link.label}
                        <span
                          className={cn(
                            "bg-primary absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover/link:scale-x-100",
                            pathname === link.href && "scale-x-100",
                          )}
                        />
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden shrink-0 lg:block">
            <Button
              asChild
              className="gap-2 rounded-full border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-5 py-5 text-xs whitespace-nowrap text-white shadow-md transition-all duration-500 ease-in-out hover:bg-[linear-gradient(180deg,#091E46_0%,#0053FA_50%,#075FF3_100%)] xl:gap-3 xl:px-7 xl:py-6 xl:text-sm"
            >
              <Link href={ROUTES.contact || "/contact"}>
                Book a discovery call{" "}
                <ArrowRight className="ml-1 size-4 shrink-0" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>

        {/* Desktop Mega Menu Overlay Panel */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3"
            >
              <div className="w-[1100px] max-w-[calc(100vw-2rem)] rounded-[28px] border border-slate-100 bg-white/95 p-8 shadow-2xl ring-1 ring-slate-900/5 backdrop-blur-2xl">
                <div className="grid grid-cols-12 gap-8">
                  {/* Grid Options */}
                  <div className="col-span-8 flex flex-col justify-between">
                    <div className="mb-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      {activeMegaMenu}
                    </div>

                    <div
                      className={cn(
                        "grid gap-x-4 gap-y-3",
                        activeMegaMenu === "Digital Products" || activeMegaMenu === "About"
                          ? "grid-cols-1"
                          : "grid-cols-2",
                      )}
                    >
                      {getActiveMenuItems(activeMegaMenu).map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={closeMenu}
                            className="group/item flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                          >
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-xs transition-colors group-hover/item:border-blue-200 group-hover/item:bg-blue-50 group-hover/item:text-blue-600">
                              <Icon className="size-5" />
                            </div>
                            <div className="text-left">
                              <h4 className="text-sm font-bold text-slate-900 transition-colors group-hover/item:text-blue-600">
                                {item.title}
                              </h4>
                              <p className="mt-0.5 text-xs leading-snug text-slate-500">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Preview Banner */}
                  <div className="col-span-4 flex flex-col justify-between pl-4 text-left">
                    <div>
                      <div className="mb-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        Explore
                      </div>
                      <Link
                        href={
                          activeMegaMenu === "Digital Products"
                            ? "/our-products/vani-sahay"
                            : activeMegaMenu === "AI Services"
                              ? "/services"
                              : "/case-study"
                        }
                        onClick={closeMenu}
                        className="group/preview block overflow-hidden rounded-2xl"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                          <Image
                            src="/images/ai-megamenu.svg"
                            alt="Overview"
                            fill
                            className="object-cover transition-transform duration-500 group-hover/preview:scale-105"
                          />
                        </div>
                        <div className="mt-3">
                          <h4 className="text-sm font-bold text-slate-900 group-hover/preview:text-blue-600">
                            {activeMegaMenu === "Digital Products"
                              ? "Vani Sahay Overview"
                              : activeMegaMenu === "AI Services"
                                ? "Platform Overview"
                                : "Industry Success Stories"}
                          </h4>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {activeMegaMenu === "Digital Products"
                              ? "See how our financial AI agent shields users from scams"
                              : activeMegaMenu === "AI Services"
                                ? "Take a free tour of our platform features"
                                : "See how we empower diverse global sectors"}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Darkened Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
                className="fixed inset-0 -z-10 bg-slate-900/40 backdrop-blur-xs lg:hidden"
              />

              {/* Floating Mobile Menu Container */}
              <motion.nav
                id="mobile-menu"
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mx-auto mt-3 max-h-[calc(100dvh-120px)] w-full max-w-[1380px] overflow-y-auto rounded-[28px] border border-slate-200/80 bg-white/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-0">
                  <ul className="space-y-1" role="list">
                    {NAV_LINKS.map((link) => {
                      const isSubmenuOpen = mobileSubmenuOpen === link.label;

                      if (link.hasDropdown) {
                        const items = getActiveMenuItems(link.label);

                        return (
                          <li key={link.label} className="flex flex-col">
                            <button
                              onClick={() => toggleMobileSubmenu(link.label)}
                              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0053FA]"
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                className={cn(
                                  "size-4 shrink-0 transition-transform duration-200",
                                  isSubmenuOpen && "rotate-180 text-[#0053FA]",
                                )}
                              />
                            </button>

                            {/* Mobile Accordion Submenu */}
                            <AnimatePresence>
                              {isSubmenuOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden pr-2 pl-4"
                                >
                                  <div className="flex flex-col gap-1 py-2">
                                    {items.map((item) => {
                                      const Icon = item.icon;
                                      return (
                                        <Link
                                          key={item.title}
                                          href={item.href}
                                          onClick={closeMenu}
                                          className="flex items-center gap-3 rounded-lg p-2 text-sm text-slate-700 hover:bg-slate-100"
                                        >
                                          <Icon className="size-4 text-blue-600" />
                                          <span className="font-medium">
                                            {item.title}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      }

                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className={cn(
                              "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                              pathname === link.href
                                ? "bg-slate-100 text-[#0053FA]"
                                : "text-slate-800 hover:bg-slate-50 hover:text-[#0053FA]",
                            )}
                            onClick={closeMenu}
                          >
                            <span className="whitespace-nowrap">
                              {link.label}
                            </span>
                            <ArrowRight className="size-4 shrink-0 opacity-40" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-2 border-t border-slate-100 pt-4">
                    <Button
                      asChild
                      className="w-full gap-3 rounded-full border-b-4 border-black pill-slot px-6 py-6 text-white shadow-md"
                    >
                      <Link
                        href={ROUTES.contact || "/contact"}
                        onClick={closeMenu}
                      >
                        Book a discovery call{" "}
                        <ArrowRight className="ml-1 size-4 shrink-0" />
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