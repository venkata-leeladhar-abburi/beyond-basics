"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Award, MessageCircle, Infinity, Users, Download } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Built by Professionals", desc: "Get the best experience knowing that our courses are built by industry professionals.", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: Award, title: "Completion Certificate", desc: "Receive a completion award from our team to enhance your motivation and career.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: MessageCircle, title: "Instant Chat Help", desc: "Have questions? Reach out for a quick chat — we're here for you 24/7.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Infinity, title: "Lifetime Membership", desc: "With just one payment, you'll get permanent access to the course forever.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Users, title: "Access to Community", desc: "Join our private community to connect with like-minded individuals and grow together.", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Download, title: "Download for Offline Use", desc: "Our courses can be downloaded so you can watch them anytime, anywhere.", color: "text-orange-400", bg: "bg-orange-500/10" },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" ref={ref} className="py-24 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Benefits</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Key Benefits of Courses</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Explore the incredible advantages of enrolling in our courses and enhancing your skills for the ultimate career success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-[#13131f] border border-white/5 hover:border-violet-500/20 transition-all card-hover"
            >
              <div className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-5`}>
                <b.icon size={22} className={b.color} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-violet-600/10 border border-violet-500/20"
        >
          <div className="flex -space-x-3">
            {["BW","RL","SK","JD","AM"].map((a, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 border-2 border-[#0a0a12] flex items-center justify-center text-white text-xs font-bold">
                {a}
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg">Trusted by 70k+ students</p>
            <p className="text-slate-400 text-sm">4.8/5 average rating · 5,467 reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
