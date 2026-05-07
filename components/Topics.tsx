"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const topics = [
  "Web Development", "JavaScript", "Framer", "Web Design",
  "Webflow", "CSS", "UI/UX Design", "Angular", "React",
  "TypeScript", "Node.js", "Figma",
];

const colors = [
  "border-yellow-500/30 text-yellow-300 bg-yellow-500/8",
  "border-violet-500/30 text-violet-300 bg-violet-500/8",
  "border-pink-500/30 text-pink-300 bg-pink-500/8",
  "border-blue-500/30 text-blue-300 bg-blue-500/8",
  "border-green-500/30 text-green-300 bg-green-500/8",
  "border-orange-500/30 text-orange-300 bg-orange-500/8",
];

export default function Topics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Featured Topics</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Courses Topics</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Explore the key topics covered in our courses, designed to equip you with the skills needed for real-world success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {topics.map((topic, i) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold cursor-pointer transition-all hover:scale-105 hover:-translate-y-0.5 ${colors[i % colors.length]}`}
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
