"use client";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" } }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#08080f]">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 pt-28 pb-20">
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Trusted by 20,000+ Happy Learners
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          Your Path to Becoming a{" "}
          <span className="text-gradient">Web Wizard</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
        >
          Practical project-based courses that are easy to understand, straight to the point,
          and free from distractions—ensuring comprehensive learning.
        </motion.p>

        {/* CTAs */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-4 justify-center mt-2">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-0.5"
          >
            Start Learning Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#courses"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            <Play size={16} className="text-violet-400" />
            View All Courses
          </a>
        </motion.div>

        {/* Hero visual card */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="mt-10 w-full max-w-3xl rounded-2xl overflow-hidden border border-white/8 bg-[#13131f] shadow-2xl shadow-black/40"
        >
          <div className="h-8 bg-[#0f0f1a] flex items-center gap-2 px-4 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-slate-600">coursesite.app/dashboard</span>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4">
            {[
              { label: "JavaScript Mastery", level: "Intermediate", progress: 68, color: "bg-yellow-500" },
              { label: "Framer Full Course", level: "Beginner", progress: 45, color: "bg-violet-500" },
              { label: "Figma Mastery", level: "Beginner", progress: 82, color: "bg-pink-500" },
            ].map((c) => (
              <div key={c.label} className="bg-[#0f0f1a] rounded-xl p-4 border border-white/5">
                <div className={`w-8 h-8 rounded-lg ${c.color}/20 flex items-center justify-center mb-3`}>
                  <div className={`w-3 h-3 rounded-sm ${c.color}`} />
                </div>
                <p className="text-white text-xs font-semibold mb-1 leading-snug">{c.label}</p>
                <p className="text-slate-500 text-xs mb-3">{c.level}</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.progress}%` }} />
                </div>
                <p className="text-right text-xs text-slate-500 mt-1">{c.progress}%</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
