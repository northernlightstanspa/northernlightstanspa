import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HalotherapySaunaPage() {
  const images = [
    "/img/halotherapy-sauna/image2.png",

    "/img/halotherapy-sauna/image3.png",

    "/img/halotherapy-sauna/image1.png",
    "/img/halotherapy-sauna/image0.png",

    "/img/halotherapy-sauna/image4.png",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
       <section className="relative h-48 md:h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/home_hero_bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
            Halotherapy (dry salt) Infrared Sauna
          </h1>
        </section>


        {/* Gallery Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Custom Layout */}
            <div className="space-y-6">
              {/* Row 1: Images 1 and 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.slice(0, 2).map((src, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-96 md:h-[500px]">
                      <Image
                        src={src}
                        alt={`Halotherapy Sauna View ${index + 1}`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Corner Badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Images 3 and 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.slice(2, 4).map((src, index) => (
                  <div 
                    key={index + 2} 
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-96 md:h-[500px]">
                      <Image
                        src={src}
                        alt={`Halotherapy Sauna View ${index + 3}`}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Corner Badge */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                        {index + 3}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3: Image 5 (Centered) */}
              <div className="flex justify-center">
                <div className="w-full md:w-1/2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={images[4]}
                      alt="Halotherapy Sauna View 5"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      5
                    </div>
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
