import Image from "next/image";
import { LuShieldCheck } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" />

      {/* Main Content */}
      <section className="section">
        <Bubbles />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="reveal mb-14 text-center">
            <p className="eyebrow mb-5">
              <LuShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              FDA Exposure Schedules
            </p>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-snug text-slate-800 md:text-4xl">
              &quot;Smart Tanning&quot; at Northern Lights Tan Spa Inc.
            </h2>
            <div className="accent-rule mx-auto mt-6" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Image */}
            <div className="reveal lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:sticky lg:top-32">
                <div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-gradient-to-br from-orange-400 via-amber-300 to-cyan-400 opacity-70" />
                <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-2xl">
                  <Image
                    src="/img/aboutus/img.jpg"
                    alt="Smart Tanning"
                    width={1024}
                    height={683}
                    sizes="(min-width: 1024px) 28rem, 100vw"
                    className="h-auto w-full rounded-[1.4rem] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="reveal lg:col-span-7">
              <div className="card space-y-5 p-7 text-base leading-relaxed text-slate-600 sm:p-10">
                <p className="text-lg text-slate-800">
                  Indoor tanning, for those who can tan, is an intelligent way to minimize the risk of sunburn while maximizing the enjoyment and benefit of having a tan.We call this &quot;smart tanning&quot; because all our tanning clients are personally coached by our trained spa personnel in order to understand how their skin type will react to sunlight and how to avoid sunburn, both indoors and out.
                </p>

                <p>
                  Tanning, as an industry, is also regulated by the government. Exposure times for every tanning session are established by a pre-set exposure schedule that takes into account a tanner&apos;s skin type and intensity of the tanning equipment. This schedule, regulated by the Food and Drug Administration (FDA), also considers how long an individual has been tanning, increasing exposure times gradually to minimize the possibility of burning. At Northern Lights, we adhere to the FDA&apos;s schedule that helps us deliver a set dosage of sunlight designed to minimize the risk of sunburn.
                </p>

                <p>
                  This kind of exposure control is impossible outdoors, where variables-seasonality, time of day, weather conditions, reflective surfaces, and altitude-all make outdoor tanning a random act and sunburn prevention more difficult.
                </p>

                <p className="rounded-2xl border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-amber-50/40 px-5 py-4 font-medium text-slate-800">
                  By following the FDA&apos;s prescribed exposure schedules, Northern Lights Tan Spa helps bring you safe, regulated tanning sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
