import type { Metadata } from "next";
import Link from "next/link";
import { ThankYouEvent } from "@/components/ThankYouEvent";
import { PAGES, pageMeta } from "@/lib/content";

export const metadata: Metadata = {
  ...pageMeta(PAGES.thankYou),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouEvent />
      <section className="section">
        <div className="page-wrap">
          <h1 className="max-w-[16ch] font-display text-4xl text-brand-deep md:text-6xl">{PAGES.thankYou.h1}</h1>
          <p className="measure mt-6 text-lg leading-relaxed">
            The VIP Registration Team will send floor plans, pricing, and release information as the builder publishes
            it. Check your inbox and spam folder. This registration does not reserve a home or price.
          </p>
          <p className="mt-8">
            <Link href="/" className="prose-link">
              Navera at Mayfield Village
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
