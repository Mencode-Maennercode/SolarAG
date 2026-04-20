"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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

  const navLinks = [
    { name: "Startseite", href: "#" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="h-full container mx-auto px-6 flex justify-between items-center">
        <Link href="#" className="self-stretch flex items-center">
          <div className="relative w-56 h-full overflow-hidden">
            <Image
              src="/logo_transparent.png"
              alt="AG Solar GmbH Logo"
              fill
              className="object-contain scale-[1.2]"
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
              className="text-slate-700 font-medium py-2 hover:text-green-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="bg-green-600 text-white text-center py-3 rounded-xl font-medium mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Angebot anfordern
          </Link>
        </div>
      )}
    </nav>
  );
}
