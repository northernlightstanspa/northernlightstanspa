"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
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
      { name: "SST Red Light Therapy", href: "/sst-red-light-therapy" },
      { name: "Halotherapy Sauna", href: "/halotherapy-sauna" },
      { name: "Poly Red Light Therapy", href: "/red-light-therapy" },
      { name: "Wellfit Skin Care Treatments", href: "/wellfit" },
      { name: "BleachBright Teeth Whitening", href: "/bleachbright" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/98 backdrop-blur-xl shadow-2xl shadow-orange-500/5" 
          : "bg-gradient-to-b from-slate-950 to-slate-950/95 backdrop-blur-md"
      }`}
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25 py-3">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 group relative" 
            onClick={closeMobileMenu}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
            <Image
              src="/img/logo.png"
              alt="Northern Lights Tan Spa"
              width={180}
              height={60}
              quality={100}
              className="h-15 w-auto object-contain relative"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                item.subItems ? (
                  <div key={item.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className={`group flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 rounded-lg ${
                        activeDropdown === item.name
                          ? "text-orange-400 bg-orange-500/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 transition-all duration-200 ${
                        activeDropdown === item.name 
                          ? "opacity-100 visible translate-y-0" 
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="bg-slate-900/98 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-400" />
                        <div className="p-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-transparent rounded-lg transition-all duration-200 group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition-colors" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-3 py-2 text-[13px] font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/5 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                  </Link>
                )
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              href="/jobs"
              className="ml-4 px-5 py-2.5 text-[13px] font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
            >
              Join Our Team
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden relative p-2.5 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <span 
                className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 absolute ${
                  mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 absolute ${
                  mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-950/98 backdrop-blur-xl border-t border-slate-800/50">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={(e) => toggleDropdown(item.name, e)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-medium rounded-xl transition-all duration-200 ${
                        activeDropdown === item.name 
                          ? "text-orange-400 bg-orange-500/10" 
                          : "text-gray-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-orange-500/30 pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                            onClick={closeMobileMenu}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3.5 text-[15px] font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-slate-800/50">
              <Link
                href="/jobs"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                We&apos;re Hiring — Join Our Team!
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
