"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "240+", label: "Hours of Content" },
  { value: "50+", label: "Courses" },
  { value: "20K+", label: "Students" },
];

const companies = ["Google", "Figma", "Notion", "Vercel", "Framer", "Linear", "Stripe"];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#08080f] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">We Offer</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Boost Your Skills</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center p-8 rounded-2xl bg-[#13131f] border border-white/5 hover:border-violet-500/20 transition-colors"
            >
              <div className="text-5xl font-bold text-gradient mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-8 tracking-wide">Adopted by renowned enterprises such as</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((c) => (
              <span key={c} className="text-slate-600 font-semibold text-lg hover:text-slate-400 transition-colors">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
