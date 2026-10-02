"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 border-b border-gray-200/90 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 hover:text-cyan-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 rounded-md"
            aria-label="MPLutanywa Home"
            onClick={closeMenu}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-cyan-600/30">
              <Image
                src="/images/profile/profile.png"
                alt="Peter Lutanywa"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span>MPLutanywa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 ${
                    isActive
                      ? "text-cyan-800 bg-gray-200/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-gray-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 px-4 py-1.5 text-sm font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors shadow-xs shadow-cyan-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-cyan-800 bg-gray-100 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full text-center px-4 py-2 text-base font-medium rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
