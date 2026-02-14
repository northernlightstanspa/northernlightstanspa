"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function BleachBrightPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-48 md:h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/home_hero_bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
              BleachBright
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
              Professional Teeth Whitening
            </h2>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4 relative overflow-hidden">
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
          
       
          <div className=" max-w-4xl mx-auto">
          {/* Device Image */}
          <div className="flex justify-center">
            <div className="border-4 border-orange-500 rounded-2xl p-4 shadow-lg bg-white">
              <Image
                src="/img/bleachbright/bleachbright-image.png"
                alt="BB-Cool Advanced III LED Light Device"
                width={400}
                height={300}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
         
          {/* Description Text */}
          <div className="text-center mb-10 mt-10 px-4">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-500">
                The BleachBright BB-Cool Advanced III LED light
              </span>{" "}
              is the finest bleaching system money can buy. This teeth whitening
              lamp harnesses LED blue light technology to deliver 2-8 shades
              whiter in just 15 minutes guaranteed! It accelerates the teeth
              whitening process giving you fast, immediate results on the spot.
            </p>
            <p className="text-gray-700 mt-4">
              10 more minutes to lock in the whitening with Bluminerals.
            </p>
          </div>
 {/* BB-Cool Advanced III LED Light Banner */}
          <div className="flex justify-center mb-8">
            <Image
              src="/img/bleachbright/bb-pic.png"
              alt="BB-Cool Advanced III LED Light"
              width={600}
              height={100}
              className="max-w-full h-auto"
            />
          </div>

        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
