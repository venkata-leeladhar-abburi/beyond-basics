"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Menu, X, Calendar, Mail, User, Star, ArrowRight, Play, Check, ShieldCheck, Award, MessageCircle, Clock, Download, Infinity as InfinityIcon, UserCheck, Users, CloudDownload, Globe, BookOpen, Contact, Plus, Clover, Asterisk, GraduationCap, Rocket, Heart, Smile, Shield, Sparkles, MapPin } from 'lucide-react';


export default function ShraddhaPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] overflow-hidden font-inter selection:bg-[#8B5CF6]/20">
      


      {/* ============================================
          NAVIGATION
          ============================================ */}
      <Navbar />


      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative pt-[200px] pb-[120px] px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Premium Multi-layered Ambient Background (Increased visibility) */}
        <div className="absolute top-[5%] -left-[10%] w-[45%] h-[80%] bg-[#FF3399] blur-[120px] opacity-[0.4] z-0 animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[5%] -right-[10%] w-[45%] h-[80%] bg-[#FF3399] blur-[120px] opacity-[0.4] z-0 animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-[#A78BFA] blur-[100px] opacity-[0.25] z-0 pointer-events-none" />
        <div className="absolute top-[20%] left-[20%] w-[35%] h-[35%] bg-[#818CF8] blur-[100px] opacity-[0.15] z-0 pointer-events-none" />
        
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="max-w-[850px] w-full flex flex-col items-center relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E5E7EB] text-[#111827] text-[14px] font-semibold shadow-sm">
              🇮🇳 India's #1 Learning Platform for Students
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[clamp(44px,6vw,72px)] leading-[1.05] tracking-tight font-extrabold mb-8 text-[#111827]">
            Learn Smarter. Grow Faster. <br />With Shraddha.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-[18px] md:text-[20px] text-[#6B7280] max-w-[650px] leading-[1.6] mb-12 font-medium">
            From 10th grade to B.Tech — we turn confused students into confident achievers with courses built by real experts, not just teachers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#pricing" className="framer-button-primary w-full sm:w-auto px-8 py-4 text-[16px] font-semibold flex items-center justify-center gap-2">
              Start Learning Free
            </a>
            <a href="#courses" className="framer-button-ghost w-full sm:w-auto px-8 py-4 text-[16px] font-semibold flex items-center justify-center gap-2 bg-white">
              Explore Courses
            </a>
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-8 text-[#6B7280] font-semibold text-[14px]">
            <span className="flex items-center gap-2"><Star size={16} className="fill-yellow-400 text-yellow-400" /> 20,000+ Students Enrolled</span>
            <span className="flex items-center gap-2"><GraduationCap size={16} className="mr-1 inline" /> 100+ Courses</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="mr-1 inline" /> Trusted Across India</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          FEATURES / STATS SECTION
          ============================================ */}
      <section className="relative py-[120px] px-6 overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-[60px] flex flex-col items-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[10px]"><Rocket size={14} className="text-current" /></span>
                We Offer
              </span>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative inline-block mb-6">
              <div className="absolute -left-12 top-0 text-[#E0E7FF] text-2xl animate-pulse"><Sparkles size={24} className="text-current" /></div>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827]">Boost Your Skills</h2>
              <div className="absolute -right-12 top-0 text-[#E0E7FF] text-2xl animate-pulse"><Sparkles size={24} className="text-current" /></div>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-[16px] text-[#6B7280] max-w-[650px] leading-[1.6]">
              Join thousands of students who stopped guessing and started achieving — with courses built for real results.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-[100px] max-w-[1000px] mx-auto text-center pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-10 flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-[100px] h-[100px] rounded-[24px] bg-gradient-to-b from-white to-[#F9FAFB] shadow-[0_10px_20px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center mb-8 border border-[#F3F4F6]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-[#FF4757] rounded-[12px] shadow-inner" />
                  <div className="absolute top-[-4px] left-[10px] w-[8px] h-[12px] bg-white rounded-full shadow-sm" />
                  <div className="absolute top-[-4px] right-[10px] w-[8px] h-[12px] bg-white rounded-full shadow-sm" />
                  <div className="absolute top-[20px] left-[10px] w-[14px] h-[4px] bg-white/50 rounded-full" />
                  <div className="absolute top-[32px] left-[10px] w-[24px] h-[4px] bg-white/50 rounded-full" />
                </div>
              </div>
              <div className="text-[54px] font-extrabold leading-none mb-3 tracking-tight">100+</div>
              <div className="text-[12px] font-bold text-[#6B7280] tracking-widest uppercase">Expert-Crafted Courses</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] p-10 flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] relative z-10 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-[100px] h-[100px] rounded-[24px] bg-gradient-to-b from-white to-[#F9FAFB] shadow-[0_10px_20px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center mb-8 border border-[#F3F4F6]">
                <div className="relative w-[56px] h-[40px] bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-[8px] overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 right-0 h-[20px] bg-white/20 -skew-y-12 origin-top-left" />
                  <div className="absolute top-[12px] left-[12px] right-[12px] h-[4px] bg-white/50 rounded-full" />
                  <div className="absolute top-[22px] left-[12px] w-[20px] h-[4px] bg-white/50 rounded-full" />
                </div>
              </div>
              <div className="text-[54px] font-extrabold leading-none mb-3 tracking-tight">15+</div>
              <div className="text-[12px] font-bold text-[#6B7280] tracking-widest uppercase">Skilled Instructors</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[32px] p-10 flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-[100px] h-[100px] rounded-[24px] bg-gradient-to-b from-white to-[#F9FAFB] shadow-[0_10px_20px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center mb-8 border border-[#F3F4F6]">
                <div className="relative w-[46px] h-[50px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[24px] h-[24px] bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full shadow-inner" />
                  <div className="absolute bottom-0 left-0 right-0 h-[22px] bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-t-[16px] rounded-b-[8px] shadow-inner opacity-90" />
                </div>
              </div>
              <div className="text-[54px] font-extrabold leading-none mb-3 tracking-tight">20k+</div>
              <div className="text-[12px] font-bold text-[#6B7280] tracking-widest uppercase">Students & Growing</div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-6 mb-10 opacity-70">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#E5E7EB]" />
              <p className="text-[14px] text-[#6B7280] font-medium">Trusted by students preparing for</p>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#E5E7EB]" />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 pb-10">
              <div className="flex items-center gap-2 font-bold text-[22px]">Careers</div>
              <div className="flex items-center gap-2 font-bold text-[22px]">Coursera</div>
              <div className="flex items-center gap-2 font-bold text-[22px]">Startup</div>
              <div className="flex items-center gap-2 font-bold text-[22px]">Creativity</div>
              <div className="flex items-center gap-2 font-bold text-[22px]">Teachify</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          FEATURED COURSES SECTION
          ============================================ */}
      <section id="courses" className="relative py-[120px] px-6 bg-white overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-[80px] flex flex-col items-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[12px]"><GraduationCap size={14} className="text-current" /></span>
                Our Best Sellers
              </span>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative inline-block mb-6">
              <div className="absolute -left-12 top-0 text-[#E0E7FF] text-2xl animate-pulse"><Sparkles size={24} className="text-current" /></div>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827]">Featured Courses</h2>
              <div className="absolute -right-12 top-0 text-[#E0E7FF] text-2xl animate-pulse"><Sparkles size={24} className="text-current" /></div>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-[16px] text-[#6B7280] max-w-[650px] leading-[1.6]">
              Hand-picked courses loved by thousands of students across 10th, Intermediate & B.Tech. Start with what matters most.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 pb-12 max-w-[800px] mx-auto">
            {[
              {
                title: "Web Development Fundamentals",
                desc: "Master the basics of web development. Learn HTML, CSS, JavaScript and build your first responsive websites from scratch.",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
                price: "₹25,000",
                level: "Beginner",
                rotate: "",
                slug: "web-development-fundamentals",
                category: "Development",
                lessons: 40,
                hours: 35
              },
              {
                title: "UI/UX Essentials",
                desc: "Learn the core principles of UI/UX design. Master Figma, wireframing, prototyping, and create stunning user interfaces.",
                img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
                price: "₹25,000",
                level: "Beginner",
                rotate: "rotate-3 hover:rotate-0",
                slug: "ui-ux-essentials",
                category: "Design",
                lessons: 35,
                hours: 30
              }
            ].map((course, i) => (
              <Link
                key={course.title}
                href={`/courses/${course.slug}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: i * 0.08 }}
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
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6"
          >
            <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#111827] text-[#111827] hover:bg-[#F9FAFB] transition-colors font-semibold text-[15px]">
              View All Courses → <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          REVIEWS SECTION
          ============================================ */}
      <section id="reviews" className="relative py-[120px] px-6 bg-white overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[80px] gap-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="max-w-[500px]">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[10px]"><Heart size={14} className="text-current" /></span>
                  Real Students. Real Results.
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-[36px] md:text-[48px] font-extrabold tracking-tight mb-4 text-[#111827]">
                What Our Students Are Saying
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[15px] text-[#6B7280] leading-[1.6] mb-8 font-medium">
                Don't take our word for it. Hear from students who transformed their skills with Shraddha.
              </motion.p>
              <motion.a variants={fadeUp} href="#pricing" className="inline-flex items-center justify-center px-6 py-3.5 bg-[#111827] text-white rounded-full text-[14px] font-semibold hover:bg-[#374151] transition-colors shadow-md">
                Start Learning Now
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-[#4B5563] md:pb-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z" transform="rotate(45 12 12)"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z"/></svg>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pb-12">
            {[
              { 
                name: "Rahul M.", 
                role: "B.Tech CSE, Hyderabad", 
                img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150", 
                text: "I was completely lost in B.Tech 1st year. Shraddha helped me actually understand programming — not just memorize it. Best investment I've made.",
                rotate: "rotate-[-3deg] hover:rotate-0"
              },
              { 
                name: "Sneha P.", 
                role: "Intermediate Student, Vijayawada", 
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150", 
                text: "The Figma course is absolutely insane. I landed my first freelance project within 3 weeks of completing it. 100% worth it.",
                rotate: "rotate-0 hover:-translate-y-2"
              },
              { 
                name: "Arjun K.", 
                role: "Class 10, Guntur", 
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", 
                text: "As a 10th student, I thought coding was only for college. Shraddha proved me wrong — and now I'm building my own projects!",
                rotate: "rotate-[3deg] hover:rotate-0"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: i * 0.08 }}
                className={`bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] flex flex-col transition-all duration-300 ${t.rotate}`}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-[#FCD34D] text-[#FCD34D]" />)}
                  </div>
                  <div className="w-6 h-6 bg-[#9CA3AF] rounded-[4px] flex items-center justify-center text-white font-bold text-[12px]">
                    in
                  </div>
                </div>
                
                <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-8 font-medium italic flex-1">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-[48px] h-[48px] rounded-full object-cover" />
                  <div>
                    <h4 className="text-[15px] font-bold text-[#111827]">{t.name}</h4>
                    <p className="text-[#6B7280] text-[12px] font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          KEY BENEFITS SECTION
          ============================================ */}
      <section className="relative py-[120px] px-6 bg-[#FAFAFA] overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-[80px] flex flex-col items-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[12px]"><Smile size={14} className="text-current" /></span>
                Benefits
              </span>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative inline-block mb-6">
              <div className="absolute -left-12 top-2 text-[#E0E7FF] text-2xl animate-pulse"><Star size={24} className="text-current" /></div>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827]">Everything You Need to Succeed</h2>
              <div className="absolute -right-12 top-2 text-[#E0E7FF] text-2xl animate-pulse"><Star size={24} className="text-current" /></div>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-[16px] text-[#6B7280] max-w-[650px] leading-[1.6]">
              One platform. All the tools. Zero excuses.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: InfinityIcon, title: "Learn Forever, Pay Once", desc: "Get lifetime access to every course you purchase. Revisit lessons anytime — even 5 years later." },
              { icon: Users, title: "Learn with 20,000+ Students", desc: "Join our exclusive student community. Ask doubts, share projects, find study partners and grow together." },
              { icon: CloudDownload, title: "Study Without Internet", desc: "Download lessons and study anywhere — in your hostel, on a train, or even during power cuts." },
            ].map((b, i) => (
              <motion.div 
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: i * 0.08 }}
                className="bg-white rounded-[24px] p-8 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#F3F4F6] hover:-translate-y-1 transition-transform duration-300 relative z-10"
              >
                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#F3F4F6] flex items-center justify-center mb-6">
                  <b.icon size={20} className="text-[#6B7280]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold mb-3 text-[#111827]">{b.title}</h3>
                <p className="text-[#6B7280] text-[14px] leading-[1.6] font-medium">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING SECTION
          ============================================ */}
      <section id="pricing" className="relative py-[120px] px-6 bg-white overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[80px] gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm mb-6">
                Simple. Transparent. Affordable.
              </span>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827] leading-[1.1]">
                Join Our Premium<br />Courses
              </h2>
              <p className="mt-6 text-[16px] text-[#6B7280] max-w-[500px] font-medium">
                No hidden fees. No subscriptions. Just pay once and own it forever.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 pb-2"
            >
              <h4 className="font-bold text-[#111827] text-[18px]">Trusted by 20,000+ students</h4>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-[#FCD34D] text-[#FCD34D]" />)}
                </div>
                <span className="text-[13px] font-bold text-[#111827]">4.8/5</span>
                <span className="text-[13px] font-medium text-[#6B7280]"> · 3,200+ Reviews</span>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Single Course", 
                price: "₹25,000", 
                period: "/course",
                features: [
                  { text: "Full Access to 1 Selected Course", included: true },
                  { text: "LIFETIME Access & Updates", included: true },
                  { text: "Certificate of Completion", included: true },
                  { text: "Direct Doubt Clearing", included: true },
                  { text: "Offline Downloads", included: true }
                ], 
                highlight: false,
                badge: ""
              },
              { 
                name: "Advanced Bundle", 
                price: "₹60,000", 
                period: "/3 courses",
                features: [
                  { text: "Everything in Single Course", included: true },
                  { text: "Access to Any 3 Courses", included: true },
                  { text: "LIFETIME Access", included: true },
                  { text: "Save ₹15,000 instantly", included: true },
                  { text: "Priority Doubt Clearing", included: true },
                  { text: "Project Reviews Included", included: true }
                ], 
                highlight: true,
                badge: "Popular Plan"
              },
              { 
                name: "Elite Bundle", 
                price: "₹99,999", 
                period: " — All Courses",
                features: [
                  { text: "Unlimited Access to ALL Courses", included: true },
                  { text: "1-on-1 Mentorship Sessions", included: true },
                  { text: "Priority WhatsApp Support", included: true },
                  { text: "Career Guidance for Placements", included: true },
                  { text: "Exclusive Live Workshops", included: true },
                  { text: "LIFETIME Access to All Future Updates", included: true }
                ], 
                highlight: false,
                badge: "Best Value"
              }
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: i * 0.08 }}
                className={`bg-white rounded-[32px] p-8 flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] z-10`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 -left-4 ${plan.badge === 'Popular Plan' ? 'bg-[#8B5CF6]' : 'bg-[#10B981]'} text-white px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide -rotate-12 shadow-lg z-20`}>
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-[16px] font-medium text-center text-[#4B5563] mb-6">{plan.name}</h3>
                
                <div className="bg-[#F8F9FA] rounded-[24px] py-8 flex flex-col items-center justify-center mb-8 border border-[#F3F4F6]">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[32px] font-bold text-[#111827] leading-none">{plan.price}</span>
                    <span className="text-[#6B7280] font-medium text-[14px]">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1 px-2">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3">
                      {feat.included ? (
                        <Check size={18} className="text-[#111827]" strokeWidth={2} />
                      ) : (
                        <X size={18} className="text-[#9CA3AF]" strokeWidth={2} />
                      )}
                      <span className={`text-[14px] font-medium ${feat.included ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3.5 text-[15px] font-semibold rounded-full transition-all border ${
                  plan.highlight 
                    ? 'bg-[#111827] border-[#111827] text-white hover:bg-[#374151] hover:border-[#374151]' 
                    : 'bg-white border-[#111827] text-[#111827] hover:bg-[#F9FAFB]'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT ME SECTION
          ============================================ */}
      <section className="relative py-[120px] px-6 bg-white overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-[100px] flex flex-col items-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[12px]"><Shield size={14} className="text-current" /></span>
                About Me
              </span>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative inline-block mb-6">
              <div className="absolute -left-12 top-2 text-[#E0E7FF] text-2xl animate-pulse"><Sparkles size={24} className="text-current" /></div>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827]">Get Certified. Get Noticed.</h2>
              <div className="absolute -right-12 top-2 text-[#E0E7FF] text-2xl animate-pulse"><Sparkles size={24} className="text-current" /></div>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-[16px] text-[#6B7280] max-w-[650px] leading-[1.6]">
              Every course comes with an industry-recognized Certificate of Completion — proof that you didn't just watch, you mastered it.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px_1fr] gap-x-12 gap-y-16 items-center text-left max-w-[1100px] mx-auto">
            {/* Left Column Features */}
            <div className="flex flex-col gap-16">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#F3F4F6] flex items-center justify-center mb-6">
                  <Award size={24} className="text-[#9CA3AF]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-3">Certificate of Completion</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6] font-medium">Share on LinkedIn, add to your resume, or show it to colleges and employers. Your hard work, officially recognized.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#F3F4F6] flex items-center justify-center mb-6">
                  <Globe size={24} className="text-[#9CA3AF]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-3">Networking Opportunities</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6] font-medium">Connect with peers and valuable industry professionals for growth.</p>
              </motion.div>
            </div>

            {/* Center Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-[#F3F4F6] relative z-10"
            >
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-8">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=600" alt="Instructor" className="w-full h-full object-cover" />
              </div>

              <div className="px-2">
                <div className="mb-6">
                  <h4 className="text-[14px] font-bold text-[#111827] mb-1">Taught by Industry Experts:</h4>
                  <p className="text-[13px] text-[#6B7280] leading-[1.6] font-medium">
                    Our instructors aren't just teachers — they're working professionals with real-world experience who know exactly what students need to succeed.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#F3F4F6]">
                  <div className="flex gap-4 text-[#9CA3AF]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#111827] cursor-pointer transition-colors"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#111827] cursor-pointer transition-colors"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#111827] cursor-pointer transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div className="text-[#111827] font-script text-[28px] -rotate-6">A. Murray</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column Features */}
            <div className="flex flex-col gap-16">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#F3F4F6] flex items-center justify-center mb-6">
                  <BookOpen size={24} className="text-[#9CA3AF]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-3">Comprehensive Curriculum</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6] font-medium">Master essential topics and practical skills effectively and thoroughly.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#F3F4F6] flex items-center justify-center mb-6">
                  <Contact size={24} className="text-[#9CA3AF]" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-3">Expert Guidance</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6] font-medium">Learn from experienced instructors for personalized and effective support.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="relative py-[120px] px-6 overflow-hidden bg-white">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
            
            {/* Left Column */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col items-start">
              <motion.div variants={fadeUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#8B5CF6] text-[12px] font-bold">
                    ?
                  </span>
                  Faq Hub
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827] leading-[1.1] mb-12">
                Frequently Asked<br className="hidden md:block"/> Questions!
              </motion.h2>

              <motion.div 
                variants={fadeUp}
                className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#F3F4F6] w-full max-w-[400px]"
              >
                <h3 className="text-[20px] font-bold text-[#111827] mb-2">Still Have Questions?</h3>
                <p className="text-[14px] text-[#6B7280] font-medium mb-8">
                  <a href="#" className="underline decoration-[#9CA3AF] underline-offset-4 text-[#111827] hover:text-[#8B5CF6] transition-colors">Contact Us</a>, We are happy to help you
                </p>
                
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex -space-x-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=64&h=64" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=64&h=64" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  </div>
                </div>

                <button className="bg-[#111827] text-white px-6 py-3.5 rounded-full text-[14px] font-semibold hover:bg-[#374151] transition-colors">
                  Start Learning Now
                </button>
              </motion.div>
            </motion.div>
            
            {/* Right Column (Accordions) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 pt-4">
              {[
                { q: "What is Shraddha?", a: "Shraddha is a premium educational platform offering project-based learning to enhance your career and skills." },
                { q: "Do you have refund policy?", a: "Our Purchases happen through Whop. Whop has its own refund policy, which you can find on their website. We recommend reviewing their policy before making a purchase." },
                { q: "Is the community supportive?", a: "Absolutely! Our community is full of like-minded individuals eager to share knowledge." },
                { q: "Are there live classes or just recorded content?", a: "We offer high-quality recorded content so you can learn at your own pace." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-[#F3F4F6] rounded-[24px] shadow-sm overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-[#F9FAFB] transition-colors"
                  >
                    <span className="font-semibold text-[16px] text-[#111827] pr-8">{faq.q}</span>
                    <div className="shrink-0 text-[#9CA3AF]">
                      {faqOpen === i ? <X size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6 overflow-hidden"
                      >
                        <p className="text-[#6B7280] text-[14px] leading-[1.6] font-medium pt-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================
          COURSES TOPICS SECTION
          ============================================ */}
      <section className="relative py-[120px] px-6 bg-white overflow-hidden">
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-[60px] flex flex-col items-center">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm">
                <span className="w-5 h-5 rounded-full bg-[#E0E7FF] flex items-center justify-center">
                  <Star size={10} className="fill-[#8B5CF6] text-[#8B5CF6]" />
                </span>
                Featured Topics
              </span>
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative inline-block mb-6">
              <div className="absolute -left-12 top-2 text-[#E0E7FF] text-2xl animate-pulse"><Star size={24} className="text-current" /></div>
              <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight text-[#111827]">Courses Topics</h2>
              <div className="absolute -right-12 top-2 text-[#E0E7FF] text-2xl animate-pulse"><Star size={24} className="text-current" /></div>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-[16px] text-[#6B7280] max-w-[650px] leading-[1.6]">
              Explore the key topics covered in our courses, designed to equip you with the skills<br className="hidden md:block"/> needed for real-world success.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-[850px] mx-auto mb-[100px]"
          >
            {[
              "Web Development", "JavaScript", "Web Design", "CSS", "UI/UX Design"
            ].map((topic, i) => (
              <div 
                key={i} 
                className="bg-white border border-[#F3F4F6] rounded-full px-6 py-3.5 shadow-sm flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default"
              >
                <span className="text-[#E0E7FF] text-[18px] animate-pulse"><Sparkles size={24} className="text-current" /></span>
                <span className="text-[14px] font-semibold text-[#111827]">{topic}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ============================================
          COMMUNITY SECTION
          ============================================ */}
      <section className="relative py-[120px] px-6 bg-white overflow-hidden z-10 border-b border-[#E5E7EB]">
        
        {/* Exact Premium SaaS Background Gradient just in the middle */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] z-0 pointer-events-none opacity-60" 
          style={{
            background: `
              radial-gradient(
                circle at 45% 40%,
                rgba(255, 51, 153, 0.25) 0%,
                rgba(255, 51, 153, 0.08) 35%,
                rgba(255, 51, 153, 0) 65%
              ),
              radial-gradient(
                circle at 55% 60%,
                rgba(167, 139, 250, 0.2) 0%,
                rgba(167, 139, 250, 0.06) 40%,
                rgba(167, 139, 250, 0) 70%
              ),
              linear-gradient(
                180deg,
                #FCFCFD 0%,
                #F5F6F8 100%
              )
            `,
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />

        {/* Top Icons */}
        <div className="flex justify-center gap-4 text-[#4B5563] mb-16 opacity-70 relative z-10">
          <Clover size={24} />
          <Asterisk size={24} />
          <Plus size={24} />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[13px] font-medium text-[#111827] shadow-sm">
                  <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6]">
                    <Users size={12} strokeWidth={2.5} />
                  </span>
                  Community
                </span>
              </div>
              
              <h2 className="text-[44px] md:text-[56px] font-semibold tracking-tight text-[#111827] leading-[1.1] mb-6">
                Join our community<br/>where creativity<br/>thrives.
              </h2>
              
              <p className="text-[16px] text-[#4B5563] leading-[1.6] mb-8 max-w-[420px]">
                Unlock the amazing benefits of joining our community, growing your skills, and building connections.
              </p>
              
              <button className="bg-[#111827] text-white px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-[#374151] transition-all shadow-md">
                Start Learning Now
              </button>
            </motion.div>
            
            {/* Right Column (Community Globe Image & Overlays) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center py-8 md:py-12">
                <motion.img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Community collaborating" 
                  className="w-full h-full object-cover rounded-[32px] pointer-events-none shadow-2xl border border-gray-100"
                  animate={{ 
                    y: [0, -10, 0] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Overlay Bubbles */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-[15%] right-[-5%] md:right-[0%] bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[180px] z-10"
                >
                  <p className="text-[12px] text-gray-600 leading-snug">This one is slightly better, it has more contrast</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-[35%] left-[5%] w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 z-10"
                >
                  <User size={20} className="text-gray-400" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-[20%] left-[30%] w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 z-10"
                >
                  <User size={28} className="text-gray-400" />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-[50%] right-[-15%] md:right-[-10%] bg-white rounded-2xl rounded-bl-none px-5 py-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[200px] z-10"
                >
                  <p className="text-[13px] text-gray-600 leading-snug">Do you think this design is better ?</p>
                </motion.div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ============================================
          NUMBERS BAR SECTION
          ============================================ */}
      <section className="relative py-12 px-6 bg-white overflow-hidden border-y border-[#F3F4F6] z-10">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h3 className="text-[20px] font-bold text-[#111827] mb-8 tracking-tight">Numbers That Speak for Themselves</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { val: "100+", label: "Courses" },
              { val: "15+", label: "Instructors" },
              { val: "20k+", label: "Students" },
              { val: "4.8/5", label: "Avg Rating" },
              { val: "3+", label: "Years of Excellence" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[32px] font-extrabold text-[#111827] tracking-tighter">{s.val}</span>
                <span className="text-[13px] font-bold text-[#6B7280] uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <Footer />
    </div>
  );
}
