"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LuChevronLeft, LuChevronRight, LuMaximize2, LuX } from "react-icons/lu";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Masonry gallery with numbered badges and a click-to-enlarge lightbox. */
export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      <div className="gap-6 md:columns-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-white p-2 text-left shadow-lg ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            aria-label={`Enlarge ${image.alt}`}
          >
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 36rem, 100vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                <LuMaximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                View
              </span>
            </div>

            {/* Corner Badge */}
            <span className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-amber-400 text-sm font-semibold text-white shadow-lg ring-2 ring-white">
              {index + 1}
            </span>
          </button>
        ))}
      </div>

      {active &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md sm:p-10"
            onClick={close}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="100vw"
              className="animate-fade-in-up max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              <LuX className="h-5 w-5" aria-hidden="true" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 sm:left-6"
                >
                  <LuChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 sm:right-6"
                >
                  <LuChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white ring-1 ring-white/20">
                  {(openIndex ?? 0) + 1} / {images.length}
                </p>
              </>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
