"use client";

import Image from "next/image";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/home_hero_bg.jpg')",
        }}
      >
        {/* Gradient overlay to match the sunset feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400/30 via-transparent to-cyan-400/30"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        {/* Logo and Welcome Text */}
        <div className="text-center mb-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/img/Fiverr Premium Kit/PNG Logo Files/Transparent Logo.png"
              alt="Northern Lights Tan & Wellness"
              width={400}
              height={300}
              className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
            />
          </div>
          {/* Walk-In Message */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 inline-block shadow-lg">
            <p className="text-lg md:text-xl font-bold text-black">
              Convenient <span className="text-black">Walk-In</span> Spa • <span className="text-black">No Appointments Necessary</span>
            </p>
          </div>

          {/* About Us Bubble */}
          <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-6 inline-block shadow-2xl max-w-3xl">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              For over 25 years, Northern Lights Tan and Wellness has been Ozaukee County's premier tanning facility.  In 2025, we added medical grade wellness options including the Poly targeted Red light therapy, the SST Full Body Red Light Therapy, the Halotherapy (dry salt) Infrared Sauna and more. It is our goal to continue to provide state-of-the-art equipment utilizing the latest technology as well as the most trusted and effective products on the market.  This, along with our commitment to caring and knowledgeable customer service, ensures that each client receives an experience that is both results driven and blissful. We look forward to serving you and helping you reach your tanning and wellness goals!
            </p>
          </div>
        </div>

       
        
      </div>
    </section>
  );
}
