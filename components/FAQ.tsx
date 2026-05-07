"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Shraddha?",
    a: "Shraddha is a modern online learning platform offering practical, project-based courses in web development and design. Our courses are built by industry professionals and designed to be straightforward, focused, and immediately applicable.",
  },
  {
    q: "Do you have a refund policy?",
    a: "Our purchases happen through Whop. Whop has its own refund policy, which you can find on their website. We recommend reviewing their policy before making a purchase.",
  },
  {
    q: "Is the community supportive?",
    a: "Absolutely! Our private community is filled with like-minded learners and professionals. Members actively share knowledge, provide feedback, and support each other's growth journey.",
  },
  {
    q: "Are there live classes or just recorded content?",
    a: "We currently offer comprehensive recorded content that you can access at your own pace. This lets you learn on your schedule without missing anything. Live Q&A sessions are available for Pro and Business plan members.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">FAQ Hub</span>
            <h2 className="mt-3 text-4xl font-bold text-white leading-tight">Still Have Questions?</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              <a href="#" className="text-violet-400 hover:underline">Contact Us</a>, we are happy to help you.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-violet-500/30"
            >
              Start Learning Now
            </a>
          </motion.div>

          {/* Right – accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all ${
                  open === i ? "border-violet-500/30 bg-violet-500/5" : "border-white/8 bg-[#13131f]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <span className="shrink-0 text-violet-400">
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
