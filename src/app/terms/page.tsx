import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Ciki Zeng",
  description: "Terms of service for cikizeng.com digital products.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Terms of Service</h1>
      <p className="text-xs text-muted-foreground mb-8">Last updated: April 5, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-lg mb-3">Products</h2>
          <p>
            All products sold through this site are digital downloads delivered via Gumroad.
            Products include templates, configuration files, documentation, and source code
            for AI workflow automation.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">License</h2>
          <p>
            Purchased products are licensed for personal and commercial use by the purchaser.
            You may modify the templates and code for your own projects. You may not resell,
            redistribute, or share the original files as a competing product.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">Refunds</h2>
          <p>
            Due to the digital nature of the products, all sales are final. If you experience
            a technical issue with your download, contact us and we will resolve it promptly.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">Disclaimer</h2>
          <p>
            Products are provided &ldquo;as is.&rdquo; Results depend on your implementation,
            AI tools, and use case. We do not guarantee specific outcomes.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">Contact</h2>
          <p>
            Questions? Reach out at{" "}
            <a href="mailto:hi@cikizeng.com" className="underline underline-offset-4 hover:text-[#6FC2FF] transition-colors">
              hi@cikizeng.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
