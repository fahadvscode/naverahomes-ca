"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, CONSENT_KEY } from "@/lib/consent";
import { captureUtm } from "@/lib/utm";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    captureUtm();
    try {
      setVisible(localStorage.getItem(CONSENT_KEY) === null);
    } catch {
      setVisible(false);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-deep bg-surface">
      <div className="page-wrap flex flex-wrap items-center justify-between gap-3 py-2.5">
        <p className="text-xs leading-snug text-text-primary">Analytics stay off until you allow them.</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-brand-deep px-3 py-1.5 text-xs font-semibold text-surface"
            onClick={() => choose("accepted")}
          >
            Allow
          </button>
          <button
            type="button"
            className="px-2 py-1.5 text-xs font-semibold text-brand-deep underline underline-offset-2"
            onClick={() => choose("declined")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
