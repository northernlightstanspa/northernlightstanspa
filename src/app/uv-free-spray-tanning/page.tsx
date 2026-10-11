"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function UVFreeVersaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-36 md:h-44">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/70 to-cyan-400/50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
                UV-Free Versa Pro
              </h1>
              <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>&amp;</p>
              <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
                Versa Pro Wellfit
              </p>
            </div>
          </div>
        </section>

        {/* Versa Spa Pro Section */}
        <section className="py-12 relative overflow-hidden">
          {/* Decorative background bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full -mr-32 -mt-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200/30 rounded-full border-2 border-cyan-300/40 -z-10"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-100/40 rounded-full -ml-20 border-4 border-teal-200/30 -z-10"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-sky-200/30 rounded-full border-2 border-sky-300/40 -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
          <div className="absolute top-1/2 right-10 w-48 h-48 bg-blue-100/35 rounded-full border-3 border-blue-200/40 -z-10"></div>
          <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-teal-200/40 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute top-3/4 right-1/4 w-52 h-52 bg-sky-200/35 rounded-full border-3 border-sky-300/40 -z-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-blue-300/30 rounded-full border-2 border-blue-400/40 -z-10"></div>
          <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-cyan-100/40 rounded-full border-4 border-cyan-200/30 -z-10"></div>
          <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-teal-200/30 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full -ml-32 -mb-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100/40 rounded-full -mr-24 -mb-24 border-4 border-sky-200/30 -z-10"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="max-w-lg mx-auto">
                <Image
                  src="/img/uv-free-versa/versaspapro-logo.jpeg"
                  alt="VersaSpa Pro logo"
                  width={600}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
              {/* Tagline */}
              <p className="mt-6 text-lg md:text-xl text-gray-700 italic">
                Step into a private, automated spray tan booth for a gorgeous glow in 5 minutes.
              </p>
            </div>

            {/* Featured Video with Bubble */}
            <div className="relative mb-12">
              <div className="relative w-full max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-orange-100 via-white to-cyan-100 p-6 md:p-8 rounded-3xl shadow-xl border border-orange-200/50">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster="/img/uv-free-versa/versaspa-model.jpeg"
                    >
                      <source src="/img/uv-free-versa/versaspa-pro-consumer-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Bullet List */}
            <div className="max-w-2xl mx-auto mb-12">
              <ul className="space-y-3">
                {versaSpaFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Pricing */}
            <div className="max-w-md mx-auto mb-12">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between"><span>Moisturizer Only</span> <span className="font-semibold">$6</span></p>
                  <p className="flex justify-between"><span>Legs Only</span> <span className="font-semibold">$10</span></p>
                  <p className="flex justify-between"><span>Face Only</span> <span className="font-semibold">$10</span></p>
                  <p className="flex justify-between"><span>Add Legs to a Session</span> <span className="font-semibold">$5</span></p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-12 border-gray-200" />

            {/* Wellfit Section */}
            <div className="text-center ">
              {/* Wellfit Logo */}
              <div className="max-w-md mx-auto ">
                <Image
                  src="/img/uv-free-versa/wellfit-logo-black.png"
                  alt="VersaSpa Wellfit Logo"
                  width={600}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              {/* Wellfit Main Image */}
              <div className="max-w-3xl mx-auto mt-8">
                <Image
                  src="/img/wellfit/wellfitimage.png"
                  alt="VersaSpa Wellfit"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* WellFit Product Bubbles */}
            <div className="max-w-3xl mx-auto mt-10 mb-12 space-y-6">
              {wellfitProducts.map((product, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl shadow-lg border ${
                    index === 0 
                      ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50' 
                      : index === 1 
                        ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200/50'
                        : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50'
                  }`}
                >
                  <h4 className={`font-bold text-xl mb-3 ${
                    index === 0 
                      ? 'text-blue-800' 
                      : index === 1 
                        ? 'text-purple-800'
                        : 'text-green-800'
                  }`}>
                    {product.name}
                  </h4>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Benefits:</p>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className={`flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full ${
                            index === 0 
                              ? 'bg-blue-500' 
                              : index === 1 
                                ? 'bg-purple-500'
                                : 'bg-green-500'
                          }`}></span>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <div className="p-2">
                 
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/mk_5do8_yEU?si=_3htS4MSUR3env-O" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
