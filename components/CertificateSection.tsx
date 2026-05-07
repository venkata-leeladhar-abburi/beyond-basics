"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Share2, DownloadCloud } from 'lucide-react';

const CertificateSection = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3FF] text-[#8B5CF6] text-[13px] font-bold mb-6">
              <Award size={16} />
              <span>Official Certification</span>
            </div>
            
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#111827] leading-[1.2] mb-6 font-poppins">
              Earn a Industry-Recognized Certificate
            </h2>
            
            <p className="text-[17px] text-[#6B7280] leading-[1.7] mb-10 font-medium">
              Validate your skills and stand out to employers with our official certificate of completion. 
              Our certificates are uniquely numbered and verifiable, making them a valuable addition to your professional portfolio and LinkedIn profile.
            </p>

            <div className="space-y-5 mb-10">
              {[
                "Verifiable Unique Certificate ID",
                "Share directly to LinkedIn & Social Media",
                "High-quality PDF for printing",
                "Lifetime validity of your credentials"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[15px] text-[#111827] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#111827] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#374151] transition-all hover:scale-[0.98]">
                <DownloadCloud size={18} />
                Download Sample
              </button>
              <button className="flex items-center gap-2 border border-[#E5E7EB] text-[#111827] px-8 py-4 rounded-full text-[15px] font-bold hover:bg-[#F9FAFB] transition-all">
                <Share2 size={18} />
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#8B5CF6] opacity-[0.05] blur-[80px] -z-10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#F472B6] opacity-[0.05] blur-[80px] -z-10 rounded-full" />
            
            <div className="relative z-10 bg-white p-4 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-[#F3F4F6]">
              <div className="rounded-[24px] overflow-hidden border border-[#E5E7EB]">
                <img 
                  src="/images/certificate-sample.jpg" 
                  alt="Beyond Basics Certificate" 
                  className="w-full h-auto shadow-sm"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-white p-5 rounded-2xl shadow-xl border border-[#F3F4F6] flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#6B7280] uppercase tracking-wider">Accredited by</p>
                <p className="text-[16px] font-bold text-[#111827]">Beyond Basics</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
