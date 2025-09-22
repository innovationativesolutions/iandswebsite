// components/ContactSection.tsx
"use client";

import { useState } from "react";

const ADDRESS = "PO Box 5, Oakdale, PA 15071";
const COMPANY = "Innovations & Services LLC";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Hook up with API / backend (Nodemailer / Resend / Formspree / Next.js API route)
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 bg-white dark:bg-gray-900">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
        {/* LEFT: Map + Contact Info */}
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Reach out to us for any inquiries, collaborations, or service requests.
          </p>

          {/* Map */}
          <div className="mt-4 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 shadow">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10]">
              <iframe
                title="Company location map"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_SRC}
              />
            </div>
          </div>
            <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            <p>
              📍 <span className="font-medium">{COMPANY}</span>, {ADDRESS}
            </p>
          </div>
          {/* Contact Info in Individual Boxes */}
          <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
            {/* Phone Box */}
            <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📞</div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Phone</h4>
              <a 
                href="tel:+14122123157" 
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 text-xs sm:text-sm"
              >
                +1412.212.3157
              </a>
            </div>

            {/* Email Box */}
            <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">✉️</div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Email</h4>
              <a
                href="mailto:support@iands-llc.com"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 break-all text-xs sm:text-sm"
              >
                support@iands-llc.com
              </a>
            </div>

            {/* Website Box */}
            <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center sm:col-span-1">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🌐</div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Website</h4>
              <a
                href="https://www.iands-llc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 text-xs sm:text-sm"
              >
                www.iands-llc.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-md ring-1 ring-gray-200 dark:ring-gray-700 order-1 lg:order-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center lg:text-left">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 sm:py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 sm:py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 sm:py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 sm:py-3 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-4 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
