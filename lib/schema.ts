import { FAQS, LAST_UPDATED, SITE_URL, type Faq } from "./content";

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  inLanguage: "en-CA",
  name: "Navera at Mayfield Village, Brampton",
  description:
    "Independent information and registration website for Navera at Mayfield Village by Digreen Homes at Countryside Drive and Torbram Road, Brampton, Ontario.",
  publisher: { "@id": `${SITE_URL}/#org` },
  dateModified: LAST_UPDATED,
};

export const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: "Navera at Mayfield Village VIP Registration",
  url: SITE_URL,
  description:
    "Independent information and registration resource for Navera at Mayfield Village. Not affiliated with or endorsed by the builder.",
  dateModified: LAST_UPDATED,
};

export const projectLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  additionalType: "https://schema.org/Residence",
  "@id": `${SITE_URL}/#project`,
  url: SITE_URL,
  name: "Navera at Mayfield Village",
  description:
    "Navera at Mayfield Village is a pre-construction community of detached homes by Digreen Homes at Countryside Drive and Torbram Road in northeast Brampton, Ontario, offering 38-foot and 41-foot series lots.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Countryside Drive & Torbram Road",
    addressLocality: "Brampton",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  containedInPlace: {
    "@type": "Place",
    name: "Mayfield Village master-planned community, Brampton",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Developer", value: "Digreen Homes" },
    { "@type": "PropertyValue", name: "Series", value: "38 and 41 Series detached homes" },
    { "@type": "PropertyValue", name: "Postal reference", value: "L6R 0L5" },
    {
      "@type": "PropertyValue",
      name: "Status",
      value: "Coming this fall; Priority Access registration open",
    },
    { "@type": "PropertyValue", name: "Starting price", value: "From 999999 CAD per builder" },
  ],
  dateModified: LAST_UPDATED,
};

export const developerLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#developer`,
  name: "Digreen Homes",
  alternateName: "DiGreen Homes",
  url: "https://digreenhomes.com",
  description: "Markham-based home builder and developer of Navera at Mayfield Village.",
  dateModified: LAST_UPDATED,
};

export const offerLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Navera at Mayfield Village detached homes — starting price per builder",
  url: `${SITE_URL}/pricing`,
  priceSpecification: {
    "@type": "PriceSpecification",
    minPrice: 999999,
    priceCurrency: "CAD",
  },
  description:
    "Starting price published by the builder as of October 5, 2026; subject to change without notice.",
  availability: "https://schema.org/PreOrder",
  seller: { "@id": `${SITE_URL}/#developer` },
  dateModified: LAST_UPDATED,
};

export const faqLd = (items: Faq[] = FAQS) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: LAST_UPDATED,
  mainEntity: items.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export const breadcrumbLd = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
  })),
});

export const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pre-Construction Homes in Brampton: A 2026 Buyer's Guide",
  datePublished: "2026-10-05",
  dateModified: LAST_UPDATED,
  author: { "@id": `${SITE_URL}/#org` },
  publisher: { "@id": `${SITE_URL}/#org` },
  mainEntityOfPage: `${SITE_URL}/blog/brampton-pre-construction-guide`,
  description:
    "Navera at Mayfield Village and pre-construction detached homes in Brampton, Ontario: Digreen Homes 38 and 41 Series at Countryside Drive and Torbram Road.",
};

export function webPageLd(opts: { name: string; path: string; description: string }) {
  const url = opts.path === "/" ? SITE_URL : `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#project` },
    dateModified: LAST_UPDATED,
    inLanguage: "en-CA",
  };
}

export function imageLd(opts: { path: string; name: string; caption: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${opts.path}`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    caption: opts.caption,
    description: opts.caption,
    dateModified: LAST_UPDATED,
  };
}
