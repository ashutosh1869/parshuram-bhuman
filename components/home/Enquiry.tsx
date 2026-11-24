
"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { project } from "@/data/project";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Demo only: no data is sent to a server.
    setSubmitted(true);
  }

  return (
    <section id="enquiry" className="section bg-[#173c32] text-white">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow">Make It Yours</p>

          <h2 className="font-serif text-4xl sm:text-6xl leading-tight mt-5 mb-6">
            Your Dream Home
            <br />
            <span className="text-[#d5b77e]">Starts Here.</span>
          </h2>

          <p className="text-white/70 leading-relaxed max-w-md">
            Take the first step towards premium living.
            Submit your enquiry or connect with our sales team
            to know more about Parshuram Bhuman.
          </p>

          <a
            href={`tel:${project.phone}`}
            className="inline-flex items-center gap-4 mt-9"
          >
            <span className="w-12 h-12 border border-[#d5b77e] flex items-center justify-center">
              <Phone className="text-[#d5b77e]" />
            </span>

            <span>
              <span className="block text-xs text-white/60">
                Call / WhatsApp
              </span>
              <span className="text-lg">
                +91 7205063802
              </span>
            </span>
          </a>
        </div>

        <div className="bg-white text-[#252a28] p-7 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-14 h-14 bg-[#173c32] text-white flex items-center justify-center mx-auto rounded-full text-2xl">
                ✓
              </div>

              <h3 className="font-serif text-3xl mt-6">
                Thank You!
              </h3>

              <p className="description mt-3">
                Your demo enquiry has been submitted successfully.
                Our team would get in touch with you.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="primary-button mt-7"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">Get In Touch</p>

              <h3 className="font-serif text-3xl mt-3 mb-8">
                Book Your Site Visit
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs block mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-[#f7f5ef] px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#c3a36b]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-xs block mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    className="w-full bg-[#f7f5ef] px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#c3a36b]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs block mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#f7f5ef] px-4 py-4 text-sm outline-none focus:ring-1 focus:ring-[#c3a36b]"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="text-xs block mb-2">
                    Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full bg-[#f7f5ef] px-4 py-4 text-sm outline-none"
                    defaultValue="3BHK Apartment"
                  >
                    <option>3BHK Apartment</option>
                    <option>Project Information</option>
                    <option>Site Visit</option>
                  </select>
                </div>

                <button type="submit" className="primary-button w-full">
                  Submit Enquiry
                  <ArrowRight size={16} />
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  Demo form only. Information is not stored or transmitted.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
