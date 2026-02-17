"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          {/* Decorative background bubbles */}
         <div className="absolute top-1/2 right-10 w-48 h-48 bg-blue-100/35 rounded-full border-3 border-blue-200/40 -z-10"></div>
          <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-teal-200/40 rounded-full border-2 border-teal-300/40 -z-10"></div>
          <div className="absolute top-3/4 right-1/4 w-52 h-52 bg-sky-200/35 rounded-full border-3 border-sky-300/40 -z-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-blue-300/30 rounded-full border-2 border-blue-400/40 -z-10"></div>
          <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-cyan-100/40 rounded-full border-4 border-cyan-200/30 -z-10"></div>
          <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-teal-200/30 rounded-full border-2 border-teal-300/40 -z-10"></div>
      
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Location Info */}
              <div>
                <h2 className="text-xl md:text-2xl mb-1">
                  <span className="text-orange-500 font-medium">Northern Lights Tan & Wellness</span>
                  <span className="text-gray-700"> –</span>
                </h2>
                <p className="text-gray-700 mb-6">Cedarburg</p>

                {/* Map */}
                <div className="mb-6">
                  
                  <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5590456723203!2d-87.97768252335!3d43.30255527503819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8804e5782e88d047%3A0xef8ed7d5e7706eb3!2sNorthern%20Lights%20Tan%20Spa%20Inc!5e0!3m2!1sen!2sbd!4v1769670127457!5m2!1sen!2sbd"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>

                {/* Address */}
                <div className="space-y-1 text-gray-700 text-sm md:text-base">
                  <p className="font-medium">Northern Lights Tan & Wellness – Cedarburg</p>
                  <p>W51N731 Keup Rd, Cedarburg, WI</p>
                  <p>Tel: 262-387-1485</p>
                </div>

                {/* Hours */}
                <div className="mt-6 space-y-1 text-gray-700 text-sm md:text-base">
                  <p>Monday – Thursday 10:00am – 7:00pm</p>
                  <p>Friday 10:00am – 6:00pm</p>
                  <p>Saturday 9:00am – 3:00pm</p>
                  <p>Sunday 10:00am – 3:00pm</p>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl text-orange-500 font-medium mb-4">
                  Contact Us!
                </h2>
                <p className="text-sm text-gray-700 mb-6">
                  <span className="text-red-500">*</span> Indicates required field
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
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

                  {/* Comment */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Comment <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="px-8 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors text-sm uppercase tracking-wide"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
