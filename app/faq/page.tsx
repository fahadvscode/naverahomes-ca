import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { DISPLAY_DATE, FAQS, PAGES, pageMeta } from "@/lib/content";
import { breadcrumbLd, faqLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.faq);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ name: PAGES.faq.h1, path: PAGES.faq.path, description: PAGES.faq.description }),
          faqLd(FAQS),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHeader
        current="FAQ"
        title={PAGES.faq.h1}
        lede={
          <>
            <p>
              Last updated {DISPLAY_DATE}. These answers cover builder, price, lot sizes, launch, deposit, schools,
              and VIP access for Navera at Mayfield Village. Each one states what is known and what is still to be
              announced. Deposit details link with the{" "}
              <Link href="/pricing#deposit" className="prose-link">
                Navera Brampton prices
              </Link>{" "}
              page. School and Regal Crest questions link with the{" "}
              <Link href="/location#schools" className="prose-link">
                Navera at Mayfield Village location
              </Link>{" "}
              page.
            </p>
          </>
        }
      />
      <section className="section">
        <div className="page-wrap">
          <FaqList items={FAQS} heading="h2" />
        </div>
      </section>
    </>
  );
}
