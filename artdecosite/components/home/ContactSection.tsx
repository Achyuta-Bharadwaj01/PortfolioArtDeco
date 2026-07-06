"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  HeraldicCrest,
  EditorialStamp,
  SketchMural,
} from "@/components/ui/ornaments";
import {
  buildWhatsAppUrl,
  contactConfig,
  countryOptions,
  dialCodeOptions,
  type ContactFormValues,
} from "@/lib/constants/contact";
import { contactSectionId } from "@/lib/utils/scrollToHash";

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  dialCode: dialCodeOptions[0].code,
  phone: "",
  country: "",
  agreedToPrivacy: false,
};

const fieldLabelClass =
  "mb-2 block font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-cocoa/70 lg:text-[11px]";

const fieldInputClass =
  "w-full border border-cocoa/15 bg-parchment px-4 py-3 font-body text-sm text-black outline-none transition-colors focus:border-camel";

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
    <section
      id={contactSectionId}
      className="relative scroll-mt-24 overflow-hidden bg-mist px-5 pb-16 pt-2 lg:scroll-mt-28 lg:px-8 lg:pb-24 lg:pt-4"
    >
      <SketchMural
        variant="interior"
        tone="mauve"
        className="absolute -left-16 bottom-0 hidden h-[22rem] w-[28rem] opacity-50 lg:block"
      />
      <HeraldicCrest
        size="xl"
        tone="cocoa"
        className="absolute -right-12 top-[5%] hidden opacity-30 xl:block"
      />
      <EditorialStamp
        size="md"
        tone="brass"
        className="absolute bottom-[12%] right-[3%] opacity-45 sm:opacity-55"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 xl:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.16em] text-black sm:text-3xl lg:text-[2rem] lg:leading-tight">
              {contactConfig.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-black/55 lg:mx-0 lg:mt-5 lg:max-w-sm lg:text-lg">
              {contactConfig.subheading}
            </p>

            <p className="mx-auto mt-6 hidden max-w-sm text-sm leading-relaxed text-black/45 lg:mx-0 lg:block">
              Your details open a pre-filled WhatsApp message — a direct way to
              begin a conversation about your project or enquiry.
            </p>
          </div>

          <div className="bg-parchment p-5 ring-1 ring-cocoa/[0.06] sm:p-6 lg:p-8 xl:p-10">
            <form onSubmit={handleSubmit} className="text-left" noValidate>
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
                <div className="sm:col-span-1">
                  <label htmlFor="full-name" className={fieldLabelClass}>
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    className={fieldInputClass}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className={fieldLabelClass}>
                    Email<span className="text-black/45">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className={fieldInputClass}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className={fieldLabelClass}>
                    Phone Number
                  </label>
                  <div className="flex border border-cocoa/15 bg-parchment transition-colors focus-within:border-camel">
                    <select
                      aria-label="Country code"
                      value={values.dialCode}
                      onChange={(event) =>
                        updateField("dialCode", event.target.value)
                      }
                      className="max-w-[7.5rem] border-r border-cocoa/15 bg-parchment px-3 py-3 font-body text-sm text-black outline-none"
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
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      className="min-w-0 flex-1 bg-parchment px-4 py-3 font-body text-sm text-black outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="country" className={fieldLabelClass}>
                    Country<span className="text-black/45">*</span>
                  </label>
                  <select
                    id="country"
                    required
                    value={values.country}
                    onChange={(event) =>
                      updateField("country", event.target.value)
                    }
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

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm leading-relaxed text-black/60">
                    <input
                      type="checkbox"
                      checked={values.agreedToPrivacy}
                      onChange={(event) =>
                        updateField("agreedToPrivacy", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 shrink-0 accent-camel"
                    />
                    <span>
                      I agree to the{" "}
                      <Link
                        href={contactConfig.privacyHref}
                        className="text-black underline decoration-cocoa/20 underline-offset-4 transition-colors hover:text-camel"
                      >
                        Privacy Policy
                      </Link>
                      .
                      <span className="text-black/45">*</span>
                    </span>
                  </label>
                </div>
              </div>

              {error ? (
                <p className="mt-5 text-sm text-camel" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="mt-8 flex justify-center sm:justify-start lg:mt-10">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-5 border border-cocoa/15 bg-parchment px-8 py-4 transition-all duration-300 hover:border-camel hover:shadow-warm sm:w-auto lg:gap-6 lg:px-12 lg:py-5"
                >
                  <span className="h-px w-5 bg-cocoa/25 transition-all duration-300 group-hover:w-8 group-hover:bg-camel" />
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition-colors duration-300 group-hover:text-camel lg:text-xs">
                    Contact via WhatsApp
                  </span>
                  <span className="h-px w-5 bg-cocoa/25 transition-all duration-300 group-hover:w-8 group-hover:bg-camel" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
