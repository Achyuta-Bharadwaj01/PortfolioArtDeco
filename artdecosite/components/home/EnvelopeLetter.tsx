"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { poemLetter } from "@/lib/constants/poem";

type ModalPhase = "closed" | "open" | "leaving";

export function EnvelopeLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalPhase, setModalPhase] = useState<ModalPhase>("closed");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLetter = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);

    window.setTimeout(() => {
      setModalPhase("open");
    }, 650);
  }, [isOpen]);

  const closeLetter = useCallback(() => {
    setModalPhase("leaving");

    window.setTimeout(() => {
      setModalPhase("closed");
      setIsOpen(false);
    }, 280);
  }, []);

  useEffect(() => {
    if (modalPhase === "closed") return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLetter();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalPhase, closeLetter]);

  const modalVisible = modalPhase !== "closed";
  const modalAnimClass =
    modalPhase === "leaving" ? "letter-modal-exit" : "letter-modal-enter";
  const backdropAnimClass =
    modalPhase === "leaving"
      ? "letter-modal-backdrop-exit"
      : "letter-modal-backdrop-enter";

  const modal =
    modalVisible && mounted ? (
      <div
        role="presentation"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeLetter();
          }
        }}
        className={`fixed inset-0 z-[200] flex items-center justify-center bg-moss-deep/88 p-4 backdrop-blur-md sm:p-8 ${backdropAnimClass}`}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={poemLetter.title}
          className={`relative isolate max-h-[86vh] w-full max-w-2xl overflow-y-auto bg-cream px-6 py-12 shadow-2xl ring-1 ring-gold/25 sm:px-12 sm:py-16 ${modalAnimClass}`}
        >
          <button
            type="button"
            onClick={closeLetter}
            aria-label="Close letter"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 bg-cream text-ink/50 transition-colors hover:border-gold/50 hover:text-gold sm:right-6 sm:top-6"
          >
            <CloseIcon className="h-4 w-4" />
          </button>

          <div className="mx-auto mb-8 flex max-w-md items-center gap-4">
            <span className="h-px flex-1 bg-gold/25" />
            <span className="text-gold/55">◆</span>
            <span className="h-px flex-1 bg-gold/25" />
          </div>

          <h2 className="text-center font-heading text-2xl font-normal italic leading-snug text-ink sm:text-3xl">
            {poemLetter.title}
          </h2>

          <div className="mx-auto mt-10 max-w-xl space-y-7 text-center font-body text-[0.95rem] leading-[1.9] text-ink/75 sm:text-base">
            {poemLetter.stanzas.map((stanza) => (
              <p key={stanza.slice(0, 24)} className="whitespace-pre-line">
                {stanza}
              </p>
            ))}
          </div>

          <p className="mt-12 text-right font-script-display text-2xl text-gold sm:text-3xl">
            — {poemLetter.signature}
          </p>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className="mx-auto w-full max-w-[19rem] sm:max-w-[21rem]">
        <button
          type="button"
          onClick={openLetter}
          aria-label={
            isOpen
              ? "Letter opened — click again to read it once more"
              : "Open a letter, for you"
          }
          className="envelope-scene block w-full cursor-pointer"
        >
          <div className={`envelope-idle ${isOpen ? "is-paused" : ""}`}>
            <div className={`envelope-shell ${isOpen ? "is-open" : ""}`}>
              <div className="envelope-body" />
              <div className="envelope-letter" />
              <div className="envelope-flap" />
              <div className="envelope-seal">
                <span
                  aria-hidden="true"
                  className="font-heading text-sm italic text-cream/90"
                >
                  S
                </span>
              </div>
            </div>
          </div>
        </button>

        <p className="mt-6 text-center font-body text-[10px] uppercase tracking-[0.32em] text-gold-bright/55">
          {isOpen ? poemLetter.closeHint : poemLetter.openHint}
        </p>
      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
