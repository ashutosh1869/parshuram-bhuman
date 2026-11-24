
import { MessageCircle } from "lucide-react";
import { project } from "@/data/project";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I am interested in Parshuram Bhuman. Please share more details."
  );

  return (
    <a
      href={`https://wa.me/${project.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Parshuram Bhuman on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
    >
      <MessageCircle size={25} />
    </a>
  );
}
