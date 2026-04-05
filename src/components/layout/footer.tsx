import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground/10 py-10">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built solo with
          AI partnership.
        </p>
      </div>
    </footer>
  );
}
