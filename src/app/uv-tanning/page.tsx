"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TanningBed = {
  name: string;
  image?: string;
  images?: string[];
  features?: string[];
  maxTime?: string;
  beds?: TanningBed[];
};

const tanningBeds: TanningBed[] = [
  {
    name: "Platinum",
    image: "/img/uv-tanning/Platinum/img.gif",
    features: [
      "Low UVB reduces chance of reddening",
      "Voice Guided",
      "Body cooling ventilation",
      "Base tan achieved in 3-5 sessions"
    ],
    maxTime: "12 min max"
  },
  {
    name: "Titanium",
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-32 md:h-40">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/70 to-cyan-400/50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "Bellefair, serif" }}>
              UV Tanning
            </h1>
          </div>
        </section>

        {/* Tanning Beds Section */}
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
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            {tanningBeds.map((bed, index) => (
              <div key={index} className="mb-8 p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Image */}
                  {!bed.beds && bed.image && (
                    <div className="w-full md:w-2/5 flex-shrink-0">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={bed.image}
                          alt={bed.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: "Bellefair, serif" }}>
                      {bed.name}
                    </h2>
                    
                    {bed.features && (
                      <ul className="space-y-2 text-sm text-gray-600">
                        {bed.maxTime && (
                          <li className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">{bed.maxTime}</span>
                          </li>
                        )}
                        {bed.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {bed.beds && (
                      <div className="space-y-6">
                        {bed.beds.map((subBed, bIndex) => {
                          const bedKey = `${bed.name}-${subBed.name}`;
                          const images: string[] = subBed.images || (subBed.image ? [subBed.image] : []);
                          const currentIndex = currentImageIndex[bedKey] || 0;
                          
                          return (
                          <div key={bIndex} className="flex flex-col md:flex-row gap-6 items-start p-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-md">
                            {/* Sub-bed Image */}
                            <div className="w-full md:w-1/2 flex-shrink-0">
                              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                                <Image
                                  src={images[currentIndex]}
                                  alt={`${subBed.name} - Image ${currentIndex + 1}`}
                                  fill
                                  className="object-contain"
                                />
                                {images.length > 1 && (
                                  <>
                                    {/* Previous Button */}
                                    <button
                                      onClick={() => prevImage(bedKey, images.length)}
                                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                      aria-label="Previous image"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                      </svg>
                                    </button>
                                    {/* Next Button */}
                                    <button
                                      onClick={() => nextImage(bedKey, images.length)}
                                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                                      aria-label="Next image"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                      </svg>
                                    </button>
                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                      {images.map((_: string, idx: number) => (
                                        <button
                                          key={idx}
                                          onClick={() => setCurrentImageIndex(prev => ({ ...prev, [bedKey]: idx }))}
                                          className={`w-2 h-2 rounded-full transition-all ${
                                            idx === currentIndex
                                              ? 'bg-white w-6'
                                              : 'bg-white/50 hover:bg-white/75'
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
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-700 mb-3 text-lg underline">
                                {subBed.name}
                              </h3>
                              {subBed.features && (
                              <ul className="space-y-2 text-sm text-gray-600">
                                {subBed.maxTime && (
                                  <li className="flex items-start gap-2">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">{subBed.maxTime}</span>
                                  </li>
                                )}
                                {subBed.features.map((feature, fIndex) => (
                                  <li key={fIndex} className="flex items-start gap-2">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              )}
                            </div>
                          </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  );
}
