import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TreksIndia - Experience the Magic of Trekking in India",
  description: "Discover breathtaking trails, explore hidden gems, and embrace the wild with our premium trekking adventures across India.",
  keywords: "trekking, india, himalayas, adventure, travel, mountains, hiking, tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
