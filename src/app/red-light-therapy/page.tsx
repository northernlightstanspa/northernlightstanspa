import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RedLightTherapyPage() {
  const benefits = [
    "Stimulates Collagen, ATP Production",
    "Reduces Fine Lines and Wrinkles",
    "Use on the Entire Body",
    "Lifts, Firms, Tones and Repairs!",
    "Age Spots, Stretch Marks, Crepe Skin",
    "Results in 4-8 Sessions",
    "Reduces bacteria associated with acne for clearer complexion",
    "Increases circulation",
    "Improves wound healing, reduces pain, and improves recovery from injury",
    "Reduces inflammation",
    "Can help some skin conditions such as eczema, psoriasis & rosacea",
  ];

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
              Targeted Red Light Therapy
            </h1>
          </div>
        </section>

     
        {/* Benefits Section */}
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
          
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* POLY Logo */}
            <div className="mb-4">
              <Image
                src="/img/red-light-therapy/poly-logo.png"
                alt="POLY Logo"
                width={150}
                height={50}
                className="mx-auto h-12 w-auto"
              />
            </div>
            
            <p className="text-gray-700 text-lg mb-1">*Poly Red Light Therapy!</p>
            <p className="text-gray-500 text-sm mb-4">*FDA Cleared, FDA Registered. Backed by Science</p>
            
            <h2 className="text-2xl md:text-3xl text-gray-800 font-medium mb-2">
              Red Light Energy
            </h2>
            <p className="text-xl md:text-2xl text-gray-700">
              Skin Rejuvenation and Repair for the Entire Body
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                poster="/img/red-light-therapy/poly-red-face.jpg"
                controls
              >
                <source src="/img/red-light-therapy/promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 underline decoration-gray-400 underline-offset-4 mb-8">
              Rejuvenates Skin Naturally
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <div className="space-y-3 text-gray-700">
                {benefits.map((benefit, index) => (
                  <p key={index} className="text-sm md:text-base">
                    *{benefit}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
