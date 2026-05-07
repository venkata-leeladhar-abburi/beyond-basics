"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquare, ThumbsUp } from "lucide-react";

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-violet-500/20 bg-gradient-to-br from-violet-600/15 via-[#13131f] to-indigo-600/10 p-12 md:p-16">
          {/* bg blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/15 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            {/* Left text */}
            <div className="flex-1">
              <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Community</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
                Join our community where<br />
                <span className="text-gradient">creativity thrives.</span>
              </h2>
              <p className="mt-5 text-slate-400 text-lg max-w-md">
                Unlock the amazing benefits of joining our community, growing your skills, and building connections.
              </p>
              <a
                href="#pricing"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5 group"
              >
                Start Learning Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right – chat UI mockup */}
            <div className="flex-1 w-full max-w-sm">
              <div className="rounded-2xl bg-[#13131f] border border-white/8 overflow-hidden shadow-2xl">
                <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center">
                    <MessageSquare size={13} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-semibold">Course Community</span>
                  <span className="ml-auto text-xs text-green-400 font-medium">● Live</span>
                </div>
                <div className="p-4 space-y-4">
                  {/* Message 1 */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">BW</div>
                    <div className="bg-[#0f0f1a] rounded-xl rounded-tl-none px-4 py-3 max-w-[200px]">
                      <p className="text-slate-300 text-xs leading-relaxed">Do you think this design is better?</p>
                    </div>
                  </div>
                  {/* Message 2 */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-violet-600/30 border border-violet-500/20 rounded-xl rounded-tr-none px-4 py-3 max-w-[200px]">
                      <p className="text-slate-300 text-xs leading-relaxed">This one is slightly better, it has more contrast</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">SK</div>
                  </div>
                  {/* Reaction */}
                  <div className="flex items-center gap-2 pl-11">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300">
                      <ThumbsUp size={11} /> 12
                    </span>
                    <span className="text-slate-600 text-xs">and 8 others reacted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
