import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { name: "Balance", image: "/img/wellfit/balance-image.png", alt: "Wellfit Balance", width: 640, height: 800 },
  { name: "Hydrate", image: "/img/wellfit/hydrate-image.png", alt: "Wellfit Hydrate", width: 2560, height: 2560 },
  { name: "Lift", image: "/img/wellfit/life-image.png", alt: "Wellfit Life", width: 2560, height: 2560 },
];

export default function Wellfit() {
  return (
    <>
      <PageHero title="Wellfit" crumb="Wellfit Skin Care" eyebrow="Wellness" />

      {/* Versa Spa Pro Section */}
      <section className="section">
        <Bubbles />

        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Wellfit Booth Image */}
            <div className="reveal lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/50 via-sky-200/40 to-orange-200/50 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                  <Image
                    src="/img/wellfit/wellfitimage.png"
                    alt="Wellfit Booth"
                    width={1440}
                    height={1920}
                    sizes="(min-width: 1024px) 28rem, 100vw"
                    className="h-auto w-full rounded-[1.6rem]"
                  />
                </div>
              </div>
            </div>

            <div className="reveal lg:col-span-7">
              {/* Logo */}
              <div className="mx-auto mb-10 max-w-sm lg:mx-0">
                <Image
                  src="/img/wellfit/wellfit-logo-black.png"
                  alt="Wellfit logo"
                  width={596}
                  height={199}
                  className="h-auto w-full"
                />
              </div>

              {/* Video Section */}
              <div className="media-frame">
                <div className="relative aspect-video overflow-hidden rounded-[1.6rem] bg-slate-900">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/mk_5do8_yEU?si=_3htS4MSUR3env-O"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                  ></iframe>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/uv-free-spray-tanning" className="btn btn-primary">
                  Versa Pro Wellfit
                  <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/pricing" className="btn btn-outline">
                  Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Product Images Section */}
          <div className="mt-24">
            <SectionHeading className="reveal mb-12" title="Our Products" />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className={`reveal card card-hover group overflow-hidden ${
                    index === products.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full" : ""
                  }`}
                >
                  <div className="p-2">
                    <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-white">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="px-4 pt-2 pb-5 text-center">
                    <h3 className="font-serif text-2xl text-slate-800">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
