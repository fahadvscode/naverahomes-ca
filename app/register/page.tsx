import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageHeader } from "@/components/PageHeader";
import { FAQS, PAGES, PRIORITY_BENEFITS, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.register);

export default function RegisterPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.register.h1,
            path: PAGES.register.path,
            description: PAGES.register.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Register", path: "/register" },
          ]),
        ]}
      />
      <PageHeader current="Register" title={PAGES.register.h1} />
      <section className="section">
        <div className="page-wrap grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl text-brand-deep">What registration includes</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5">
              {PRIORITY_BENEFITS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="measure mt-6 leading-relaxed">{FAQS[9].a}</p>
            <p className="measure mt-4 leading-relaxed">{FAQS[10].a}</p>
          </div>
          <div className="border border-brand-deep p-5 sm:p-8">
            <LeadForm location="register" />
          </div>
        </div>
      </section>
    </>
  );
}
