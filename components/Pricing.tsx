"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Single Course",
    price: "₹25,000",
    period: "/course",
    billing: "One-time payment",
    features: [
      { text: "Full Access to 1 Selected Course", included: true },
      { text: "LIFETIME Access & Updates", included: true },
      { text: "Certificate of Completion", included: true },
      { text: "Direct Doubt Clearing", included: true },
      { text: "Offline Downloads", included: true },
      { text: "Access to All Courses", included: false },
    ],
    cta: "Explore Courses",
    href: "/courses",
    popular: false,
    cardClass: "bg-white border-[#E5E7EB]",
  },
  {
    name: "Unlimited Pass",
    price: "₹99,999",
    period: "/lifetime",
    billing: "Best value for students",
    features: [
      { text: "Full Access to ALL Current Courses", included: true },
      { text: "Access to ALL Future Courses", included: true },
      { text: "Priority Support (WhatsApp)", included: true },
      { text: "1-on-1 Mentorship Session", included: true },
      { text: "Career & Resume Guidance", included: true },
      { text: "Industry Expert Networking", included: true },
    ],
    cta: "Get Unlimited Access",
    href: "/contact",
    popular: true,
    cardClass: "bg-white border-[#8B5CF6]/30 shadow-xl shadow-violet-500/5",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8B5CF6] text-sm font-bold tracking-widest uppercase">Pricing</span>
          <h2 className="mt-4 text-[42px] md:text-[56px] font-extrabold text-[#111827] tracking-tight">Invest in Your Future</h2>
          <p className="mt-4 text-[#6B7280] text-[18px] max-w-[600px] mx-auto font-medium">
            Join thousands of students across India who are learning with Shraddha. No hidden fees, just pure learning.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-stretch max-w-[900px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`relative flex-1 flex flex-col p-10 rounded-[32px] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${plan.cardClass}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#8B5CF6] text-white text-[12px] font-bold rounded-full shadow-lg shadow-violet-500/40 uppercase tracking-wider">
                    <Sparkles size={14} /> Recommended
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="text-[#6B7280] text-[15px] font-bold mb-4 uppercase tracking-wide">{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="text-[48px] font-extrabold text-[#111827] leading-none">{plan.price}</span>
                  <span className="text-[#6B7280] text-[16px] font-bold mb-2">{plan.period}</span>
                </div>
                <p className="text-[#9CA3AF] text-[14px] mt-2 font-medium">{plan.billing}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 text-[15px]">
                    <div className={`mt-1 shrink-0 ${f.included ? "text-[#10B981]" : "text-[#D1D5DB]"}`}>
                      {f.included ? <Check size={18} strokeWidth={3} /> : <X size={18} strokeWidth={3} />}
                    </div>
                    <span className={`font-semibold ${f.included ? "text-[#374151]" : "text-[#9CA3AF]"}`}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full py-5 rounded-2xl text-[16px] font-extrabold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-[#111827] hover:bg-[#374151] text-white shadow-xl"
                    : "border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white"
                }`}
              >
                {plan.cta} <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-[#6B7280] text-[14px] font-medium">
          Payments are secure and encrypted. Need help? <Link href="/contact" className="text-[#8B5CF6] font-bold hover:underline">Contact Support</Link>
        </p>
      </div>
    </section>
  );
}
