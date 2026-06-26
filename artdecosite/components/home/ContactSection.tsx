"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  buildWhatsAppUrl,
  contactConfig,
  countryOptions,
  dialCodeOptions,
  type ContactFormValues,
} from "@/lib/constants/contact";
import { siteX } from "@/lib/constants/layout";

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  dialCode: dialCodeOptions[0].code,
  phone: "",
  country: "",
  agreedToPrivacy: false,
};

const fieldLabelClass =
  "mb-2 block font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-black/70 sm:tracking-[0.28em] lg:text-[11px]";

const fieldInputClass =
  "w-full border border-black/15 bg-white px-3 py-2.5 font-heading text-sm text-black outline-none transition-colors focus:border-teal sm:px-4 sm:py-3";

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!values.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!values.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!values.country) {
      setError("Please select your country.");
      return;
    }

    if (!values.agreedToPrivacy) {
      setError("Please agree to the Privacy Policy to continue.");
      return;
    }

    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
  }

  return (
    <section className={`bg-mist pb-16 pt-6 sm:pb-24 sm:pt-8 lg:pb-36 lg:pt-12 ${siteX}`}>
      <div className="mx-auto w-full max-w-xl text-center">
        <h2 className="text-balance font-heading text-xl font-bold uppercase tracking-[0.12em] text-black sm:text-2xl sm:tracking-[0.14em] lg:text-3xl lg:tracking-[0.16em]">
          {contactConfig.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-black/55 sm:mt-5 sm:text-base lg:text-lg">
          {contactConfig.subheading}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-md text-left sm:mt-12 lg:mt-14"
          noValidate
        >
          <div className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="full-name" className={fieldLabelClass}>
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                autoComplete="name"
                value={values.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className={fieldInputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={fieldLabelClass}>
                Email<span className="text-black/45">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={fieldInputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={fieldLabelClass}>
                Phone Number
              </label>
              <div className="flex flex-col gap-2 border border-black/15 bg-white transition-colors focus-within:border-teal sm:flex-row sm:gap-0">
                <select
                  aria-label="Country code"
                  value={values.dialCode}
                  onChange={(event) => updateField("dialCode", event.target.value)}
                  className="w-full border-black/15 bg-white px-3 py-2.5 font-heading text-sm text-black outline-none sm:max-w-[7.5rem] sm:border-r sm:py-3"
                >
                  {dialCodeOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel-national"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="min-w-0 flex-1 bg-white px-3 py-2.5 font-heading text-sm text-black outline-none sm:px-4 sm:py-3"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className={fieldLabelClass}>
                Country<span className="text-black/45">*</span>
              </label>
              <select
                id="country"
                required
                value={values.country}
                onChange={(event) => updateField("country", event.target.value)}
                className={`${fieldInputClass} appearance-none`}
              >
                <option value="" disabled>
                  Select country
                </option>
                {countryOptions.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-start gap-3 text-left text-xs leading-relaxed text-black/60 sm:text-sm">
              <input
                type="checkbox"
                checked={values.agreedToPrivacy}
                onChange={(event) =>
                  updateField("agreedToPrivacy", event.target.checked)
                }
                className="mt-0.5 h-4 w-4 shrink-0 accent-teal"
              />
              <span>
                I agree to the{" "}
                <Link
                  href={contactConfig.privacyHref}
                  className="text-black underline decoration-black/20 underline-offset-4 transition-colors hover:text-teal"
                >
                  Privacy Policy
                </Link>
                .
                <span className="text-black/45">*</span>
              </span>
            </label>
          </div>

          {error ? (
            <p className="mt-4 text-sm text-teal sm:mt-5" role="alert">
              {error}
            </p>
          ) : null}

          <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
            <button
              type="submit"
              className="group inline-flex w-full max-w-sm items-center justify-center gap-4 border border-black/20 bg-white px-6 py-3.5 transition-all duration-300 hover:border-teal hover:shadow-[0_8px_30px_rgba(2,43,58,0.06)] sm:w-auto sm:max-w-none sm:gap-5 sm:px-8 sm:py-4 lg:gap-6 lg:px-12 lg:py-5"
            >
              <span className="hidden h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal sm:block" />
              <span className="text-center font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-black transition-colors duration-300 group-hover:text-teal sm:text-[11px] sm:tracking-[0.32em] lg:text-xs">
                Contact via WhatsApp
              </span>
              <span className="hidden h-px w-5 bg-black/25 transition-all duration-300 group-hover:w-8 group-hover:bg-teal sm:block" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
