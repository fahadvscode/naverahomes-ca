import Link from "next/link";
import { DISPLAY_DATE, NAV } from "@/lib/content";
import { IndependenceDisclaimer, SpecDisclaimer } from "./Disclaimer";
import { FooterFormGate } from "./FooterFormGate";
import { LeadForm } from "./LeadForm";

const MORE = [
  { href: "/blog/brampton-pre-construction-guide", label: "Pre-construction guide" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-deep bg-brand-deep text-text-on-dark">
      <div className="page-wrap section">
        <FooterFormGate>
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl text-surface md:text-4xl">Register for Priority Access</h2>
              <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-text-on-dark">
                Free registration for floor plans, pricing, and release updates. It does not reserve a home or a price.
              </p>
            </div>
            <div className="bg-surface p-5 text-text-primary sm:p-7">
              <LeadForm location="footer" />
            </div>
          </div>
        </FooterFormGate>
        <nav aria-label="Footer" className="mt-14">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-text-on-dark/50 underline-offset-4">
                  {item.href === "/" ? "Navera at Mayfield Village" : item.label}
                </Link>
              </li>
            ))}
            {MORE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-text-on-dark/50 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-sm font-semibold">Last updated: {DISPLAY_DATE}</p>
        <div className="mt-4 max-w-3xl space-y-3 text-text-on-dark">
          <IndependenceDisclaimer />
          <SpecDisclaimer />
        </div>
      </div>
    </footer>
  );
}
