import { ampUrl } from "@/lib/amp-routes";

export function AmpLink({ path }: { path: string }) {
  return <link rel="amphtml" href={ampUrl(path)} />;
}
