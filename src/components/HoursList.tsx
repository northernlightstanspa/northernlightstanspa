"use client";

import { useSyncExternalStore } from "react";
import { HOURS } from "@/lib/site";

const subscribe = () => () => {};

// Day of week at the spa (Cedarburg, WI), regardless of the visitor's timezone.
function getSpaDay() {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
  }).format(new Date());
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
}

type HoursListProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export default function HoursList({ tone = "light", compact = false }: HoursListProps) {
  // -1 on the server, so nothing is highlighted until the client knows the day.
  const today = useSyncExternalStore(subscribe, getSpaDay, () => -1);
  const dark = tone === "dark";

  return (
    <ul className={compact ? "space-y-1.5 text-sm" : "space-y-2"}>
      {HOURS.map((row) => {
        const isToday = row.days.includes(today);
        return (
          <li
            key={row.label}
            className={`flex items-center justify-between gap-4 ${
              compact ? "" : "rounded-xl px-4 py-2.5"
            } ${
              isToday && !compact
                ? dark
                  ? "bg-orange-500/15 ring-1 ring-orange-400/30"
                  : "bg-gradient-to-r from-orange-50 to-amber-50 ring-1 ring-orange-200"
                : ""
            }`}
          >
            <span
              className={`flex items-center gap-2 ${
                isToday ? (dark ? "text-white" : "font-semibold text-slate-900") : dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {row.label}
              {isToday && (
                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                  Today
                </span>
              )}
            </span>
            <span
              className={`tabular-nums whitespace-nowrap ${
                isToday ? (dark ? "text-orange-300" : "font-semibold text-orange-600") : dark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {row.time}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
