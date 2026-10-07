import Image from "next/image";
import type { ReactNode } from "react";
import { LuPlay } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

const points: { title: string; body: ReactNode }[] = [
  {
    title: "28,433 RED AND NEAR-INFRARED LEDs",
    body: <p>Six times more than the leading competitor!</p>,
  },
  {
    title: "BEST TARGETED LED LIGHT WAVES",
    body: (
      <>
        <p className="mb-2">
          635nm red light has been found to be the most effective wavelength for the treatment of skin and surface layers.
        </p>
        <p>
          850nm near-infrared light has been shown to be the most effective wavelength for muscle and deeper tissue areas.
        </p>
      </>
    ),
  },
  {
    title: "BUILT-IN VIBRATIONAL MASSAGE",
    body: (
      <p>
        The frequency used is called oxygenation, which promotes blood flow and provides a burst of energy to the user.
      </p>
    ),
  },
  {
    title: "DISTANCE IS CRITICAL",
    body: (
      <p>
        SST28&apos;s unique design gets LEDs closer to the user&apos;s skin than any other device on the market. No other device gets this close. This is important because red light energy diminishes quickly with distance and can lose as much as 60%-80% of its energy in just a few inches.
      </p>
    ),
  },
  {
    title: "DISTANCE + ENERGY = RESULTS",
    body: (
      <p>
        The SST28&apos;s combination of powerful energy delivered from a close distance delivers life-changing results in as little as 10-15 minutes. Competitors require 20-60 minutes.
      </p>
    ),
  },
];

export default function SSTRedLightTherapyPage() {
  return (
    <>
      <PageHero title="SST Red Light Therapy" eyebrow="Wellness" />

      {/* Benefits Section - Separated */}
      <section className="section">
        <Bubbles />

        <div className="container-page">
          {/* Heading */}
          <div className="reveal mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text font-serif text-4xl text-transparent md:text-6xl">
              Smart Sun Red Light Therapy -  SST 28
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />
          </div>

          {/* Video and Image Container */}
          <div className="relative mx-auto w-full">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Image */}
              <div className="reveal relative rounded-[1.75rem] bg-gradient-to-r from-red-500 via-orange-500 to-red-500 p-1 shadow-2xl shadow-red-500/20">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-black">
                  <Image
                    src="/img/SST-Red-Light/sst-red-light-image.png"
                    alt="SST Red Light Therapy"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Video Frame */}
              <div className="reveal relative rounded-[1.75rem] bg-gradient-to-r from-red-500 via-orange-500 to-red-500 p-1 shadow-2xl shadow-red-500/20">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-black">
                  <video className="h-full w-full object-contain" controls preload="metadata">
                    <source src="/img/SST-Red-Light/Video.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Play indicator text */}
            <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
              <span className="play-btn flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
                <LuPlay className="ml-0.5 h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>
                <span className="sr-only">▶ </span>Watch to discover the power of SST28 Red Light Therapy
              </span>
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-5xl md:mt-28">
            <h3 className="reveal mb-10 text-center font-serif text-4xl text-slate-800 md:text-5xl">
              WHY SST28? <span className="text-cyan-500">IT WORKS!</span>
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {points.map((point, index) => (
                <div
                  key={point.title}
                  className={`reveal card card-hover relative overflow-hidden p-6 sm:p-7 ${
                    index === points.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600" />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 right-4 font-serif text-7xl text-cyan-500/10"
                  >
                    0{index + 1}
                  </span>
                  <h4 className="relative mb-3 flex items-start gap-2 text-lg font-bold text-slate-800 sm:text-xl">
                    <span className="text-cyan-500">✦</span>
                    {point.title}
                  </h4>
                  <div className="relative text-slate-600">{point.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
