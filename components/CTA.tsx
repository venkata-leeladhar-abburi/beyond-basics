"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#0a0a12]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full" />
            <h2 className="relative text-4xl md:text-6xl font-bold text-white leading-tight">
              Boost your Learning &{" "}
              <span className="text-gradient">Knowledge</span>
              <br />with CourseSite Now
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mt-6 mb-10">
            Join thousands of learners already transforming their careers with our expert-led, project-based courses.
          </p>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1"
          >
            Start Learning Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
