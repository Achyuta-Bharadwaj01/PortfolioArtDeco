type BlogUnavailableProps = {
  message?: string;
};

export function BlogUnavailable({
  message = "The essays are unavailable right now. Please try again in a moment.",
}: BlogUnavailableProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-cream px-6 py-24 text-center">
      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/70">
        Blog
      </p>
      <h1 className="mt-5 font-heading text-4xl font-normal text-ink">Design Therapy</h1>
      <p className="mt-5 max-w-md font-body text-base italic leading-relaxed text-ink/55">
        {message}
      </p>
    </section>
  );
}
