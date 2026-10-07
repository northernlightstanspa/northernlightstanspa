import { LuClock, LuMapPin, LuNavigation, LuPhone } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import HoursList from "@/components/HoursList";
import PageHero from "@/components/PageHero";
import { DIRECTIONS_URL, MAP_EMBED_URL, PHONE } from "@/lib/site";

export default function LocationsPage() {
  return (
    <>
      <PageHero title="Locations" />

      {/* Location Content */}
      <section className="section">
        <Bubbles />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="reveal card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Google Map */}
              <div className="p-2">
                <div className="relative h-72 overflow-hidden rounded-[1.25rem] sm:h-96 lg:h-full lg:min-h-[26rem]">
                  <iframe
                    src={MAP_EMBED_URL}
                    title="Map to Northern Lights Tan Spa in Cedarburg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                {/* Location Title */}
                <h2 className="mb-8 font-serif text-3xl md:text-4xl">
                  <span className="text-orange-500">Northern Lights Tan Spa</span>
                  <span className="text-slate-800"> - Cedarburg</span>
                </h2>

                {/* Address and Contact */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <LuMapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">Northern Lights Tan Spa – Cedarburg</p>
                    <p>W51N731 Keup Rd, Cedarburg, WI</p>
                    <p>Tel: 262-387-1485</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                    <LuClock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <HoursList compact />
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={PHONE.href} className="btn btn-primary">
                    <LuPhone className="h-4 w-4" aria-hidden="true" />
                    Call Us
                  </a>
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <LuNavigation className="h-4 w-4" aria-hidden="true" />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
