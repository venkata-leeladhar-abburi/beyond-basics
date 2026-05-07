"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Check, X, AlertTriangle, Shield, Info, Mail, MapPin, Phone, ExternalLink, Globe, Smartphone, HelpCircle, Lock } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  const tableOfContents = [
    { id: "s1", label: "Our Services" },
    { id: "s2", label: "Eligibility & User Accounts" },
    { id: "s3", label: "Intellectual Property Rights" },
    { id: "s4", label: "Course Access & Enrolment" },
    { id: "s5", label: "Payment & Billing" },
    { id: "s6", label: "Prohibited Activities" },
    { id: "s7", label: "User-Generated Content" },
    { id: "s8", label: "Third-Party Links & Services" },
    { id: "s9", label: "Platform Availability & Modifications" },
    { id: "s10", label: "Term & Termination" },
    { id: "s11", label: "Disclaimer of Warranties" },
    { id: "s12", label: "Limitation of Liability" },
    { id: "s13", label: "Indemnification" },
    { id: "s14", label: "Governing Law & Dispute Resolution" },
    { id: "s15", label: "Electronic Communications" },
    { id: "s16", label: "Modifications to Terms" },
    { id: "s17", label: "Contact Us" },
  ];

  const companyLegalName = "VISION TRIAD TECHNOLOGIES PRIVATE LIMITED";
  const brandName = "Shraddha";
  const supportEmail = "timelly.tech@gmail.com";
  const phone = "+91 8309115799";
  const address = "Door No: 45/2, 3rd Floor, 17th Cross, 5th Main Road, Sector 2, HSR Layout, Bangalore, Karnataka - 560102";

  return (
    <div className="min-h-screen bg-white text-[#111827] font-inter">
      <Navbar />

      <main className="max-w-[950px] mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] text-[#F97316] flex items-center justify-center mb-8">
            <FileText size={32} />
          </div>
          
          <h1 className="text-[44px] md:text-[56px] font-extrabold tracking-tight mb-4 leading-[1.1]">Terms & Conditions</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#6B7280] text-[15px] font-medium mb-12">
            <span>Last Updated: May 2026</span>
            <span className="hidden md:block">|</span>
            <span>Effective Date: May 2026</span>
          </div>

          <div className="space-y-16 text-[#4B5563] text-[17px] leading-[1.8]">
            {/* Intro Section */}
            <section className="bg-[#F9FAFB] p-8 md:p-10 rounded-[40px] border border-[#F3F4F6]">
              <p className="mb-6">
                Welcome to <strong>{companyLegalName}</strong> ("Company," "we," "us," or "our"). We operate an online educational platform at <strong>www.shraddha.in</strong> (the "Platform") that provides video-based courses, study materials, mock tests, and other learning resources primarily for students studying in Class 10th, Intermediate (Class 11th–12th), and B.Tech programmes across India.
              </p>
              <p className="mb-8">
                By accessing, registering on, or using our Platform or any of our services (collectively, the "Services"), you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must immediately discontinue use of our Services.
              </p>
              <div className="p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-amber-900 text-[15px] uppercase tracking-wide mb-1">Important Notice</h4>
                    <p className="text-amber-800 text-[14px]">These Terms constitute a legally binding agreement between you and {companyLegalName}. Students who are minors (below 18 years of age) must have these Terms reviewed and agreed to by their parent or legal guardian before accessing the Platform.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            <section className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-sm">
              <h2 className="text-[20px] font-bold text-[#111827] mb-8 flex items-center gap-3 border-b border-[#F3F4F6] pb-4">
                <Info size={22} className="text-[#8B5CF6]" />
                Table of Contents
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                {tableOfContents.map((item, i) => (
                  <a key={i} href={`#${item.id}`} className="text-[15px] font-medium text-[#6B7280] hover:text-[#8B5CF6] flex items-center gap-2 transition-colors group">
                    <span className="text-[12px] opacity-50 font-mono group-hover:text-[#8B5CF6]">{(i + 1).toString().padStart(2, '0')}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </section>

            {/* Section 1 */}
            <section id="s1" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">01</span>
                Our Services
              </h2>
              <p className="mb-6">{brandName} is an online educational technology platform that designs, develops, and delivers digital learning courses and resources. Our primary offerings include:</p>
              <ul className="space-y-4">
                {[
                  "Recorded and live video lectures for Class 10th, Class 11th & 12th (Science, Commerce, and Humanities streams), and B.Tech subjects.",
                  "Practice question banks, mock tests, and previous year question paper solutions.",
                  "Study notes, PDF materials, and revision guides.",
                  "Doubt-clearing sessions, mentorship, and community forums.",
                  "Performance analytics and progress tracking tools."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] p-4 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl">
                    <Check size={18} className="text-[#8B5CF6] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px]">The Services are intended solely for lawful, personal, and non-commercial educational use. Our Services are governed by and operated in accordance with the laws of India.</p>
            </section>

            {/* Section 2 */}
            <section id="s2" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">02</span>
                Eligibility & User Accounts
              </h2>
              <p className="mb-6">To use our Services, you must meet the following conditions:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { t: "Age Limit", d: "At least 13 years of age. Students below 18 need parental consent." },
                  { t: "Accuracy", d: "Provide accurate registration information (Email, Phone, Name)." },
                  { t: "Security", d: "Responsible for maintaining account credential confidentiality." },
                  { t: "One Account", d: "Only one account per individual is permitted. No proxies." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
                    <h4 className="font-bold text-[#111827] mb-2">{item.t}</h4>
                    <p className="text-[14px] leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
              <p className="mb-6">You agree to notify us immediately at <strong>{supportEmail}</strong> if you become aware of any unauthorised use of your account. {brandName} shall not be liable for any loss arising from your failure to safeguard your account credentials.</p>
              <div className="p-6 bg-[#F5F3FF] rounded-2xl border border-violet-100 flex items-start gap-4">
                <Shield className="text-[#8B5CF6] shrink-0 mt-1" size={20} />
                <p className="text-[14px] font-medium text-[#5B21B6]">We reserve the right to refuse registration, suspend, or terminate accounts at our sole discretion, including in cases where we suspect fraudulent or inaccurate information has been provided.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="s3" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">03</span>
                Intellectual Property Rights
              </h2>
              <p className="mb-6">All content available on the {brandName} Platform — including video lectures, notes, question banks, logos, and software — are the exclusive intellectual property of {brandName} or its licensed content creators.</p>
              <p className="mb-6 font-medium">Your enrolment grants you a limited, non-exclusive, non-transferable licence for personal educational use. This licence does NOT permit:</p>
              <div className="bg-[#FEF2F2] border border-[#FEE2E2] p-8 rounded-[32px] mb-6">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Download, copy, or screenshot content",
                    "Share credentials with third parties",
                    "Redistribute on YouTube/Telegram/WhatsApp",
                    "Commercial use or teaching others",
                    "Creating derivative works",
                    "Removing copyright/proprietary notices"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[15px] text-[#991B1B] font-medium">
                      <X size={18} className="shrink-0 text-red-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[15px]">Any breach of these terms will result in immediate termination of access and potential civil/criminal legal action under the Copyright Act, 1957 (India).</p>
            </section>

            {/* Section 4 */}
            <section id="s4" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">04</span>
                Course Access & Enrolment
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Access is granted for the specific 'Access Period' mentioned during purchase.",
                  "Content may be modified, updated, or removed to improve quality (non-refundable).",
                  "Access is locked to the registered individual and is non-transferable.",
                  "Temporary interruptions may occur due to scheduled maintenance or technical issues.",
                  "Access may be revoked without refund for violations of these Terms."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 italic text-blue-800 text-[15px]">
                "Results and academic outcomes from using our courses are dependent on the individual student's effort. {brandName} does not guarantee specific academic scores or career outcomes."
              </div>
            </section>

            {/* Section 5 */}
            <section id="s5" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">05</span>
                Payment & Billing
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-8 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[32px]">
                  <h4 className="font-bold text-[#166534] mb-4 flex items-center gap-2">
                    <Lock size={18} /> Secure Transactions
                  </h4>
                  <p className="text-[14px] text-[#166534]/80 leading-relaxed">Payments are processed through RBI-compliant, PCI-DSS certified gateways. We do not store your full card details on our servers.</p>
                </div>
                <div className="p-8 bg-[#EFF6FF] border border-[#DBEAFE] rounded-[32px]">
                  <h4 className="font-bold text-[#1E40AF] mb-4 flex items-center gap-2">
                    <HelpCircle size={18} /> Failed Payments
                  </h4>
                  <p className="text-[14px] text-[#1E40AF]/80 leading-relaxed">If money is debited but access not granted, contact us within 48 hours with your transaction ID for a resolution within 5-7 days.</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[15px]">
                <li>All prices are in INR and inclusive of applicable taxes.</li>
                <li>Coupon codes cannot be combined or applied retrospectively.</li>
                <li>Pricing may change at any time; changes won't affect completed purchases.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="s6" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">06</span>
                Prohibited Activities
              </h2>
              <div className="grid md:grid-cols-2 gap-3 text-[14px]">
                {[
                  "Selling or sharing login credentials",
                  "Screen-capturing or downloading videos",
                  "Impersonating instructors or staff",
                  "Uploading defamatory/obscene content",
                  "Using automated bots or scrapers",
                  "Hacking or server interference",
                  "Commercial resale of materials",
                  "Reverse engineering Platform code"
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-[#F9FAFB] rounded-xl border border-[#F3F4F6] flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 */}
            <section id="s7" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">07</span>
                User-Generated Content
              </h2>
              <p className="mb-6">Forums and doubt sections allow "User Content". By submitting, you warrant that you own the rights and it is not harmful or misleading.</p>
              <p className="p-6 bg-violet-50 rounded-2xl border border-violet-100 text-[15px]">You grant {brandName} a non-exclusive licence to use/moderate your content. We reserve the right to remove inappropriate content without notice.</p>
            </section>

            {/* Section 8 */}
            <section id="s8" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">08</span>
                Third-Party Links & Services
              </h2>
              <p className="mb-4">The Platform may contain links to third-party tools or sites (YouTube, government portals, etc.). {brandName} does not endorse or take responsibility for their content or privacy practices.</p>
              <p className="text-[15px]">Payment services are provided by third-party gateways; by using them, you also agree to their respective terms.</p>
            </section>

            {/* Section 9 */}
            <section id="s9" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">09</span>
                Platform Availability & Modifications
              </h2>
              <p className="mb-4">We strive for 24/7 availability but do not guarantee it. Access may be interrupted by maintenance, technical failures, or force majeure events.</p>
              <p className="text-[15px]">We reserve the right to modify or discontinue any feature or course at any time. Significant changes will be notified to registered users.</p>
            </section>

            {/* Section 10 */}
            <section id="s10" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">10</span>
                Term & Termination
              </h2>
              <p className="mb-6">Terms remain in effect while you use the Platform. We may terminate access for breaches of terms, legal requirements, or harmful behaviour.</p>
              <p className="mb-6 text-[15px]">You may delete your account by contacting <strong>{supportEmail}</strong>. Deletion does not entitle you to a refund (see Refund Policy).</p>
            </section>

            {/* Section 11 */}
            <section id="s11" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">11</span>
                Disclaimer of Warranties
              </h2>
              <div className="bg-slate-900 text-slate-300 p-8 rounded-[32px] border border-slate-800 font-mono text-[14px] uppercase tracking-wide">
                "THE PLATFORM IS PROVIDED ON AN 'AS IS' BASIS. WE DO NOT WARRANT UNINTERRUPTED ACCESS, COMPLETE ACCURACY, OR SPECIFIC ACADEMIC OUTCOMES."
              </div>
            </section>

            {/* Section 12 */}
            <section id="s12" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">12</span>
                Limitation of Liability
              </h2>
              <p className="mb-4">Shraddha shall not be liable for incidental, consequential, or punitive damages, or loss of data/profits.</p>
              <div className="p-6 bg-red-50 border border-red-100 rounded-2xl text-red-800 font-bold text-[15px]">
                Our total liability shall not exceed the amount paid by you for the specific course(s) giving rise to the claim.
              </div>
            </section>

            {/* Section 13 */}
            <section id="s13" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">13</span>
                Indemnification
              </h2>
              <p className="text-[15px]">You agree to indemnify and hold harmless {brandName} and its staff from claims/damages arising from your misuse of the Platform, breach of Terms, or violation of third-party rights.</p>
            </section>

            {/* Section 14 */}
            <section id="s14" className="scroll-mt-32 bg-[#F8FAFC] p-8 md:p-10 rounded-[40px] border border-[#F1F5F9]">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">14</span>
                Governing Law & Dispute Resolution
              </h2>
              <p className="mb-6">Governed by the laws of India (IT Act 2000, Contract Act 1872). Informal resolution attempted for 30 days first.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E5E7EB]">
                  <Globe size={18} className="text-[#8B5CF6]" />
                  <span className="font-bold text-[14px] uppercase tracking-widest text-[#8B5CF6]">Arbitration Seat: Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E5E7EB]">
                  <MapPin size={18} className="text-[#8B5CF6]" />
                  <span className="font-bold text-[14px] uppercase tracking-widest text-[#8B5CF6]">Jurisdiction: Bangalore Courts</span>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section id="s15" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">15</span>
                Electronic Communications
              </h2>
              <p className="mb-6">By registering, you consent to receive electronic communications (Email, SMS, WhatsApp) for verification, receipts, updates, and notices.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-[#E5E7EB] rounded-2xl flex items-center gap-4">
                   <Mail className="text-[#8B5CF6]" size={20} />
                   <span className="text-[14px] font-medium">Official Updates</span>
                </div>
                <div className="p-5 bg-white border border-[#E5E7EB] rounded-2xl flex items-center gap-4">
                   <Smartphone className="text-[#8B5CF6]" size={20} />
                   <span className="text-[14px] font-medium">WhatsApp Alerts</span>
                </div>
              </div>
            </section>

            {/* Section 16 */}
            <section id="s16" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">16</span>
                Modifications to Terms
              </h2>
              <p className="mb-4">We reserve the right to modify Terms at any time. Changes posted with a revised "Last Updated" date constitute acceptance upon continued use.</p>
              <p className="text-[15px]">Material changes will be notified via email or Platform notification.</p>
            </section>

            {/* Section 17 */}
            <section id="s17" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">17</span>
                Contact Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 text-[#8B5CF6] flex items-center justify-center shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827]">Email Support</h4>
                      <p className="text-[15px]">{supportEmail}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827]">Registered Office</h4>
                      <p className="text-[14px] leading-relaxed max-w-[250px]">{address}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-violet-50 rounded-[32px] border border-violet-100 flex flex-col justify-center">
                  <h4 className="font-bold text-[#8B5CF6] mb-4 uppercase tracking-widest text-[12px]">Grievance Officer</h4>
                  <p className="text-[15px] font-bold text-[#111827] mb-1">Reach out at:</p>
                  <p className="text-[15px] font-medium text-[#6B7280]">{supportEmail}</p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
