"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




export default function wellfit() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
         <section className="relative h-48 md:h-56">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-400/60 via-orange-300/40 to-cyan-400/50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
              Wellfit
            </h1>
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
          
          
          <div className="max-w-6xl mx-auto px-4">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="max-w-lg mx-auto">
                <Image
                  src="/img/wellfit/wellfit-logo-black.png"
                  alt="Wellfit logo"
                  width={600}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            
            </div>

            {/* Wellfit Booth Image */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-xl overflow-hidden ">
                <Image
                  src="/img/wellfit/wellfitimage.png"
                  alt="Wellfit Booth"
                  fill
                  className="object-contain "
                />
              </div>
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

            {/* Product Images Section */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8" style={{ fontFamily: "'Bellefair', serif" }}>
                Our Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {/* Balance */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/img/wellfit/balance-image.png"
                      alt="Wellfit Balance"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800" style={{ fontFamily: "'Bellefair', serif" }}>Balance</h3>
                  </div>
                </div>

                {/* Hydrate */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/img/wellfit/hydrate-image.png"
                      alt="Wellfit Hydrate"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800" style={{ fontFamily: "'Bellefair', serif" }}>Hydrate</h3>
                  </div>
                </div>

                {/* Life */}
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-2 md:max-w-md md:mx-auto w-full">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/img/wellfit/life-image.png"
                      alt="Wellfit Life"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800" style={{ fontFamily: "'Bellefair', serif" }}>Lift</h3>
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
