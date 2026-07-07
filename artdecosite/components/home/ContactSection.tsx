"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  contactConfig,
  countryOptions,
  dialCodeOptions,
  type ContactChannel,
  type ContactFormValues,
} from "@/lib/constants/contact";
import { contactSectionId } from "@/lib/utils/scrollToHash";

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  message: "",
  dialCode: dialCodeOptions[0].code,
  phone: "",
  country: "",
  agreedToPrivacy: false,
};

const fieldLabelClass =
  "mb-2 block font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/75 lg:text-[11px]";

const fieldInputClass =
  "w-full border border-gold/20 bg-cream px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-gold";

export function ContactSection() {
  const [channel, setChannel] = useState<ContactChannel>("email");
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

    if (channel === "whatsapp" && !values.phone.trim()) {
      setError("Please enter your phone number for WhatsApp.");
      return;
    }

    if (!values.agreedToPrivacy) {
      setError("Please agree to the Privacy Policy to continue.");
      return;
    }

    if (channel === "whatsapp") {
      window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = buildMailtoUrl(values);
  }

  return (
    <section
      id={contactSectionId}
      className="relative scroll-mt-24 overflow-hidden bg-cream px-5 py-20 lg:scroll-mt-28 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <img
          src="/UIItems/House_img.png"
          alt=""
          className="absolute bottom-0 left-0 h-[55%] w-auto max-w-[85%] object-contain object-left-bottom opacity-35 sm:h-[60%] sm:max-w-[70%] sm:opacity-40 lg:bottom-auto lg:left-0 lg:top-1/2 lg:h-[88%] lg:max-w-none lg:-translate-y-1/2 lg:opacity-45 xl:h-[92%]"
          style={{
            filter: "blur(0.35px)",
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/85 to-cream/70 lg:bg-gradient-to-r lg:from-transparent lg:from-30% lg:via-cream/55 lg:via-50% lg:to-cream lg:to-62%" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
        <div aria-hidden="true" className="hidden min-h-[28rem] lg:block" />

        <div className="mx-auto w-full max-w-lg text-center lg:mx-0 lg:max-w-md xl:max-w-lg">
          <p className="font-script-display text-2xl text-gold sm:text-3xl lg:text-4xl">
            {contactConfig.scriptHeading}
          </p>

          <h2 className="mt-8 font-heading text-3xl font-normal leading-snug text-ink sm:text-4xl lg:mt-10 lg:text-[2.75rem] lg:leading-tight">
            {contactConfig.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/50 lg:text-lg">
            {contactConfig.subheading}
          </p>

          <div className="mt-10 inline-flex border border-gold/20 bg-cream p-1">
            <button
              type="button"
              onClick={() => {
                setChannel("email");
                setError(null);
              }}
              className={`px-6 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors lg:px-8 lg:text-[11px] ${
                channel === "email"
                  ? "bg-moss text-cream"
                  : "text-ink/55 hover:text-ink"
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => {
                setChannel("whatsapp");
                setError(null);
              }}
              className={`px-6 py-2.5 font-body text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors lg:px-8 lg:text-[11px] ${
                channel === "whatsapp"
                  ? "bg-moss text-cream"
                  : "text-ink/55 hover:text-ink"
              }`}
            >
              WhatsApp
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 text-left lg:mt-12"
            noValidate
          >
            <div className="space-y-5">
              <div>
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

              <div>
                <label htmlFor="email" className={fieldLabelClass}>
                  Email<span className="text-ink/45">*</span>
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

              {channel === "whatsapp" ? (
                <>
                  <div>
                    <label htmlFor="phone" className={fieldLabelClass}>
                      Phone Number<span className="text-ink/45">*</span>
                    </label>
                    <div className="flex border border-gold/20 bg-cream transition-colors focus-within:border-gold">
                      <select
                        aria-label="Country code"
                        value={values.dialCode}
                        onChange={(event) =>
                          updateField("dialCode", event.target.value)
                        }
                        className="max-w-[7.5rem] border-r border-gold/20 bg-cream px-3 py-3 font-body text-sm text-ink outline-none"
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
                        className="min-w-0 flex-1 bg-cream px-4 py-3 font-body text-sm text-ink outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className={fieldLabelClass}>
                      Country
                    </label>
                    <select
                      id="country"
                      value={values.country}
                      onChange={(event) =>
                        updateField("country", event.target.value)
                      }
                      className={`${fieldInputClass} appearance-none`}
                    >
                      <option value="">Select country</option>
                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : null}

              <div>
                <label htmlFor="message" className={fieldLabelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  className={`${fieldInputClass} resize-none`}
                  placeholder="Tell me a little about your project or enquiry..."
                />
              </div>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/60">
                <input
                  type="checkbox"
                  checked={values.agreedToPrivacy}
                  onChange={(event) =>
                    updateField("agreedToPrivacy", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-gold"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href={contactConfig.privacyHref}
                    className="text-ink/75 underline decoration-gold/25 underline-offset-4 transition-colors hover:text-gold"
                  >
                    Privacy Policy
                  </Link>
                  .
                  <span className="text-ink/45">*</span>
                </span>
              </label>
            </div>

            {error ? (
              <p className="mt-5 text-center text-sm text-gold" role="alert">
                {error}
              </p>
            ) : null}

            <div className="mt-8 flex justify-center lg:mt-10">
              <button
                type="submit"
                className="w-full bg-moss px-10 py-4 font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-cream transition-colors hover:bg-moss-deep lg:px-14 lg:text-xs"
              >
                Begin a Conversation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
