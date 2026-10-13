import type { Faq } from "@/lib/content";

export function FaqList({ items, heading = "h2" }: { items: Faq[]; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <div className="mt-8 border-t border-brand-deep">
      {items.map((faq) => (
        <details key={faq.id} id={faq.id} className="scroll-mt-24 border-b border-border py-5" open>
          <summary className="flex items-start justify-between gap-6">
            <Heading className="font-display text-xl text-brand-deep md:text-2xl">{faq.q}</Heading>
            <span aria-hidden="true" className="mt-1 text-brand-accent-ink">
              –
            </span>
          </summary>
          <p className="measure mt-4 leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
