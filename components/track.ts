"use client";

import { CONSENT_KEY } from "@/lib/consent";

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (!hasAnalyticsConsent()) return;
  window.gtag?.("event", name, params);
}

export function trackPhoneClick() {
  trackEvent("phone_click");
}

export function trackLeadConversion() {
  if (!hasAnalyticsConsent()) return;
  window.gtag?.("event", "generate_lead", { method: "vip_registration" });
  window.fbq?.("track", "Lead");
}
