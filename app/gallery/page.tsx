import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PhotoFigure } from "@/components/PhotoFigure";
import { GALLERY_COPY, LOCATION_DIAGRAM, LOT_DIAGRAM, PAGES, pageMeta } from "@/lib/content";
import { AERIAL, AREA_PHOTOS, LIFESTYLE_PHOTOS, MEDIA } from "@/lib/media";
import { breadcrumbLd, imageLd, webPageLd } from "@/lib/schema";

export const metadata = pageMeta(PAGES.gallery);

const GALLERY = [AERIAL, ...AREA_PHOTOS, ...LIFESTYLE_PHOTOS];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            name: PAGES.gallery.h1,
            path: PAGES.gallery.path,
            description: PAGES.gallery.description,
          }),
          breadcrumbLd([
            { name: "Navera at Mayfield Village", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          ...GALLERY.map((photo) => imageLd({ path: photo.src, name: photo.alt, caption: photo.caption })),
          imageLd(LOT_DIAGRAM),
          imageLd(LOCATION_DIAGRAM),
        ]}
      />
      <PageHeader current="Gallery" title={PAGES.gallery.h1} lede={GALLERY_COPY} />
      <section className="section">
        <div className="page-wrap">
          <h2 className="font-display text-3xl text-brand-deep">Area illustration and photographs</h2>
          <div className="mt-10 space-y-14">
            {GALLERY.map((photo) => (
              <PhotoFigure key={photo.src} photo={photo} />
            ))}
          </div>
          <h2 className="mt-16 border-t border-border pt-10 font-display text-3xl text-brand-deep">
            Diagrams drawn for this page
          </h2>
          <p className="measure mt-4 leading-relaxed">
            The two drawings below were made for this page. One compares the approximate 38-foot and 41-foot lot
            widths. The other is a location schematic for Countryside Drive and Torbram Road. Neither is a photograph
            and neither is a builder rendering.
          </p>
          <figure className="mt-8">
            <Image
              src={LOT_DIAGRAM.path}
              alt="Diagram comparing approximate 38-foot and 41-foot lots at Navera at Mayfield Village"
              width={640}
              height={280}
              unoptimized
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-text-muted">{LOT_DIAGRAM.caption}</figcaption>
          </figure>
          <figure className="mt-10">
            <Image
              src={LOCATION_DIAGRAM.path}
              alt="Schematic of Countryside Drive and Torbram Road"
              width={640}
              height={360}
              unoptimized
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-text-muted">{LOCATION_DIAGRAM.caption}</figcaption>
          </figure>
          <figure className="mt-10 max-w-md bg-brand-deep p-6">
            <Image src={MEDIA.naveraTag} alt="Navera at Mayfield Village wordmark" width={800} height={400} className="h-auto w-full" />
            <figcaption className="mt-3 text-sm text-text-on-dark">
              Builder wordmark for Navera at Mayfield Village. It is not a photograph of a home.
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
