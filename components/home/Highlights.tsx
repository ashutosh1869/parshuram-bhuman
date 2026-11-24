
import { ArrowRight, MapPin } from "lucide-react";
import { project } from "@/data/project";

export default function Highlights() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] h-[92vh] max-h-[900px] flex items-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10,25,20,.88), rgba(10,25,20,.40), rgba(10,25,20,.15)), url('/images/project-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="container relative z-10 pt-24">
        <div className="max-w-[720px]">
          <div className="flex items-center gap-2 mb-7">
            <span className="w-9 h-px bg-[#c3a36b]" />
            <p className="text-[#dfc38f] uppercase tracking-[4px] text-xs">
              KNP Developers Presents
            </p>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.05] mb-6">
            Parshuram
            <br />
            <span className="text-[#d5b77e]">Bhuman</span>
          </h1>

          <div className="flex items-center gap-2 mb-6 text-white/80">
            <MapPin size={16} className="text-[#d5b77e]" />
            <span className="text-sm tracking-wider">
              {project.location}
            </span>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed max-w-[540px] text-white/85 mb-9">
            {project.tagline}
            {" "}
            Discover spacious 3BHK apartments designed
            for a premium family lifestyle.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#enquiry" className="primary-button !bg-[#c3a36b] !border-[#c3a36b] !text-[#173c32]">
              Book Your Site Visit
              <ArrowRight size={16} />
            </a>

            <a href="#about" className="outline-button">
              Explore Project
            </a>
          </div>

          <div className="mt-14 border-t border-white/25 pt-7 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-[600px]">
            <div>
              <p className="text-2xl font-serif text-[#d5b77e]">
                13
              </p>
              <p className="text-xs text-white/70 mt-1">
                Storey High-Rise
              </p>
            </div>

            <div>
              <p className="text-2xl font-serif text-[#d5b77e]">
                3 BHK
              </p>
              <p className="text-xs text-white/70 mt-1">
                Spacious Apartments
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl font-serif text-[#d5b77e]">
                ₹68L*
              </p>
              <p className="text-xs text-white/70 mt-1">
                Starting Price
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:block">
        <p className="text-[10px] tracking-[4px] text-white/70 [writing-mode:vertical-rl]">
          DISCOVER YOUR DREAM HOME
        </p>
      </div>
    </section>
  );
}
