/**
 * Decorative background bubbles in the site's sky/cyan/teal palette with a
 * warm sunset glow. Place inside a `relative isolate overflow-hidden` section.
 */
export default function Bubbles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Soft glows */}
      <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 h-[24rem] w-[24rem] rounded-full bg-sky-200/50 blur-3xl" />

      {/* Bubbles */}
      <div className="animate-float absolute top-16 left-[6%] h-20 w-20 rounded-full border-2 border-cyan-300/40 bg-cyan-200/20 sm:h-24 sm:w-24" />
      <div
        className="animate-float absolute top-[38%] right-[5%] h-28 w-28 rounded-full border-2 border-sky-300/40 bg-sky-100/30 sm:h-40 sm:w-40"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="animate-float absolute bottom-[18%] left-[14%] h-24 w-24 rounded-full border-2 border-teal-300/40 bg-teal-100/30 sm:h-32 sm:w-32"
        style={{ animationDelay: "-6s" }}
      />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-4 border-blue-300/30 bg-blue-200/25 sm:h-80 sm:w-80" />
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full border-4 border-blue-300/25 bg-blue-200/20 sm:h-72 sm:w-72" />
    </div>
  );
}
