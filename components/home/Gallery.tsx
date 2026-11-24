
"use client";

import { useState } from "react";
import { gallery } from "@/data/project";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Exterior",
    "Amenities",
    "Landscape",
  ];

  const filtered =
    active === "All"
      ? gallery
      : gallery.filter((item) => item.category === active);

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Project Gallery"
          title="A Glimpse Into Your Future Home"
          description="Explore the architectural vision and lifestyle spaces of Parshuram Bhuman."
          centered
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2 text-xs transition ${
                active === category
                  ? "bg-[#173c32] text-white"
                  : "bg-[#f7f5ef] text-[#173c32]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="relative group h-[280px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] tracking-[3px] text-[#d5b77e] uppercase">
                  {item.category}
                </p>
                <h3 className="font-serif text-xl mt-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Illustrative images. Actual project gallery to be provided by the developer.
        </p>
      </div>
    </section>
  );
}

