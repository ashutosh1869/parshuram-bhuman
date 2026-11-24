
import { ArrowRight, Maximize2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { project } from "@/data/project";

export default function FloorPlans() {
  return (
    <section
      id="floor-plans"
      className="section bg-[#f0eee7]"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Find Your Space"
          title="A Home Designed for Your Family"
          description="Explore the advertised apartment configuration at Parshuram Bhuman."
          centered
        />

        <div className="max-w-[900px] mx-auto bg-white grid md:grid-cols-2 shadow-sm">
          <div className="h-[350px] md:h-[450px] relative">
            <img
              src="/images/project-hero.jpg"
              alt="Parshuram Bhuman project preview"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#173c32]/35 flex items-center justify-center">
              <div className="text-center text-white">
                <Maximize2 size={32} className="mx-auto mb-3" />
                <p className="text-xs tracking-widest">
                  FLOOR PLAN IMAGE PENDING
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="eyebrow">Apartment Configuration</p>

            <h3 className="font-serif text-4xl mt-4 mb-4">
              {project.configuration}
            </h3>

            <p className="description mb-8">
              Spacious apartments promoted for a comfortable
              family lifestyle.
            </p>

            <div className="border-y border-gray-200 py-5 mb-7">
              <p className="text-xs text-gray-500 mb-2">
                Advertised starting price
              </p>
              <p className="text-3xl font-serif text-[#173c32]">
                {project.price}
              </p>
            </div>

            <a href="#enquiry" className="primary-button">
              Enquire About Apartments
              <ArrowRight size={16} />
            </a>

            <p className="text-[11px] text-gray-400 mt-4">
              *Price and configuration subject to confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
