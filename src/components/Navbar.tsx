"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Startseite", href: "#" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md h-16"
          : "bg-transparent h-32 md:h-36"
      }`}
    >
      <div className="h-full container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="#" className="flex items-center py-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className={`relative transition-all duration-300 ease-out ${
              isScrolled
                ? "w-32 h-10 sm:w-44 sm:h-12"
                : "w-44 h-14 sm:w-64 sm:h-20 md:w-80 md:h-24 lg:w-96 lg:h-28 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
            }`}
          >
            <Image
              src="/logo_transparent.png"
              alt="AG Solar GmbH Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-green-500 ${
                isScrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-green-600/30"
          >
            Angebot anfordern
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-slate-900 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menü öffnen"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer (slides in from right) */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-[100dvh] w-[82%] max-w-sm bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Hauptmenü"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="relative w-36 h-10">
            <Image
              src="/logo_transparent.png"
              alt="AG Solar GmbH Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            className="p-2 -mr-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-800 text-lg font-medium py-3 px-3 rounded-xl hover:bg-slate-50 hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="px-5 pb-8 pt-4 border-t border-slate-100 flex flex-col gap-3">
          <Link
            href="#kontakt"
            className="bg-green-600 text-white text-center py-3.5 rounded-full font-semibold shadow-lg shadow-green-600/30 hover:bg-green-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Angebot anfordern
          </Link>
          <a
            href="tel:+4926419029358"
            className="flex items-center justify-center gap-2 text-slate-700 font-medium py-2 hover:text-green-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone size={18} />
            02641 / 90 29 358
          </a>
        </div>
      </aside>
    </nav>
  );
}
