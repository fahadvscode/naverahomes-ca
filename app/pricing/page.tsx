import Link from "next/link";
import { AmpLink } from "@/components/AmpLink";
import { Blocks } from "@/components/Blocks";
import { SpecDisclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { DepositTable, PricingTable } from "@/components/PricingTable";
import {
  FAQS,
  INVESTMENT_FACTORS,
  INVESTMENT_RISKS,
  ONTARIO_COSTS,
  PAGES,
  PRICING_BLOCKS,
  pageMeta,
} from "@/lib/content";
import { breadcrumbLd, offerLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.pricing);

export default function PricingPage() {
  return (
    <>
      <AmpLink path={PAGES.pricing.path} />
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.pricing.h1,
            path: PAGES.pricing.path,
            description: PAGES.pricing.description,
          }),
          offerLd,
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <PageHeader
        current="Pricing"
        title={PAGES.pricing.h1}
        lede={
          <>
            <p>{FAQS[3].a}</p>
            <p className="mt-4 text-sm text-text-muted">
              Prices, sizes, specifications, and availability are subject to change without notice. Lot specifications
              are approximate and certain lots and configurations may be subject to premiums. E.&O.E. Information
              current as of October 5, 2026.
            </p>
          </>
        }
      />
      <section className="section">
        <div className="page-wrap">
          <Blocks
            blocks={PRICING_BLOCKS}
            after={{
              "starting-price": <PricingTable />,
              deposit: (
                <>
                  <p className="measure mt-4 leading-relaxed">{FAQS[6].a}</p>
                  <DepositTable />
                  <p className="measure mt-4 leading-relaxed">
                    The deposit questions are also answered in the{" "}
                    <Link href="/faq#deposit" className="prose-link">
                      Navera Brampton FAQ
                    </Link>
                    .
                  </p>
                </>
              ),
              incentives: <SpecDisclaimer className="mt-4 text-text-muted" />,
              "other-costs": (
                <>
                  <ul className="measure mt-4 list-disc space-y-2 pl-5">
                    {ONTARIO_COSTS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <SpecDisclaimer className="mt-4 text-text-muted" />
                </>
              ),
              investment: (
                <>
                  <p className="measure mt-4 leading-relaxed">{FAQS[11].a}</p>
                  <div className="mt-8 grid gap-10 md:grid-cols-2">
                    <div>
                      <h3 className="font-display text-2xl text-brand-deep">Factors buyers weigh</h3>
                      <ul className="mt-4 list-disc space-y-2 pl-5">
                        {INVESTMENT_FACTORS.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-brand-deep">Risks to weigh</h3>
                      <ul className="mt-4 list-disc space-y-2 pl-5">
                        {INVESTMENT_RISKS.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <SpecDisclaimer className="mt-4 text-text-muted" />
                </>
              ),
            }}
          />
        </div>
      </section>
    </>
  );
}
