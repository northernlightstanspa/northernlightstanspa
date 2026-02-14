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
        {/* Hero Section */}
        <section className="relative h-48 md:h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/home_hero_bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <h1
            className="relative text-4xl md:text-5xl font-semibold text-white drop-shadow-lg z-10"
            style={{ fontFamily: "'Bellefair', serif" }}
          >
            Pricing
          </h1>
        </section>

        {/* Pricing Content */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* Decorative background bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full -mr-32 -mt-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200/30 rounded-full border-2 border-cyan-300/40 -z-10"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-100/40 rounded-full -ml-20 border-4 border-teal-200/30 -z-10"></div>
          <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-cyan-100/40 rounded-full border-4 border-cyan-200/30 -z-10"></div>
          <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-teal-200/30 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full -ml-32 -mb-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100/40 rounded-full -mr-24 -mb-24 border-4 border-sky-200/30 -z-10"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* ===================== MAIN PRICING TABLE ===================== */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-semibold text-center mb-2"
                style={{ fontFamily: "'Bellefair', serif" }}
              >
                Session &amp; Package Pricing
              </h2>
              <p className="text-gray-500 text-center mb-8">
                Per-session rates &amp; multi-session packages
              </p>

              {/* Desktop table – hidden on small screens */}
              <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white/90 backdrop-blur">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-400 text-white">
                      <th className="py-4 px-4 text-left rounded-tl-2xl">
                        <GiSunbeams className="inline-block text-yellow-200 text-2xl" />
                      </th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">SILVER</th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">GOLD</th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">TITANIUM</th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">PLATINUM</th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">
                        VERSA<br />WELLFIT
                      </th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide">
                        VERSA<br />SPRAY
                      </th>
                      <th className="py-4 px-3 text-center font-bold tracking-wide rounded-tr-2xl">
                        SMART SUN<br />HALOTHERAPY
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {/* Monthly */}
                    <tr className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-700">MONTH</td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="59" cents="99" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="90" cents="99" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="121" cents="99" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="139" cents="99" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="59" cents="99" />
                        <span className="block text-xs text-gray-500">Members</span>
                        <Price amount="29" cents="99" sub />
                      </td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="89" cents="99" />
                        <span className="block text-[11px] text-gray-500 mt-0.5">
                          Also Includes POLY
                        </span>
                      </td>
                    </tr>
                    {/* Single */}
                    <tr className="hover:bg-orange-50/50 transition-colors bg-gray-50/60">
                      <td className="py-4 px-4 font-semibold text-gray-700">SINGLE</td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="9" cents="50" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="15" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="18" cents="50" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="25" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="10" cents="00" />
                        <span className="block text-xs text-gray-500">
                          2 for $15<sup>00</sup>
                        </span>
                      </td>
                      <td className="py-4 px-3 text-center">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <Price amount="27" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center text-xs leading-relaxed">
                        <span className="font-bold text-base text-gray-800">$35</span>{" "}
                        <span className="text-gray-500">Smart Sun</span>
                        <br />
                        <span className="font-bold text-base text-gray-800">$35</span>{" "}
                        <span className="text-gray-500">Halotherapy</span>
                        <br />
                        <span className="font-bold text-base text-gray-800">$15</span>{" "}
                        <span className="text-gray-500">POLY</span>
                      </td>
                    </tr>
                    {/* 6 Sessions */}
                    <tr className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-semibold text-gray-700">6 SESSIONS</span>
                        <br />
                        <span className="text-green-600 font-bold text-xs">GET 1 FREE</span>
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="57" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="90" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="105" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="120" cents="00" />
                      </td>
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
                        <span className="font-semibold text-gray-700">10 SESSIONS</span>
                        <br />
                        <span className="text-green-600 font-bold text-xs">GET 4 FREE</span>
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="87" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="146" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="160" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center">
                        <Price amount="174" cents="00" />
                      </td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-4 px-3 text-center text-gray-400">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile cards – visible on small screens only */}
              <div className="lg:hidden space-y-4">
                {[
                  {
                    label: "MONTHLY",
                    prices: {
                      Silver: "$59.99",
                      Gold: "$90.99",
                      Titanium: "$121.99",
                      Platinum: "$139.99",
                      "Versa Wellfit": "$59.99 / Members $29.99",
                      "Smart Sun / Halotherapy": "$89.99 (incl. POLY)",
                    },
                  },
                  {
                    label: "SINGLE",
                    prices: {
                      Silver: "$9.50",
                      Gold: "$15.00",
                      Titanium: "$18.50",
                      Platinum: "$25.00",
                      "Versa Wellfit": "$10.00 (2 for $15)",
                      "Versa Spray": "Starting at $27.00",
                      "Smart Sun": "$35 · Halotherapy $35 · POLY $15",
                    },
                  },
                  {
                    label: "6 SESSIONS – GET 1 FREE",
                    prices: {
                      Silver: "$62.00",
                      Gold: "$92.00",
                      Titanium: "$105.00",
                      Platinum: "$120.00",
                      "Smart Sun": "$150.00",
                      Halotherapy: "$150.00",
                    },
                  },
                  {
                    label: "10 SESSIONS – GET 4 FREE",
                    prices: {
                      Silver: "$87.00",
                      Gold: "$146.00",
                      Titanium: "$160.00",
                      Platinum: "$174.00",
                    },
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-5"
                  >
                    <h3 className="font-bold text-orange-600 mb-3 text-lg">
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

            {/* ===================== SPECIAL PRICING BOXES ===================== */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Student Pricing */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-6 card-hover">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Bellefair', serif" }}
                >
                  <span className="italic">Student Pricing</span>{" "}
                  <span className="text-sm font-normal text-gray-500">
                    w/valid ID
                  </span>
                </h3>
                <div className="space-y-2 mt-4 text-sm">
                  <PriceLine label="SILVER SINGLE" price="$7.75" />
                  <PriceLine label="GOLD SINGLE" price="$11.00" />
                  <PriceLine label="SILVER 6 PACK" price="$40.00" />
                </div>
              </div>

              {/* Senior Tans */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-6 card-hover">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Bellefair', serif" }}
                >
                  <span className="italic">Senior Tans</span>{" "}
                  <span className="text-sm font-normal text-gray-500">60+</span>
                </h3>
                <div className="space-y-2 mt-4 text-sm">
                  <PriceLine label="SILVER SINGLE" price="$6.75" />
                  <PriceLine label="GOLD SINGLE" price="$10.00" />
                </div>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Valid Monday – Friday 10AM – Noon
                </p>
              </div>

              {/* Upgrade Pricing */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-6 card-hover md:col-span-2 lg:col-span-1">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Bellefair', serif" }}
                >
                  <span className="italic">Upgrade Pricing</span>
                </h3>
                <div className="space-y-2 mt-4 text-sm">
                  <PriceLine label="SILVER ▸ GOLD" price="$5.50" />
                  <PriceLine label="SILVER ▸ TITANIUM" price="$9.00" />
                  <PriceLine label="SILVER ▸ PLATINUM" price="$16.50" />
                  <PriceLine label="GOLD ▸ TITANIUM" price="$4.00" />
                  <PriceLine label="GOLD ▸ PLATINUM" price="$11.50" />
                  <PriceLine label="TITANIUM ▸ PLATINUM" price="$8.50" />
                </div>
              </div>
            </div>

            {/* ===================== BLEACH BRIGHT + NOTES ===================== */}
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {/* Bleach Bright */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center text-center card-hover">
                <h3
                  className="text-2xl font-bold italic mb-1"
                  style={{ fontFamily: "'Bellefair', serif" }}
                >
                  BleachBright
                </h3>
                <p className="text-gray-500 text-sm">Teeth Whitening</p>
                <p className="text-4xl font-extrabold text-gray-800 mt-3">
                  $79<sup className="text-lg">00</sup>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Includes BLUMINERALS Sealant ($20<sup>00</sup> value)
                </p>
              </div>

              {/* Notes */}
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col justify-center card-hover">
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

            {/* ===================== MEMBERSHIP PLANS ===================== */}
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-semibold text-center mb-2"
                style={{ fontFamily: "'Bellefair', serif" }}
              >
                Membership Plans
              </h2>
              <p className="text-gray-500 text-center mb-10">
                Unlimited tanning at your chosen level with amazing perks
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Platinum – Best Value */}
                <MembershipCard
                  tier="Platinum"
                  price="99.99"
                  bestValue
                  color="from-purple-600 to-indigo-600"
                  perks={[
                    "Unlimited Platinum, Titanium, Gold, and Silver Tans",
                    "50% Off Lotion",
                    "Unlimited Red Light & Halosauna",
                    "40% Off BleachBright",
                    "4 Spray Tans per month",
                  ]}
                />

                {/* Titanium */}
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

                {/* Gold */}
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

                {/* Silver */}
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

                {/* Wellness */}
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

                {/* Membership Benefits */}
                <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 overflow-hidden sm:col-span-2 lg:col-span-1 flex flex-col">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="overflow-hidden p-3">
                      <img
                        src="/img/pricing/img.jpg"
                        alt="Membership pricing"
                        className="w-full h-44 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src="/img/pricing/img.gif"
                        alt="Membership pricing"
                        className="w-full h-44 object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Bellefair', serif" }}
                  >
                    Membership Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 flex-1">
                    {[
                      "Unlimited Tans in Your Chosen Level or below (1 per day)",
                      "50% Off Upgrades to Higher Levels",
                      "50% Off Lotion Purchases",
                      "Discounted/Included Spray Tans",
                      "Discounted/Included Red Light Therapy",
                      "Discounted BleachBright Teeth Whitening Services",
                      "3 Month Minimum",
                      "$5.00/mo Freeze Option (2 month max, per year) after 3 Month Minimum",
                      "Only $19.99 Enrollment Fee",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

/* ───────── Helper Components ───────── */

function Price({
  amount,
  cents,
  sub,
}: {
  amount: string;
  cents: string;
  sub?: boolean;
}) {
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
}: {
  tier: string;
  price: string;
  perks: string[];
  color: string;
  bestValue?: boolean;
}) {
  return (
    <div className="relative bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-gray-200 overflow-hidden card-hover flex flex-col">
      {bestValue && (
        <div className="absolute top-3 -right-8 rotate-45 bg-orange-500 text-white text-[10px] font-bold px-8 py-0.5 shadow-md z-10">
          BEST VALUE
        </div>
      )}
      <div className={`bg-linear-to-r ${color} px-6 py-5 text-white`}>
        <h3
          className="text-2xl font-bold italic"
          style={{ fontFamily: "'Bellefair', serif" }}
        >
          {tier}
        </h3>
        <p className="text-3xl font-extrabold mt-1">
          ${price}
          <span className="text-sm font-normal opacity-80">/mo</span>
        </p>
      </div>
      <ul className="p-6 space-y-2 text-sm text-gray-700 flex-1">
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
