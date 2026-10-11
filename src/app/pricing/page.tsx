"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import { GiSunbeams } from "react-icons/gi";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative h-40 sm:h-48 md:h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <h1
            className="relative text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-lg z-10 px-4 text-center"
            style={{ fontFamily: "'Bellefair', serif" }}
          >
            Pricing
          </h1>
        </section>

        {/* ── Pricing Content ── */}
        <section className="py-10 md:py-16 relative overflow-hidden">
          {/* Decorative background bubbles – clamped so they don't bleed on narrow screens */}
          <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-200/40 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32 border-4 border-blue-300/30 -z-10" />
          <div className="absolute top-6 left-4 w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-cyan-200/30 rounded-full border-2 border-cyan-300/40 -z-10" />
          <div className="absolute top-1/4 left-0 w-36 sm:w-52 md:w-64 h-36 sm:h-52 md:h-64 bg-teal-100/40 rounded-full -ml-12 sm:-ml-16 md:-ml-20 border-4 border-teal-200/30 -z-10" />
          <div className="absolute bottom-1/4 left-4 w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 bg-cyan-100/40 rounded-full border-4 border-cyan-200/30 -z-10" />
          <div className="absolute bottom-16 right-1/3 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-teal-200/30 rounded-full border-2 border-teal-300/40 -z-10" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-blue-200/40 rounded-full -ml-20 sm:-ml-28 md:-ml-32 -mb-20 sm:-mb-28 md:-mb-32 border-4 border-blue-300/30 -z-10" />
          <div className="absolute bottom-0 right-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-sky-100/40 rounded-full -mr-16 sm:-mr-20 md:-mr-24 -mb-16 sm:-mb-20 md:-mb-24 border-4 border-sky-200/30 -z-10" />
          <div className="absolute bottom-8 left-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── MAIN PRICING TABLE ── */}
            <div className="mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2"
                style={{ fontFamily: "'Bellefair', serif" }}
              >
                Session &amp; Package Pricing
              </h2>
              <p className="text-gray-500 text-center mb-6 md:mb-8 text-sm sm:text-base">
                Per-session rates &amp; multi-session packages
              </p>

              {/* Desktop table */}
              <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white/90 backdrop-blur">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-400 text-white">
                      <th className="py-4 px-4 text-left rounded-tl-2xl">
                        <GiSunbeams className="inline-block text-yellow-200 text-2xl" />
                      </th>
                      {["SILVER", "GOLD", "TITANIUM", "PLATINUM"].map((t) => (
                        <th key={t} className="py-4 px-3 text-center font-bold tracking-wide">{t}</th>
                      ))}
                      <th className="py-4 px-3 text-center font-bold tracking-wide">VERSA<br />WELLFIT</th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">VERSA<br />SPRAY</th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide rounded-tr-2xl">SMART SUN<br />HALOTHERAPY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {/* Monthly */}
                    <tr className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-700">MONTH</td>
                      <td className="py-4 px-3 text-center"><Price amount="59" cents="99" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="90" cents="99" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="129" cents="99" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="169" cents="99" /></td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="59" cents="99" />
                        <span className="block text-xs text-gray-500">Members</span>
                        <Price amount="29" cents="99" sub />
                      </td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="89" cents="99" />
                        <span className="block text-[11px] text-gray-500 mt-0.5">Also Includes POLY</span>
                      </td>
                    </tr>
                    {/* Single */}
                    <tr className="hover:bg-orange-50/50 transition-colors bg-gray-50/60">
                      <td className="py-4 px-4 font-semibold text-gray-700">SINGLE</td>
                      <td className="py-4 px-3 text-center"><Price amount="9" cents="50" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="15" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="20" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="32" cents="00" /></td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="10" cents="00" />
                        <span className="block text-xs text-gray-500">2 for $15<sup>00</sup></span>
                      </td>
                      <td className="py-4 px-3 text-center">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <Price amount="27" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center text-xs leading-relaxed">
                        <span className="font-bold text-base text-gray-800">$35</span>{" "}
                        <span className="text-gray-500">Smart Sun</span><br />
                        <span className="font-bold text-base text-gray-800">$35</span>{" "}
                        <span className="text-gray-500">Halotherapy</span><br />
                        <span className="font-bold text-base text-gray-800">$15</span>{" "}
                        <span className="text-gray-500">POLY</span>
                      </td>
                    </tr>
                    {/* 6 Sessions */}
                    <tr className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-semibold text-gray-700">6 SESSIONS</span><br />
                        <span className="text-green-600 font-bold text-xs">GET 1 FREE</span>
                      </td>
                      <td className="py-4 px-3 text-center"><Price amount="57" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="90" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="114" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="159" cents="00" /></td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center text-xs leading-relaxed">
                        <span className="font-bold text-base text-gray-800">$150</span>
                        <sup className="text-[10px]">00</sup>
                        <span className="text-gray-500 block">Smart Sun</span>
                        <span className="font-bold text-base text-gray-800">$150</span>
                        <sup className="text-[10px]">00</sup>
                        <span className="text-gray-500 block">Halotherapy</span>
                      </td>
                    </tr>
                    {/* 10 Sessions */}
                    <tr className="hover:bg-orange-50/50 transition-colors bg-gray-50/60">
                      <td className="py-4 px-4">
                        <span className="font-semibold text-gray-700">10 SESSIONS</span><br />
                        <span className="text-green-600 font-bold text-xs">GET 4 FREE</span>
                      </td>
                      <td className="py-4 px-3 text-center"><Price amount="87" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="146" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="175" cents="00" /></td>
                      <td className="py-4 px-3 text-center"><Price amount="224" cents="00" /></td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="lg:hidden space-y-4">
                {[
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
                ].map((row) => (
                  <div
                    key={row.label}
                    className="bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-4 sm:p-5"
                  >
                    <h3 className="font-bold text-orange-600 mb-3 text-base sm:text-lg">
                      {row.label}
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      {Object.entries(row.prices).map(([tier, price]) => (
                        <div key={tier}>
                          <span className="text-gray-500 text-xs">{tier}</span>
                          <p className="font-semibold text-gray-800">{price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SPECIAL PRICING BOXES ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
              {/* Student */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 card-hover">
                <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Bellefair', serif" }}>
                  <span className="italic">Student Pricing</span>{" "}
                  <span className="text-sm font-normal text-gray-500">w/valid ID</span>
                </h3>
                <div className="space-y-2 mt-4 text-sm">
                  <PriceLine label="SILVER SINGLE" price="$7.75" />
                  <PriceLine label="GOLD SINGLE" price="$11.00" />
                  <PriceLine label="SILVER 6 PACK" price="$40.00" />
                </div>
              </div>

              {/* Senior */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 card-hover">
                <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Bellefair', serif" }}>
                  <span className="italic">Senior Tans</span>{" "}
                  <span className="text-sm font-normal text-gray-500">60+</span>
                </h3>
                <div className="space-y-2 mt-4 text-sm">
                  <PriceLine label="SILVER SINGLE" price="$6.75" />
                  <PriceLine label="GOLD SINGLE" price="$10.00" />
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">Valid Monday – Friday 10AM – Noon</p>
              </div>

              {/* Upgrade */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 card-hover sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Bellefair', serif" }}>
                  <span className="italic">Upgrade Pricing</span>
                </h3>
                <div className="space-y-2 mt-4 text-sm">
                  <PriceLine label="SILVER ▸ GOLD" price="$5.50" />
                  <PriceLine label="SILVER ▸ TITANIUM" price="$10.50" />
                  <PriceLine label="SILVER ▸ PLATINUM" price="$22.50" />
                  <PriceLine label="GOLD ▸ TITANIUM" price="$5.00" />
                  <PriceLine label="GOLD ▸ PLATINUM" price="$17.00" />
                  <PriceLine label="TITANIUM ▸ PLATINUM" price="$12.00" />
                </div>
              </div>
            </div>

            {/* ── BLEACH BRIGHT + NOTES ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 md:mb-20">
              {/* BleachBright */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 flex flex-col items-center text-center card-hover">
                <h3 className="text-xl sm:text-2xl font-bold italic mb-1" style={{ fontFamily: "'Bellefair', serif" }}>
                  BleachBright
                </h3>
                <p className="text-gray-500 text-sm">Teeth Whitening</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-3">
                  $79<sup className="text-base sm:text-lg">00</sup>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Includes BLUMINERALS Sealant ($20<sup>00</sup> value)
                </p>
              </div>

              {/* Notes */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 flex flex-col justify-center card-hover">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">▸</span>
                    Your first tan is always{" "}
                    <span className="font-bold text-green-600 italic">Free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">▸</span>
                    <span className="font-bold text-green-600 italic">Free</span>{" "}
                    tan on your Birthday in the bed of your choice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">▸</span>
                    Ask about our{" "}
                    <span className="font-semibold italic">Referral Program</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ── MEMBERSHIP PLANS ── */}
            <div className="mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-2"
                style={{ fontFamily: "'Bellefair', serif" }}
              >
                Membership Plans
              </h2>
              <p className="text-gray-500 text-center mb-8 md:mb-10 text-sm sm:text-base">
                Unlimited tanning at your chosen level with amazing perks
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                  <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        <span>3 Month Minimum</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        <span>$5.00/mo Freeze Option (2 month max, per year) after 3 Month Minimum</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        <span>Only $19.99 Enrollment Fee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ── Helper Components ── */

function Price({ amount, cents, sub }: { amount: string; cents: string; sub?: boolean }) {
  return (
    <span className={`inline-block ${sub ? "text-sm" : ""}`}>
      <span className={`font-extrabold ${sub ? "text-base text-gray-600" : "text-xl text-gray-800"}`}>
        ${amount}
      </span>
      <sup className="text-[10px] font-semibold">{cents}</sup>
    </span>
  );
}

function PriceLine({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-1">
      <span className="text-gray-700 font-medium">{label}</span>
      <span className="font-bold text-gray-800">{price}</span>
    </div>
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
    <div className="relative bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 overflow-hidden card-hover flex flex-col">
      {bestValue && (
        <div className="absolute top-3 -right-8 rotate-45 bg-orange-500 text-white text-[10px] font-bold px-8 py-0.5 shadow-md z-10">
          BEST VALUE
        </div>
      )}

      <div className={`bg-linear-to-r ${color} px-5 sm:px-6 py-4 sm:py-5 text-white`}>
        <h3 className="text-xl sm:text-2xl font-bold italic" style={{ fontFamily: "'Bellefair', serif" }}>
          {tier}
        </h3>
        <p className="text-2xl sm:text-3xl font-extrabold mt-1">
          ${price}
          <span className="text-sm font-normal opacity-80">/mo</span>
        </p>
      </div>

      {showBeds && (
        <div className="grid grid-cols-2 gap-2 p-3">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/img/pricing/KBL-P9S/img.png"
              alt="Platinum bed 1"
              className="w-full h-24 sm:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/img/pricing/img.gif"
              alt="Platinum bed 2"
              className="w-full h-24 sm:h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}

      <ul className="p-5 sm:p-6 space-y-2 text-sm text-gray-700 flex-1">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2">
            <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}