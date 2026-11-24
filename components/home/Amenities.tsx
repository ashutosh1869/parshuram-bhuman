
import {
  Waves,
  Dumbbell,
  Trees,
  Baby,
  ShieldCheck,
  Car,
} from "lucide-react";

import SectionHeading from "@/components/shared/SectionHeading";
import { amenities } from "@/data/project";

const icons = [
  Waves,
  Dumbbell,
  Trees,
  Baby,
  ShieldCheck,
  Car,
];

export default function Amenities() {
  return (
    <section id="amenities" className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Lifestyle & Comfort"
          title="Amenities Designed Around You"
          description="Discover thoughtfully presented lifestyle facilities for comfort, recreation and everyday convenience."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="group border border-gray-100 bg-[#f7f5ef] overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="w-11 h-11 flex items-center justify-center bg-[#173c32] text-[#d5b77e] mb-5">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-serif text-xl mb-2">
                    {item.title}
                  </h3>

                  <p className="description text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
