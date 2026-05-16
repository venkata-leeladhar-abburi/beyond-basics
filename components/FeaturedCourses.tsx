"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const courses = [
  {
    title: "Web Development Fundamentals",
    description: "Master the basics of web development. Learn HTML, CSS, JavaScript and build your first responsive websites from scratch.",
    price: "₹25,000",
    level: "Beginner",
    badge: "Featured",
    color: "from-blue-500/20 to-cyan-500/10",
    icon: "WD",
    iconBg: "bg-blue-500",
    hours: "35h",
    lessons: 40,
    slug: "web-development-fundamentals"
  },
  {
    title: "UI/UX Essentials",
    description: "Learn the core principles of UI/UX design. Master Figma, wireframing, prototyping, and create stunning user interfaces.",
    price: "₹25,000",
    level: "Beginner",
    badge: "Featured",
    color: "from-violet-500/20 to-purple-500/10",
    icon: "UX",
    iconBg: "bg-violet-500",
    hours: "30h",
    lessons: 35,
    slug: "ui-ux-essentials"
  }
];

export default function FeaturedCourses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="courses" ref={ref} className="py-24 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Our Courses</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Featured Courses</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative rounded-2xl bg-gradient-to-b ${course.color} border border-white/8 p-6 card-hover overflow-hidden flex flex-col gap-4`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${course.iconBg} rounded-xl flex items-center justify-center font-bold text-white text-sm`}>
                {course.icon}
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold text-violet-300 bg-violet-500/15 rounded-full border border-violet-500/20">
                  {course.badge}
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold text-slate-400 bg-white/5 rounded-full border border-white/8">
                  {course.level}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg leading-snug mb-2">{course.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{course.description}</p>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span>{course.hours} content</span>
                <span>{course.lessons} lessons</span>
                <div className="flex items-center gap-1">
                  <Star size={11} className="fill-yellow-400 text-yellow-400" />
                  <span>4.9</span>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-2xl font-bold text-white">{course.price}</span>
                <a
                  href={`/courses/${course.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-full transition-all group-hover:shadow-lg group-hover:shadow-violet-500/30"
                >
                  View Course <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 rounded-full text-sm font-semibold transition-all"
          >
            View All Courses <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
