import Link from "next/link";
import Image from "next/image";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { WELLNESS_LINKS } from "@/lib/site";

const services = [
  {
    title: "UV TANNING",
    description: "Experience our state-of-the-art UV tanning beds with multiple levels to choose from. Get that perfect sun-kissed glow year-round.",
    image: "/img/uv-tanning/KBL-P9S/img.png",
    href: "/uv-tanning",
  },
  {
    title: "UV-FREE VERSA PRO",
    description: "Get a natural-looking, customizable spray tan without any UV exposure. Our Versa Pro technology provides an even, flawless finish.",
    image: "/img/uv-free-versa/versaspa-model.jpeg",
    href: "/uv-free-versa",
  },
  {
    title: "WELLNESS SERVICES",
    description: "Discover our range of wellness services including Red Light Therapy, Halotherapy Sauna, and more to rejuvenate your body and mind.",
    image: "/img/red-light-therapy/poly-red-face.jpg",
    href: "/red-light-therapy",
  },
];

export default function ServicesSections() {
  return (
    <section id="services" className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 md:py-28">
      {/* Aurora glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="reveal mb-14 text-center">
          <p className="mb-5 inline-flex rounded-full bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.25em] text-orange-300 uppercase ring-1 ring-white/10">
            Northern Lights Tan &amp; Wellness
          </p>
          <h2 className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text font-serif text-4xl tracking-wide text-transparent md:text-5xl lg:text-6xl">
            OUR PREMIUM SERVICES
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-orange-500" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-pink-500/25 hover:ring-pink-500/40"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-slate-950/50 px-3 py-1 font-serif text-sm tracking-widest text-white ring-1 ring-white/20 backdrop-blur">
                  0{index + 1}
                </span>
                <span className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-all duration-300 group-hover:rotate-45 group-hover:bg-pink-500 group-hover:ring-pink-500">
                  <LuArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-pink-400">
                  {service.title}
                </h3>
                <p className="mt-3 mb-6 flex-1 text-sm leading-relaxed text-slate-300">{service.description}</p>
                <div className="inline-flex items-center font-semibold text-pink-500 group-hover:text-pink-400">
                  Learn More
                  <LuArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Wellness quick links */}
        <div className="reveal mt-14 flex flex-col items-center gap-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">Wellness</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {WELLNESS_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white hover:ring-transparent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
