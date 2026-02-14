import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
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
              About Us
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
              <hr className="border-gray-200 mb-8" />
              <h2 className="text-xl md:text-2xl text-gray-700">
                &quot;Smart Tanning&quot; at Northern Lights Tan Spa Inc.
              </h2>
              <hr className="border-gray-200 mt-8" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 md:w-80">
                  <Image
                    src="/img/aboutus/img.jpg"
                    alt="Smart Tanning"
                    width={320}
                    height={480}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Text */}
              <div className="text-sm text-gray-600 leading-relaxed space-y-4">
                <p>
                  Indoor tanning, for those who can tan, is an intelligent way to minimize the risk of sunburn while maximizing the enjoyment and benefit of having a tan.We call this &quot;smart tanning&quot; because all our tanning clients are personally coached by our trained spa personnel in order to understand how their skin type will react to sunlight and how to avoid sunburn, both indoors and out.
                </p>
                
                <p>
                  Tanning, as an industry, is also regulated by the government. Exposure times for every tanning session are established by a pre-set exposure schedule that takes into account a tanner&apos;s skin type and intensity of the tanning equipment. This schedule, regulated by the Food and Drug Administration (FDA), also considers how long an individual has been tanning, increasing exposure times gradually to minimize the possibility of burning. At Northern Lights, we adhere to the FDA&apos;s schedule that helps us deliver a set dosage of sunlight designed to minimize the risk of sunburn.
                </p>

                <p>
                  This kind of exposure control is impossible outdoors, where variables-seasonality, time of day, weather conditions, reflective surfaces, and altitude-all make outdoor tanning a random act and sunburn prevention more difficult.
                </p>

                <p>
                  By following the FDA&apos;s prescribed exposure schedules, Northern Lights Tan Spa helps bring you safe, regulated tanning sessions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
