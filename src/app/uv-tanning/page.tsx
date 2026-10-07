"use client";
import Image from "next/image";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuCircleCheck, LuTimer } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

type TanningBed = {
  name: string;
  image?: string;
  images?: string[];
  features?: string[];
  maxTime?: string;
  description?: string;
};

type Tier = {
  name: string;
  /** Matches the tier colors on the Membership Plans cards. */
  color: string;
  beds: TanningBed[];
};

const tanningBeds: Tier[] = [
  {
    name: "Platinum",
    color: "from-purple-600 to-indigo-600",
    beds: [

      {
        name: "KBL P9S",
        image: "/img/uv-tanning/KBL-P9S/img.JPG",
        description: "The P9S's innovative LED-based Sunsphere system only uses high end NEW technology featuring BLUE UVA LED's generating excellent direct pigmentation for an immediately visible tan without the \"reddening effect\",   RED LED's to provide skin care during your tanning session and YELLOW UVB special lamps which builds your pigment making this bed the PERFECT COMBINATION to receive the ultimate TAN!\nAdditionally,  you can customize the settings to how YOU like them with our easy to navigate touch screen! Choose from 3 levels of UV intensity, , voice guided, wireless charging, aqua and aroma therapy mist, full body air conditioning and of course RED light therapy to increase hydration as well as revitalize, relax, and detox the skin during your tanning session!",
        features: [
          "3 levels of UV intensity",
          "Wireless charging",
          "Voice guided",
          "Aqua mist",
          "Aromatherapy mist",
          "Full body air conditioning"
        ],
        maxTime: "10 Min Max"
      },
      {
        name: "Matrix L-33",
        image: "/img/uv-tanning/Platinum/img.png",
        features: [
          "Low UVB reduces chance of reddening",
          "Voice Guided",
          "Body cooling ventilation",
          "Base tan achieved in 3-5 sessions"
        ],
        maxTime: "12 min max"
      }
    ]
  },
  {
    name: "Titanium",
    color: "from-gray-500 to-gray-700",
    beds: [
      {
        name: "Sunscape 755",
        image: "/img/uv-tanning/Titanium/img.jpg",
        features: [
          "High Pressure Facials",
          "Shoulder tanners",
          "Body cooling ventilation",
          "Wide contoured acrylic",
          "Base tan achieved in 5-7 sessions"
        ],
        maxTime: "10 min max"
      },
      {
        name: "Ergoline Classic 600",
        image: "/img/uv-tanning/Titanium/Ergoline-600.png",
        features: [
          "High Pressure Facials",
          "Shoulder tanners",
          "Body cooling ventilation",
          "Wide contoured acrylic",
          "Base tan achieved in 5-7 sessions"
        ],
        maxTime: "15 min max"
      },
      {
        name: "Ovation 6400",
        images: [
          "/img/uv-tanning/ovation/B_800x800_6400_2.png",
          "/img/uv-tanning/ovation/B_800x800_6400_4.png"
        ],
        features: [
          "High Pressure Facials",
          "Shoulder tanners",
          "Body cooling ventilation",
          "Wide contoured acrylic",
          "Base tan achieved in 5-7 sessions"
        ],
        maxTime: "12 min max"
      }
    ]
  },
  {
    name: "Gold",
    color: "from-yellow-500 to-amber-600",
    beds: [
      {
        name: "Ovation 5400",
        images: [
          "/img/uv-tanning/ovation/B_800x800_5400_2.png",
          "/img/uv-tanning/ovation/B_800x800_5400_3.png"
        ],
        features: [
          "High pressure facials",
          "Powerful body cooling fans",
          "Wide comfortable acrylic",
          "Base tan achieved in 7+ sessions"
        ],
        maxTime: "12 min max"
      },
      {
        name: "Sundazzler Stand Up",
        image: "/img/uv-tanning/Gold-Stand-Up/img.jpg",
        features: [
          "Powerful body cooling fans",
          "Great for even tanning with no pressure points",
          "Base tan achieved in 7+ sessions"
        ],
        maxTime: "11 min max"
      }
    ]
  },
  {
    name: "Silver",
    color: "from-slate-400 to-slate-600",
    beds: [
      {
        name: "Mohave 3200",
        image: "/img/uv-tanning/Silver/Mojave-image.png",
        features: [
          "Entry level design",
          "Budget friendly",
          "Base tan achieved in 10+ sessions"
        ],
        maxTime: "20 min max"
      }
    ]
  }
];

export default function UVTanningPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: string]: boolean}>({});

  const nextImage = (bedKey: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [bedKey]: ((prev[bedKey] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (bedKey: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [bedKey]: ((prev[bedKey] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <>
      <PageHero title="UV Tanning" />

      {/* Tanning Beds Section */}
      <section className="section">
        <Bubbles />

        <div className="container-page">
          {/* Tier quick links */}
          <nav aria-label="Tanning levels" className="reveal mb-14 flex flex-wrap justify-center gap-3">
            {tanningBeds.map((tier) => (
              <a
                key={tier.name}
                href={`#${tier.name.toLowerCase()}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white/80 py-2 pr-5 pl-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md hover:ring-orange-300"
              >
                <span className={`h-7 w-7 rounded-full bg-gradient-to-br ${tier.color} shadow-inner`} />
                {tier.name}
                <span className="text-xs font-normal text-slate-400">
                  {tier.beds.length} {tier.beds.length === 1 ? "bed" : "beds"}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-20 md:space-y-24">
            {tanningBeds.map((tier) => (
              <div key={tier.name} id={tier.name.toLowerCase()} className="scroll-mt-28">
                {/* Tier heading */}
                <div className="reveal mb-8 flex items-center gap-4">
                  <span className={`h-12 w-1.5 rounded-full bg-gradient-to-b ${tier.color}`} />
                  <h2 className="font-serif text-4xl text-black md:text-5xl">{tier.name}</h2>
                  <div className="ml-2 h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {tier.beds.map((subBed, bIndex) => {
                    const bedKey = `${tier.name}-${subBed.name}`;
                    const images: string[] = subBed.images || (subBed.image ? [subBed.image] : []);
                    const currentIndex = currentImageIndex[bedKey] || 0;
                    // A lone last card spans the row and lays out horizontally.
                    const wide = tier.beds.length % 2 === 1 && bIndex === tier.beds.length - 1;

                    return (
                      <article
                        key={bIndex}
                        className={`reveal card card-hover flex flex-col overflow-hidden ${
                          wide ? "md:col-span-2 md:flex-row" : ""
                        }`}
                      >
                        {/* Sub-bed Image */}
                        <div className={`flex-shrink-0 p-2 ${wide ? "md:w-1/2" : ""}`}>
                          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-gradient-to-b from-white to-slate-100">
                            <Image
                              src={images[currentIndex]}
                              alt={`${subBed.name} - Image ${currentIndex + 1}`}
                              fill
                              sizes="(min-width: 768px) 40vw, 100vw"
                              className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            <span
                              className={`absolute top-3 left-3 rounded-full bg-gradient-to-r ${tier.color} px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase shadow-md`}
                            >
                              {tier.name}
                            </span>
                            {images.length > 1 && (
                              <>
                                {/* Previous Button */}
                                <button
                                  onClick={() => prevImage(bedKey, images.length)}
                                  className="absolute top-1/2 left-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
                                  aria-label="Previous image"
                                >
                                  <LuChevronLeft className="h-5 w-5" aria-hidden="true" />
                                </button>
                                {/* Next Button */}
                                <button
                                  onClick={() => nextImage(bedKey, images.length)}
                                  className="absolute top-1/2 right-3 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 md:opacity-0 md:group-hover:opacity-100"
                                  aria-label="Next image"
                                >
                                  <LuChevronRight className="h-5 w-5" aria-hidden="true" />
                                </button>
                                {/* Dots Indicator */}
                                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-2.5 py-1.5 backdrop-blur">
                                  {images.map((_: string, idx: number) => (
                                    <button
                                      key={idx}
                                      onClick={() => setCurrentImageIndex(prev => ({ ...prev, [bedKey]: idx }))}
                                      className={`h-2 rounded-full transition-all ${
                                        idx === currentIndex
                                          ? 'w-6 bg-white'
                                          : 'w-2 bg-white/50 hover:bg-white/75'
                                      }`}
                                      aria-label={`Go to image ${idx + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Sub-bed Content */}
                        <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? "md:justify-center" : ""}`}>
                          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <h3 className="text-2xl font-semibold text-slate-800">{subBed.name}</h3>
                            {subBed.maxTime && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25">
                                <LuTimer className="h-4 w-4" aria-hidden="true" />
                                {subBed.maxTime}
                              </span>
                            )}
                          </div>
                          {subBed.description && (
                            <div className="mb-5 text-sm leading-relaxed text-slate-600">
                              <p className="mb-2 whitespace-pre-line">
                                {expandedDescriptions[bedKey] ? subBed.description : subBed.description.substring(0, 150) + "..."}
                              </p>
                              <button
                                onClick={() => setExpandedDescriptions(prev => ({ ...prev, [bedKey]: !prev[bedKey] }))}
                                className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                                aria-expanded={!!expandedDescriptions[bedKey]}
                              >
                                {expandedDescriptions[bedKey] ? "See Less" : "See More"}
                              </button>
                            </div>
                          )}
                          {subBed.features && (
                            <ul className={`grid gap-2.5 text-sm text-slate-600 ${wide ? "" : "sm:grid-cols-2"}`}>
                              {subBed.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-2">
                                  <LuCircleCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" aria-hidden="true" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
