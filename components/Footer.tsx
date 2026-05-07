"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-[120px] pb-8 px-6 text-center overflow-hidden z-0 bg-white border-t border-[#F3F4F6]">
      {/* Premium Multi-layered Ambient Background */}
      <div className="absolute bottom-[-10%] -left-[10%] w-[45%] h-[80%] bg-[#FF3399] blur-[120px] opacity-[0.25] z-0 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] -right-[10%] w-[45%] h-[80%] bg-[#FF3399] blur-[120px] opacity-[0.25] z-0 animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-[#A78BFA] blur-[100px] opacity-[0.15] z-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex -space-x-[6px]">
            <div className="w-[18px] h-[18px] bg-[#111827] rounded-[3px] rotate-45"></div>
            <div className="w-[18px] h-[18px] bg-[#111827] rounded-[3px] rotate-45 relative top-[-1px]"></div>
          </div>
          <span className="text-[26px] font-extrabold tracking-tighter text-[#111827]">Shraddha</span>
        </div>

        <h2 className="text-[44px] md:text-[60px] font-extrabold tracking-tight mb-10 leading-[1.15] text-[#111827] max-w-[900px] mx-auto">
          Boost Your Learning & Knowledge with Shraddha Now
        </h2>
        
        <div className="flex flex-col items-center justify-center mb-28">
          <Link 
            href="/courses"
            className="bg-[#111827] text-white px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-[#374151] transition-colors shadow-lg shadow-black/10 mb-6 inline-block"
          >
            Start Learning Today →
          </Link>
          <div className="flex items-center gap-3">
            <p className="text-[13px] text-[#4B5563] font-medium">Thousands of students across India have already taken the leap. Your skills, your future, your success — it all starts here.</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-10 mb-20 w-full max-w-[1100px] mx-auto pt-12 border-t border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 max-w-full">
              {[
                { label: "Courses", href: "/courses" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" }
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] font-bold text-[#111827] hover:text-[#8B5CF6] transition-colors bg-[#F3F4F6] px-4 py-2 rounded-full hover:bg-[#F5F3FF]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E5E7EB] w-full flex flex-col items-center justify-center gap-4">
          <p className="text-[13px] text-[#6B7280] font-medium text-center">
            © 2025 VISION TRIAD TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved. | Made with ❤️ for Students across India.
          </p>
        </div>
      </div>
    </footer>
  );
}
