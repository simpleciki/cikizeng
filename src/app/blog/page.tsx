import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/animate-in";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Day-by-day development diary: building SaaS products solo with AI. Real decisions, real mistakes, real lessons.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <AnimateIn>
        <div className="mb-16">
          <span className="inline-block accent-pill rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase mb-4">
            Blog
          </span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Day N
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            A development diary — building SaaS products solo with AI. Real
            decisions, real mistakes, real lessons.
          </p>
        </div>
      </AnimateIn>

      <div className="space-y-6">
        {blogPosts.map((post, i) => (
          <AnimateIn key={post.slug} delay={i * 80}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <article className="card-bordered p-6 sm:p-8 transition-colors group-hover:bg-[#F4EFEA]/50">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {post.date}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    &middot; {post.readTime} read
                  </span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="label-tag text-[10px] px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-bold tracking-tight sm:text-xl mb-2">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
