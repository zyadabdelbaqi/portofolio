"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText, Linkedin, Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

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
      className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-colors ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
        {/* Left — logo with brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-foreground"
            aria-hidden="true"
          >
            <circle
              cx="256"
              cy="256"
              r="232"
              stroke="currentColor"
              strokeWidth="26"
              fill="none"
            />
            <path
              d="M136 131 H376 V191 L224 321 H376 V381 H136 V321 L288 191 H136 Z"
              fill="currentColor"
            />
          </svg>
          <span>ziadabdelbaqi.dev</span>
        </a>

        {/* Center — desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — resume button + social + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/zyadabdelbaqi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden items-center justify-center rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground md:inline-flex"
          >
            <Github strokeWidth={1.5} className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ziadabdelbaqi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden items-center justify-center rounded-md border border-border p-1.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground md:inline-flex"
          >
            <Linkedin strokeWidth={1.5} className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-foreground bg-transparent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            <FileText strokeWidth={1.5} className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-foreground md:hidden"
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
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-3 text-sm text-foreground last:border-b-0"
                >
                  {link.label}
                  <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-2 py-3">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-md border border-foreground px-3 py-2 text-xs font-medium text-foreground"
              >
                <FileText strokeWidth={1.5} className="h-3.5 w-3.5" />
                Resume
              </a>
              <a
                href="https://github.com/zyadabdelbaqi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground"
              >
                <Github strokeWidth={1.5} className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ziadabdelbaqi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground"
              >
                <Linkedin strokeWidth={1.5} className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
