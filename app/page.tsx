
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import ProjectIntro from "@/components/home/ProjectIntro";
import Highlights from "@/components/home/Highlights";
import Amenities from "@/components/home/Amenities";
import FloorPlans from "@/components/home/FloorPlans";
import Gallery from "@/components/home/Gallery";
import Location from "@/components/home/Location";
import Enquiry from "@/components/home/Enquiry";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProjectIntro />
        {/* <Highlights /> */}
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Location />
        <Enquiry />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
