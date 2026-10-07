import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuSparkles, LuTimer, LuSmile } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

const highlights = [
  { icon: LuSmile, value: "2-8", label: "shades whiter" },
  { icon: LuTimer, value: "15", label: "minutes, guaranteed" },
  { icon: LuSparkles, value: "+10", label: "min with Bluminerals" },
];

export default function BleachBrightPage() {
  return (
    <>
      <PageHero title="BleachBright" subtitle={<h2>Professional Teeth Whitening</h2>} />

      {/* Content Section */}
      <section className="section">
        <Bubbles />
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Device Image */}
            <div className="reveal flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-orange-300/40 to-cyan-300/40 blur-2xl" />
                <div className="relative rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-400 to-orange-500 p-1 shadow-2xl shadow-orange-500/20">
                  <div className="rounded-[1.8rem] bg-white p-5">
                    <Image
                      src="/img/bleachbright/bleachbright-image.png"
                      alt="BB-Cool Advanced III LED Light Device"
                      width={400}
                      height={647}
                      className="h-auto max-h-[32rem] w-auto max-w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="reveal">
              <p className="eyebrow mb-5">LED Blue Light Technology</p>
              <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                <span className="font-semibold text-orange-500">The BleachBright BB-Cool Advanced III LED light</span>{" "}
                is the finest bleaching system money can buy. This teeth whitening lamp harnesses LED blue light
                technology to deliver 2-8 shades whiter in just 15 minutes guaranteed! It accelerates the teeth
                whitening process giving you fast, immediate results on the spot.
              </p>
              <p className="mt-5 flex items-start gap-3 rounded-2xl bg-white/70 px-5 py-4 text-slate-700 ring-1 ring-cyan-200">
                <LuSparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" aria-hidden="true" />
                10 more minutes to lock in the whitening with Bluminerals.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {highlights.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="card px-3 py-5 text-center">
                    <Icon className="mx-auto h-5 w-5 text-orange-500" aria-hidden="true" />
                    <p className="mt-2 font-serif text-3xl text-slate-900">{value}</p>
                    <p className="mt-1 text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              <Link href="/pricing" className="btn btn-primary mt-8">
                View Pricing
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* BB-Cool Advanced III LED Light Banner */}
          <div className="reveal mx-auto mt-16 max-w-3xl">
            <div className="card p-4 sm:p-6">
              <Image
                src="/img/bleachbright/bb-pic.png"
                alt="BB-Cool Advanced III LED Light"
                width={700}
                height={182}
                className="mx-auto h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
