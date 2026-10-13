import Link from "next/link";
import type { ReactNode } from "react";

const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const ALLOWED_HOSTS = new Set([
  "digreenhomes.com",
  "www.digreenhomes.com",
  "www.peelschools.org",
  "www.dpcdsb.org",
  "www.brampton.ca",
]);

function isAllowedExternal(href: string) {
  try {
    const url = new URL(href);
    return url.protocol === "https:" && ALLOWED_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

export function RichText({ text, className }: { text: string; className?: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const label = match[1];
    const href = match[2];
    if (href.startsWith("/")) {
      nodes.push(
        <Link key={`${href}-${index}`} href={href} className="prose-link">
          {label}
        </Link>,
      );
    } else if (isAllowedExternal(href)) {
      nodes.push(
        <a key={`${href}-${index}`} href={href} className="prose-link" rel="noopener noreferrer" target="_blank">
          {label}
        </a>,
      );
    } else {
      nodes.push(label);
    }
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <p className={className ?? "measure mt-4 leading-relaxed"}>{nodes}</p>;
}
