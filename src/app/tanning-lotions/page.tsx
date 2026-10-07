import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuSparkles } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

const brands = [
  { name: "Australian Gold", image: "/img/tanning-lotions/australian-gold.png", darkBg: false },
  { name: "Swedish Beauty", image: "/img/tanning-lotions/swedish-beauty.jpg", darkBg: false },
  { name: "California Tan", image: "/img/tanning-lotions/california-tan.gif", darkBg: false },
  { name: "Designer Skin", image: "/img/tanning-lotions/designer-skin-white-logo.png", darkBg: true },
  { name: "RestoRED", image: "/img/tanning-lotions/restored-logo.jpg", darkBg: false }
];

export default function TanningLotionsPage() {
  return (
    <>
      <PageHero title="Tanning Lotions" />

      {/* Brand Cards Grid */}
      <section className="section">
        <Bubbles />

        <div className="reveal mx-auto max-w-3xl px-4 text-center">
          <p className="eyebrow mb-5">
            <LuSparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Premium Quality
          </p>
          <h3 className="font-serif text-3xl leading-snug text-slate-700 md:text-4xl">
            We proudly offer premium lotion and skin care products from these top-level brands.
          </h3>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`reveal group relative w-full overflow-hidden rounded-3xl p-8 ring-1 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/20 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] ${
                  brand.darkBg
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 ring-gray-700"
                    : "card ring-slate-900/5 hover:ring-amber-200"
                }`}
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-amber-300/30 to-orange-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative mb-4 flex h-32 items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`relative flex items-center justify-center gap-2 border-t pt-4 text-center ${
                    brand.darkBg ? "border-gray-700" : "border-slate-100"
                  }`}
                >
                  <h3 className={`font-medium ${brand.darkBg ? "text-white" : "text-slate-700"}`}>{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Membership perk */}
          <div className="reveal mx-auto mt-14 max-w-3xl">
            <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-6 text-center text-white shadow-xl shadow-orange-500/20 sm:flex-row sm:px-8 sm:text-left">
              <p className="font-serif text-2xl sm:text-3xl">50% Off Lotion with tanning memberships</p>
              <Link href="/pricing" className="btn flex-shrink-0 bg-white text-orange-600 hover:-translate-y-0.5 hover:bg-orange-50">
                Membership Plans
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
