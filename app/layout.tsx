import type { Metadata } from "next";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Shraddha – Practical Online Courses for Web Professionals",
  description: "Practical project-based courses that are easy to understand, straight to the point, trusted by 20,000+ happy learners.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
