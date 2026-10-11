"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pricingLevels = [
  { level: "LEVEL 1 - LIGHT", price: "$27/SESSION" },
  { level: "LEVEL 2 - MEDIUM", price: "$33/SESSION" },
  { level: "LEVEL 3 - DARK", price: "$34/$35/SESSION" },
  { level: "LEVEL 4 - DOUBLE DARK", price: "$40/SESSION" },
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
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                UV-Free Versa Pro
              </h1>
              <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">&amp;</p>
              <p className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                Versa Pro Wellfit
              </p>
            </div>
          </div>
        </section>

        {/* Versa Spa Pro Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="max-w-lg mx-auto">
                <Image
                  src="/img/uv-free-versa/versaspapro-logo.jpeg"
                  alt="VersaSpa Pro - beyond tan"
                  width={600}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Main Image */}
            {/* <div className="max-w-md mx-auto mb-12">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/img/uv-free-versa/versaspa-model.jpeg"
                  alt="VersaSpa Pro Booth"
                  fill
                  className="object-cover"
                />
              </div>
            </div> */}
            {/* Featured Image with Floating Card */}
            <div className="relative mb-20">
              
              <div className="relative w-full max-w-5xl mx-auto">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                   <video
                    controls
                    className="w-full h-full object-cover"
                    poster="/img/uv-free-versa/versaspa-model.jpeg"
                  >
                    <source src="/img/uv-free-versa/versaspa-pro-consumer-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl border border-slate-100">
                  <p className="text-slate-600 text-sm font-medium">Trusted by <span className="text-teal-600 font-bold">10,000+</span> customers</p>
                </div>
              </div>
             
            </div>
            
            {/* Pricing Section */}
            <div className="max-w-md mx-auto mb-12">
              <div className="space-y-4">
                {pricingLevels.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    <p className="font-semibold text-gray-800 underline">{item.level}</p>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Solution Info */}
              <div className="mt-8 space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold underline">Bronze or Clear Solution Available</h4>
                  <p className="mt-1">
                    Choose either a Bronzed look (feels or clearer) or add... make to control how tanner (bronze).
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Clear</span> gives an even natural-at-once, striking, natural-shimmered tan coverage over the next 4-8 hours.
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Bronze</span> gives an bronze for an immediate color. Fused with a DHA setting, the self-tanning tan then develops over the next 4-8 hours.
                  </p>
                </div>
              </div>

              {/* Additional Services */}
              <div className="mt-8 space-y-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold underline">PH BALANCING PREP SPRAY</h4>
                  <p className="mt-1">
                    Start your tan with a ProSer, or for business-skin pH balance. deep-face and arms spray, it has ability to enhance UART to any session - $3
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold underline">AFTER TAN MOISTURIZER</h4>
                  <p className="mt-1">
                    Provides necessary hydration to protect help prolong your tan with coverage after tanning - Coconut skin and... and salty &quot;just-walked-in Beach&quot; features.. the mixture brings vital change and restoration of all skin at the skin. Finished with Single Note scents to help increase a luxurious Add to any session -$3
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p>Moisturizer Only $6</p>
                  <p>Legs Only $10</p>
                  <p>Face Only $10</p>
                  <p>Add Legs to a Session $5</p>
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
