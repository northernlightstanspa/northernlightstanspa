import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SSTRedLightTherapyPage() {
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
              SST Red Light Therapy
            </h1>
          </div>
        </section>

      
        {/* Benefits Section - Separated */}
        <section className="py-12 md:py-16 relative overflow-hidden">
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
          
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-12">
             
              <h2 className="text-3xl md:text-5xl font-bold text-red-400  mb-4">
                Smart Sun Red Light Therapy -  SST 28
              </h2>
            
            </div>

            {/* Video and Image Container */}
            <div className="relative w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              

                  {/* Image */}
                <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-red-500 p-1 rounded-2xl">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                    <img
                      src="/img/SST-Red-Light/sst-red-light-image.png"
                      alt="SST Red Light Therapy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Video Frame */}
                <div className="relative  bg-gradient-to-r from-red-500 via-orange-500 to-red-500 p-1 rounded-2xl">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                      className="w-full h-full object-contain"
                      controls
                    >
                      <source src="/img/SST-Red-Light/Video.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Play indicator text */}
              <p className="text-center text-gray-400 text-sm mt-6">
                ▶ Watch to discover the power of SST28 Red Light Therapy
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4">
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  WHY SST28? <span className="text-cyan-500">IT WORKS!</span>
                </h3>
                
                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      ✦ 28,433 RED AND NEAR-INFRARED LEDs
                    </h4>
                    <p className="text-gray-700">
                      Six times more than the leading competitor!
                    </p>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      ✦ BEST TARGETED LED LIGHT WAVES
                    </h4>
                    <p className="text-gray-700 mb-2">
                      635nm red light has been found to be the most effective wavelength for the treatment of skin and surface layers.
                    </p>
                    <p className="text-gray-700">
                      850nm near-infrared light has been shown to be the most effective wavelength for muscle and deeper tissue areas.
                    </p>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      ✦ BUILT-IN VIBRATIONAL MASSAGE
                    </h4>
                    <p className="text-gray-700">
                      The frequency used is called oxygenation, which promotes blood flow and provides a burst of energy to the user.
                    </p>
                  </div>

                  {/* Point 4 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      ✦ DISTANCE IS CRITICAL
                    </h4>
                    <p className="text-gray-700">
                      SST28&apos;s unique design gets LEDs closer to the user&apos;s skin than any other device on the market. No other device gets this close. This is important because red light energy diminishes quickly with distance and can lose as much as 60%-80% of its energy in just a few inches.
                    </p>
                  </div>

                  {/* Point 5 */}
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      ✦ DISTANCE + ENERGY = RESULTS
                    </h4>
                    <p className="text-gray-700">
                      The SST28&apos;s combination of powerful energy delivered from a close distance delivers life-changing results in as little as 10-15 minutes. Competitors require 20-60 minutes.
                    </p>
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