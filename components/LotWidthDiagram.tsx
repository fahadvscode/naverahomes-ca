export function LotWidthDiagram({ title }: { title: string }) {
  const titleId = `${title.replace(/\s+/g, "-").slice(0, 24)}-title`;
  const descId = `${titleId}-desc`;
  return (
    <figure className="mt-8 border-t border-border pt-6">
      <svg viewBox="0 0 640 280" role="img" aria-labelledby={titleId} className="h-auto w-full">
        <title id={titleId}>{title}</title>
        <desc id={descId}>
          Two rectangles. The left lot is marked approximately 38 feet wide. The right lot is marked approximately 41
          feet wide, three feet wider. This is a schematic, not a floor plan.
        </desc>
        <rect width="640" height="280" fill="#FAF7F0" />
        <rect x="36" y="48" width="228" height="150" fill="none" stroke="#1D2F25" strokeWidth="2" />
        <rect x="320" y="48" width="246" height="150" fill="none" stroke="#2F4A3A" strokeWidth="2" />
        <text x="150" y="132" textAnchor="middle" fill="#1D2F25" fontSize="20" fontFamily="Georgia, serif">
          38 ft
        </text>
        <text x="443" y="132" textAnchor="middle" fill="#1D2F25" fontSize="20" fontFamily="Georgia, serif">
          41 ft
        </text>
        <text x="36" y="236" fill="#4E5852" fontSize="15" fontFamily="Georgia, serif">
          Approximate widths only. Plans are to be announced.
        </text>
        <text x="430" y="236" fill="#8F5B38" fontSize="15" fontFamily="Georgia, serif">
          About 3 ft wider
        </text>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">
        The 41-foot series is about three feet wider than the 38-foot series. Floor plans for Navera at Mayfield
        Village have not been released.
      </figcaption>
    </figure>
  );
}
