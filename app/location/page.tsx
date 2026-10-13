import Image from "next/image";
import Link from "next/link";
import { Blocks } from "@/components/Blocks";
import { DriveTimesTable } from "@/components/DriveTimesTable";
import { JsonLd } from "@/components/JsonLd";
import { LocationMap } from "@/components/LocationMap";
import { LocationSchematic } from "@/components/LocationSchematic";
import { PageHeader } from "@/components/PageHeader";
import { PhotoFigure } from "@/components/PhotoFigure";
import { FAQS, LOCATION_BLOCKS, PAGES, pageMeta } from "@/lib/content";
import { AERIAL, AREA_PHOTOS, MEDIA } from "@/lib/media";
import { breadcrumbLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.location);

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.location.h1,
            path: PAGES.location.path,
            description: PAGES.location.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Location", path: "/location" },
          ]),
        ]}
      />
      <PageHeader current="Location" title={PAGES.location.h1} lede={FAQS[2].a} />
      <section className="section">
        <div className="page-wrap">
          <Blocks
            blocks={LOCATION_BLOCKS}
            after={{
              map: (
                <>
                  <div className="mt-8 grid items-start gap-6 md:grid-cols-[8rem_1fr]">
                    <Image
                      src={MEDIA.mapPointer}
                      alt="Navera at Mayfield Village map marker"
                      width={1110}
                      height={1110}
                      className="h-auto w-32"
                    />
                    <LocationMap />
                  </div>
                  <div className="mt-8">
                    <PhotoFigure photo={AERIAL} />
                  </div>
                  <LocationSchematic title="Navera at Mayfield Village location schematic at Countryside Drive and Torbram Road" />
                </>
              ),
              "drive-times": <DriveTimesTable />,
              transit: (
                <div className="mt-8 max-w-xl">
                  <PhotoFigure photo={AREA_PHOTOS[3]} />
                </div>
              ),
              parks: (
                <div className="mt-8 grid gap-10 md:grid-cols-2">
                  <PhotoFigure photo={AREA_PHOTOS[0]} />
                  <PhotoFigure photo={AREA_PHOTOS[1]} />
                </div>
              ),
              schools: (
                <p className="measure mt-4 leading-relaxed">
                  School questions are also in the{" "}
                  <Link href="/faq#schools" className="prose-link">
                    Navera Brampton FAQ
                  </Link>
                  .
                </p>
              ),
              "same-name": (
                <div className="mt-6 border-l-4 border-brand-accent-ink pl-5">
                  <p className="measure leading-relaxed">{FAQS[12].a}</p>
                  <p className="measure mt-3 text-sm">
                    The same answer is in the{" "}
                    <Link href="/faq#regal-crest" className="prose-link">
                      Navera Brampton FAQ
                    </Link>
                    .
                  </p>
                </div>
              ),
            }}
          />
        </div>
      </section>
    </>
  );
}
