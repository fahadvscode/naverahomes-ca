import Image from "next/image";
import Link from "next/link";
import { AmpLink } from "@/components/AmpLink";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/RichText";
import { SpecDisclaimer } from "@/components/Disclaimer";
import {
  BUILDER_COPY,
  CONFIRMED,
  FAQS,
  HOME_ABOUT,
  HOME_FAQ_IDS,
  LOT_WIDTH_COPY,
  NEIGHBOURHOOD,
  PAGES,
  PRIORITY_BENEFITS,
  QUICK_FACTS,
  TO_BE_ANNOUNCED,
  WHY_REGISTER_NOTE,
  faqsById,
  pageMeta,
} from "@/lib/content";
import { AREA_ICON_LINKS, MEDIA } from "@/lib/media";
import { faqLd, offerLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.home);

export default function HomePage() {
  const homeFaqs = faqsById(HOME_FAQ_IDS);
  return (
    <>
      <AmpLink path={PAGES.home.path} />
      <JsonLd data={[offerLd, faqLd(homeFaqs)]} />
      <Hero />
      <section className="section">
        <div className="page-wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-lg leading-relaxed">{FAQS[0].a}</p>
            <p className="mt-5 leading-relaxed">
              Use the links below to go straight to{" "}
              <Link href="/floor-plans" className="prose-link">
                Navera floor plans
              </Link>
              ,{" "}
              <Link href="/pricing" className="prose-link">
                Navera Brampton prices
              </Link>
              , the{" "}
              <Link href="/location" className="prose-link">
                Navera at Mayfield Village location
              </Link>
              , the{" "}
              <Link href="/faq" className="prose-link">
                Navera Brampton FAQ
              </Link>
              , or a longer look at{" "}
              <Link href="/blog/brampton-pre-construction-guide" className="prose-link">
                pre-construction homes in Brampton
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-brand-deep">What is confirmed vs. still to be announced</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Confirmed rows come from Digreen Homes&apos; Navera information. Open items stay labelled until the
              builder publishes them.
            </p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg text-brand-primary">Confirmed</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {CONFIRMED.map((item) => (
                    <li key={item} className="border-t border-border pt-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-brand-primary">To be announced</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {TO_BE_ANNOUNCED.map((item) => (
                    <li key={item} className="border-t border-border pt-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SpecDisclaimer className="mt-5 text-text-muted" />
          </div>
        </div>
      </section>
      <section id="quick-facts" className="border-y border-border bg-surface-alt">
        <div className="page-wrap section">
          <h2 className="font-display text-3xl text-brand-deep md:text-4xl">Quick facts</h2>
          <table className="ledger mt-8">
            <caption className="sr-only">Quick facts for Navera at Mayfield Village</caption>
            <tbody>
              {QUICK_FACTS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <SpecDisclaimer className="mt-4 text-text-muted" />
        </div>
      </section>
      <Reveal>
        <section className="section">
          <div className="page-wrap">
            <h2 className="max-w-[18ch] font-display text-3xl text-brand-deep md:text-4xl">
              38-foot vs 41-foot lots: what the difference means
            </h2>
            <p className="measure mt-5 leading-relaxed">{LOT_WIDTH_COPY}</p>
            <LotWidthDiagram title="Navera at Mayfield Village 38-foot and 41-foot lot width diagram" />
            <SpecDisclaimer className="mt-4 text-text-muted" />
          </div>
        </section>
      </Reveal>
      <section className="border-y border-border">
        <div className="page-wrap section">
          <h2 className="font-display text-3xl text-brand-deep md:text-4xl">About Navera at Mayfield Village</h2>
          {HOME_ABOUT.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="measure mt-5 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-deep md:text-4xl">Neighbourhood at a glance</h2>
          <p className="measure mt-4 leading-relaxed">
            Drive times, schools, and the Regal Crest distinction are on the{" "}
            <Link href="/location" className="prose-link">
              Navera at Mayfield Village location
            </Link>{" "}
            page.
          </p>
          <ul className="mt-8">
            {NEIGHBOURHOOD.map((item) => (
              <li key={item.title} className="grid gap-4 border-t border-border py-6 sm:grid-cols-[5.5rem_1fr]">
                <div className="flex gap-2">
                  {item.icons.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={item.darkIcon ? 416 : 134}
                      height={item.darkIcon ? 104 : 134}
                      className={
                        item.darkIcon ? "h-14 w-14 bg-brand-deep object-cover" : "h-14 w-14 object-contain"
                      }
                    />
                  ))}
                </div>
                <div>
                  <h3 className="text-xl text-brand-primary">{item.title}</h3>
                  <p className="mt-2 max-w-[68ch] text-sm leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-4 border-t border-brand-deep pt-6">
            {AREA_ICON_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center gap-3 text-sm font-semibold text-brand-deep">
                  <Image src={item.src} alt="" width={416} height={104} className="h-10 w-10 object-cover" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-y border-border">
        <Image src={MEDIA.pattern} alt="" width={2879} height={923} className="h-16 w-full object-cover" />
        <div className="page-wrap section">
          <h2 className="font-display text-3xl text-brand-deep md:text-4xl">About the builder</h2>
          <div className="mt-8 flex flex-wrap items-end gap-8">
            <Image
              src={MEDIA.digreenColour}
              alt="Digreen Homes"
              width={896}
              height={331}
              className="h-auto max-h-14 w-auto"
            />
            <Image src={MEDIA.digreenStacked} alt="" width={236} height={261} className="h-16 w-auto" />
            <span className="inline-flex bg-brand-deep p-2">
              <Image src={MEDIA.digreenMark} alt="" width={48} height={52} className="h-12 w-auto" />
            </span>
          </div>
          <p className="mt-4 text-sm text-text-muted">Digreen Homes marks, shown to identify the builder.</p>
          <RichText text={BUILDER_COPY} />
        </div>
      </section>
      <section className="section">
        <div className="page-wrap grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-brand-deep md:text-4xl">Why people register early</h2>
            <p className="mt-4 leading-relaxed">
              Digreen Homes describes these Priority Access benefits for Navera at Mayfield Village. They are
              information benefits, not a discount and not a hold.
            </p>
            <ol className="mt-6 list-decimal space-y-3 pl-5">
              {PRIORITY_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="mt-6 font-semibold leading-relaxed">{WHY_REGISTER_NOTE}</p>
          </div>
          <div className="border border-brand-deep bg-surface p-5 sm:p-7">
            <LeadForm location="mid-page" />
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-surface-alt">
        <div className="page-wrap section">
          <h2 className="font-display text-3xl text-brand-deep md:text-4xl">Frequently asked questions</h2>
          <p className="measure mt-4 leading-relaxed">
            The full set of 20 is on the{" "}
            <Link href="/faq" className="prose-link">
              Navera Brampton FAQ
            </Link>
            .
          </p>
          <FaqList items={homeFaqs} heading="h3" />
        </div>
      </section>
    </>
  );
}
