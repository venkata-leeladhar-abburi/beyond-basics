"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, ArrowRight, Play, Check, Clock, Download, Infinity as InfinityIcon, ChevronRight, ChevronDown, ListChecks, Sparkles, BookOpen, Award } from 'lucide-react';
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateSection from "@/components/CertificateSection";

export default function WebDevCourseDetailPage() {
  const [curriculumOpen, setCurriculumOpen] = useState<number | null>(0);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] overflow-hidden font-inter selection:bg-[#8B5CF6]/20">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#EEF2FF] opacity-50 blur-[120px] -z-10 rounded-full" />
      <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-[#F5F3FF] opacity-50 blur-[120px] -z-10 rounded-full" />

      {/* ============================================
          NAVIGATION
          ============================================ */}
      <Navbar />


      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative pt-[160px] pb-[100px] px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[14px] text-[#6B7280] mb-8 font-medium">
            <Link href="/courses" className="hover:text-[#111827] transition-colors">Courses</Link>
            <ChevronRight size={14} />
            <span className="text-[#8B5CF6]">Web Development Fundamentals</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_500px] gap-16 items-start">
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.h1 variants={fadeUp} className="text-[44px] md:text-[56px] font-bold tracking-tight text-[#111827] leading-[1.1] mb-6 font-poppins">
                Web Development Fundamentals
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[16px] md:text-[18px] text-[#6B7280] max-w-[600px] leading-[1.6] mb-10 font-medium">
                Master the foundations of modern web development through practical projects, responsive websites, and real-world coding experience. Perfect for absolute beginners.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#111827] font-bold">SF</div>
                  <div>
                    <span className="text-[15px] font-bold text-[#111827] block">Shraddha Faculty</span>
                    <span className="text-[13px] text-[#6B7280] font-medium">Lead Instructor</span>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-[#E5E7EB] hidden sm:block" />
                <div className="flex items-center gap-2 text-[14px] font-bold text-[#111827]">
                  <Clock size={16} className="text-[#8B5CF6]" />
                  12 Hours Content
                </div>
                <div className="h-8 w-[1px] bg-[#E5E7EB] hidden sm:block" />
                <div className="flex items-center gap-2 text-[14px] font-bold text-[#8B5CF6]">
                  <Star size={16} className="fill-[#8B5CF6]" />
                  Featured Badge
                </div>
              </motion.div>
            </motion.div>

            {/* Video Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-[24px] overflow-hidden shadow-2xl shadow-violet-500/5 group cursor-pointer border border-[#E5E7EB]"
            >
              <iframe 
                src="https://share.synthesia.io/embeds/videos/618155b8-65ac-4180-917c-a5cd2b222b53" 
                loading="lazy" 
                title="Synthesia video player - Unlock Your Web Development Potential with Beyond Basics" 
                allowFullScreen 
                allow="encrypted-media; fullscreen; microphone; screen-wake-lock;" 
                className="absolute top-0 left-0 w-full h-full border-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT & SIDEBAR
          ============================================ */}
      <section className="relative pb-[120px] px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            
            {/* Left Content Area */}
            <div className="space-y-16">
              
              {/* Benefits */}
              <div>
                <h3 className="text-[24px] font-bold text-[#111827] mb-8 font-poppins">Our Course Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Build real-world websites",
                    "Learn HTML, CSS & JavaScript",
                    "Understand responsive design",
                    "Create modern UI layouts",
                    "Work on practical projects",
                    "Beginner-friendly learning",
                    "Git & GitHub basics",
                    "Portfolio-ready skills"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-[15px] text-[#4B5563] font-medium p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E7EB] hover:shadow-lg hover:shadow-violet-500/5 transition-all group cursor-default">
                      <div className="w-6 h-6 rounded-full bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center shrink-0 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                        <Check size={14} />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h3 className="text-[24px] font-bold text-[#111827] mb-8 font-poppins">Course Curriculum</h3>
                <div className="space-y-4">
                  {[
                    { title: "Module 1: Introduction to Web Development", lessons: ["How websites work", "Internet basics", "Developer tools"] },
                    { title: "Module 2: HTML Fundamentals", lessons: ["HTML structure", "Forms and tables", "Semantic tags"] },
                    { title: "Module 3: CSS Fundamentals", lessons: ["Styling basics", "Flexbox", "Grid", "Responsive design"] },
                    { title: "Module 4: JavaScript Essentials", lessons: ["Variables", "Functions", "DOM manipulation", "Events"] },
                    { title: "Module 5: Responsive Websites", lessons: ["Media queries", "Mobile-first design", "Responsive layouts"] },
                    { title: "Module 6: Git & GitHub", lessons: ["Version control", "Repositories", "Deployments"] },
                    { title: "Module 7: Real-World Projects", lessons: ["Portfolio website", "Landing page", "Interactive UI project"] }
                  ].map((module, i) => (
                    <div key={i} className="border border-[#E5E7EB] rounded-[24px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      <button 
                        onClick={() => setCurriculumOpen(curriculumOpen === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F9FAFB] transition-colors"
                      >
                        <span className="font-bold text-[16px] text-[#111827]">{module.title}</span>
                        <ChevronDown size={20} className={`text-[#6B7280] transition-transform ${curriculumOpen === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {curriculumOpen === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 space-y-3 border-t border-[#E5E7EB]/50">
                              {module.lessons.map((lesson, j) => (
                                <div key={j} className="flex items-center gap-3 text-[14px] text-[#6B7280] font-medium py-1">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/30" />
                                  {lesson}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor Section */}
              <div className="bg-[#111827] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8B5CF6] blur-[100px] opacity-20 -z-0" />
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <span className="text-[13px] font-bold text-[#8B5CF6] uppercase tracking-widest block mb-2">Instructor</span>
                    <h3 className="text-[28px] font-bold mb-4 font-poppins">Meet Your Instructor</h3>
                    <div className="space-y-4 text-[15px] text-[#9CA3AF] leading-[1.6]">
                      <h4 className="text-white font-bold text-[18px]">Web Development Faculty — Shraddha</h4>
                      <p>5+ years of experience in full-stack web development. Passionate about teaching beginners and making complex concepts like JavaScript closures and CSS grid easy to understand.</p>
                      <p>Has trained over 10,000+ students globally and helped them transition into tech careers.</p>
                    </div>
                  </div>
                  <div className="w-[180px] h-[180px] rounded-full border-4 border-white/10 p-2 shrink-0">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" alt="Instructor" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:sticky lg:top-32">
              <div className="bg-white rounded-[32px] p-8 border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="mb-8">
                  <span className="text-[13px] font-bold text-[#8B5CF6] uppercase tracking-widest block mb-2">Full Access</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[40px] font-bold text-[#111827]">₹25,000</span>
                    <span className="text-[#6B7280] font-medium">One time payment</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <button className="w-full bg-[#111827] text-white py-4 rounded-full text-[16px] font-bold hover:bg-[#374151] transition-all hover:scale-[0.98] shadow-lg shadow-black/10">
                    Buy Course
                  </button>
                  <Link href="/#pricing" className="block w-full text-center py-4 text-[16px] font-bold text-[#111827] border border-[#111827] rounded-full hover:bg-[#F9FAFB] transition-all hover:scale-[0.98]">
                    Get All Courses
                  </Link>
                </div>

                <div className="pt-8 border-t border-[#E5E7EB]">
                  <h4 className="text-[15px] font-bold text-[#111827] mb-6">This Course includes:</h4>
                  <ul className="space-y-4">
                    {[
                      { text: "40+ lessons", icon: Play },
                      { text: "15+ resources", icon: Download },
                      { text: "20+ exercises", icon: ListChecks },
                      { text: "12 hours of content", icon: Clock },
                      { text: "Certificate of completion", icon: Award },
                      { text: "Lifetime access", icon: InfinityIcon },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[14px] text-[#6B7280] font-medium">
                        <item.icon size={18} className="text-[#8B5CF6]" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <CertificateSection />

      {/* ============================================
          FEATURED COURSES
          ============================================ */}
      <section className="relative py-[120px] px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-[500px]">
              <span className="text-[13px] font-bold text-[#8B5CF6] uppercase tracking-widest block mb-4">Our Courses</span>
              <h2 className="text-[36px] font-bold text-[#111827] mb-4 font-poppins">Featured Courses</h2>
              <p className="text-[#6B7280] font-medium">From critical skills to technical topics, we support your professional development.</p>
            </div>
            <Link href="/courses" className="px-6 py-3 border border-[#111827] text-[#111827] rounded-full font-bold text-[15px] hover:bg-[#F9FAFB] transition-colors">
              View All Courses
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {[
              {
                title: "UI/UX Essentials",
                desc: "Learn the core principles of UI/UX design. Master Figma, wireframing, prototyping, and create stunning user interfaces.",
                img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
                price: "₹25,000",
                slug: "ui-ux-essentials",
                lessons: 35,
                hours: 30
              },
              {
                title: "Web Development Fundamentals",
                desc: "Master the basics of web development. Learn HTML, CSS, JavaScript and build your first responsive websites from scratch.",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
                price: "₹25,000",
                slug: "web-development-fundamentals",
                lessons: 40,
                hours: 35
              }
            ].map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-[24px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#E5E7EB] flex flex-col transition-all duration-300 h-full hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                
                <div className="px-2 pb-2 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-[#FCD34D] text-[#FCD34D]" />)}
                    </div>
                    <span className="text-[18px] font-bold text-[#111827]">{course.price}</span>
                  </div>
                  
                  <h3 className="text-[20px] font-bold leading-[1.4] mb-3 text-[#111827]">{course.title}</h3>
                  <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 flex-1 line-clamp-3">{course.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-[#E5E7EB]">
                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-bold">
                      <BookOpen size={16} className="text-[#8B5CF6]" />
                      {course.lessons} Lessons
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-bold">
                      <Clock size={16} className="text-[#8B5CF6]" />
                      {course.hours} Hours
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full py-3 bg-[#111827] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#374151] transition-all"
                  >
                    View Course <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TOPICS
          ============================================ */}
      <section className="py-[120px] px-6 bg-[#F9FAFB] overflow-hidden text-center">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-[13px] font-bold text-[#8B5CF6] uppercase tracking-widest block mb-4">Course Topics</span>
          <h2 className="text-[36px] font-bold text-[#111827] mb-12 font-poppins">Explore What You'll Learn</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Responsive Design", "GitHub", "UI Design", "APIs", "Web Hosting"].map((topic, i) => (
              <div key={i} className="px-5 py-2.5 bg-white border border-[#E5E7EB] rounded-full text-[14px] font-bold text-[#111827] hover:bg-[#F9FAFB] cursor-default transition-colors flex items-center gap-2 shadow-sm">
                <Sparkles size={14} className="text-[#8B5CF6]" />
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
          ============================================ */}
      <section className="relative py-[140px] px-6 overflow-hidden">
        {/* Soft pink/lavender ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF1F2] via-[#FDF4FF] to-[#EFF6FF] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/60 blur-[100px] -z-10 rounded-full" />

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] md:text-[48px] font-bold tracking-tight text-[#111827] mb-6 font-poppins">
              Boost Your Coding Skills with Shraddha
            </h2>
            <p className="text-[#6B7280] text-[18px] max-w-[600px] mx-auto mb-10 font-medium leading-[1.6]">
              Thousands of students trust Shraddha to build modern tech skills and practical experience.
            </p>
            <Link href="/courses" className="inline-flex items-center gap-2 bg-[#111827] text-white px-10 py-4.5 rounded-full text-[16px] font-bold hover:bg-[#374151] transition-all hover:scale-[0.98] shadow-xl shadow-black/5">
              Start Learning Today <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <Footer />
    </div>
  );
}
