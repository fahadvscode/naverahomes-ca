import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/content";
import { MEDIA } from "@/lib/media";

export function Nav() {
  return (
    <header className="border-b border-brand-deep bg-surface">
      <div className="page-wrap flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label="Navera at Mayfield Village, home" className="shrink-0">
          <Image
            src={MEDIA.naveraBlk}
            alt="Navera at Mayfield Village"
            width={649}
            height={165}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <details className="relative md:hidden">
          <summary className="list-none border border-brand-deep px-3 py-2 text-sm font-semibold text-brand-deep">
            Menu
          </summary>
          <nav aria-label="Primary" className="absolute right-0 z-30 mt-2 min-w-52 border border-brand-deep bg-surface p-4">
            <ul className="space-y-3 text-sm font-semibold">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm font-semibold text-brand-deep">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
