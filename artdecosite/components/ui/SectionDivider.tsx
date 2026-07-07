import Image from "next/image";

export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative bg-cream px-5 py-2 sm:py-3 lg:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <div className="relative h-9 w-full overflow-hidden sm:h-10 lg:h-11">
          <Image
            src="/UIItems/Seperator_florish.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
            style={{
              opacity: 0.75,
              filter: "sepia(0.35) saturate(1.3) brightness(0.95)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
