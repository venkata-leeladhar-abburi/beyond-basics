"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$50.90",
    period: "/mo",
    billing: "Billed annually",
    features: [
      { text: "Limited Access to the platform", included: true },
      { text: "10 Free Courses", included: true },
      { text: "Limited Benefits", included: true },
      { text: "AI Agent", included: false },
      { text: "Live Chat Support", included: false },
    ],
    cta: "Get Started",
    popular: false,
    cardClass: "bg-[#13131f] border-white/8",
  },
  {
    name: "Pro",
    price: "$70.90",
    period: "/mo",
    billing: "Billed annually",
    features: [
      { text: "Full Access to the platform", included: true },
      { text: "20 Free Courses", included: true },
      { text: "Unlimited Benefits", included: true },
      { text: "AI Agent", included: true },
      { text: "Live Chat Support", included: true },
    ],
    cta: "Get Started",
    popular: false,
    cardClass: "bg-[#13131f] border-white/8",
  },
  {
    name: "Business",
    price: "$99.90",
    period: "/mo",
    billing: "Billed annually",
    features: [
      { text: "Full Access to the platform", included: true },
      { text: "30 Free Courses", included: true },
      { text: "Unlimited Benefits", included: true },
      { text: "AI Agent", included: true },
      { text: "Live Chat Support", included: true },
    ],
    cta: "Get Started",
    popular: true,
    cardClass: "bg-gradient-to-b from-violet-600/20 to-violet-900/10 border-violet-500/40",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Choose the plan that fits your learning goals. All plans include access to our expert-led courses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`relative flex flex-col p-7 rounded-2xl border card-hover ${plan.cardClass}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-violet-600 text-white text-xs font-bold rounded-full shadow-lg shadow-violet-500/40">
                    <Sparkles size={12} /> Popular Plan
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-slate-400 text-sm font-medium mb-3">{plan.name} plan</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm mb-2">{plan.period}</span>
                </div>
                <p className="text-slate-500 text-xs mt-1">{plan.billing}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included
                      ? <Check size={16} className="text-violet-400 shrink-0" />
                      : <X size={16} className="text-slate-600 shrink-0" />}
                    <span className={f.included ? "text-slate-300" : "text-slate-600"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://framebase.lemonsqueezy.com/buy/80ebc834-9132-41aa-9cd5-e8170c4a7e95"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-full text-sm font-semibold text-center transition-all ${
                  plan.popular
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
                    : "border border-white/10 text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
