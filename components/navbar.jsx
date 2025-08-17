"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تغيّر خلفية الناف بار عند الاسكرول
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // قفل/فتح سكرول البودي لما المنيو مفتوحة
  useEffect(() => {
    if (isOpen) document.body.classList.add("lock-scroll");
    else document.body.classList.remove("lock-scroll");
    return () => document.body.classList.remove("lock-scroll");
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold leading-none">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              OSM
            </span>
            <span className="text-white">anix</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop socials (GitHub + LinkedIn فقط) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/mohamedOsman22-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform hover:-translate-y-0.5"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mohamed-othman22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform hover:-translate-y-0.5"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Burger */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="container mx-auto px-4 pt-20 pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Socials (بدون تويتر) */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
              <a
                href="https://github.com/mohamedOsman22-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-othman22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>

          {/* Close button (top-right) */}
          <button
            className="absolute right-4 top-4 text-gray-300 hover:text-white"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
 