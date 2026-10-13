import { AmpLink } from "@/components/AmpLink";
import { Blocks } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PAGES, PRIVACY_BLOCKS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.privacy);

export default function PrivacyPage() {
  return (
    <>
      <AmpLink path={PAGES.privacy.path} />
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.privacy.h1,
            path: PAGES.privacy.path,
            description: PAGES.privacy.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Privacy", path: "/privacy" },
          ]),
        ]}
      />
      <PageHeader current="Privacy" title={PAGES.privacy.h1} />
      <section className="section">
        <div className="page-wrap">
          <Blocks blocks={PRIVACY_BLOCKS} />
          <p className="measure mt-6 leading-relaxed">
            Privacy requests:{" "}
            <a className="prose-link" href="mailto:privacy@naverahomes.ca">
              privacy@naverahomes.ca
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
