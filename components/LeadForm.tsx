"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { CASL_CONSENT } from "@/lib/consent";
import { leadSchema } from "@/lib/lead-schema";
import { captureUtm, readUtm } from "@/lib/utm";
import { trackEvent } from "./track";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  is_broker: boolean;
  casl_consent: boolean;
  website?: string;
  elapsed_ms: number;
  consent_page: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
};

export function LeadForm({ location }: { location: string }) {
  const router = useRouter();
  const started = useRef(0);
  const focused = useRef(false);
  const baseId = useId();
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [brokerAnswer, setBrokerAnswer] = useState<"" | "yes" | "no">("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema) as Resolver<FormValues>,
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      is_broker: false,
      casl_consent: false,
      website: "",
      elapsed_ms: 0,
      consent_page: "/",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    },
  });

  useEffect(() => {
    started.current = Date.now();
    captureUtm();
  }, []);

  function onFocus() {
    if (focused.current) return;
    focused.current = true;
    trackEvent("form_start", { form_location: location });
  }

  async function onValid(values: FormValues) {
    setPending(true);
    setFormError("");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        website: values.website ?? "",
      }),
    });
    setPending(false);
    if (!response.ok) {
      setFormError("Registration could not be saved. Please review the form and try again.");
      return;
    }
    trackEvent("form_submit", { form_location: location });
    router.push("/thank-you");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const elapsed = Date.now() - started.current;
    if (elapsed < 3000) {
      setFormError("Please take a moment to review the form before submitting.");
      return;
    }
    if (brokerAnswer === "") {
      setFormError("Select yes or no for the broker question.");
      return;
    }
    setValue("is_broker", brokerAnswer === "yes");
    const utm = readUtm();
    setValue("elapsed_ms", elapsed);
    setValue("consent_page", window.location.pathname.slice(0, 200));
    setValue("utm_source", utm.utm_source ?? null);
    setValue("utm_medium", utm.utm_medium ?? null);
    setValue("utm_campaign", utm.utm_campaign ?? null);
    setValue("utm_term", utm.utm_term ?? null);
    setValue("utm_content", utm.utm_content ?? null);
    void handleSubmit(onValid)();
  }

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} noValidate className="relative grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" id={`${baseId}-first`} error={errors.first_name && "Enter your first name."}>
          <input id={`${baseId}-first`} className="field" autoComplete="given-name" {...register("first_name")} />
        </Field>
        <Field label="Last name" id={`${baseId}-last`} error={errors.last_name && "Enter your last name."}>
          <input id={`${baseId}-last`} className="field" autoComplete="family-name" {...register("last_name")} />
        </Field>
        <Field label="Email" id={`${baseId}-email`} error={errors.email && "Enter a valid email address."}>
          <input id={`${baseId}-email`} className="field" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field
          label="Phone"
          id={`${baseId}-phone`}
          error={errors.phone && "Enter a phone number, 10 to 20 characters, using digits and + ( ) . -"}
        >
          <input id={`${baseId}-phone`} className="field" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
      </div>
      <div>
        <p id={`${baseId}-broker`} className="text-sm font-medium">
          Are you a licensed real estate agent?
        </p>
        <div className="mt-2 grid grid-cols-2 gap-3" role="group" aria-labelledby={`${baseId}-broker`}>
          <button
            type="button"
            className={brokerAnswer === "yes" ? "choice choice-on" : "choice"}
            aria-pressed={brokerAnswer === "yes"}
            onClick={() => setBrokerAnswer("yes")}
          >
            Yes
          </button>
          <button
            type="button"
            className={brokerAnswer === "no" ? "choice choice-on" : "choice"}
            aria-pressed={brokerAnswer === "no"}
            onClick={() => setBrokerAnswer("no")}
          >
            No
          </button>
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm leading-snug">
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand-primary" {...register("casl_consent")} />
        <span>{CASL_CONSENT}</span>
      </label>
      {errors.casl_consent ? <p className="text-sm font-semibold text-brand-deep">Consent is required to register.</p> : null}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input id={`${baseId}-website`} tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <button type="submit" className="btn w-full" disabled={pending}>
        {pending ? "Sending…" : "Get Priority Access"}
      </button>
      <p role="alert" aria-live="assertive" className={formError ? "text-sm font-semibold text-brand-deep" : "sr-only"}>
        {formError}
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | false;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label} <span className="text-brand-accent-ink">*</span>
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-brand-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
