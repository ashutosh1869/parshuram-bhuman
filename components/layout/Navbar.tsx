
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { project } from "@/data/project";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f7f5ef]/95 backdrop-blur-md border-b border-black/5">
      <div className="container h-[78px] flex items-center justify-between">
        <a href="#home" className="flex flex-col">
          <span className="text-xl font-serif text-[#173c32] font-bold">
            PARSHURAM BHUMAN
          </span>
          <span className="text-[9px] tracking-[3px] text-[#c3a36b]">
            A PREMIUM LIFESTYLE
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[#343a36] hover:text-[#c3a36b] transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href="#enquiry" className="primary-button">
            Enquire Now <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#173c32]"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-[#f7f5ef] border-t border-black/10 p-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="primary-button"
          >
            Enquire Now
          </a>
          <p className="text-xs text-gray-500">
            {project.location}
          </p>
        </nav>
      )}
    </header>
  );
}
