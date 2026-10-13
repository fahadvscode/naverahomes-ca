export function LocationSchematic({ title }: { title: string }) {
  return (
    <figure className="mt-8 border-t border-border pt-6">
      <svg viewBox="0 0 640 360" role="img" aria-label={title} className="h-auto w-full">
        <title>{title}</title>
        <desc>
          A schematic, not to scale, with Countryside Drive running east-west and Torbram Road running north-south. A
          marker sits northwest of the intersection for Navera at Mayfield Village. Highway 410 is labelled to the west
          and Bramalea GO farther south.
        </desc>
        <rect width="640" height="360" fill="#FAF7F0" />
        <line x1="40" y1="150" x2="600" y2="150" stroke="#1D2F25" strokeWidth="6" />
        <line x1="360" y1="30" x2="360" y2="330" stroke="#2F4A3A" strokeWidth="6" />
        <circle cx="300" cy="110" r="8" fill="#8F5B38" />
        <text x="48" y="138" fill="#1D2F25" fontSize="16" fontFamily="Georgia, serif">
          Countryside Drive
        </text>
        <text x="372" y="58" fill="#1D2F25" fontSize="16" fontFamily="Georgia, serif">
          Torbram Road
        </text>
        <text x="220" y="96" fill="#8F5B38" fontSize="14" fontFamily="Georgia, serif">
          Navera
        </text>
        <text x="48" y="250" fill="#4E5852" fontSize="15" fontFamily="Georgia, serif">
          Highway 410 — about 7 min
        </text>
        <text x="48" y="278" fill="#4E5852" fontSize="15" fontFamily="Georgia, serif">
          Bramalea GO — about 20 min
        </text>
        <text x="48" y="320" fill="#4E5852" fontSize="14" fontFamily="Georgia, serif">
          Schematic only. Not a site plan.
        </text>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
        General area only. The exact homesites and any sales-centre address are to be announced.
      </figcaption>
    </figure>
  );
}
