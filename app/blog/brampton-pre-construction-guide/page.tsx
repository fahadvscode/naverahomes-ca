import { Blocks } from "@/components/Blocks";
import { JsonLd } from "@/components/JsonLd";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { PageHeader } from "@/components/PageHeader";
import { BLOG_BLOCKS, BLOG_LEDE, PAGES, SIGNING_QUESTIONS, pageMeta } from "@/lib/content";
import { articleLd, breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.blog);

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.blog.h1,
            path: PAGES.blog.path,
            description: PAGES.blog.description,
          }),
          articleLd,
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Pre-construction homes in Brampton", path: PAGES.blog.path },
          ]),
        ]}
      />
      <PageHeader current="Buyer's guide" title={PAGES.blog.h1} lede={BLOG_LEDE} />
      <article className="section">
        <div className="page-wrap">
          <Blocks
            blocks={BLOG_BLOCKS}
            after={{
              "lot-widths": (
                <LotWidthDiagram title="Pre-construction homes in Brampton include 38-foot and 41-foot lots at Navera at Mayfield Village" />
              ),
              questions: (
                <ol className="measure mt-4 list-decimal space-y-2 pl-5">
                  {SIGNING_QUESTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              ),
            }}
          />
        </div>
      </article>
    </>
  );
}
