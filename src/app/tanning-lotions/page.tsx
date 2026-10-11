import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brands = [
  { name: "Australian Gold", image: "/img/tanning-lotions/australian-gold.png", darkBg: false },
  { name: "Swedish Beauty", image: "/img/tanning-lotions/swedish-beauty.jpg", darkBg: false },
  { name: "California Tan", image: "/img/tanning-lotions/california-tan.gif", darkBg: false },
  { name: "Designer Skin", image: "/img/tanning-lotions/designer-skin-white-logo.png", darkBg: true },
  { name: "RestoRED", image: "/img/tanning-lotions/restored-logo.jpg", darkBg: false }
];

export default function TanningLotionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-32 md:h-48">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/60 via-orange-300/40 to-cyan-400/50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>

              Tanning Lotions
            </h1>
          </div>
        </section>

       
        {/* Brand Cards Grid */}
        <section className="py-12 relative overflow-hidden">
           <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="inline-block mb-2">
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Premium Quality</span>
            </div>
                        <div className="w-24 h-1  bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          
            <h3 className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
              We proudly offer premium lotion and skin care products from these top-level brands. 
            </h3>

          </div>
           {/* Decorative background bubbles */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full -mr-32 -mt-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200/30 rounded-full border-2 border-cyan-300/40 -z-10"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-100/40 rounded-full -ml-20 border-4 border-teal-200/30 -z-10"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-sky-200/30 rounded-full border-2 border-sky-300/40 -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
      
          <div className="max-w-6xl mx-auto px-4 pt-20">
            <div className="flex flex-wrap justify-center gap-8">
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className={`group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border hover:border-amber-200 hover:-translate-y-1 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] ${
                    brand.darkBg 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="h-32 relative flex items-center justify-center mb-4">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className={`text-center pt-4 border-t ${brand.darkBg ? 'border-gray-700' : 'border-gray-100'}`}>
                    <h3 className={`font-medium ${brand.darkBg ? 'text-white' : 'text-gray-700'}`}>{brand.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      </main>
      <Footer />
    </div>
  );
}
