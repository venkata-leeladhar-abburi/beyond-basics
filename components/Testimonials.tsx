"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.",
    name: "Brendan Wilson",
    role: "Aspiring Web Designer",
    avatar: "BW",
    color: "bg-blue-500",
  },
  {
    quote: "The courses are excellent, delivering practical insights with ease. Each module is designed to help you fully understand and apply the knowledge.",
    name: "Rock Lee",
    role: "Web Designer",
    avatar: "RL",
    color: "bg-green-500",
  },
  {
    quote: "These courses are exceptional, offering detailed content that's easy to implement. Every lesson is carefully crafted to deepen your understanding.",
    name: "Sakura",
    role: "Web Developer",
    avatar: "SK",
    color: "bg-pink-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 lg:sticky lg:top-24"
          >
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="mt-3 text-4xl font-bold text-white leading-tight">Our Students<br />Feedback</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Explore the incredible advantages of enrolling in our courses and enhancing your skills.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-violet-500/30"
            >
              Start Learning Now
            </a>
          </motion.div>

          {/* Right – cards */}
          <div className="lg:w-2/3 flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative p-6 rounded-2xl bg-[#13131f] border border-white/8 hover:border-violet-500/20 transition-all card-hover"
              >
                <Quote size={28} className="text-violet-500/40 mb-4" />
                <p className="text-slate-300 text-base leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
