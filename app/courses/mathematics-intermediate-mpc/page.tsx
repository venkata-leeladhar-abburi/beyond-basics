"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, Calendar, Mail, User, Star, ArrowRight, Play, Check, ShieldCheck, Award, MessageCircle, Clock, Download, Infinity as InfinityIcon, UserCheck, Users, CloudDownload, Globe, BookOpen, Contact, Plus, Clover, Asterisk, ChevronRight, ChevronDown, ListChecks, Laptop, Globe2, MousePointer2, Sparkles } from 'lucide-react';
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateSection from "@/components/CertificateSection";

export default function CourseDetailPage() {
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
    <div className="min-h-screen bg-white text-[#111827] overflow-hidden font-inter selection:bg-[#814FFF]/20">
      
      {/* Floating Framer Badge */}
      

      {/* ============================================
          NAVIGATION
          ============================================ */}
      <Navbar />


      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative pt-[160px] pb-[80px] px-6 bg-white overflow-hidden">

        
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[14px] text-[#6B7280] mb-8 font-medium">
            <Link href="/courses" className="hover:text-[#111827] transition-colors">Courses</Link>
            <ChevronRight size={14} />
            <span className="text-[#8B5CF6]">Mathematics for Intermediate — MPC Mastery</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_500px] gap-16 items-start">
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.h1 variants={fadeUp} className="text-[44px] md:text-[50px] font-bold tracking-tight text-[#111827] leading-[1.2] mb-6 font-poppins">
                Mathematics for Intermediate — MPC Mastery
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[16px] md:text-[18px] text-[#6B7280] max-w-[600px] leading-[1.6] mb-10 font-medium">
                Conquer Intermediate Maths (1A, 1B, 2A, 2B) completely. From Functions to Calculus, from Matrices to Probability — 60+ hours of step-by-step lessons built for IPE board exams and EAMCET/JEE preparation.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <img src="/images/hero-avatar.jpg" alt="Jane Thomson" className="w-[45px] h-[45px] rounded-full object-cover" />
                  <span className="text-[15px] font-bold text-[#111827]">Beyond Basics Faculty</span>
                </div>
                <div className="h-4 w-[1px] bg-[#E5E7EB] hidden sm:block" />
                <div className="flex items-center gap-2 text-[14px] font-bold text-[#111827]">
                  <span className="w-2 h-2 rounded-full bg-[#111827]" />
                  Intermediate
                </div>
                <div className="h-4 w-[1px] bg-[#E5E7EB] hidden sm:block" />
                <div className="flex items-center gap-2 text-[14px] font-bold text-[#8B5CF6]">
                  <Star size={16} className="fill-[#8B5CF6]" />
                  Featured
                </div>
              </motion.div>
            </motion.div>

            {/* Video Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-[24px] overflow-hidden shadow-2xl shadow-violet-500/10 group cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=500" alt="Course Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#814FFF] shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT & SIDEBAR
          ============================================ */}
      <section className="relative pb-[120px] px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            
            {/* Left Content Area */}
            <div className="space-y-16">
              
              {/* Benefits */}
              <div>
                <h3 className="text-[24px] font-bold text-[#111827] mb-8 font-poppins">Our Course Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Full Coverage: Maths 1A, 1B, 2A, 2B",
                    "IPE + EAMCET + JEE Pattern",
                    "Derivation-First Approach",
                    "Time-Saving Shortcut Methods",
                    "700+ Solved Problems",
                    "Previous Year IPE Questions Covered",
                    "Revision Videos for Each Chapter"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-[15px] text-[#4B5563] font-medium p-4 bg-[#F9FAFB] rounded-2xl border border-[#F3F4F6]">
                      <div className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
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
                    { title: "Module 1: Algebra", lessons: ["Functions", "Mathematical Induction", "Matrices", "Complex Numbers", "De Moivre's Theorem", "Quadratic Expressions", "Theory of Equations", "Permutations and Combinations", "Binomial Theorem", "Partial Fractions"] },
                    { title: "Module 2: Trigonometry", lessons: ["Trigonometric Ratios up to Transformations", "Trigonometric Equations", "Inverse Trigonometric Functions", "Hyperbolic Functions", "Properties of Triangles"] },
                    { title: "Module 3: Vector Algebra", lessons: ["Addition of Vectors", "Product of Vectors"] },
                    { title: "Module 4: Probability", lessons: ["Measures of Dispersion", "Probability", "Random Variables and Probability Distributions"] },
                    { title: "Module 5: Calculus", lessons: ["Limits and Continuity", "Differentiation", "Applications of Derivatives", "Integration", "Definite Integrals", "Differential Equations"] },
                    { title: "Module 6: Coordinate Geometry", lessons: ["Locus", "Transformation of Axes", "The Straight Line", "Pair of Straight Lines", "Circle", "System of Circles", "Parabola", "Ellipse", "Hyperbola", "Three Dimensional Coordinates", "Direction Cosines and Direction Ratios", "The Plane"] }
                  ].map((module, i) => (
                    <div key={i} className="border border-[#F3F4F6] rounded-[24px] overflow-hidden bg-white shadow-sm">
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
                            <div className="px-6 pb-6 pt-2 space-y-3 border-t border-[#F3F4F6]/50">
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

              {/* Certificate / About Instructor */}
              <div className="bg-[#111827] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#814FFF] blur-[100px] opacity-20 -z-0" />
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <h3 className="text-[28px] font-bold mb-6 font-poppins">Meet Your Instructor</h3>
                    <div className="space-y-6 text-[15px] text-[#9CA3AF] leading-[1.6]">
                      <div>
                        <h4 className="text-white font-bold mb-2">Senior Maths Faculty (Intermediate) — Beyond Basics</h4>
                        <p>10+ years of experience teaching Intermediate Maths across Andhra Pradesh and Telangana. An expert at bridging the gap between board exam preparation and competitive exam readiness. Known for making derivations simple, solutions logical, and Maths something students actually look forward to.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="w-[180px] h-[180px] rounded-full border-4 border-white/10 p-2 shrink-0">
                    <img src="/images/hero-avatar.jpg" alt="Jane Thomson" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:sticky lg:top-32">
              <div className="bg-white rounded-[32px] p-8 border border-[#F3F4F6] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="mb-8">
                  <span className="text-[13px] font-bold text-[#814FFF] uppercase tracking-widest block mb-2">Full Access</span>
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

                <div className="pt-8 border-t border-[#F3F4F6]">
                  <h4 className="text-[15px] font-bold text-[#111827] mb-6">This Course includes:</h4>
                  <ul className="space-y-4">
                    {[
                      { text: "40 lessons", icon: Play },
                      { text: "10 file resources", icon: Download },
                      { text: "200 exercises", icon: ListChecks },
                      { text: "19 hours of content", icon: Clock },
                      { text: "Certificate of Completion", icon: Award },
                      { text: "Lifetime access", icon: InfinityIcon },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[14px] text-[#6B7280] font-medium">
                        <item.icon size={18} className="text-[#814FFF]" />
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

      <CertificateSection />

            {/* ============================================
          FEATURED COURSES
          ============================================ */}
      <section className="relative py-[120px] px-6 bg-[#F9FAFB] overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-[500px]">
              <span className="text-[13px] font-bold text-[#814FFF] uppercase tracking-widest block mb-4">Our Courses</span>
              <h2 className="text-[36px] font-bold text-[#111827] mb-4 font-poppins">Featured Courses</h2>
              <p className="text-[#6B7280] font-medium">From critical skills to technical topics, we support your professional development.</p>
            </div>
            <Link href="/courses" className="px-6 py-3 border border-[#111827] text-[#111827] rounded-full font-bold text-[15px] hover:bg-white transition-colors">
              View All Courses
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mathematics Mastery — Class 10th",
                desc: "Stop fearing Maths. Master every chapter — Real Numbers to Trigonometry — with step-by-step video lessons, 500+ practice problems, and board exam-focused shortcuts.",
                img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=800&h=500",
                price: "₹25,000",
                level: "Beginner",
                rotate: "",
                slug: "mathematics-class-10",
                category: "10th Class",
                lessons: 45,
                hours: 40
              },
              {
                title: "Science Mastery — Class 10th",
                desc: "Physics, Chemistry & Biology — all 3 in one course. Master every 10th Science chapter with animated explanations, diagrams, and board-pattern questions designed for 90+ scores.",
                img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800&h=500",
                price: "₹25,000",
                level: "Beginner",
                rotate: "rotate-3 hover:rotate-0",
                slug: "science-class-10",
                category: "10th Class",
                lessons: 50,
                hours: 45
              },
              {
                title: "Maths for Intermediate — MPC",
                desc: "From Matrices to Calculus — master Intermediate Maths (1A + 2A + 1B + 2B) with 60+ hours of crystal-clear video lessons designed for IPE, JEE & EAMCET success.",
                img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800&h=500",
                price: "₹25,000",
                level: "Intermediate",
                rotate: "",
                slug: "mathematics-intermediate-mpc",
                category: "Intermediate",
                lessons: 65,
                hours: 60
              }
            ].map((course, i) => (
              <Link
                key={course.title}
                href={`/courses/${course.slug}`}
                className="block group"
              >
                <div
                  className={`bg-white rounded-[32px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] flex flex-col transition-all duration-300 cursor-pointer h-full ${course.rotate} hover:shadow-[0_30px_60px_rgba(139,92,246,0.1)] hover:-translate-y-2`}
                >
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6">
                    <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-[#111827] text-[12px] font-bold shadow-sm">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-2 pb-2 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-[#FCD34D] text-[#FCD34D]" />)}
                      </div>
                      <span className="text-[20px] font-extrabold text-[#111827]">{course.price}</span>
                    </div>
                    
                    <h3 className="text-[22px] font-bold leading-[1.4] mb-3 text-[#111827] group-hover:text-[#8B5CF6] transition-colors">{course.title}</h3>
                    <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 flex-1">{course.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-[#F3F4F6]">
                      <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-bold">
                        <BookOpen size={16} className="text-[#8B5CF6]" />
                        {course.lessons} Lessons
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-[#6B7280] font-bold">
                        <Clock size={16} className="text-[#8B5CF6]" />
                        {course.hours} Hours
                      </div>
                    </div>

                    <div className="w-full py-4 bg-[#111827] text-white rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-[#374151] transition-all group-hover:shadow-lg group-hover:shadow-black/10">
                      View Course Details <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TOPICS (REUSED)
          ============================================ */}
      <section className="py-[120px] px-6 bg-white overflow-hidden text-center">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-[13px] font-bold text-[#814FFF] uppercase tracking-widest block mb-4">Featured Topics</span>
          <h2 className="text-[36px] font-bold text-[#111827] mb-12 font-poppins">Courses Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Web Development", "Java Script", "Framer", "Web Design", "Webflow", "CSS", "UI/UX Design", "Angular", "React"].map((topic, i) => (
              <div key={i} className="px-6 py-3 border border-[#F3F4F6] rounded-full text-[14px] font-bold text-[#111827] hover:bg-[#F9FAFB] cursor-default transition-colors">
                <span className="text-[#814FFF] mr-2"><Sparkles size={24} className="text-current" /></span>
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
