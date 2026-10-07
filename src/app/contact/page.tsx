"use client";
import { useState } from "react";
import { LuCircleCheck, LuClock, LuInfo, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import HoursList from "@/components/HoursList";
import PageHero from "@/components/PageHero";
import { MAP_EMBED_URL, PHONE } from "@/lib/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for your message! We will get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          comment: "",
          website: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <PageHero title="Contact Us" />

      {/* Contact Content */}
      <section className="section">
        <Bubbles />

        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left - Location Info */}
            <div className="reveal card overflow-hidden lg:col-span-5">
              <div className="p-6 sm:p-8">
                <h2 className="font-serif text-2xl md:text-3xl">
                  <span className="text-orange-500">Northern Lights Tan & Wellness</span>
                  <span className="text-slate-700"> –</span>
                </h2>
                <p className="mt-1 text-slate-600">Cedarburg</p>
              </div>

              {/* Map */}
              <div className="px-2">
                <iframe
                  src={MAP_EMBED_URL}
                  title="Map to Northern Lights Tan & Wellness in Cedarburg"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-[1.25rem]"
                ></iframe>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <LuMapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-1 text-sm text-slate-700 md:text-base">
                    <p className="font-semibold text-slate-900">Northern Lights Tan & Wellness – Cedarburg</p>
                    <p>W51N731 Keup Rd, Cedarburg, WI</p>
                    <a href={PHONE.href} className="inline-flex items-center gap-1.5 hover:text-orange-600">
                      <LuPhone className="h-3.5 w-3.5" aria-hidden="true" />
                      Tel: 262-387-1485
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600">
                    <LuClock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1 text-sm md:text-base">
                    <HoursList compact />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="reveal card relative overflow-hidden p-6 sm:p-10 lg:col-span-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400" />
              <h2 className="font-serif text-3xl text-orange-500 md:text-4xl">Contact Us!</h2>
              <p className="mt-2 mb-8 text-sm text-slate-600">
                <span className="text-red-500">*</span> Indicates required field
              </p>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  role="status"
                  className={`mb-6 flex items-start gap-3 rounded-2xl p-4 ${
                    submitStatus.type === "success"
                      ? "border border-green-200 bg-green-50 text-green-800"
                      : "border border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <LuCircleCheck className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <LuInfo className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  )}
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: invisible to visitors, catches spam bots that fill every field */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="sr-only"
                />
                {/* Name Fields */}
                <fieldset>
                  <legend className="field-label">
                    Name <span className="text-red-500">*</span>
                  </legend>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First"
                      aria-label="First name"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="field"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      aria-label="Last name"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="field"
                    />
                  </div>
                </fieldset>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="field-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="field"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label htmlFor="contact-comment" className="field-label">
                    Comment <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full px-10 uppercase sm:w-auto ${
                    isSubmitting ? "cursor-not-allowed opacity-70" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit
                      <LuSend className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
