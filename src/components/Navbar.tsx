"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react";

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

  const navLinks = [
    { name: "Startseite", href: "#" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Bewertungen", href: "#bewertungen" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 group">
          <div className="bg-amber-500 p-2 rounded-lg text-white group-hover:bg-amber-400 transition-colors">
            <Sun size={24} className="animate-[spin_10s_linear_infinite]" />
          </div>
          <span
            className={`font-bold text-xl tracking-tight ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            AG Solar GmbH
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-amber-500 ${
                isScrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="bg-amber-500 hover:bg-amber-400 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-amber-500/30"
          >
            Angebot anfordern
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="bg-amber-500 text-white text-center py-3 rounded-xl font-medium mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Angebot anfordern
          </Link>
        </div>
      )}
    </nav>
  );
}
