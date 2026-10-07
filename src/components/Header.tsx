"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  LuBriefcase,
  LuChevronDown,
  LuDroplets,
  LuFlame,
  LuMapPin,
  LuPhone,
  LuSmile,
  LuSparkles,
  LuSun,
} from "react-icons/lu";
import SocialLinks from "@/components/SocialLinks";
import { ADDRESS, DIRECTIONS_URL, PHONE } from "@/lib/site";

type NavItem = {
  name: string;
  href: string;
  subItems?: { name: string; href: string; icon: IconType }[];
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "UV Tanning", href: "/uv-tanning" },
  { name: "UV Free Spray", href: "/uv-free-spray-tanning" },
  { name: "Lotions", href: "/tanning-lotions" },
  { name: "Promos", href: "/promotions" },
  { name: "Contact", href: "/contact" },
  {
    name: "Wellness",
    href: "#",
    subItems: [
      { name: "SST Red Light Therapy", href: "/sst-red-light-therapy", icon: LuSun },
      { name: "Halotherapy Sauna", href: "/halotherapy-sauna", icon: LuFlame },
      { name: "Poly Red Light Therapy", href: "/red-light-therapy", icon: LuSparkles },
      { name: "Wellfit Skin Care Treatments", href: "/wellfit", icon: LuDroplets },
      { name: "BleachBright Teeth Whitening", href: "/bleachbright", icon: LuSmile },
    ],
  },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileWellnessOpen, setMobileWellnessOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isGroupActive = (item: NavItem) => item.subItems?.some((s) => isActive(s.href)) ?? false;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
        setMobileWellnessOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close desktop dropdown when clicking outside of it, and everything on Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileWellnessOpen(false);
  };

  return (
    <>
      {/* Info bar */}
      <div className="relative z-50 bg-slate-950 text-slate-300">
        <div className="h-0.5 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400" />
        <div className="container-page flex h-10 items-center justify-between gap-4 text-xs">
          <p className="hidden items-center gap-2 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Convenient Walk-In Spa • No Appointments Necessary
          </p>
          <div className="flex w-full items-center justify-between gap-5 lg:w-auto lg:justify-end">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 hover:text-orange-300 sm:flex"
            >
              <LuMapPin className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
              {ADDRESS.street}, {ADDRESS.city}
            </a>
            <a href={PHONE.href} className="flex items-center gap-1.5 font-semibold text-white hover:text-orange-300">
              <LuPhone className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
              {PHONE.display}
            </a>
            <SocialLinks
              className="flex items-center gap-1"
              linkClassName="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-orange-300"
              iconClassName="h-3.5 w-3.5"
            />
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-slate-950/90 shadow-2xl shadow-orange-500/5 backdrop-blur-xl"
            : "border-white/5 bg-slate-950"
        }`}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
          >
            {/* Logo */}
            <Link href="/" className="group relative flex-shrink-0" onClick={closeMobileMenu}>
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src="/img/logo.png"
                alt="Northern Lights Tan Spa"
                width={180}
                height={60}
                quality={100}
                priority
                className={`relative w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-11" : "h-14"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center xl:flex" aria-label="Main">
              <div className="flex items-center gap-0.5">
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.name} className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((open) => !open)}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        className={`group relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 ${
                          dropdownOpen || isGroupActive(item)
                            ? "bg-orange-500/10 text-orange-300"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                        <LuChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Desktop Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 w-80 -translate-x-1/2 pt-3 transition-all duration-200 ${
                          dropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden rounded-2xl bg-slate-900/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
                          <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400" />
                          <p className="px-5 pt-4 pb-1 text-[10px] font-semibold tracking-[0.25em] text-slate-500 uppercase">
                            Wellness Services
                          </p>
                          <div className="p-2">
                            {item.subItems.map((subItem) => {
                              const Icon = subItem.icon;
                              const active = isActive(subItem.href);
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                                    active
                                      ? "bg-orange-500/10 text-white"
                                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                                  }`}
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-400/10 text-orange-300 ring-1 ring-orange-400/20 transition group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white">
                                    <Icon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`group relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 ${
                        isActive(item.href) ? "text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={`absolute right-3.5 bottom-1 left-3.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-transform duration-300 ${
                          isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  )
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/jobs"
                className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-500/40"
              >
                <LuBriefcase className="h-4 w-4" aria-hidden="true" />
                Join Our Team
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative rounded-xl p-2.5 text-slate-200 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/10 hover:text-white xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative flex h-5 w-6 flex-col items-center justify-center">
                <span
                  className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
            mobileMenuOpen ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-slate-950/98 backdrop-blur-xl">
            <nav className="container-page space-y-1 py-5" aria-label="Mobile">
              {navItems.map((item, index) => (
                <div key={item.name} className="animate-fadeIn" style={{ animationDelay: `${index * 40}ms` }}>
                  {item.subItems ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileWellnessOpen((open) => !open)}
                        aria-expanded={mobileWellnessOpen}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all duration-200 ${
                          mobileWellnessOpen || isGroupActive(item)
                            ? "bg-orange-500/10 text-orange-300"
                            : "text-slate-200 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.name}</span>
                        <LuChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${mobileWellnessOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <div
                        className={`grid transition-all duration-300 ${
                          mobileWellnessOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="mt-1 ml-4 space-y-1 border-l-2 border-orange-500/30 pl-3">
                            {item.subItems.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                                    isActive(subItem.href)
                                      ? "bg-white/5 text-white"
                                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                                  }`}
                                  onClick={closeMobileMenu}
                                >
                                  <Icon className="h-4 w-4 text-orange-400" aria-hidden="true" />
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? "bg-white/5 text-white"
                          : "text-slate-200 hover:bg-white/5 hover:text-white"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                      {isActive(item.href) && <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="mt-4 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
                <Link
                  href="/jobs"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:from-orange-600 hover:to-amber-600"
                  onClick={closeMobileMenu}
                >
                  <LuBriefcase className="h-5 w-5" aria-hidden="true" />
                  We&apos;re Hiring — Join Our Team!
                </Link>
                <a
                  href={PHONE.href}
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/5"
                >
                  <LuPhone className="h-5 w-5 text-orange-400" aria-hidden="true" />
                  {PHONE.display}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Backdrop behind the open mobile menu */}
      <div
        aria-hidden="true"
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
