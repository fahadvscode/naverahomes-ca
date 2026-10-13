"use client";

import { useEffect } from "react";
import { hasAnalyticsConsent, trackLeadConversion } from "./track";

export function ThankYouEvent() {
  useEffect(() => {
    let sent = false;
    const timer = window.setInterval(() => {
      if (sent || !hasAnalyticsConsent()) return;
      if (window.gtag || window.fbq) {
        trackLeadConversion();
        sent = true;
        window.clearInterval(timer);
      }
    }, 400);
    const stop = window.setTimeout(() => window.clearInterval(timer), 5000);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, []);
  return null;
}
