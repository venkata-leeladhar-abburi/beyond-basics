"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Check, X, AlertTriangle, Clock, Mail, ShieldCheck, HelpCircle } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
  const tableOfContents = [
    { id: "r1", label: "Scope of This Policy" },
    { id: "r2", label: "Refund Eligibility Criteria" },
    { id: "r3", label: "Non-Refundable Situations" },
    { id: "r4", label: "Refund Eligibility Table" },
    { id: "r5", label: "How to Request a Refund" },
    { id: "r6", label: "Refund Processing Timeline" },
    { id: "r7", label: "Refund Methods & Payment Gateway Terms" },
    { id: "r8", label: "Partial Refunds" },
    { id: "r9", label: "Course Cancellations by VISION TRIAD TECHNOLOGIES PRIVATE LIMITED" },
    { id: "r10", label: "Technical Failures & Access Issues" },
    { id: "r11", label: "Chargebacks & Disputes" },
    { id: "r12", label: "Modifications to This Policy" },
    { id: "r13", label: "Contact & Grievance Officer" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] font-inter">
      <Navbar />

      <main className="max-w-[900px] mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-[#F0FDF4] text-[#10B981] flex items-center justify-center mb-8">
            <RefreshCw size={32} />
          </div>
          
          <h1 className="text-[44px] md:text-[56px] font-extrabold tracking-tight mb-4 leading-[1.1]">Refund Policy</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#6B7280] text-[15px] font-medium mb-12">
            <span>Last Updated: May 2026</span>
            <span className="hidden md:block">|</span>
            <span>Effective Date: May 2026</span>
          </div>

          <div className="space-y-12 text-[#4B5563] text-[17px] leading-[1.8]">
            <section className="bg-[#F9FAFB] p-8 rounded-[32px] border border-[#F3F4F6]">
              <p className="mb-6">
                At <strong>VISION TRIAD TECHNOLOGIES PRIVATE LIMITED</strong> ("we," "us," or "our"), we are committed to delivering high-quality online educational courses and learning experiences to students across India. We understand that circumstances can change, and we want to ensure a fair and transparent refund process for all our students.
              </p>
              <p className="mb-6">
                This Refund Policy governs all purchases made on our online educational platform located at <strong>www.beyondbasics.in</strong> (the "Platform") and applies to all courses, bundles, memberships, and digital products sold by VISION TRIAD TECHNOLOGIES PRIVATE LIMITED.
              </p>
              <p>
                This Policy is framed in accordance with the <strong>Consumer Protection Act, 2019</strong>, the <strong>Information Technology Act, 2000</strong>, and applicable guidelines issued by the <strong>Reserve Bank of India (RBI)</strong> and payment gateway partners including Razorpay, Cashfree, PayU, and Paytm Payment Gateway.
              </p>
              <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-amber-900 text-[15px] uppercase tracking-wide mb-1">Please Read Carefully</h4>
                    <p className="text-amber-800 text-[14px]">By completing a purchase on our Platform, you acknowledge that you have read, understood, and agreed to this Refund Policy in its entirety. This Policy forms part of our Terms and Conditions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Summary Card */}
            <section>
              <h2 className="text-[24px] font-bold text-[#111827] mb-8 font-poppins">Quick Summary — Key Refund Terms</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Refund Window", val: "7 days from the date of purchase, subject to eligibility conditions.", icon: Clock },
                  { label: "Eligible Courses", val: "Individual courses and bundles purchased at full or discounted price.", icon: Check },
                  { label: "Non-Refundable Items", val: "Courses with more than 20% content accessed, live workshops, and certificates.", icon: X },
                  { label: "Processing Time", val: "Refunds are processed within 5–7 business days after approval.", icon: RefreshCw },
                  { label: "How to Apply", val: "Email timelly.tech@gmail.com with your order ID and reason.", icon: Mail },
                  { label: "Disputes", val: "Governed by Indian law. Jurisdiction: Karnataka courts.", icon: ShieldCheck }
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

            <section id="r1">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">01</span>
                Scope of This Policy
              </h2>
              <p className="mb-6 text-[17px]">This Refund Policy applies to all digital products and services sold by VISION TRIAD TECHNOLOGIES PRIVATE LIMITED on our Platform, including but not limited to:</p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Individual online video courses",
                  "Course bundles and combo packages",
                  "Premium membership or subscription plans",
                  "Live online workshops or webinars",
                  "Downloadable study materials and resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[15px] p-4 bg-[#F9FAFB] border border-[#F3F4F6] rounded-xl">
                    <Check size={16} className="text-[#10B981]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-[#F0F4FF] border-l-4 border-[#0f3460] rounded-r-2xl">
                <p className="text-[#0f3460] font-medium text-[15px]"><strong>Note for Students:</strong> Our courses are primarily designed for students in Class 10th, Intermediate, and B.Tech programmes. We strongly encourage you to preview all available free demo content before making a purchase.</p>
              </div>
            </section>

            <section id="r3">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">03</span>
                Non-Refundable Situations
              </h2>
              <p className="mb-6">Refunds will <strong>not</strong> be granted in any of the following situations:</p>
              <ul className="space-y-3">
                {[
                  "Request submitted after 7 days from the date of purchase.",
                  "You have accessed or completed 20% or more of the total course content.",
                  "A Certificate of Completion has been generated or downloaded.",
                  "Course purchased using a special offer, flash sale, or coupon code where refund exclusion was stated.",
                  "Request for a Live Workshop, Webinar, or Live Doubt Session that has already commenced.",
                  "Downloadable resources, PDF notes, or e-books that have already been downloaded.",
                  "Account suspended or terminated due to a violation of our Terms and Conditions."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px]">
                    <X size={18} className="text-[#EF4444] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="r4">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">04</span>
                Refund Eligibility Table
              </h2>
              <div className="overflow-x-auto rounded-[24px] border border-[#E5E7EB] shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#111827] text-white">
                      <th className="px-6 py-4 text-[13px] font-bold uppercase tracking-widest">Scenario</th>
                      <th className="px-6 py-4 text-[13px] font-bold uppercase tracking-widest">Refund Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB]">
                    {[
                      { s: "Request within 7 days, less than 20% content accessed", e: true },
                      { s: "Request within 7 days, more than 20% content accessed", e: false },
                      { s: "Request after 7 days from purchase", e: false },
                      { s: "Certificate of Completion already downloaded", e: false },
                      { s: "Course purchased during flash sale / promotional offer", e: false },
                      { s: "Technical failure on our Platform (reported promptly)", e: "Check Section 10" },
                      { s: "Course cancelled by VISION TRIAD TECHNOLOGIES PRIVATE LIMITED before delivery", e: "Full Refund" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                        <td className="px-6 py-4 text-[14px] font-medium text-[#4B5563]">{row.s}</td>
                        <td className="px-6 py-4">
                          {typeof row.e === 'boolean' ? (
                            row.e ? (
                              <span className="px-3 py-1 bg-[#ECFDF5] text-[#10B981] text-[12px] font-bold rounded-full">Eligible</span>
                            ) : (
                              <span className="px-3 py-1 bg-[#FEF2F2] text-[#EF4444] text-[12px] font-bold rounded-full">Not Eligible</span>
                            )
                          ) : (
                            <span className="px-3 py-1 bg-[#EFF6FF] text-[#3B82F6] text-[12px] font-bold rounded-full">{row.e}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="r5">
              <h2 className="text-[24px] font-bold text-[#111827] mb-10 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">05</span>
                How to Request a Refund
              </h2>
              <div className="relative pl-8 border-l-2 border-[#E5E7EB] space-y-12">
                {[
                  { step: "01", title: "Prepare Your Details", desc: "Collect your Order ID, registered email, course name, and reason for refund." },
                  { step: "02", title: "Email Official Support", desc: "Send an email to timelly.tech@gmail.com with subject: Refund Request - [Order ID]." },
                  { step: "03", title: "Review & Approval", desc: "Our team will review your request and verify eligibility within 3-5 business days." },
                  { step: "04", title: "Refund Credited", desc: "Once approved, the amount is credited to your original payment method in 5-7 days." }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-[#8B5CF6] z-10" />
                    <h4 className="text-[12px] font-bold text-[#8B5CF6] uppercase tracking-widest mb-1">Step {item.step}</h4>
                    <h3 className="text-[18px] font-bold text-[#111827] mb-2">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed max-w-[600px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="r6">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">06</span>
                Refund Processing Timeline
              </h2>
              <p className="mb-6">Once your refund is approved, the following timelines apply depending on your payment method:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { m: "UPI", t: "1-3 Days" },
                  { m: "Debit Card", t: "5-7 Days" },
                  { m: "Credit Card", t: "7-10 Days" },
                  { m: "Net Banking", t: "3-5 Days" },
                  { m: "Wallets", t: "1-2 Days" },
                  { m: "EMI", t: "7-14 Days" }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm text-center">
                    <div className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-widest mb-1">{item.m}</div>
                    <div className="text-[15px] font-bold text-[#111827]">{item.t}</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="r7">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">07</span>
                Refund Methods & Payment Gateway Terms
              </h2>
              <p className="mb-4">All payments on the VISION TRIAD TECHNOLOGIES PRIVATE LIMITED Platform are processed through PCI-DSS compliant payment gateways including Razorpay, Cashfree, PayU, and Paytm Payment Gateway.</p>
              <p className="mb-4 font-medium text-[#111827]">Refunds are issued exclusively to the original payment source used at the time of purchase.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refunds will not be issued in the form of cash, cheque, or bank draft.</li>
                <li>Transaction fees or convenience fees charged at the time of purchase are non-refundable.</li>
                <li>For payments made via international cards, the refund will be in Indian Rupees (INR) to the original instrument.</li>
              </ul>
            </section>

            <section id="r8">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">08</span>
                Partial Refunds
              </h2>
              <p className="mb-4">Partial refunds may be considered in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A course bundle is purchased and specific courses within the bundle are found to be inaccessible due to a technical issue on our end.</li>
                <li>VISION TRIAD TECHNOLOGIES PRIVATE LIMITED cancels or significantly curtails a specific module or component of a course after purchase.</li>
              </ul>
            </section>

            <section id="r9">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">09</span>
                Course Cancellations by VISION TRIAD TECHNOLOGIES PRIVATE LIMITED
              </h2>
              <p className="mb-4">In the unlikely event that VISION TRIAD TECHNOLOGIES PRIVATE LIMITED cancels a course or live workshop before it commences, all enrolled students will be entitled to a full refund of the amount paid.</p>
              <p>We will notify you of such cancellations via Email, SMS, or Platform notifications.</p>
            </section>

            <section id="r10">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">10</span>
                Technical Failures & Access Issues
              </h2>
              <p className="mb-4">If you are unable to access a purchased course due to a verified technical failure on VISION TRIAD TECHNOLOGIES PRIVATE LIMITED's Platform, you may be entitled to a refund or course credit.</p>
              <div className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm">
                <h4 className="font-bold text-[#111827] mb-3">To raise a technical access issue:</h4>
                <ul className="list-disc pl-6 space-y-2 text-[15px]">
                  <li>Report the issue to timelly.tech@gmail.com within 48 hours.</li>
                  <li>Include screenshots or screen recordings demonstrating the failure.</li>
                  <li>Our technical team will investigate and respond within 3 business days.</li>
                </ul>
              </div>
            </section>

            <section id="r11" className="bg-[#FEF2F2] p-8 rounded-[32px] border border-[#FEE2E2]">
              <h2 className="text-[24px] font-bold text-[#991B1B] mb-4 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#991B1B] text-white text-[14px] flex items-center justify-center shrink-0">11</span>
                Chargebacks & Disputes
              </h2>
              <p className="text-[#991B1B]/80 mb-6">We request that all students contact our support team at timelly.tech@gmail.com before initiating a chargeback with their bank.</p>
              <p className="text-[#991B1B] font-bold uppercase text-[12px] tracking-widest mb-3">Consequences of Fraudulent Chargebacks:</p>
              <ul className="list-disc pl-6 space-y-2 text-[14px] text-[#991B1B]/80">
                <li>Immediate suspension or permanent termination of your VISION TRIAD TECHNOLOGIES PRIVATE LIMITED account.</li>
                <li>Revocation of access to all purchased courses and certificates.</li>
                <li>Legal action under applicable Indian laws, including the IT Act, 2000.</li>
              </ul>
            </section>

            <section id="r12">
              <h2 className="text-[24px] font-bold text-[#111827] mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">12</span>
                Modifications to This Policy
              </h2>
              <p>VISION TRIAD TECHNOLOGIES PRIVATE LIMITED reserves the right to amend, modify, or update this Refund Policy at any time without prior notice. Any changes will be effective immediately upon posting on our Platform.</p>
            </section>

            <section id="r13">
              <h2 className="text-[24px] font-bold text-[#111827] mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[#111827] text-white text-[14px] flex items-center justify-center shrink-0">13</span>
                Contact & Grievance Officer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-[#F3F4F6]">
                  <h4 className="font-bold text-[#111827] mb-3">Support Team</h4>
                  <div className="space-y-1 text-[15px]">
                    <p>Email: <strong>timelly.tech@gmail.com</strong></p>
                    <p>Phone: <strong>+91 8309115799</strong></p>
                    <p>Mon-Sat, 9:00 AM – 6:00 PM IST</p>
                    <p>Web: www.beyondbasics.in</p>
                  </div>
                </div>
                <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-[#F3F4F6]">
                  <h4 className="font-bold text-[#111827] mb-3">Grievance Officer</h4>
                  <div className="space-y-1 text-[15px]">
                    <p>Name: [Grievance Officer Name]</p>
                    <p>Email: timelly.tech@gmail.com</p>
                    <p>Address: Door No: 45/2, 3rd Floor, 17th Cross, 5th Main Road, Sector 2, HSR Layout, Bangalore, Karnataka - 560102</p>
                  </div>
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
