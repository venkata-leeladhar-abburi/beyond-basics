"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const topics = [
  "Web Development", "JavaScript", "Web Design", "CSS", "UI/UX Design"
];

export default function Topics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8B5CF6] text-[14px] font-bold tracking-[0.2em] uppercase">Featured Topics</span>
          <h2 className="mt-4 text-[42px] md:text-[56px] font-extrabold text-[#111827] tracking-tight">Courses Topics</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} 
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4 max-w-[1000px] mx-auto"
        >
          {topics.map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="px-8 py-5 rounded-full border border-[#F3F4F6] bg-white shadow-sm flex items-center gap-3 cursor-pointer transition-all hover:border-[#8B5CF6]/30 hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] transition-transform group-hover:rotate-12">
                <Sparkles size={18} className="fill-[#8B5CF6]/10" />
              </div>
              <span className="text-[#111827] text-[16px] font-bold tracking-tight">
                {topic}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
