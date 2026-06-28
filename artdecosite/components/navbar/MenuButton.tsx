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
      className={`inline-flex h-9 w-9 items-center justify-center rounded-sm transition-all duration-500 ease-out hover:opacity-60 ${className}`}
    >
      <span
        className={`relative block h-3.5 w-5 transition-transform duration-500 ease-out ${
          open ? "scale-105" : "scale-100"
        }`}
      >
        <span
          className={`absolute left-0 h-px w-5 origin-center bg-current transition-all duration-500 ease-out ${
            open ? "top-[0.42rem] rotate-45" : "top-0 rotate-0"
          }`}
        />
        <span
          className={`absolute left-0 top-[0.42rem] h-px w-5 bg-current transition-all duration-300 ease-out ${
            open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 h-px w-5 origin-center bg-current transition-all duration-500 ease-out ${
            open ? "top-[0.42rem] -rotate-45" : "top-[0.84rem] rotate-0"
          }`}
        />
      </span>
    </button>
  );
}
