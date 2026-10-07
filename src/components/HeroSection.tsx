import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuChevronDown } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";

const highlights = [
  { value: "25+", label: "Years in Ozaukee County" },
  { value: "2025", label: "Medical grade wellness added" },
  { value: "Walk-In", label: "No appointments necessary" },
];

export default function HeroSection() {
  return (
    <>
      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <section className="relative isolate flex min-h-[calc(100svh-8.5rem)] items-center justify-center overflow-hidden rounded-[1.75rem] bg-slate-950 sm:rounded-[2.5rem]">
          {/* Background Image */}
          <Image
            src="/img/home_hero_bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[65%_center]"
          />
          {/* Gradient overlay to match the sunset feel */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-400/30 via-transparent to-cyan-400/30" />
          {/* Dark overlay */}
          <div className="absolute inset-0 -z-10 bg-black/40" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,6,23,0.55)_100%)]" />

          {/* Content */}
          <div className="relative mx-auto max-w-5xl px-4 py-16 text-center">
            {/* Logo */}
            <div className="animate-fade-in-up flex justify-center">
              <Image
                src="/img/Fiverr Premium Kit/PNG Logo Files/Transparent Logo.png"
                alt="Northern Lights Tan & Wellness"
                width={400}
                height={300}
                priority
                className="w-full max-w-md drop-shadow-2xl md:max-w-xl"
              />
            </div>

            {/* Walk-In Message */}
            <div
              className="animate-fade-in-up mt-2 inline-flex items-center gap-3 rounded-2xl bg-white/90 px-5 py-2.5 shadow-lg shadow-black/20 backdrop-blur-sm sm:rounded-full sm:px-6"
              style={{ animationDelay: "150ms" }}
            >
              <span className="relative hidden h-2.5 w-2.5 flex-shrink-0 sm:flex">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-base font-bold text-black md:text-xl">
                Convenient <span className="text-black">Walk-In</span> Spa •{" "}
                <span className="text-black">No Appointments Necessary</span>
              </p>
            </div>

            {/* Calls to action */}
            <div
              className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Link href="#services" className="btn btn-primary w-full sm:w-auto">
                Explore Services
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/pricing" className="btn btn-glass w-full sm:w-auto">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Scroll cue */}
          <a
            href="#welcome"
            aria-label="Scroll to learn more"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold tracking-[0.3em] text-white/70 uppercase transition hover:text-white sm:flex"
          >
            Scroll
            <LuChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
          </a>
        </section>
      </div>

      {/* About Us */}
      <section id="welcome" className="section">
        <Bubbles />
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="reveal lg:col-span-5">
              <p className="eyebrow">Welcome</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                Northern Lights <span className="gradient-text block">Tan &amp; Wellness</span>
              </h2>
              <div className="accent-rule mt-6" />

              <dl className="mt-10 grid grid-cols-3 gap-3">
                {highlights.map((item) => (
                  <div key={item.value} className="card px-3 py-5 text-center sm:px-4">
                    <dt className="sr-only">{item.label}</dt>
                    <dd className="font-serif text-2xl text-orange-500 sm:text-3xl">{item.value}</dd>
                    <dd className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* About Us Bubble */}
            <div className="reveal lg:col-span-7">
              <div className="card relative overflow-hidden p-7 sm:p-10">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-6 font-serif text-[9rem] leading-none text-orange-500/10"
                >
                  &ldquo;
                </span>
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-500 via-amber-400 to-cyan-400" />
                <p className="relative text-lg leading-relaxed font-medium text-slate-800 md:text-xl">
                  For over 25 years, Northern Lights Tan and Wellness has been Ozaukee County&apos;s premier tanning facility.
                </p>
                <p className="relative mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                  In 2025, we added medical grade wellness options including the Poly targeted Red light therapy, the SST Full Body Red Light Therapy, the Halotherapy (dry salt) Infrared Sauna and more. It is our goal to continue to provide state-of-the-art equipment utilizing the latest technology as well as the most trusted and effective products on the market.
                </p>
                <p className="relative mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                  This, along with our commitment to caring and knowledgeable customer service, ensures that each client receives an experience that is both results driven and blissful. We look forward to serving you and helping you reach your tanning and wellness goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
