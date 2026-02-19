"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-48 md:h-56">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img/home_hero_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-400/60 via-orange-300/40 to-cyan-400/50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: "'Bellefair', serif" }}>
              Join Our Team
            </h1>
          </div>
        </section>

        {/* Job Application Content */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* Decorative background bubbles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full -mr-32 -mt-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-200/30 rounded-full border-2 border-cyan-300/40 -z-10"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-teal-100/40 rounded-full -ml-20 border-4 border-teal-200/30 -z-10"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-sky-200/30 rounded-full border-2 border-sky-300/40 -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
          <div className="absolute top-1/2 right-10 w-48 h-48 bg-blue-100/35 rounded-full border-3 border-blue-200/40 -z-10"></div>
          <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-teal-200/40 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute top-3/4 right-1/4 w-52 h-52 bg-sky-200/35 rounded-full border-3 border-sky-300/40 -z-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-blue-300/30 rounded-full border-2 border-blue-400/40 -z-10"></div>
          <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-cyan-100/40 rounded-full border-4 border-cyan-200/30 -z-10"></div>
          <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-teal-200/30 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full -ml-32 -mb-32 border-4 border-blue-300/30 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100/40 rounded-full -mr-24 -mb-24 border-4 border-sky-200/30 -z-10"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-cyan-300/35 rounded-full border-2 border-cyan-400/40 -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            {/* Introduction */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Career Opportunities at{" "}
                <span className="text-orange-500">Northern Lights Tan & Wellness</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re always looking for enthusiastic, customer-focused individuals to join
                our team. If you&apos;re passionate about wellness and helping others look and
                feel their best, we&apos;d love to hear from you!
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
              <h3 className="text-xl md:text-2xl text-orange-500 font-medium mb-2">
                Employment Application
              </h3>
              <p className="text-sm text-gray-600 mb-8">
                <span className="text-red-500">*</span> Indicates required field
              </p>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Personal Information
                  </h4>
                  <div className="space-y-4">
                    {/* Name Fields */}
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(xxx) xxx-xxxx"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Birth Date */}
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="col-span-2 sm:col-span-2">
                        <label className="block text-gray-700 text-sm mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">Zip Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Position Details Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Position Details
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Position Applying For <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select a position</option>
                          <option value="Spa Consultant (Sales)">Spa Consultant (Sales)</option>
                          <option value="Spa Attendant">Spa Attendant</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Availability <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Weekends Only">Weekends Only</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Earliest Start Date
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Desired Hourly Pay
                        </label>
                        <input
                          type="text"
                          name="desiredPay"
                          value={formData.desiredPay}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience & Qualifications Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Experience & Qualifications
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Previous Work Experience <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="experience"
                        placeholder="Please list your previous employers, job titles, and dates of employment..."
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Education Background
                      </label>
                      <textarea
                        name="education"
                        placeholder="List your education history (school name, degree/diploma, graduation date)..."
                        value={formData.education}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Relevant Skills
                      </label>
                      <textarea
                        name="skills"
                        placeholder="List any skills relevant to the position (customer service, sales, etc.)..."
                        value={formData.skills}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Weekly Availability Schedule Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Weekly Availability Schedule
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Please select your availability for each day of the week
                  </p>
                  <div className="space-y-3">
                    {/* Monday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Monday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilityMonday"
                          value={formData.availabilityMonday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="9:45-1">9:45-1</option>
                          <option value="1-4">1-4</option>
                          <option value="1-Close (7)">1-Close (7)</option>
                          <option value="4-Close (7)">4-Close (7)</option>
                          <option value="9:45-Close">9:45-Close</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>

                    {/* Tuesday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Tuesday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilityTuesday"
                          value={formData.availabilityTuesday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="9:45-1">9:45-1</option>
                          <option value="1-4">1-4</option>
                          <option value="1-Close (7)">1-Close (7)</option>
                          <option value="4-Close (7)">4-Close (7)</option>
                          <option value="9:45-Close">9:45-Close</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>

                    {/* Wednesday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Wednesday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilityWednesday"
                          value={formData.availabilityWednesday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="9:45-1">9:45-1</option>
                          <option value="1-4">1-4</option>
                          <option value="1-Close (7)">1-Close (7)</option>
                          <option value="4-Close (7)">4-Close (7)</option>
                          <option value="9:45-Close">9:45-Close</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>

                    {/* Thursday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Thursday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilityThursday"
                          value={formData.availabilityThursday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="9:45-1">9:45-1</option>
                          <option value="1-4">1-4</option>
                          <option value="1-Close (7)">1-Close (7)</option>
                          <option value="4-Close (7)">4-Close (7)</option>
                          <option value="9:45-Close">9:45-Close</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>

                    {/* Friday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Friday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilityFriday"
                          value={formData.availabilityFriday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="9:45-1">9:45-1</option>
                          <option value="1-4">1-4</option>
                          <option value="1-Close (6)">1-Close (6)</option>
                          <option value="4-Close (6)">4-Close (6)</option>
                          <option value="9:45-Close (6)">9:45-Close (6)</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>

                    {/* Saturday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Saturday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilitySaturday"
                          value={formData.availabilitySaturday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="8:45-Close (3)">8:45-Close (3)</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>

                    {/* Sunday */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                      <label className="text-gray-700 text-sm font-medium">Sunday</label>
                      <div className="sm:col-span-2">
                        <select
                          name="availabilitySunday"
                          value={formData.availabilitySunday}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors bg-white"
                        >
                          <option value="">Select availability</option>
                          <option value="9:45-Close (3)">9:45-Close (3)</option>
                          <option value="N/A">N/A</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tanning Industry Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Tanning Industry
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm mb-3">
                        Have you ever been to a tanning salon? <span className="text-red-500">*</span>
                        <span className="block text-xs text-gray-500 mt-1">(Select all that apply)</span>
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="tanningExperience"
                            value="Yes, I currently tan at a tanning salon"
                            checked={formData.tanningExperience.includes("Yes, I currently tan at a tanning salon")}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-gray-700">Yes, I currently tan at a tanning salon</span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="tanningExperience"
                            value="Yes, I have tanned before but not currently"
                            checked={formData.tanningExperience.includes("Yes, I have tanned before but not currently")}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-gray-700">Yes, I have tanned before but not currently</span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="tanningExperience"
                            value="Yes, I've spray tanned before but that's it"
                            checked={formData.tanningExperience.includes("Yes, I've spray tanned before but that's it")}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-gray-700">Yes, I&apos;ve spray tanned before but that&apos;s it</span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="tanningExperience"
                            value="No, I've never been to a tanning salon"
                            checked={formData.tanningExperience.includes("No, I've never been to a tanning salon")}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-gray-700">No, I&apos;ve never been to a tanning salon</span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="tanningExperience"
                            value="No, I would never use a tanning salon"
                            checked={formData.tanningExperience.includes("No, I would never use a tanning salon")}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-gray-700">No, I would never use a tanning salon</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    Additional Information
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        References
                      </label>
                      <textarea
                        name="references"
                        placeholder="Please provide 2-3 professional references (name, relationship, phone number)..."
                        value={formData.references}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Why are you interested in working at Northern Lights Tan & Wellness?{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="whyInterested"
                        placeholder="Tell us why you'd like to join our team..."
                        value={formData.whyInterested}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Tell us something interesting about yourself{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="additionalInfo"
                        placeholder="Share something interesting about yourself..."
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">
                        Attach Resume
                      </label>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-amber-600 transition-all duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
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
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Equal Opportunity Statement */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                Northern Lights Tan & Wellness is an equal opportunity employer. We celebrate
                diversity and are committed to creating an inclusive environment for all
                employees.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
