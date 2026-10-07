"use client";
import { useState, type ReactNode } from "react";
import { LuBriefcase, LuCircleCheck, LuHeart, LuInfo, LuPaperclip, LuSend, LuUsers } from "react-icons/lu";
import Bubbles from "@/components/Bubbles";
import PageHero from "@/components/PageHero";

const weekdayOptions = ["9:45-1", "1-4", "1-Close (7)", "4-Close (7)", "9:45-Close", "N/A"];

const weeklyAvailability = [
  { day: "Monday", name: "availabilityMonday", options: weekdayOptions },
  { day: "Tuesday", name: "availabilityTuesday", options: weekdayOptions },
  { day: "Wednesday", name: "availabilityWednesday", options: weekdayOptions },
  { day: "Thursday", name: "availabilityThursday", options: weekdayOptions },
  {
    day: "Friday",
    name: "availabilityFriday",
    options: ["9:45-1", "1-4", "1-Close (6)", "4-Close (6)", "9:45-Close (6)", "N/A"],
  },
  { day: "Saturday", name: "availabilitySaturday", options: ["8:45-Close (3)", "N/A"] },
  { day: "Sunday", name: "availabilitySunday", options: ["9:45-Close (3)", "N/A"] },
] as const;

const tanningExperienceOptions = [
  "Yes, I currently tan at a tanning salon",
  "Yes, I have tanned before but not currently",
  "Yes, I've spray tanned before but that's it",
  "No, I've never been to a tanning salon",
  "No, I would never use a tanning salon",
];

function FormSection({ step, title, children }: { step: number; title: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 font-semibold text-white shadow-md shadow-orange-500/30">
          {step}
        </span>
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function Required() {
  return <span className="text-red-500">*</span>;
}

export default function JobsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    birthDate: "",
    position: "",
    availability: "",
    startDate: "",
    desiredPay: "",
    experience: "",
    education: "",
    skills: "",
    availabilityMonday: "",
    availabilityTuesday: "",
    availabilityWednesday: "",
    availabilityThursday: "",
    availabilityFriday: "",
    availabilitySaturday: "",
    availabilitySunday: "",
    tanningExperience: [] as string[],
    references: "",
    whyInterested: "",
    additionalInfo: "",
    website: "",
    resume: null as File | null,
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
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "tanningExperience") {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (key === "resume" && value) {
          formDataToSend.append(key, value as File);
        } else if (value !== null) {
          formDataToSend.append(key, value.toString());
        }
      });

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for your application! We will review it and get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          birthDate: "",
          position: "",
          availability: "",
          startDate: "",
          desiredPay: "",
          experience: "",
          education: "",
          skills: "",
          availabilityMonday: "",
          availabilityTuesday: "",
          availabilityWednesday: "",
          availabilityThursday: "",
          availabilityFriday: "",
          availabilitySaturday: "",
          availabilitySunday: "",
          tanningExperience: [],
          references: "",
          whyInterested: "",
          additionalInfo: "",
          website: "",
          resume: null,
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit application. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const checked = checkbox.checked;

      if (name === "tanningExperience") {
        setFormData(prev => ({
          ...prev,
          tanningExperience: checked
            ? [...prev.tanningExperience, value]
            : prev.tanningExperience.filter(item => item !== value)
        }));
      }
    } else if (type === "file") {
      const input = e.target as HTMLInputElement;
      const file = input.files?.[0] || null;
      setFormData(prev => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <>
      <PageHero title="Join Our Team" />

      {/* Job Application Content */}
      <section className="section">
        <Bubbles />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="reveal mb-12 text-center">
            <p className="eyebrow mb-5">
              <LuBriefcase className="h-3.5 w-3.5" aria-hidden="true" />
              We&apos;re Hiring
            </p>
            <h2 className="mb-5 font-serif text-3xl leading-tight text-slate-800 md:text-5xl">
              Career Opportunities at{" "}
              <span className="text-orange-500">Northern Lights Tan & Wellness</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              We&apos;re always looking for enthusiastic, customer-focused individuals to join
              our team. If you&apos;re passionate about wellness and helping others look and
              feel their best, we&apos;d love to hear from you!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                { icon: LuUsers, label: "Spa Consultant (Sales)" },
                { icon: LuHeart, label: "Spa Attendant" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
                >
                  <Icon className="h-4 w-4 text-orange-500" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="reveal card relative overflow-hidden p-6 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400" />
            <h3 className="font-serif text-3xl text-orange-500 md:text-4xl">Employment Application</h3>
            <p className="mt-2 mb-10 text-sm text-slate-600">
              <Required /> Indicates required field
            </p>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                role="status"
                className={`mb-8 flex items-start gap-3 rounded-2xl p-4 ${
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

            <form onSubmit={handleSubmit} className="space-y-12">
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

              {/* Personal Information Section */}
              <FormSection step={1} title="Personal Information">
                <div className="space-y-5">
                  {/* Name Fields */}
                  <fieldset>
                    <legend className="field-label">
                      Full Name <Required />
                    </legend>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        aria-label="First Name"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="field"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        aria-label="Last Name"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="field"
                      />
                    </div>
                  </fieldset>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="job-email" className="field-label">
                        Email <Required />
                      </label>
                      <input
                        id="job-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="job-phone" className="field-label">
                        Phone <Required />
                      </label>
                      <input
                        id="job-phone"
                        type="tel"
                        name="phone"
                        placeholder="(xxx) xxx-xxxx"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="field"
                      />
                    </div>
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label htmlFor="job-birthDate" className="field-label">
                      Date of Birth <Required />
                    </label>
                    <input
                      id="job-birthDate"
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      className="field"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="job-address" className="field-label">
                      Street Address
                    </label>
                    <input
                      id="job-address"
                      type="text"
                      name="address"
                      autoComplete="street-address"
                      value={formData.address}
                      onChange={handleChange}
                      className="field"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="col-span-2 sm:col-span-2">
                      <label htmlFor="job-city" className="field-label">City</label>
                      <input
                        id="job-city"
                        type="text"
                        name="city"
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="job-state" className="field-label">State</label>
                      <input
                        id="job-state"
                        type="text"
                        name="state"
                        autoComplete="address-level1"
                        value={formData.state}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="job-zipCode" className="field-label">Zip Code</label>
                      <input
                        id="job-zipCode"
                        type="text"
                        name="zipCode"
                        autoComplete="postal-code"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                  </div>
                </div>
              </FormSection>

              {/* Position Details Section */}
              <FormSection step={2} title="Position Details">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="job-position" className="field-label">
                        Position Applying For <Required />
                      </label>
                      <select
                        id="job-position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="field"
                      >
                        <option value="">Select a position</option>
                        <option value="Spa Consultant (Sales)">Spa Consultant (Sales)</option>
                        <option value="Spa Attendant">Spa Attendant</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="job-availability" className="field-label">
                        Availability <Required />
                      </label>
                      <select
                        id="job-availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        required
                        className="field"
                      >
                        <option value="">Select availability</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Weekends Only">Weekends Only</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="job-startDate" className="field-label">
                        Earliest Start Date
                      </label>
                      <input
                        id="job-startDate"
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="job-desiredPay" className="field-label">
                        Desired Hourly Pay
                      </label>
                      <input
                        id="job-desiredPay"
                        type="text"
                        name="desiredPay"
                        value={formData.desiredPay}
                        onChange={handleChange}
                        className="field"
                      />
                    </div>
                  </div>
                </div>
              </FormSection>

              {/* Experience & Qualifications Section */}
              <FormSection step={3} title="Experience & Qualifications">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="job-experience" className="field-label">
                      Previous Work Experience <Required />
                    </label>
                    <textarea
                      id="job-experience"
                      name="experience"
                      placeholder="Please list your previous employers, job titles, and dates of employment..."
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="field resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="job-education" className="field-label">
                      Education Background
                    </label>
                    <textarea
                      id="job-education"
                      name="education"
                      placeholder="List your education history (school name, degree/diploma, graduation date)..."
                      value={formData.education}
                      onChange={handleChange}
                      rows={3}
                      className="field resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="job-skills" className="field-label">
                      Relevant Skills
                    </label>
                    <textarea
                      id="job-skills"
                      name="skills"
                      placeholder="List any skills relevant to the position (customer service, sales, etc.)..."
                      value={formData.skills}
                      onChange={handleChange}
                      rows={3}
                      className="field resize-none"
                    />
                  </div>
                </div>
              </FormSection>

              {/* Weekly Availability Schedule Section */}
              <FormSection step={4} title="Weekly Availability Schedule">
                <p className="mb-5 text-sm text-slate-600">
                  Please select your availability for each day of the week
                </p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {weeklyAvailability.map(({ day, name, options }) => (
                    <div
                      key={name}
                      className="grid grid-cols-1 items-center gap-2 rounded-2xl bg-slate-50/80 p-3 ring-1 ring-slate-200/70 sm:grid-cols-3 sm:gap-4"
                    >
                      <label htmlFor={`job-${name}`} className="pl-1 text-sm font-medium text-slate-700">
                        {day}
                      </label>
                      <div className="sm:col-span-2">
                        <select
                          id={`job-${name}`}
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          className="field"
                        >
                          <option value="">Select availability</option>
                          {options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </FormSection>

              {/* Tanning Industry Section */}
              <FormSection step={5} title="Tanning Industry">
                <fieldset>
                  <legend className="mb-4 block text-sm font-medium text-slate-700">
                    Have you ever been to a tanning salon? <Required />
                    <span className="mt-1 block text-xs font-normal text-slate-500">(Select all that apply)</span>
                  </legend>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {tanningExperienceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:ring-orange-300 has-[:checked]:bg-orange-50/70 has-[:checked]:ring-2 has-[:checked]:ring-orange-400"
                      >
                        <input
                          type="checkbox"
                          name="tanningExperience"
                          value={option}
                          checked={formData.tanningExperience.includes(option)}
                          onChange={handleChange}
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-sm text-slate-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </FormSection>

              {/* Additional Information Section */}
              <FormSection step={6} title="Additional Information">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="job-references" className="field-label">
                      References
                    </label>
                    <textarea
                      id="job-references"
                      name="references"
                      placeholder="Please provide 2-3 professional references (name, relationship, phone number)..."
                      value={formData.references}
                      onChange={handleChange}
                      rows={3}
                      className="field resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="job-whyInterested" className="field-label">
                      Why are you interested in working at Northern Lights Tan & Wellness?{" "}
                      <Required />
                    </label>
                    <textarea
                      id="job-whyInterested"
                      name="whyInterested"
                      placeholder="Tell us why you'd like to join our team..."
                      value={formData.whyInterested}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="field resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="job-additionalInfo" className="field-label">
                      Tell us something interesting about yourself{" "}
                      <Required />
                    </label>
                    <textarea
                      id="job-additionalInfo"
                      name="additionalInfo"
                      placeholder="Share something interesting about yourself..."
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="field resize-none"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="job-resume" className="field-label">
                      Attach Resume
                    </label>
                    <div className="relative flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/60 px-4 py-6 text-center transition hover:border-orange-400 hover:bg-orange-50/40 sm:flex-row sm:text-left">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                        <LuPaperclip className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <input
                        id="job-resume"
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="w-full text-sm text-slate-600 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-orange-500 file:px-5 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-600"
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                    </p>
                  </div>
                </div>
              </FormSection>

              {/* Submit Button */}
              <div className="border-t border-slate-200 pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full px-10 py-3.5 text-base sm:w-auto ${
                    isSubmitting ? "cursor-not-allowed opacity-70" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Submit Application
                      <LuSend className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Equal Opportunity Statement */}
          <div className="mt-8 text-center text-sm text-slate-500">
            <p className="mx-auto max-w-2xl">
              Northern Lights Tan & Wellness is an equal opportunity employer. We celebrate
              diversity and are committed to creating an inclusive environment for all
              employees.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
