# Blog Visual Template MVP

Scope: single-post visual upgrade pattern proven first on
`/blog/ai-engineer-fake-job-title`. Do not batch-apply to other posts until the
MVP is reviewed.

## When To Use

- The article copy is already final and leak-scanned.
- The post has a clear thesis that can be turned into 3-5 code-native visuals.
- The target is readability and sharing quality, not a new CMS or generic blog
  redesign.

## Structure

1. Keep the existing blog route and metadata pattern.
2. Put one concept image near the top, after the title block.
3. Add a short visual thesis map before the first major section.
4. Insert one diagram at each argument turn.
5. Keep the original prose in place; diagrams clarify the argument, they do not
   rewrite the article.
6. Keep CTA, source note, and blog index wiring unchanged unless the specific
   post requires otherwise.

## Visual Rules

- Use AI image generation for at most one hero/concept illustration.
- Do not use AI-generated images for technical diagrams.
- Build diagrams in React/HTML/SVG-style primitives so labels stay accurate.
- Match the existing cikizeng.com visual language: warm background, thick
  borders, mono labels, pastel accent tones, compact rounded corners.
- Use responsive grids that collapse to one column on mobile.
- Keep images responsive and use `next/image` with explicit width, height, and
  `sizes`.

## Safety Rules

- No real customer names, real emails, or private company identifiers in images,
  diagrams, captions, alt text, filenames, or docs.
- Run the project-specific forbidden-token list from the session brief; do not
  copy private identifiers into diagrams or template docs.
- Screenshot slots must be placeholders until a sanitized screenshot is supplied.
- Run a source and rendered HTML leak scan before shipping.

## Implementation Pattern

- Keep post-specific visual components under:
  `src/app/blog/<slug>/_components/`
- Keep generated image assets under:
  `public/blog/<slug>/`
- If at least two posts use the same primitive, then consider extracting it to a
  shared `src/components/blog/` module. Do not extract during the first MVP.

## QA Gate

- `npm run build`
- Render `/blog/<slug>` locally.
- Check desktop and a mobile viewport.
- Confirm mobile horizontal overflow is `0`.
- Confirm no framework error overlay and no console errors tied to the page.
- Confirm the live article still renders the original body copy plus the new
  visual layer.
