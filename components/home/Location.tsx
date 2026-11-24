
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { project } from "@/data/project";

const advantages = [
  "Connectivity to NH-16",
  "Nearby hospitals",
  "Nearby international schools",
  "Shopping and daily necessities within reach",
];

export default function Location() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(project.location);

  return (
    <section id="location" className="section bg-[#f7f5ef]">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            eyebrow="The Right Location"
            title="Connected to What Matters"
            description={`Discover the location advantages of ${project.name} in ${project.location}.`}
          />

          <div className="space-y-5">
            {advantages.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-9 h-9 bg-[#173c32] text-[#d5b77e] flex items-center justify-center shrink-0">
                  <MapPin size={17} />
                </div>

                <p className="text-sm text-[#424842]">{item}</p>
              </div>
            ))}
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button mt-9"
          >
            Explore Location
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="min-h-[400px] bg-[#173c32] relative overflow-hidden flex items-center justify-center text-white p-8">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(45deg, transparent 48%, #d5b77e 49%, transparent 50%), linear-gradient(-45deg, transparent 48%, #d5b77e 49%, transparent 50%)",
              backgroundSize: "65px 65px",
            }}
          />

          <div className="relative text-center">
            <div className="w-16 h-16 border border-[#d5b77e] rounded-full flex items-center justify-center mx-auto mb-6">
              <Navigation size={28} className="text-[#d5b77e]" />
            </div>

            <p className="eyebrow">Find Your Destination</p>

            <h3 className="font-serif text-3xl mt-4 mb-3">
              Ambapua
            </h3>

            <p className="text-sm text-white/70">
              Berhampur, Odisha
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm border-b border-[#d5b77e] pb-2"
            >
              Open in Google Maps
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
