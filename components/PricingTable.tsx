import { DISPLAY_DATE } from "@/lib/content";
import { SpecDisclaimer } from "./Disclaimer";

const ROWS = [
  ["Starting price", "From $999,999"],
  ["Source", "Builder's Navera information page"],
  ["As of", DISPLAY_DATE],
  ["Applies to", "To be announced (series and lot not specified)"],
];

export function PricingTable() {
  return (
    <div className="mt-8">
      <table className="ledger">
        <caption className="sr-only">Confirmed starting price for Navera at Mayfield Village</caption>
        <tbody>
          {ROWS.map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SpecDisclaimer className="mt-4 text-text-muted" />
    </div>
  );
}

export function DepositTable() {
  const rows = [
    ["Deposit schedule", "To be announced"],
    ["Amounts", "To be announced"],
    ["Timing", "To be announced"],
  ];
  return (
    <div className="mt-8">
      <table className="ledger">
        <caption className="sr-only">Deposit structure status for Navera at Mayfield Village</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SpecDisclaimer className="mt-4 text-text-muted" />
    </div>
  );
}
