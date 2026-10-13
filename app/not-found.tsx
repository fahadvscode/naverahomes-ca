import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="page-wrap">
        <h1 className="max-w-[16ch] font-display text-4xl text-brand-deep md:text-5xl">Page not found</h1>
        <p className="measure mt-5 leading-relaxed">
          This address is not part of the Navera at Mayfield Village information site.
        </p>
        <p className="mt-6">
          <Link href="/" className="prose-link">
            Navera at Mayfield Village
          </Link>
        </p>
      </div>
    </section>
  );
}
