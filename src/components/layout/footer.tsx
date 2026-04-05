import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground/10 py-10">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built solo with
          AI partnership.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="text-[10px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
