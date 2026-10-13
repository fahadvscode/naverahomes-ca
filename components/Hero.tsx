import Image from "next/image";
import { PAGES } from "@/lib/content";
import { LIFESTYLE_PHOTOS } from "@/lib/media";
import { LeadForm } from "./LeadForm";

const family = LIFESTYLE_PHOTOS[0];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="page-wrap grid items-start gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:gap-16 lg:py-16">
        <figure className="order-2 lg:order-1">
          <Image
            src={family.src}
            alt={family.alt}
            width={family.width}
            height={family.height}
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">{family.caption}</figcaption>
        </figure>
        <div className="order-1 lg:order-2">
          <h1 className="font-display text-[2.4rem] leading-[1.05] text-brand-deep sm:text-5xl lg:text-[3.35rem]">
            {PAGES.home.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed">
            Coming this fall from Digreen Homes, at Countryside Drive and Torbram Road in northeast Brampton.
            Priority Access registration is free and does not reserve a home or a price.
          </p>
          <div className="mt-8 border-t border-brand-deep pt-6">
            <LeadForm location="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
