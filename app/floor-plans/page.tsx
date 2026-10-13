import { AmpLink } from "@/components/AmpLink";
import { Blocks } from "@/components/Blocks";
import { FloorPlanView } from "@/components/FloorPlanView";
import { JsonLd } from "@/components/JsonLd";
import { LotWidthDiagram } from "@/components/LotWidthDiagram";
import { PageHeader } from "@/components/PageHeader";
import { SeriesTable } from "@/components/SeriesTable";
import { COMPARE_WHEN_RELEASED, FLOOR_PLAN_BLOCKS, FLOOR_PLAN_LEDE, PAGES, SERIES, pageMeta } from "@/lib/content";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.floorPlans);

export default function FloorPlansPage() {
  return (
    <>
      <AmpLink path={PAGES.floorPlans.path} />
      <FloorPlanView />
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.floorPlans.h1,
            path: PAGES.floorPlans.path,
            description: PAGES.floorPlans.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Floor plans", path: "/floor-plans" },
          ]),
        ]}
      />
      <PageHeader current="Floor plans" title={PAGES.floorPlans.h1} lede={FLOOR_PLAN_LEDE} />
      <section className="section">
        <div className="page-wrap">
          <Blocks
            blocks={FLOOR_PLAN_BLOCKS}
            after={{
              series: (
                <LotWidthDiagram title="Navera Brampton floor plans depend on 38-foot and 41-foot lot widths that are not yet drawn" />
              ),
              collection: (
                <div className="mt-8 grid gap-12 md:grid-cols-2">
                  {SERIES.map((series) => (
                    <SeriesTable key={series.name} name={series.name} rows={series.rows} />
                  ))}
                </div>
              ),
              compare: (
                <ul className="measure mt-4 list-disc space-y-2 pl-5">
                  {COMPARE_WHEN_RELEASED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            }}
          />
        </div>
      </section>
    </>
  );
}
