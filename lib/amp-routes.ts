import { PAGES, SITE_URL, type PageDef } from "./content";

export const AMP_PAGES: readonly PageDef[] = [
  PAGES.home,
  PAGES.floorPlans,
  PAGES.pricing,
  PAGES.location,
  PAGES.gallery,
  PAGES.faq,
  PAGES.register,
  PAGES.privacy,
  PAGES.terms,
  PAGES.blog,
];

export function canonicalUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function ampPath(path: string) {
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const bare = hashAt >= 0 ? path.slice(0, hashAt) : path;
  return `${bare === "/" ? "/amp" : `/amp${bare}`}${hash}`;
}

export function ampUrl(path: string) {
  return `${SITE_URL}${ampPath(path)}`;
}
