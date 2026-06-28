"use client";

type MenuButtonProps = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export function MenuButton({ open, onClick, className = "" }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      className={`inline-flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-60 ${className}`}
    >
      <span className="relative block h-3.5 w-5">
        <span
          className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
            open ? "top-[0.42rem] rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 top-[0.42rem] h-px w-5 bg-current transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
            open ? "top-[0.42rem] -rotate-45" : "top-[0.84rem]"
          }`}
        />
      </span>
    </button>
  );
}
