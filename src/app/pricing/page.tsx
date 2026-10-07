import Image from "next/image";
import type { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiSunbeams } from "react-icons/gi";
import { LuArrowUpRight, LuAward, LuGift, LuGraduationCap, LuSmile, LuStar } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const mobileRows = [
  {
    label: "MONTH",
    prices: {
      Silver: "$59.99",
      Gold: "$90.99",
      Titanium: "$129.99",
      Platinum: "$169.99",
      "Versa Wellfit": "$59.99 / Members $29.99",
      "Smart Sun / Halotherapy": "$89.99 (incl. POLY)",
    },
  },
  {
    label: "SINGLE",
    prices: {
      Silver: "$9.50",
      Gold: "$15.00",
      Titanium: "$20.00",
      Platinum: "$32.00",
      "Versa Wellfit": "$10.00 (2 for $15)",
      "Versa Spray": "Starting at $27.00",
      "Smart Sun / Halotherapy / POLY": "$35 · $35 · $15",
    },
  },
  {
    label: "6 SESSIONS – GET 1 FREE",
    prices: {
      Silver: "$57.00",
      Gold: "$90.00",
      Titanium: "$114.00",
      Platinum: "$159.00",
      "Smart Sun": "$150.00",
      Halotherapy: "$150.00",
    },
  },
  {
    label: "10 SESSIONS – GET 4 FREE",
    prices: {
      Silver: "$87.00",
      Gold: "$146.00",
      Titanium: "$175.00",
      Platinum: "$224.00",
    },
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero title="Pricing" />

      {/* ── Pricing Content ── */}
      <section className="section">
        <Bubbles />

        <div className="container-page">
          {/* ── MAIN PRICING TABLE ── */}
          <div className="mb-16 md:mb-24">
            <SectionHeading
              className="reveal mb-10 md:mb-12"
              title={<>Session &amp; Package Pricing</>}
              description="Per-session rates & multi-session packages"
            />

            {/* Desktop table */}
            <div className="reveal card hidden overflow-hidden lg:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-linear-to-r from-orange-500 to-amber-400 text-white">
                    <th className="px-5 py-5 text-left">
                      <GiSunbeams className="inline-block text-3xl text-yellow-200" />
                    </th>
                    {["SILVER", "GOLD", "TITANIUM", "PLATINUM"].map((t) => (
                      <th key={t} className="px-3 py-5 text-center font-bold tracking-wider">{t}</th>
                    ))}
                    <th className="px-3 py-5 text-center font-bold tracking-wider">VERSA<br />WELLFIT</th>
                    <th className="px-3 py-5 text-center font-bold tracking-wider">VERSA<br />SPRAY</th>
                    <th className="px-3 py-5 text-center font-bold tracking-wider">SMART SUN<br />HALOTHERAPY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Monthly */}
                  <tr className="transition-colors hover:bg-orange-50/60">
                    <RowLabel>MONTH</RowLabel>
                    <td className="px-3 py-5 text-center"><Price amount="59" cents="99" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="90" cents="99" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="129" cents="99" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="169" cents="99" /></td>
                    <td className="px-3 py-5 text-center">
                      <Price amount="59" cents="99" />
                      <span className="block text-xs text-slate-500">Members</span>
                      <Price amount="29" cents="99" sub />
                    </td>
                    <td className="px-3 py-5 text-center text-slate-400">N/A</td>
                    <td className="px-3 py-5 text-center">
                      <Price amount="89" cents="99" />
                      <span className="mt-0.5 block text-[11px] text-slate-500">Also Includes POLY</span>
                    </td>
                  </tr>
                  {/* Single */}
                  <tr className="bg-slate-50/60 transition-colors hover:bg-orange-50/60">
                    <RowLabel>SINGLE</RowLabel>
                    <td className="px-3 py-5 text-center"><Price amount="9" cents="50" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="15" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="20" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="32" cents="00" /></td>
                    <td className="px-3 py-5 text-center">
                      <Price amount="10" cents="00" />
                      <span className="block text-xs text-slate-500">2 for $15<sup>00</sup></span>
                    </td>
                    <td className="px-3 py-5 text-center">
                      <span className="text-xs text-slate-500">Starting at</span>
                      <Price amount="27" cents="00" />
                    </td>
                    <td className="px-3 py-5 text-center text-xs leading-relaxed">
                      <span className="text-base font-bold text-slate-800">$35</span>{" "}
                      <span className="text-slate-500">Smart Sun</span><br />
                      <span className="text-base font-bold text-slate-800">$35</span>{" "}
                      <span className="text-slate-500">Halotherapy</span><br />
                      <span className="text-base font-bold text-slate-800">$15</span>{" "}
                      <span className="text-slate-500">POLY</span>
                    </td>
                  </tr>
                  {/* 6 Sessions */}
                  <tr className="transition-colors hover:bg-orange-50/60">
                    <RowLabel badge="GET 1 FREE">6 SESSIONS</RowLabel>
                    <td className="px-3 py-5 text-center"><Price amount="57" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="90" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="114" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="159" cents="00" /></td>
                    <td className="px-3 py-5 text-center text-slate-400">N/A</td>
                    <td className="px-3 py-5 text-center text-slate-400">N/A</td>
                    <td className="px-3 py-5 text-center text-xs leading-relaxed">
                      <span className="text-base font-bold text-slate-800">$150</span>
                      <sup className="text-[10px]">00</sup>
                      <span className="block text-slate-500">Smart Sun</span>
                      <span className="text-base font-bold text-slate-800">$150</span>
                      <sup className="text-[10px]">00</sup>
                      <span className="block text-slate-500">Halotherapy</span>
                    </td>
                  </tr>
                  {/* 10 Sessions */}
                  <tr className="bg-slate-50/60 transition-colors hover:bg-orange-50/60">
                    <RowLabel badge="GET 4 FREE">10 SESSIONS</RowLabel>
                    <td className="px-3 py-5 text-center"><Price amount="87" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="146" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="175" cents="00" /></td>
                    <td className="px-3 py-5 text-center"><Price amount="224" cents="00" /></td>
                    <td className="px-3 py-5 text-center text-slate-400">N/A</td>
                    <td className="px-3 py-5 text-center text-slate-400">N/A</td>
                    <td className="px-3 py-5 text-center text-slate-400">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
              {mobileRows.map((row) => (
                <div key={row.label} className="reveal card overflow-hidden">
                  <div className="flex items-center gap-2 bg-linear-to-r from-orange-500 to-amber-400 px-5 py-3 text-white">
                    <GiSunbeams className="text-xl text-yellow-200" />
                    <h3 className="text-sm font-bold tracking-wider sm:text-base">{row.label}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-5 text-sm">
                    {Object.entries(row.prices).map(([tier, price]) => (
                      <div key={tier}>
                        <span className="text-xs text-slate-500">{tier}</span>
                        <p className="font-semibold text-slate-800">{price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SPECIAL PRICING BOXES ── */}
          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Student */}
            <SpecialCard icon={<LuGraduationCap className="h-5 w-5" />}>
              <h3 className="font-serif text-2xl sm:text-3xl">
                <span className="italic">Student Pricing</span>{" "}
                <span className="font-sans text-sm text-slate-500">w/valid ID</span>
              </h3>
              <div className="mt-5 space-y-2.5 text-sm">
                <PriceLine label="SILVER SINGLE" price="$7.75" />
                <PriceLine label="GOLD SINGLE" price="$11.00" />
                <PriceLine label="SILVER 6 PACK" price="$40.00" />
              </div>
            </SpecialCard>

            {/* Senior */}
            <SpecialCard icon={<LuStar className="h-5 w-5" />}>
              <h3 className="font-serif text-2xl sm:text-3xl">
                <span className="italic">Senior Tans</span>{" "}
                <span className="font-sans text-sm text-slate-500">60+</span>
              </h3>
              <div className="mt-5 space-y-2.5 text-sm">
                <PriceLine label="SILVER SINGLE" price="$6.75" />
                <PriceLine label="GOLD SINGLE" price="$10.00" />
              </div>
              <p className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-xs text-cyan-700 italic ring-1 ring-cyan-200">
                Valid Monday – Friday 10AM – Noon
              </p>
            </SpecialCard>

            {/* Upgrade */}
            <SpecialCard icon={<LuArrowUpRight className="h-5 w-5" />} className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-2xl sm:text-3xl">
                <span className="italic">Upgrade Pricing</span>
              </h3>
              <div className="mt-5 space-y-2.5 text-sm">
                <PriceLine label="SILVER ▸ GOLD" price="$5.50" />
                <PriceLine label="SILVER ▸ TITANIUM" price="$10.50" />
                <PriceLine label="SILVER ▸ PLATINUM" price="$22.50" />
                <PriceLine label="GOLD ▸ TITANIUM" price="$5.00" />
                <PriceLine label="GOLD ▸ PLATINUM" price="$17.00" />
                <PriceLine label="TITANIUM ▸ PLATINUM" price="$12.00" />
              </div>
            </SpecialCard>
          </div>

          {/* ── BLEACH BRIGHT + NOTES ── */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:mb-24 md:grid-cols-2">
            {/* BleachBright */}
            <div className="reveal card card-hover relative flex flex-col items-center overflow-hidden p-6 text-center sm:p-8">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-200/50 blur-2xl" />
              <span className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white shadow-lg shadow-cyan-500/30">
                <LuSmile className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative font-serif text-3xl italic">BleachBright</h3>
              <p className="relative text-sm text-slate-500">Teeth Whitening</p>
              <p className="relative mt-3 text-4xl font-extrabold text-slate-800 sm:text-5xl">
                $79<sup className="text-base sm:text-lg">00</sup>
              </p>
              <p className="relative mt-3 rounded-full bg-slate-50 px-4 py-1.5 text-xs text-slate-500 ring-1 ring-slate-200">
                Includes BLUMINERALS Sealant ($20<sup>00</sup> value)
              </p>
            </div>

            {/* Notes */}
            <div className="reveal card card-hover flex flex-col justify-center p-6 sm:p-8">
              <ul className="space-y-4 text-sm text-slate-700 sm:text-base">
                <li className="flex items-start gap-3">
                  <NoteIcon />
                  <span>
                    Your first tan is always{" "}
                    <span className="font-bold text-green-600 italic">Free</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <NoteIcon />
                  <span>
                    <span className="font-bold text-green-600 italic">Free</span>{" "}
                    tan on your Birthday in the bed of your choice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <NoteIcon />
                  <span>
                    Ask about our{" "}
                    <span className="font-semibold italic">Referral Program</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── MEMBERSHIP PLANS ── */}
          <div>
            <SectionHeading
              className="reveal mb-10 md:mb-12"
              eyebrow="Unlimited"
              title="Membership Plans"
              description="Unlimited tanning at your chosen level with amazing perks"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <MembershipCard
                tier="Platinum"
                price="99.99"
                bestValue
                showBeds
                color="from-purple-600 to-indigo-600"
                perks={[
                  "Unlimited Platinum, Titanium, Gold, and Silver Tans",
                  "50% Off Lotion",
                  "Unlimited Red Light & Halosauna",
                  "40% Off BleachBright",
                  "4 Spray Tans per month",
                ]}
              />
              <MembershipCard
                tier="Titanium"
                price="69.99"
                color="from-gray-500 to-gray-700"
                perks={[
                  "Unlimited Titanium, Gold, and Silver Tans",
                  "½ Price Upgrades",
                  "50% Off Lotion",
                  "30% Off Red Light",
                  "30% Off BleachBright",
                  "$15 Off Spray Tans",
                ]}
              />
              <MembershipCard
                tier="Gold"
                price="49.99"
                color="from-yellow-500 to-amber-600"
                perks={[
                  "Unlimited Gold and Silver Tans",
                  "½ Price Upgrades",
                  "50% Off Lotion",
                  "20% Off Red Light",
                  "20% Off BleachBright",
                  "$10 Off Spray Tans",
                ]}
              />
              <MembershipCard
                tier="Silver"
                price="29.99"
                color="from-slate-400 to-slate-600"
                perks={[
                  "Unlimited Silver Tans",
                  "½ Price Upgrades",
                  "50% Off Lotion",
                  "$10 Off Spray Tans",
                ]}
              />
              <MembershipCard
                tier="Wellness"
                price="79.99"
                color="from-teal-500 to-emerald-600"
                perks={[
                  "Unlimited Smart Sun and Poly LED Light Therapy",
                  "Unlimited Halotherapy Sauna",
                  "Unlimited WellFit Treatments",
                  "25% Off Red Light Therapy Products",
                  "$10 Off Spray Tans",
                  "20% Off BleachBright",
                ]}
              />
              <MembershipCard
                tier="Sunless"
                price="69.99"
                color="from-orange-400 to-amber-600"
                perks={[
                  "One clear or bronze spray (including all levels and prep and hydrate) every 4 days",
                  "Unlimited Poly Red Light Treatments",
                  "20% Off BleachBright Professional Teeth Whitening",
                  "25% Off All Red Light Products",
                ]}
              />

              {/* Footer note – spans full row at every breakpoint */}
              <div className="col-span-full mt-2">
                <div className="reveal overflow-hidden rounded-3xl bg-slate-950 p-6 text-slate-300 shadow-xl sm:p-8">
                  <div className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-3 sm:gap-8">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-green-400" />
                      <span>3 Month Minimum</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-green-400" />
                      <span>$5.00/mo Freeze Option (2 month max, per year) after 3 Month Minimum</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-green-400" />
                      <span>Only $19.99 Enrollment Fee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Helper Components ── */

function RowLabel({ children, badge }: { children: ReactNode; badge?: string }) {
  return (
    <td className="px-5 py-5">
      <span className="font-semibold tracking-wide text-slate-700">{children}</span>
      {badge && (
        <span className="mt-1 block w-fit rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">
          {badge}
        </span>
      )}
    </td>
  );
}

function Price({ amount, cents, sub }: { amount: string; cents: string; sub?: boolean }) {
  return (
    <span className={`inline-block ${sub ? "text-sm" : ""}`}>
      <span className={`font-extrabold ${sub ? "text-base text-slate-600" : "text-xl text-slate-800"}`}>
        ${amount}
      </span>
      <sup className="text-[10px] font-semibold">{cents}</sup>
    </span>
  );
}

function PriceLine({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-dashed border-slate-200 pb-2">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="rounded-full bg-orange-50 px-2.5 py-0.5 font-bold text-orange-600">{price}</span>
    </div>
  );
}

function SpecialCard({
  icon,
  children,
  className = "",
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`reveal card card-hover relative overflow-hidden p-6 sm:p-7 ${className}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400" />
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500" aria-hidden="true">
        {icon}
      </span>
      {children}
    </div>
  );
}

function NoteIcon() {
  return (
    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600" aria-hidden="true">
      <LuGift className="h-4 w-4" />
    </span>
  );
}

function MembershipCard({
  tier,
  price,
  perks,
  color,
  bestValue,
  showBeds,
}: {
  tier: string;
  price: string;
  perks: string[];
  color: string;
  bestValue?: boolean;
  showBeds?: boolean;
}) {
  return (
    <div
      className={`reveal card card-hover relative flex flex-col overflow-hidden ${
        bestValue ? "ring-2 ring-orange-400" : ""
      }`}
    >
      {bestValue && (
        <div className="absolute top-4 -right-9 z-10 flex rotate-45 items-center gap-1 bg-orange-500 px-9 py-1 text-[10px] font-bold text-white shadow-md">
          <LuAward className="h-3 w-3" aria-hidden="true" />
          BEST VALUE
        </div>
      )}

      <div className={`relative overflow-hidden bg-linear-to-r ${color} px-6 py-6 text-white`}>
        <div className="absolute -right-10 -bottom-16 h-36 w-36 rounded-full bg-white/10" />
        <h3 className="relative font-serif text-2xl italic sm:text-3xl">{tier}</h3>
        <p className="relative mt-1 text-3xl font-extrabold sm:text-4xl">
          ${price}
          <span className="text-sm font-normal opacity-80">/mo</span>
        </p>
      </div>

      {showBeds && (
        <div className="grid grid-cols-2 gap-2 px-3 pt-3">
          <div className="overflow-hidden rounded-xl bg-slate-50">
            <Image
              src="/img/pricing/KBL-P9S/img.png"
              alt="Platinum bed 1"
              width={554}
              height={451}
              className="h-24 w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-28"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-slate-50">
            <Image
              src="/img/pricing/img.gif"
              alt="Platinum bed 2"
              width={550}
              height={600}
              unoptimized
              className="h-24 w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-28"
            />
          </div>
        </div>
      )}

      <ul className="flex-1 space-y-2.5 p-6 text-sm text-slate-700">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5">
            <FaCheckCircle className="mt-0.5 shrink-0 text-green-500" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
