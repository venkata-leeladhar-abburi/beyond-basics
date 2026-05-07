"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left – visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-indigo-600/10 rounded-3xl" />
              <div className="absolute inset-4 bg-[#13131f] rounded-2xl border border-white/8 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-4xl font-bold text-white">
                  JD
                </div>
                <h3 className="text-white font-bold text-2xl text-center">John Developer</h3>
                <p className="text-violet-400 text-sm font-medium">Full-Stack Developer & Instructor</p>
                <div className="flex gap-6 mt-2">
                  {[["14+", "Years Exp."], ["20K+", "Students"], ["50+", "Courses"]].map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <p className="text-white font-bold text-xl">{val}</p>
                      <p className="text-slate-500 text-xs">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Explore the advantages of enrolling in our courses
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-[#13131f] border border-white/5">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">I started my journey:</p>
                <p className="text-slate-300 leading-relaxed">
                  In web design and development in 2010 at the age of 24. I transitioned into a full-time instructor and mentor in 2018.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#13131f] border border-white/5">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Through hands-on:</p>
                <p className="text-slate-300 leading-relaxed">
                  Project-based courses, I simplify challenging topics and make them accessible to everyone.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { title: "Certificate of Completion", desc: "A recognized credential that significantly boosts your resume." },
                { title: "Networking Opportunities", desc: "Connect with peers and valuable industry professionals." },
                { title: "Comprehensive Curriculum", desc: "Master essential topics and practical skills effectively." },
                { title: "Expert Guidance", desc: "Learn from experienced instructors for personalized support." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[#13131f] border border-white/5">
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
