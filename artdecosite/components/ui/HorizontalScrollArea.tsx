"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HorizontalScrollAreaProps = {
  children: ReactNode;
  className?: string;
};

export function HorizontalScrollArea({
  children,
  className = "",
}: HorizontalScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (element.scrollWidth <= element.clientWidth) return;

      const maxScroll = element.scrollWidth - element.clientWidth;
      const nextScroll = element.scrollLeft + event.deltaY;
      const canScrollRight = element.scrollLeft < maxScroll - 1;
      const canScrollLeft = element.scrollLeft > 0;

      if (
        (event.deltaY > 0 && canScrollRight) ||
        (event.deltaY < 0 && canScrollLeft)
      ) {
        event.preventDefault();
        element.scrollLeft = Math.max(0, Math.min(maxScroll, nextScroll));
      }
    };

    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      className={`overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
