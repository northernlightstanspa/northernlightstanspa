import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  /** Plain-text page name for the breadcrumb (defaults to `title` when it's a string). */
  crumb?: string;
  subtitle?: ReactNode;
  eyebrow?: string;
};

/** Sunset banner shown at the top of every interior page. */
export default function PageHero({ title, crumb, subtitle, eyebrow }: PageHeroProps) {
  const crumbLabel = crumb ?? (typeof title === "string" ? title : undefined);

  return (
    <div className="px-3 pt-3 sm:px-4 sm:pt-4">
      <section className="relative isolate overflow-hidden rounded-[1.75rem] bg-slate-950 sm:rounded-[2.5rem]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/75 via-orange-400/35 to-cyan-500/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
        {/* Soft sun glow */}
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/40 blur-3xl" />

        <div className="container-page relative py-16 text-center sm:py-20 md:py-28">
          {crumbLabel && (
            <nav
              aria-label="Breadcrumb"
              className="animate-fade-in-up mb-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden="true" className="text-amber-300">
                ✦
              </span>
              <span aria-current="page" className="text-white">
                {crumbLabel}
              </span>
            </nav>
          )}

          {eyebrow && (
            <p className="animate-fade-in-up mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/30 backdrop-blur">
              {eyebrow}
            </p>
          )}

          <h1
            className="animate-fade-in-up mx-auto max-w-4xl font-serif text-4xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {title}
          </h1>

          {subtitle && (
            <div
              className="animate-fade-in-up mx-auto mt-3 max-w-3xl font-serif text-2xl text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-3xl md:text-4xl"
              style={{ animationDelay: "160ms" }}
            >
              {subtitle}
            </div>
          )}

          <div
            className="animate-fade-in-up mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-cyan-300"
            style={{ animationDelay: "240ms" }}
          />
        </div>
      </section>
    </div>
  );
}
