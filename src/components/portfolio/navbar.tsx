"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-colors ${
        scrolled ? "border-neutral-200" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
        {/* Left — monospaced logo */}
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-neutral-900"
        >
          ziyad.dev
        </a>

        {/* Center — desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — resume button + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-md border border-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white md:inline-flex"
          >
            <FileText strokeWidth={1.5} className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 md:hidden"
          >
            {open ? (
              <X strokeWidth={1.5} className="h-4 w-4" />
            ) : (
              <Menu strokeWidth={1.5} className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-neutral-100 py-3 text-sm text-neutral-700 last:border-b-0"
                >
                  {link.label}
                  <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-md border border-neutral-900 px-3 py-2 text-xs font-medium text-neutral-900"
              >
                <FileText strokeWidth={1.5} className="h-3.5 w-3.5" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
