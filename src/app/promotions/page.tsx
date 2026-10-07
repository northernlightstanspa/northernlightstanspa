import Image from "next/image";
import { LuMessageSquare } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";

export default function PromotionsPage() {
  return (
    <>
      <PageHero title="Promotions" />

      {/* Current Specials */}
      <section className="section">
        <Bubbles />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Specials Card */}
          <div className="reveal relative mx-auto max-w-3xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange-400/40 via-amber-300/30 to-cyan-400/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl ring-1 ring-slate-900/5 sm:p-3">
              <Image
                src="/img/promotion/october.png"
                alt="october Specials"
                width={1024}
                height={1536}
                sizes="(min-width: 768px) 48rem, 100vw"
                priority
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </div>

          {/* Placeholder for future promotions - Update monthly */}
          <div className="py-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-sm text-slate-500 italic ring-1 ring-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Additional promotions coming soon!
            </p>
          </div>

          {/* Text Club Sign Up - Enhanced */}
          <div className="reveal mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-400 to-cyan-400 p-8 text-center shadow-2xl shadow-orange-500/20 sm:p-12">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full border-4 border-white/20" />
                <div className="absolute -right-10 -bottom-20 h-56 w-56 rounded-full bg-white/10" />
              </div>
              <div className="relative">
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white ring-1 ring-white/40 backdrop-blur">
                  <LuMessageSquare className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-4 font-serif text-3xl text-white md:text-4xl">Stay Connected!</h3>
                <p className="mb-6 text-lg text-white/95">
                  Sign up for our text club to stay updated with exclusive deals!
                </p>
                <p className="inline-block rounded-2xl bg-white px-6 py-3 text-lg font-bold tracking-wide text-slate-900 shadow-lg sm:text-xl">
                  TEXT <span className="text-orange-500">northernlightstan</span> TO{" "}
                  <span className="text-cyan-600">33916</span>
                </p>

                {/* Social Media Links */}
                <SocialLinks
                  className="mt-8 flex items-center justify-center gap-4"
                  linkClassName="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/40 backdrop-blur transition-transform hover:scale-110 hover:bg-white/25"
                  iconClassName="h-7 w-7"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
