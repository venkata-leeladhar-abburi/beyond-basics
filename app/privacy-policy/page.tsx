"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Check, Info, Mail, Lock, Eye, Database, Smartphone, UserCheck, Globe, HelpCircle } from 'lucide-react';
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const tableOfContents = [
    { id: "p1", label: "Information We Collect" },
    { id: "p2", label: "How We Collect Your Information" },
    { id: "p3", label: "How We Use Your Information" },
    { id: "p4", label: "When and With Whom We Share Your Information" },
    { id: "p5", label: "Payment Data & Security" },
    { id: "p6", label: "Cookies & Tracking Technologies" },
    { id: "p7", label: "Social Media Login" },
    { id: "p8", label: "How Long We Retain Your Data" },
    { id: "p9", label: "How We Keep Your Information Safe" },
    { id: "p10", label: "Your Privacy Rights" },
    { id: "p11", label: "Children's Privacy" },
    { id: "p12", label: "Do-Not-Track Signals" },
    { id: "p13", label: "Updates to This Privacy Policy" },
    { id: "p14", label: "Grievance Officer & Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] font-inter">
      {/* Header */}
      <header className="border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#6B7280] hover:text-[#111827] transition-colors font-medium text-[15px]">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="absolute top-0 left-0 w-6 h-6 border-[2.5px] border-[#111827] rounded-[6px]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-[2.5px] border-[#8B5CF6] rounded-[6px]" />
            </div>
            <span className="font-extrabold text-[22px] tracking-tight text-[#111827]">Beyond<span className="text-[#8B5CF6]">Basics</span></span>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center mb-8">
            <Shield size={32} />
          </div>
          
          <h1 className="text-[44px] md:text-[56px] font-extrabold tracking-tight mb-4 leading-[1.1]">Privacy Policy</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#6B7280] text-[15px] font-medium mb-12">
            <span>Last Updated: May 2026</span>
            <span className="hidden md:block">|</span>
            <span>Effective Date: May 2026</span>
          </div>

          <div className="space-y-16 text-[#4B5563] text-[17px] leading-[1.8]">
            <section className="bg-[#F9FAFB] p-8 rounded-[32px] border border-[#F3F4F6]">
              <p className="mb-6">
                This Privacy Policy describes how <strong>VISION TRIAD TECHNOLOGIES PRIVATE LIMITED</strong> ("we," "us," or "our") collects, uses, stores, and protects the personal information of users ("you" or "your") who access our online educational platform at <strong>www.beyondbasics.in</strong> (the "Platform").
              </p>
              <p className="mb-6">
                We are committed to protecting your privacy and ensuring that your personal data is handled responsibly and transparently, in compliance with the <strong>Information Technology Act, 2000</strong> and the forthcoming <strong>Digital Personal Data Protection Act, 2023 (India)</strong>.
              </p>
              <p>
                By using our Platform, you consent to the data practices described in this Privacy Policy. If you do not agree with any part of this policy, please do not use our Services.
              </p>
            </section>

            {/* Quick Summary Card */}
            <section>
              <h2 className="text-[24px] font-bold text-[#111827] mb-8 font-poppins">Quick Summary — What You Should Know</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Data We Collect", val: "Name, email, phone, payment info, academic details, and usage data.", icon: Database },
                  { label: "Why We Collect It", val: "To provide courses, process payments, improve our platform, and send updates.", icon: Info },
                  { label: "Sharing Policy", val: "Payment gateways and analytics only. We never sell your personal data.", icon: Smartphone },
                  { label: "Your Rights", val: "You may access, correct, or request deletion of your personal data at any time.", icon: UserCheck },
                  { label: "Retention", val: "For as long as your account is active, plus up to 5 years as required by law.", icon: Shield },
                  { label: "Contact", val: "Reach us at timelly.tech@gmail.com for any privacy concerns.", icon: Mail }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#E5E7EB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <item.icon size={24} className="text-[#8B5CF6] mb-4" />
                    <h4 className="text-[12px] font-bold text-[#8B5CF6] uppercase tracking-widest mb-2">{item.label}</h4>
                    <p className="text-[14px] font-medium text-[#4B5563] leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Table of Contents */}
            <section className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-sm">
              <h2 className="text-[20px] font-bold text-[#111827] mb-6 flex items-center gap-3">
                <HelpCircle size={22} className="text-[#8B5CF6]" />
                Table of Contents
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                {tableOfContents.map((item, i) => (
                  <a key={i} href={`#${item.id}`} className="text-[15px] font-medium text-[#6B7280] hover:text-[#8B5CF6] flex items-center gap-2 transition-colors">
                    <span className="text-[12px] opacity-50 font-mono">{(i + 1).toString().padStart(2, '0')}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </section>

            {/* Section 1 */}
            <section id="p1" className="scroll-mt-32">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">01</span>
                Information We Collect
              </h2>
              <p className="mb-8">We collect two broad categories of information: information you voluntarily provide to us, and information collected automatically.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#F9FAFB] border border-[#F3F4F6] rounded-[32px]">
                  <h4 className="font-bold text-[#111827] mb-4 flex items-center gap-2">
                    <UserCheck size={18} className="text-[#8B5CF6]" />
                    Directly Provided
                  </h4>
                  <ul className="space-y-3 text-[14px]">
                    <li><strong>Identity:</strong> Full name, age, and gender.</li>
                    <li><strong>Contact:</strong> Email address, mobile number.</li>
                    <li><strong>Academic:</strong> Class, stream, and school name.</li>
                    <li><strong>Payment:</strong> Necessary data for transactions.</li>
                  </ul>
                </div>
                <div className="p-8 bg-[#F9FAFB] border border-[#F3F4F6] rounded-[32px]">
                  <h4 className="font-bold text-[#111827] mb-4 flex items-center gap-2">
                    <Smartphone size={18} className="text-[#8B5CF6]" />
                    Automatically Collected
                  </h4>
                  <ul className="space-y-3 text-[14px]">
                    <li><strong>Device Data:</strong> IP address, browser type.</li>
                    <li><strong>Usage Data:</strong> Pages visited, videos watched.</li>
                    <li><strong>Location:</strong> Approximate city/state location.</li>
                    <li><strong>Log Data:</strong> Server logs and access times.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="p3" className="scroll-mt-32">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">03</span>
                How We Use Your Information
              </h2>
              <p className="mb-8">We process your personal data for the following lawful purposes:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Account Management", "Course Delivery", "Payment Processing", 
                  "Customer Support", "Platform Improvement", "Security", "Legal Compliance"
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-violet-50 text-[#8B5CF6] text-[13px] font-bold rounded-full border border-violet-100">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="list-disc pl-6 space-y-3">
                <li>To provide and manage your account and delivery of courses.</li>
                <li>To process transactions and manage refunds securely.</li>
                <li>To personalise your learning experience with recommendations.</li>
                <li>To conduct research and analytics to improve Platform quality.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="p5" className="scroll-mt-32">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">05</span>
                Payment Data & Security
              </h2>
              <div className="p-8 bg-white border border-[#E5E7EB] rounded-[32px] shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Lock size={24} />
                  </div>
                  <p className="text-[15px] font-medium leading-relaxed">
                    All payments are processed through <strong>PCI-DSS compliant, RBI-authorised</strong> gateways. We do not store your full card number, CVV, or banking credentials on our servers.
                  </p>
                </div>
                <p className="text-[14px] text-[#6B7280]">
                  Your data is protected using industry-standard SSL/TLS encryption (HTTPS) during all transaction phases.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="p9" className="scroll-mt-32">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">09</span>
                How We Keep Your Information Safe
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Encryption", d: "SSL/TLS protocols (HTTPS) for all data in transit.", icon: Globe },
                  { t: "Access Control", d: "Strict need-to-know basis for all personnel.", icon: Eye },
                  { t: "Secure Storage", d: "Stored on secured cloud servers with firewall protection.", icon: Database },
                  { t: "Password Hashing", d: "Passwords are never stored in plain text.", icon: Lock }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
                    <item.icon size={20} className="text-[#8B5CF6] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#111827] text-[16px] mb-1">{item.t}</h4>
                      <p className="text-[14px] leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10 */}
            <section id="p10" className="scroll-mt-32">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">10</span>
                Your Privacy Rights
              </h2>
              <ul className="space-y-3">
                {[
                  "Right to access your personal data copies.",
                  "Right to correction of inaccurate or incomplete data.",
                  "Right to deletion of your account and associated info.",
                  "Right to withdraw consent for marketing communications.",
                  "Right to object to data processing for marketing purposes."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] p-4 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl">
                    <Check size={18} className="text-[#10B981]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 14 */}
            <section id="p14" className="scroll-mt-32">
              <h2 className="text-[24px] font-bold text-[#111827] mb-10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">14</span>
                Grievance Officer & Contact
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#F9FAFB] rounded-[32px] border border-[#F3F4F6]">
                  <h4 className="font-bold text-[#111827] mb-4">Grievance Officer</h4>
                  <div className="space-y-2 text-[15px]">
                    <p><strong>Name:</strong> [Designated Officer Name]</p>
                    <p><strong>Email:</strong> timelly.tech@gmail.com</p>
                    <p><strong>Address:</strong> Door No: 45/2, 3rd Floor, 17th Cross, 5th Main Road, Sector 2, HSR Layout, Bangalore, Karnataka - 560102</p>
                    <p><strong>Hours:</strong> Mon-Sat, 10 AM – 6 PM IST</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[15px] mb-4">All complaints will be acknowledged within 3 business days and resolved within 30 days of receipt.</p>
                  <p className="text-[15px]">You may write to us for data correction, account deletion, or consent withdrawal.</p>
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
