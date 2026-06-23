import Image from "next/image";
import { isVideoSrc } from "@/lib/utils/media";

type ProjectMediaProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  cover?: boolean;
};

const naturalMediaClass = "block h-auto w-full max-w-full";
const coverMediaClass = "absolute inset-0 h-full w-full object-cover";

export function ProjectMedia({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,
  cover = false,
}: ProjectMediaProps) {
  const mediaClass = `${cover ? coverMediaClass : naturalMediaClass} ${className}`.trim();

  if (isVideoSrc(src)) {
    return (
      <video
        src={src}
        aria-label={alt}
        className={mediaClass}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload={autoPlay ? "auto" : "metadata"}
      />
    );
  }

  if (cover) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={mediaClass}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes={sizes ?? "100vw"}
      unoptimized
      priority={priority}
      className={mediaClass}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
