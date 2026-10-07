import { LuClock, LuMapPin, LuNavigation, LuPhone } from "react-icons/lu";
import HoursList from "@/components/HoursList";
import SectionHeading from "@/components/SectionHeading";
import { DIRECTIONS_URL, MAP_EMBED_URL, PHONE } from "@/lib/site";

export default function HoursAndNews() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Visit Us" title="Hours of Operation" className="reveal" />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Hours of Operation */}
          <div className="reveal card p-6 sm:p-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/30">
                <LuMapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Northern Lights Tan & Wellness – Cedarburg</p>
                <p>W51 N731 Keup Rd, Cedarburg, WI 53012</p>
                <p>Tel: 262-387-1485</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                <LuClock className="h-4 w-4 text-orange-500" aria-hidden="true" />
                Hours:
              </p>
              <HoursList />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
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

          {/* Map */}
          <div className="reveal card min-h-80 overflow-hidden p-2 lg:col-span-3">
            <iframe
              src={MAP_EMBED_URL}
              title="Map to Northern Lights Tan & Wellness in Cedarburg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full rounded-[1.25rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
