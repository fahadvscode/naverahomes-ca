import { AmpLink } from "@/components/AmpLink";
import { Blocks } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PAGES, TERMS_BLOCKS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.terms);

export default function TermsPage() {
  return (
    <>
      <AmpLink path={PAGES.terms.path} />
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.terms.h1,
            path: PAGES.terms.path,
            description: PAGES.terms.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Terms", path: "/terms" },
          ]),
        ]}
      />
      <PageHeader current="Terms" title={PAGES.terms.h1} />
      <section className="section">
        <div className="page-wrap">
          <Blocks blocks={TERMS_BLOCKS} />
        </div>
      </section>
    </>
  );
}
