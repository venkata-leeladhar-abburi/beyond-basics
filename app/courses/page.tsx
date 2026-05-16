"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  Menu, X, Star, ArrowRight, Play, Check, 
  ShieldCheck, Award, MessageCircle, Clock, Download, 
  Infinity as InfinityIcon, UserCheck, Users, CloudDownload, 
  Globe, BookOpen, Contact, Plus, Clover, Asterisk, ChevronRight,
  Search, Filter, Book, GraduationCap, Layout
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Topics from "@/components/Topics";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    desc: "Master the basics of web development. Learn HTML, CSS, JavaScript and build your first responsive websites from scratch.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    price: "₹25,000",
    level: "Beginner",
    lessons: 40,
    hours: 35,
    category: "Development",
    slug: "web-development-fundamentals"
  },
  {
    id: 2,
    title: "UI/UX Essentials",
    desc: "Learn the core principles of UI/UX design. Master Figma, wireframing, prototyping, and create stunning user interfaces.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
    price: "₹25,000",
    level: "Beginner",
    lessons: 35,
    hours: 30,
    category: "Design",
    slug: "ui-ux-essentials"
  }
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-[#111827] overflow-hidden font-inter selection:bg-[#8B5CF6]/20">
      
      {/* ============================================
          NAVIGATION
          ============================================ */}
      <Navbar />


      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative pt-[160px] pb-[100px] px-6 overflow-hidden">


        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="flex flex-col items-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[12px]"><GraduationCap size={14} className="text-current" /></span>
                Our Course Catalog
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[44px] md:text-[64px] font-extrabold tracking-tight text-[#111827] leading-[1.1] mb-6">
              Unlock Your Potential with<br />Expert-Led <span className="text-[#8B5CF6]">Courses</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[18px] text-[#6B7280] max-w-[650px] leading-[1.6] mb-12 font-medium">
              From 10th grade fundamentals to advanced B.Tech concepts, we have everything you need to succeed in the modern world.
            </motion.p>

            {/* Search and Filters */}
            <motion.div variants={fadeUp} className="w-full max-w-[800px] flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for a course..." 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all font-medium text-[15px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 p-1 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB]">
                {["All", "Development", "Design"].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-xl text-[14px] font-semibold transition-all ${
                      activeCategory === cat 
                        ? "bg-white text-[#111827] shadow-sm" 
                        : "text-[#6B7280] hover:text-[#111827]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TOPICS SECTION
          ============================================ */}
      <Topics />

      {/* ============================================
          COURSES GRID
          ============================================ */}
      <section className="relative pb-[120px] px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[32px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] flex flex-col group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                    <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-[#111827] text-[12px] font-bold shadow-sm">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-3 pb-3 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-[#FCD34D] text-[#FCD34D]" />)}
                      </div>
                      <span className="text-[20px] font-bold text-[#111827]">{course.price}</span>
                    </div>
                    
                    <h3 className="text-[22px] font-bold leading-[1.4] mb-3 text-[#111827] group-hover:text-[#8B5CF6] transition-colors">{course.title}</h3>
                    <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 flex-1 line-clamp-3 font-medium">{course.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-[#F3F4F6]">
                      <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-bold">
                        <Book size={16} className="text-[#8B5CF6]" />
                        {course.lessons} Lessons
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-bold">
                        <Clock size={16} className="text-[#8B5CF6]" />
                        {course.hours} Hours
                      </div>
                    </div>

                    <Link 
                      href={`/courses/${course.slug}`} 
                      className="w-full py-4 bg-[#111827] text-white rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#374151] transition-all group-hover:shadow-lg group-hover:shadow-black/10"
                    >
                      View Course Details <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#F9FAFB] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-[#9CA3AF]" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111827] mb-2">No courses found</h3>
              <p className="text-[#6B7280] font-medium">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                className="mt-8 text-[#8B5CF6] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          COMMUNITY (REUSED)
          ============================================ */}
      <section className="relative py-[100px] px-6 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[32px] md:text-[48px] font-extrabold tracking-tight text-[#111827] mb-6">
            Join 20,000+ Students Already Learning
          </motion.h2>
          <p className="text-[#6B7280] text-[18px] max-w-[600px] mx-auto mb-10 font-medium leading-[1.6]">
            Get access to exclusive content, live doubt clearing sessions, and a community of like-minded learners.
          </p>
          <a href="/#pricing" className="bg-[#8B5CF6] text-white px-10 py-4.5 rounded-full text-[16px] font-bold hover:bg-[#7C3AED] transition-all shadow-xl shadow-violet-500/20">
            Get All Courses Pass
          </a>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <Footer />
    </div>
  );
}
