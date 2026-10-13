"use client";

import { useEffect } from "react";
import { trackEvent } from "./track";

export function FloorPlanView() {
  useEffect(() => {
    trackEvent("floor_plan_view");
  }, []);
  return null;
}
