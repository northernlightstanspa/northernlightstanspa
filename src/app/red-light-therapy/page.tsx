import Image from "next/image";
import { LuBadgeCheck, LuCircleCheck } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

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
    <>
      <PageHero title="Targeted Red Light Therapy" crumb="Poly Red Light Therapy" eyebrow="Wellness" />

      {/* Intro + Video */}
      <section className="section">
        <Bubbles />

        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="reveal text-center lg:col-span-5 lg:text-left">
              {/* POLY Logo */}
              <div className="mb-6 inline-flex rounded-2xl bg-white px-6 py-4 shadow-md ring-1 ring-slate-900/5">
                <Image
                  src="/img/red-light-therapy/poly-logo.png"
                  alt="POLY Logo"
                  width={152}
                  height={38}
                  className="h-10 w-auto"
                />
              </div>

              <p className="mb-2 text-lg text-slate-700">*Poly Red Light Therapy!</p>
              <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm text-red-700 ring-1 ring-red-200">
                <LuBadgeCheck className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                *FDA Cleared, FDA Registered. Backed by Science
              </p>

              <h2 className="mb-3 font-serif text-4xl text-slate-900 md:text-5xl">Red Light Energy</h2>
              <p className="text-xl text-slate-600 md:text-2xl">
                Skin Rejuvenation and Repair for the Entire Body
              </p>
              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 lg:mx-0" />
            </div>

            <div className="reveal lg:col-span-7">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-red-500 via-orange-500 to-amber-400 p-1 shadow-2xl shadow-red-500/20">
                <div className="overflow-hidden rounded-[1.6rem] bg-black">
                  <video
                    className="aspect-video h-full w-full object-cover"
                    poster="/img/red-light-therapy/poly-red-face.jpg"
                    controls
                    preload="metadata"
                  >
                    <source src="/img/red-light-therapy/promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 md:mt-28">
            <SectionHeading className="reveal mb-10" title="Rejuvenates Skin Naturally" />

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="reveal card card-hover flex items-start gap-4 p-5 text-sm text-slate-700 md:text-base"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-400 text-white shadow-md shadow-red-500/25">
                    <LuCircleCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="pt-1.5">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
