import Image from "next/image";
import { LuDroplets, LuSparkles, LuTag } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

const pricingLevels = [
  { level: "LEVEL 1 - LIGHT", price: "$27/SESSION" },
  { level: "LEVEL 2 - MEDIUM", price: "$33/SESSION" },
  { level: "LEVEL 3 - DARK", price: "$34/$35/SESSION" },
  { level: "LEVEL 4 - DOUBLE DARK", price: "$40/SESSION" },
];

// Light → double dark swatches for the level cards
const levelShades = ["bg-amber-200", "bg-amber-400", "bg-orange-600", "bg-orange-900"];

export default function UVFreeVersaPage() {
  return (
    <>
      <PageHero
        title="UV-Free Versa Pro"
        crumb="UV-Free Versa Pro"
        subtitle={
          <>
            <p className="text-xl md:text-2xl">&amp;</p>
            <p>Versa Pro Wellfit</p>
          </>
        }
      />

      {/* Versa Spa Pro Section */}
      <section className="section">
        <Bubbles />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="reveal mb-12 text-center">
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
              <Image
                src="/img/uv-free-versa/versaspapro-logo.jpeg"
                alt="VersaSpa Pro - beyond tan"
                width={694}
                height={286}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Featured Image with Floating Card */}
          <div className="reveal relative mb-24">
            <div className="relative mx-auto w-full max-w-5xl">
              <div className="media-frame">
                <div className="aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                    poster="/img/uv-free-versa/versaspa-model.jpeg"
                  >
                    <source src="/img/uv-free-versa/versaspa-pro-consumer-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-slate-100 bg-white px-6 py-3 shadow-xl sm:-bottom-10 sm:px-8 sm:py-4">
                <p className="text-sm font-medium text-slate-600">
                  Trusted by <span className="font-bold text-teal-600">10,000+</span> customers
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="reveal card p-6 sm:p-8">
              <div className="space-y-3">
                {pricingLevels.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-slate-200/80"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-8 w-8 flex-shrink-0 rounded-full ring-4 ring-white shadow ${levelShades[index]}`} />
                      <p className="font-semibold text-slate-800">{item.level}</p>
                    </div>
                    <p className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold whitespace-nowrap text-orange-600">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Info */}
            <div className="reveal card space-y-4 p-6 text-sm text-slate-700 sm:p-8">
              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <LuSparkles className="h-4 w-4 text-orange-500" aria-hidden="true" />
                  Bronze or Clear Solution Available
                </h4>
                <p className="mt-2">
                  Choose either a Bronzed look (feels or clearer) or add... make to control how tanner (bronze).
                </p>
              </div>
              <div className="rounded-2xl bg-cyan-50/70 p-4 ring-1 ring-cyan-100">
                <p>
                  <span className="font-semibold">Clear</span> gives an even natural-at-once, striking, natural-shimmered tan coverage over the next 4-8 hours.
                </p>
              </div>
              <div className="rounded-2xl bg-orange-50/70 p-4 ring-1 ring-orange-100">
                <p>
                  <span className="font-semibold">Bronze</span> gives an bronze for an immediate color. Fused with a DHA setting, the self-tanning tan then develops over the next 4-8 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-6 grid grid-cols-1 gap-6 text-sm text-slate-700 md:grid-cols-3">
            <div className="reveal card p-6">
              <h4 className="font-semibold text-slate-900">PH BALANCING PREP SPRAY</h4>
              <p className="mt-2">
                Start your tan with a ProSer, or for business-skin pH balance. deep-face and arms spray, it has ability to enhance UART to any session - $3
              </p>
            </div>

            <div className="reveal card p-6">
              <h4 className="font-semibold text-slate-900">AFTER TAN MOISTURIZER</h4>
              <p className="mt-2">
                Provides necessary hydration to protect help prolong your tan with coverage after tanning - Coconut skin and... and salty &quot;just-walked-in Beach&quot; features.. the mixture brings vital change and restoration of all skin at the skin. Finished with Single Note scents to help increase a luxurious Add to any session -$3
              </p>
            </div>

            <div className="reveal overflow-hidden rounded-3xl bg-slate-950 p-6 text-slate-300 shadow-xl">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-300 uppercase">
                <LuTag className="h-4 w-4" aria-hidden="true" />
                Add-ons
              </p>
              <div className="space-y-2.5">
                <p>Moisturizer Only $6</p>
                <p>Legs Only $10</p>
                <p>Face Only $10</p>
                <p>Add Legs to a Session $5</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-20 flex items-center gap-4 md:my-24" aria-hidden="true">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
            <LuDroplets className="h-6 w-6 text-cyan-500" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
          </div>

          {/* Wellfit Section */}
          <div className="reveal text-center">
            {/* Wellfit Logo */}
            <div className="mx-auto max-w-sm">
              <Image
                src="/img/uv-free-versa/wellfit-logo-black.png"
                alt="VersaSpa Wellfit Logo"
                width={596}
                height={199}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Video Section */}
          <div className="reveal mx-auto mt-10 max-w-3xl">
            <div className="media-frame">
              <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-slate-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/mk_5do8_yEU?si=_3htS4MSUR3env-O"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
