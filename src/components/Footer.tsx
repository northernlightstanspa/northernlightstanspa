import Link from "next/link";
import Image from "next/image";
import { LuArrowRight, LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import HoursList from "@/components/HoursList";
import SocialLinks from "@/components/SocialLinks";
import { ADDRESS, DIRECTIONS_URL, PHONE } from "@/lib/site";

const quickLinks = [
  { name: "UV Tanning", href: "/uv-tanning" },
  { name: "UV Free Spray", href: "/uv-free-spray-tanning" },
  { name: "Tanning Lotions", href: "/tanning-lotions" },
  { name: "Promotions", href: "/promotions" },
  { name: "Pricing", href: "/pricing" },
];

const wellnessLinks = [
  { name: "SST Red Light Therapy", href: "/sst-red-light-therapy" },
  { name: "Halotherapy Sauna", href: "/halotherapy-sauna" },
  { name: "Poly Red Light Therapy", href: "/red-light-therapy" },
  { name: "Wellfit Skin Care", href: "/wellfit" },
  { name: "BleachBright", href: "/bleachbright" },
];

function FooterLinks({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-semibold tracking-[0.2em] text-white uppercase">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-orange-300"
            >
              <span className="h-px w-3 bg-slate-600 transition-all group-hover:w-5 group-hover:bg-orange-400" />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-slate-950 text-slate-300">
      {/* Aurora glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Walk-in banner */}
      <div className="container-page pt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-500 p-px">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[calc(1.5rem-1px)] bg-slate-950/85 px-6 py-8 backdrop-blur sm:px-10 md:flex-row md:items-center">
            <div>
              <p className="font-serif text-3xl text-white sm:text-4xl">Convenient Walk-In Spa</p>
              <p className="mt-2 text-slate-400">No Appointments Necessary</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={PHONE.href} className="btn btn-primary">
                <LuPhone className="h-4 w-4" aria-hidden="true" />
                Tel: {PHONE.display}
              </a>
              <Link href="/pricing" className="btn btn-glass">
                Pricing
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-3">
            <Link href="/" className="group relative inline-block flex-shrink-0">
              <Image
                src="/img/logo.png"
                alt="Northern Lights Tan Spa"
                width={180}
                height={60}
                quality={100}
                className="relative h-15 w-auto object-contain"
              />
            </Link>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-400 transition-colors hover:text-orange-300"
              >
                <LuMapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-400" aria-hidden="true" />
                <span>
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.city}
                </span>
              </a>
              <a
                href={PHONE.href}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-orange-300"
              >
                <LuPhone className="h-4 w-4 flex-shrink-0 text-orange-400" aria-hidden="true" />
                Tel: {PHONE.display}
              </a>
            </address>
            <SocialLinks className="mt-6 flex items-center gap-3" />
          </div>

          <div className="lg:col-span-2">
            <FooterLinks title="Services" links={quickLinks} />
          </div>

          <div className="lg:col-span-2">
            <FooterLinks title="Wellness" links={wellnessLinks} />
          </div>

          {/* Hours */}
          <div className="sm:col-span-2 lg:col-span-5">
            <h4 className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white uppercase">
              <LuClock className="h-4 w-4 text-orange-400" aria-hidden="true" />
              Hours
            </h4>
            <div className="rounded-2xl bg-white/[0.03] p-2 ring-1 ring-white/10">
              <HoursList tone="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Northern Lights Tan & Wellness. All rights reserved.</p>
          <p>
            Web Design, Development service By{" "}
            <a
              href="https://www.freelancerhasib.tech/"
              className="text-pink-400 transition-colors hover:text-pink-300"
            >
              freelancerhasib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
