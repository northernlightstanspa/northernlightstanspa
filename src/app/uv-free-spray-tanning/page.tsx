import Image from "next/image";
import { LuCircleCheck, LuDroplets, LuTag } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

const versaSpaFeatures = [
  "Heated dry passes between each spray pass so you will be dry when leaving the booth",
  "Automatically senses and adjusts to your height",
  "360 degree coverage with multiple spray nozzles for even coverage",
  "Spray full body, just legs or just face - your choice!",
  "Bronze or Clear solution - both with 4 levels - light, medium, dark, double dark",
];

const wellfitProducts = [
  {
    name: "WellFit® Hydrate",
    description: <><strong>Hydrate&apos;s patented Tri-Hydro Boost Complex™</strong> contains three unique molecular weights that have been meticulously designed to target multiple layers of the skin, unlike common topical moisturizers.</>,
    benefits: [
      "Fermented fractions of hyaluronic acid are specifically tailored to optimize the performance of skincare.",
      "Enhances the overall performance of skin hydration products, offering not just moisture but also improved efficacy for everyday use.",
      "Hydrates, moisturizes, soothes, and repairs the skin barrier of the outermost layer of the stratum corneum.",
    ],
  },
  {
    name: "WellFit® Lift",
    description: <><strong>Lift features a powerful C-Lift Peptide Complex™</strong> known for its collagen-boosting properties, including vitamins and essential peptides.</>,
    benefits: [
      "The skin-firming products help replenish and restore collagen levels at a cellular level, resulting in healthier, plumper, and firmer-looking skin.",
      "Revolutionary collagen boosting treatment easily absorbs restoring collagen at the cellular level.",
      "Helps promote and restructure the skin extracellular matrix for plumper skin.",
    ],
  },
  {
    name: "WellFit® Balance",
    description: <><strong>Balance&apos;s Bio Glow Complex™</strong> is formulated with a combination of pre and postbiotic ingredients that provide a protective barrier and soothing relief from a variety of irritations.</>,
    benefits: [
      "The biome skin care products help to enrich the skin's biome and regulate sebum levels, encouraging a healthy and thriving microbiome.",
      "Formulated to provide soothing relief from everyday environmental irritations.",
      "The biome skin care products provide instant skin illumination.",
    ],
  },
];

const productThemes = [
  { card: "from-blue-50 to-cyan-50 ring-blue-200/60", title: "text-blue-800", dot: "bg-blue-500", bar: "from-blue-500 to-cyan-400" },
  { card: "from-purple-50 to-pink-50 ring-purple-200/60", title: "text-purple-800", dot: "bg-purple-500", bar: "from-purple-500 to-pink-400" },
  { card: "from-green-50 to-emerald-50 ring-green-200/60", title: "text-green-800", dot: "bg-green-500", bar: "from-green-500 to-emerald-400" },
];

const addOns = [
  { label: "Moisturizer Only", price: "$6" },
  { label: "Legs Only", price: "$10" },
  { label: "Face Only", price: "$10" },
  { label: "Add Legs to a Session", price: "$5" },
];

export default function UVFreeVersaPage() {
  return (
    <>
      <PageHero
        title="UV-Free Versa Pro"
        crumb="UV Free Spray"
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

        <div className="container-page">
          {/* Logo */}
          <div className="reveal mb-12 text-center">
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
              <Image
                src="/img/uv-free-versa/versaspapro-logo.jpeg"
                alt="VersaSpa Pro logo"
                width={694}
                height={286}
                className="h-auto w-full"
              />
            </div>
            {/* Tagline */}
            <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl text-slate-700 italic md:text-3xl">
              Step into a private, automated spray tan booth for a gorgeous glow in 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Featured Video with Bubble */}
            <div className="reveal lg:col-span-7">
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
            </div>

            <div className="space-y-6 lg:col-span-5">
              {/* Features Bullet List */}
              <div className="reveal card p-6 sm:p-7">
                <ul className="space-y-3.5">
                  {versaSpaFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <LuCircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Pricing */}
              <div className="reveal overflow-hidden rounded-3xl bg-slate-950 p-6 text-slate-300 shadow-xl sm:p-7">
                <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-300 uppercase">
                  <LuTag className="h-4 w-4" aria-hidden="true" />
                  Add-ons
                </p>
                <div className="space-y-3">
                  {addOns.map((item) => (
                    <p key={item.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <span>{item.label}</span>{" "}
                      <span className="rounded-full bg-orange-500/15 px-3 py-0.5 font-semibold text-orange-300">{item.price}</span>
                    </p>
                  ))}
                </div>
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

          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Wellfit Main Image */}
            <div className="reveal lg:sticky lg:top-28 lg:col-span-5">
              <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                <Image
                  src="/img/wellfit/wellfitimage.png"
                  alt="VersaSpa Wellfit"
                  width={1440}
                  height={1920}
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="h-auto w-full rounded-[1.6rem]"
                />
              </div>
            </div>

            {/* WellFit Product Bubbles */}
            <div className="space-y-6 lg:col-span-7">
              {wellfitProducts.map((product, index) => {
                const theme = productThemes[index];
                return (
                  <div
                    key={index}
                    className={`reveal relative overflow-hidden rounded-3xl bg-gradient-to-br p-6 shadow-lg ring-1 sm:p-8 ${theme.card}`}
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.bar}`} />
                    <h4 className={`mb-3 text-2xl font-bold ${theme.title}`}>{product.name}</h4>
                    <p className="mb-5 text-slate-700">{product.description}</p>
                    <div>
                      <p className="mb-3 font-semibold text-slate-800">Benefits:</p>
                      <ul className="space-y-2.5">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${theme.dot}`}></span>
                            <span className="text-sm text-slate-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Section */}
          <div className="reveal mx-auto mt-16 max-w-3xl">
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
