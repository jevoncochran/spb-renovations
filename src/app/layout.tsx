import type { Metadata } from "next";
import { Geist } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPB Renovations | Expert Home Renovation in South Florida",
  description:
    "High-quality home renovations designed around your style. Kitchen remodeling, bathroom remodeling, whole home renovations, and design & build services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="h-full flex flex-col antialiased">
        <div className="fixed top-0 left-0 right-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
