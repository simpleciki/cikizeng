import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ciki Zeng",
  description: "Privacy policy for cikizeng.com",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <p className="text-xs text-muted-foreground mb-8">Last updated: April 5, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-lg mb-3">What We Collect</h2>
          <p>
            This site is a static portfolio and product showcase. We do not collect personal
            information, use cookies for tracking, or store any user data on our servers.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">Analytics</h2>
          <p>
            We may use privacy-friendly, first-party analytics (Vercel Web Analytics) to
            understand aggregate page views. No personally identifiable information is collected
            or shared with third parties.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">Third-Party Services</h2>
          <p>
            Product purchases are processed through Gumroad. When you make a purchase, you are
            subject to Gumroad&apos;s privacy policy. We do not have access to your payment
            details.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-3">Contact</h2>
          <p>
            Questions about this policy? Reach out at{" "}
            <a href="mailto:hi@cikizeng.com" className="underline underline-offset-4 hover:text-[#6FC2FF] transition-colors">
              hi@cikizeng.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
