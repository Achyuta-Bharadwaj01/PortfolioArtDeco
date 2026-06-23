export const contactConfig = {
  whatsappNumber: "916361540037",
  heading: "Get in Touch",
  subheading:
    "Share your details below and begin a conversation on WhatsApp — for enquiries, collaborations, or project discussions.",
  privacyHref: "/privacy",
} as const;

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
  dialCode: string;
  phone: string;
  country: string;
  agreedToPrivacy: boolean;
};

export function buildWhatsAppUrl(values: ContactFormValues) {
  const message = [
    "Hello, I would like to get in touch.",
    "",
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Phone: ${values.dialCode} ${values.phone}`,
    `Country: ${values.country}`,
  ].join("\n");

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
