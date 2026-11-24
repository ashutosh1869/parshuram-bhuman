
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { project } from "@/data/project";

export default function ProjectIntro() {
  return (
    <section id="about" className="section bg-[#f7f5ef]">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src="/images/project-hero.jpg"
            alt="Parshuram Bhuman architectural rendering"
            className="w-full h-[480px] object-cover"
          />

          <div className="absolute -bottom-5 -right-5 bg-[#173c32] text-white p-7 hidden sm:block">
            <p className="font-serif text-3xl">13</p>
            <p className="text-xs tracking-widest mt-1">
              STOREY LIVING
            </p>
          </div>
        </div>

        <div className="lg:pl-5">
          <SectionHeading
            eyebrow="About The Project"
            title="A New Perspective on Premium Living"
            description={project.description}
          />

          <p className="description mb-7">
            Located in Ambapua, Berhampur, Parshuram Bhuman
            brings together thoughtfully planned residences,
            lifestyle amenities and convenient connectivity.
            A residential destination presented by KNP Developers.
          </p>

          <a
            href="#amenities"
            className="inline-flex items-center gap-3 text-[#173c32] text-sm font-semibold border-b border-[#c3a36b] pb-2"
          >
            Discover the lifestyle
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
