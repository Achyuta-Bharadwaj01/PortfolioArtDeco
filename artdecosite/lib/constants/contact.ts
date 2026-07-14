export const contactConfig = {
  whatsappNumber: "919019348653",
  email: "info.studioellaria@gmail.com",
  scriptHeading: "Let's talk",
  heading: "I'd love to hear your story.",
  subheading:
    "For enquiries, collaborations, or project discussions — reach out by email or WhatsApp.",
  privacyHref: "/privacy",
  emailSubject: "Enquiry from Shaineela Ahmed website",
  whatsappGreeting: "Hello, I'd like to get in touch regarding a project enquiry.",
} as const;

export type ContactChannel = "email" | "whatsapp";

export const dialCodeOptions = [
  { code: "+91", label: "India (+91)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+1", label: "United States (+1)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+966", label: "Saudi Arabia (+966)" },
  { code: "+974", label: "Qatar (+974)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+33", label: "France (+33)" },
  { code: "+49", label: "Germany (+49)" },
] as const;

export const countryOptions = [
  "India",
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Singapore",
  "Australia",
  "France",
  "Germany",
  "Other",
] as const;

export type ContactFormValues = {
  fullName: string;
  email: string;
  message: string;
  dialCode: string;
  phone: string;
  country: string;
  agreedToPrivacy: boolean;
};

export function buildWhatsAppUrl(values: ContactFormValues) {
  const message = [
    contactConfig.whatsappGreeting,
    "",
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    values.phone.trim()
      ? `Phone: ${values.dialCode} ${values.phone}`
      : null,
    values.country ? `Country: ${values.country}` : null,
    values.message.trim() ? `\nMessage:\n${values.message.trim()}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(values: ContactFormValues) {
  const body = [
    `Name: ${values.fullName}`,
    values.phone.trim()
      ? `Phone: ${values.dialCode} ${values.phone}`
      : null,
    values.country ? `Country: ${values.country}` : null,
    "",
    values.message.trim() || "I would like to get in touch regarding a project enquiry.",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    subject: contactConfig.emailSubject,
    body,
  });

  return `mailto:${contactConfig.email}?${params.toString()}`;
}
