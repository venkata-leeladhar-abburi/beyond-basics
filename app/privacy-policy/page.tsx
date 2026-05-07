"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Check, Info, Mail, Lock, Eye, Database, Smartphone, UserCheck, Globe, HelpCircle, Cookie, LogIn, Clock, AlertTriangle } from 'lucide-react';
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

  const companyLegalName = "VISION TRIAD TECHNOLOGIES PRIVATE LIMITED";
  const brandName = "Beyond Basics";
  const supportEmail = "timelly.tech@gmail.com";
  const phone = "+91 8309115799";
  const address = "Door No: 45/2, 3rd Floor, 17th Cross, 5th Main Road, Sector 2, HSR Layout, Bangalore, Karnataka - 560102";

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
            <span className="font-extrabold text-[22px] tracking-tight text-[#111827]">{brandName.split(' ')[0]}<span className="text-[#8B5CF6]">{brandName.split(' ')[1]}</span></span>
          </div>
        </div>
      </header>

      <main className="max-w-[950px] mx-auto px-6 py-20">
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
            {/* Intro Section */}
            <section className="bg-[#F9FAFB] p-8 md:p-10 rounded-[40px] border border-[#F3F4F6]">
              <p className="mb-6">
                This Privacy Policy describes how <strong>{companyLegalName}</strong> ("we," "us," or "our") collects, uses, stores, and protects the personal information of users ("you" or "your") who access our online educational platform at <strong>www.beyondbasics.in</strong> (the "Platform").
              </p>
              <p className="mb-6">
                We are committed to protecting your privacy and ensuring that your personal data is handled responsibly and transparently, in compliance with the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the forthcoming <strong>Digital Personal Data Protection Act, 2023 (India)</strong>.
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
                  { label: "Sharing Policy", val: "Payment gateways, email/SMS, and analytics only. We never sell your personal data.", icon: Smartphone },
                  { label: "Your Rights", val: "You may access, correct, or request deletion of your personal data at any time.", icon: UserCheck },
                  { label: "Retention", val: "For as long as your account is active, plus up to 5 years as required by law.", icon: Shield },
                  { label: "Contact", val: `Reach us at ${supportEmail} for any privacy concerns.`, icon: Mail }
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
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">01</span>
                Information We Collect
              </h2>
              <p className="mb-8">We collect two broad categories of information: information you voluntarily provide to us, and information collected automatically.</p>
              
              <div className="space-y-8">
                <div className="p-8 bg-[#F9FAFB] border border-[#F3F4F6] rounded-[32px]">
                  <h4 className="font-bold text-[#111827] mb-4 flex items-center gap-2">
                    <UserCheck size={18} className="text-[#8B5CF6]" />
                    A. Information You Provide Directly
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4 text-[14px]">
                    <li><strong>Identity:</strong> Full name, DOB, and gender (optional).</li>
                    <li><strong>Contact:</strong> Email address, mobile number, city, and state.</li>
                    <li><strong>Academic:</strong> Class, stream/branch, and school/college name.</li>
                    <li><strong>Account:</strong> Username and encrypted password.</li>
                    <li><strong>Payment:</strong> Data necessary for transactions (via gateways).</li>
                    <li><strong>Communications:</strong> Messages, feedback, or support requests.</li>
                  </ul>
                </div>
                
                <div className="p-8 bg-[#F9FAFB] border border-[#F3F4F6] rounded-[32px]">
                  <h4 className="font-bold text-[#111827] mb-4 flex items-center gap-2">
                    <Smartphone size={18} className="text-[#8B5CF6]" />
                    B. Information Collected Automatically
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-4 text-[14px]">
                    <li><strong>Device Data:</strong> IP address, device type, browser/OS version.</li>
                    <li><strong>Usage Data:</strong> Videos watched, test attempts, progress.</li>
                    <li><strong>Location Data:</strong> Approximate city/state location via IP.</li>
                    <li><strong>Log Data:</strong> Server access times, errors, referring URLs.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white border border-[#E5E7EB] rounded-2xl">
                 <h4 className="font-bold text-[#111827] mb-2">C. Sensitive Personal Data</h4>
                 <p className="text-[15px] mb-4">Financial data (processed via payment gateways) constitutes sensitive personal data. We handle such data with the highest security as per IT Rules, 2011.</p>
                 <div className="p-4 bg-amber-50 rounded-xl text-amber-800 text-[13px] flex items-start gap-3 border border-amber-100">
                    <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                    <span>We do not intentionally collect biometrics, religious beliefs, or medical history. Any such info provided voluntarily in queries will be treated with strict confidentiality.</span>
                 </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="p2" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">02</span>
                How We Collect Your Information
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Account Registration & Sign-ups", "Course Enrolment & Purchases", "Platform interactions (Videos, Tests)", "Customer Support & Feedback", "Cookies & Tracking Technologies", "Social Logins (Google, etc.)", "Surveys, contests, or referral programmes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl text-[15px]">
                    <Check size={16} className="text-[#8B5CF6]" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section id="p3" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">03</span>
                How We Use Your Information
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Account Management", "Course Delivery", "Payment Processing", 
                  "Customer Support", "Platform Improvement", "Security & Fraud Prevention",
                  "Marketing Communications", "Legal Compliance"
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-violet-50 text-[#8B5CF6] text-[13px] font-bold rounded-full border border-violet-100">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[16px]">
                <li><strong>Provide and manage your account</strong> — creation, authentication, and maintenance.</li>
                <li><strong>Deliver course content</strong> — granting access and tracking learning progress.</li>
                <li><strong>Process transactions</strong> — handling payments, receipts, and refunds.</li>
                <li><strong>Personalise your experience</strong> — recommending courses based on academic level.</li>
                <li><strong>Communicate with you</strong> — transactional emails, updates, and doubt responses.</li>
                <li><strong>Conduct research and analytics</strong> — improving Platform quality and user experience.</li>
                <li><strong>Ensure security</strong> — preventing fraud, piracy, or misuse.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="p4" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">04</span>
                When and With Whom We Share Your Information
              </h2>
              <p className="mb-6">{brandName} does not sell, rent, or trade your personal information. We may share data in these limited cases:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Payment Gateways", d: "Secure transaction processing (PCI-DSS compliant partners)." },
                  { t: "Communication Providers", d: "Email and SMS services for transactional/marketing updates." },
                  { t: "Infrastructure Providers", d: "Cloud hosting services for secure data storage." },
                  { t: "Analytics Partners", d: "Google Analytics for understanding Platform usage (anonymised)." },
                  { t: "Legal Authorities", d: "When required by law, court order, or regulatory request." },
                  { t: "Business Transfers", d: "In the event of a merger, acquisition, or sale of assets." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
                    <h4 className="font-bold text-[#111827] mb-1">{item.t}</h4>
                    <p className="text-[14px] text-[#6B7280]">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section id="p5" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">05</span>
                Payment Data & Security
              </h2>
              <div className="p-8 bg-white border border-[#E5E7EB] rounded-[32px] shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Lock size={24} />
                  </div>
                  <p className="text-[15px] font-medium leading-relaxed">
                    All payments are processed through <strong>PCI-DSS compliant, RBI-authorised</strong> gateways (Razorpay, PayU, or Cashfree). We do not store your full card number, CVV, or banking credentials.
                  </p>
                </div>
                <p className="text-[14px] text-[#6B7280] mb-4">You may be redirected to our partner's secure page. Data entered there is governed by their privacy policy.</p>
                <p className="text-[14px] text-[#6B7280]">We store only minimal transaction info necessary for receipts, refunds, and financial records as per GST and taxation laws.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="p6" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">06</span>
                Cookies & Tracking Technologies
              </h2>
              <p className="mb-6">We use cookies and similar technologies (web beacons, pixel tags) to enhance your experience. Types of cookies used:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   { t: "Essential", d: "Necessary for sessions and carts. Cannot be disabled.", icon: Lock },
                   { t: "Performance", d: "Anonymised interaction data for improvements.", icon: Globe },
                   { t: "Functionality", d: "Remembering preferences like language.", icon: UserCheck },
                   { t: "Marketing", d: "Delivering relevant ads (requires consent).", icon: Smartphone }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-5 bg-[#F9FAFB] rounded-2xl border border-[#F3F4F6]">
                      <item.icon size={20} className="text-[#8B5CF6] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#111827] text-[15px] mb-1">{item.t}</h4>
                        <p className="text-[13px]">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </section>

            {/* Section 7 */}
            <section id="p7" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">07</span>
                Social Media Login
              </h2>
              <div className="p-8 bg-white border border-[#E5E7EB] rounded-[32px] flex items-start gap-6 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                   <LogIn size={28} className="text-[#8B5CF6]" />
                </div>
                <div>
                   <p className="text-[16px] mb-4">If you log in via Google, we receive limited profile info (name, email, profile picture). We use this ONLY for authentication and creation of your account.</p>
                   <p className="text-[14px] text-[#6B7280]">We do not receive passwords or payment info from these providers. Please review Google's privacy policy for more details.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="p8" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">08</span>
                How Long We Retain Your Data
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Account Data", d: "Duration of active account + 2 years post-closure." },
                  { t: "Financial Data", d: "Minimum 5–7 years (Taxation and GST laws)." },
                  { t: "Analytics Data", d: "Anonymised form for up to 3 years." },
                  { t: "Support Logs", d: "Up to 1 year from resolution date." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
                    <Clock size={20} className="text-[#8B5CF6] shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#111827] text-[15px] mb-0.5">{item.t}</h4>
                      <p className="text-[13px]">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9 */}
            <section id="p9" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">09</span>
                How We Keep Your Information Safe
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Encryption", d: "SSL/TLS protocols (HTTPS) for all data in transit.", icon: Globe },
                  { t: "Access Control", d: "Need-to-know basis for authorised personnel only.", icon: Eye },
                  { t: "Secure Storage", d: "Secured cloud servers with firewall protection.", icon: Database },
                  { t: "Password Security", d: "Stored using one-way hashing; never plain text.", icon: Lock }
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
              <p className="mt-8 p-6 bg-[#FEF2F2] rounded-2xl border border-red-100 text-red-800 text-[14px] italic">
                "No electronic storage is 100% secure. We cannot guarantee absolute security, and your use of the Platform is at your own risk regarding data transmission over the internet."
              </p>
            </section>

            {/* Section 10 */}
            <section id="p10" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">10</span>
                Your Privacy Rights
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Right to Access: Request a copy of your personal data.",
                  "Right to Correction: Request correction of inaccurate/incomplete data.",
                  "Right to Deletion: Request account and data removal (subject to law).",
                  "Right to Withdraw Consent: Opt-out of marketing at any time.",
                  "Right to Object: Object to data processing for marketing purposes.",
                  "Right to Portability: Request data in machine-readable format."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] p-4 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl">
                    <Check size={18} className="text-[#10B981]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[15px]">To exercise these rights, email our Grievance Officer at <strong>{supportEmail}</strong>. We resolve requests within 30 days.</p>
            </section>

            {/* Section 11 */}
            <section id="p11" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">11</span>
                Children's Privacy
              </h2>
              <div className="p-8 bg-blue-50 border border-blue-100 rounded-[32px] text-blue-900">
                <p className="mb-4 font-bold">Minors under 18 must have parental/guardian consent before registering.</p>
                <ul className="space-y-3 text-[15px]">
                   <li>We do not knowingly collect data from children under 13 without verifiable consent.</li>
                   <li>If we inadvertently collect such data, we will delete it promptly.</li>
                   <li>Parents can contact us at any time to request data deletion.</li>
                </ul>
              </div>
            </section>

            {/* Section 12 */}
            <section id="p12" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">12</span>
                Do-Not-Track Signals
              </h2>
              <p className="text-[15px]">Our Platform does not currently respond to Do-Not-Track (DNT) browser signals as there is no universally accepted standard. We will update this if required by Indian law.</p>
            </section>

            {/* Section 13 */}
            <section id="p13" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">13</span>
                Updates to This Privacy Policy
              </h2>
              <p className="text-[15px] mb-4">We may update this policy to reflect changes in practices or laws. Significant changes will be notified via email or Platform notice.</p>
              <p className="text-[15px]">Your continued use after the effective date constitutes acceptance of the changes.</p>
            </section>

            {/* Section 14 */}
            <section id="p14" className="scroll-mt-32">
              <h2 className="text-[26px] font-bold text-[#111827] mb-10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">14</span>
                Grievance Officer & Contact
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#F9FAFB] rounded-[32px] border border-[#F3F4F6]">
                  <h4 className="font-bold text-[#111827] mb-4">Grievance Officer</h4>
                  <div className="space-y-2 text-[15px]">
                    <p><strong>Name:</strong> [Designated Officer Name]</p>
                    <p><strong>Email:</strong> {supportEmail}</p>
                    <p><strong>Hours:</strong> Mon-Sat, 10 AM – 6 PM IST</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center text-[15px] text-[#6B7280]">
                  <p className="mb-4">Complaints will be acknowledged within 3 days and resolved within 30 days.</p>
                  <p>Contact us for data correction, account deletion, or consent withdrawal.</p>
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
