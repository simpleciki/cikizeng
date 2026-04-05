import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground/10 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-bold tracking-tight uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-foreground/10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built solo with
            AI partnership.
          </p>
        </div>
      </div>
    </footer>
  );
}
