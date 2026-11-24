
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parshuram Bhuman | Premium 3BHK Apartments",
  description:
    "Discover Parshuram Bhuman by KNP Developers in Ambapua, Berhampur. Explore premium 3BHK apartments, amenities and enquire about your dream home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
