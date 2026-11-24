
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { project } from "@/data/project";

export default function Footer() {
  return (
    <footer className="bg-[#102d25] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-14 border-b border-white/15">
          <div>
            <h2 className="font-serif text-2xl text-[#d5b77e]">
              PARSHURAM BHUMAN
            </h2>

            <p className="text-[10px] tracking-[3px] mt-2 text-white/60">
              A PREMIUM LIFESTYLE
            </p>

            <p className="text-sm text-white/60 leading-relaxed mt-6 max-w-sm">
              {project.tagline} Discover a thoughtfully presented
              residential experience by KNP Developers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/60">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Amenities", "#amenities"],
                ["Floor Plans", "#floor-plans"],
                ["Gallery", "#gallery"],
                ["Contact", "#enquiry"],
              ].map(([label, href]) => (
                <a
                  href={href}
                  key={label}
                  className="hover:text-[#d5b77e] transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm text-white/60">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#d5b77e] shrink-0" />
                <p>{project.location}</p>
              </div>

              <a
                href={`tel:${project.phone}`}
                className="flex gap-3 hover:text-white"
              >
                <Phone size={18} className="text-[#d5b77e] shrink-0" />
                +91 7205063802
              </a>

              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 text-[#d5b77e]"
              >
                Book a Site Visit
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-7 text-xs text-white/40">
          <p>
             © 2026 Parshuram Bhuman. All rights reserved.
            {/* © {new Date().getFullYear()} Parshuram Bhuman. All rights reserved. */}
          </p>

          <p>
            Presented by KNP Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
