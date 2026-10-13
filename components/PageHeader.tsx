import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHeader({
  current,
  title,
  lede,
}: {
  current: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div className="page-wrap py-12 md:py-16">
        <Breadcrumbs current={current} />
        <h1 className="mt-8 max-w-[20ch] font-display text-4xl text-brand-deep md:text-6xl">{title}</h1>
        {lede ? <div className="measure mt-6 text-lg leading-relaxed">{lede}</div> : null}
      </div>
    </header>
  );
}
