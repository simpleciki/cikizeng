"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: '#F4EFEA', borderBottom: '2px solid #383838' }}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-bold tracking-tight uppercase">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#6FC2FF]",
                pathname === link.href
                  ? "text-[#2D2D2D] underline underline-offset-4 decoration-2"
                  : "text-[#2D2D2D]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-[#383838] px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
            style={{ backgroundColor: '#6FC2FF' }}
          >
            Get Started
          </a>
        </nav>

        <button
          className="sm:hidden p-2 text-[#2D2D2D]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="px-6 py-3 sm:hidden" style={{ borderTop: '2px solid #383838' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block py-2 text-sm font-semibold uppercase tracking-wider",
                pathname === link.href ? "text-[#2D2D2D] underline underline-offset-4" : "text-[#2D2D2D]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
