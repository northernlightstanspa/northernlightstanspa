import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
  tone = "light",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag
        className={`font-serif text-3xl leading-tight sm:text-4xl md:text-5xl ${
          tone === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </Tag>
      <div className={`accent-rule mt-5 ${centered ? "mx-auto" : ""}`} />
      {description && (
        <div
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </div>
      )}
    </div>
  );
}
