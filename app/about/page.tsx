"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Rocket, Lightbulb, Book, BookOpen, GraduationCap, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111827] font-inter overflow-hidden relative selection:bg-[#8B5CF6]/20">
      {/* ============================================
          NAVIGATION
          ============================================ */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute top-0 left-0 w-6 h-6 border-[2.5px] border-[#111827] rounded-[6px]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-[2.5px] border-[#8B5CF6] rounded-[6px]" />
            </div>
            <span className="font-extrabold text-[22px] tracking-tight text-[#111827]">Beyond<span className="text-[#8B5CF6]">Basics</span></span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {["Courses", "About Us", "Contact Us"].map((label) => {
              const href = label === "Courses" ? "/courses" : label === "About Us" ? "/about" : "/contact";
              return (
                <li key={label}>
                  <Link href={href} className="text-[15px] font-medium text-[#6B7280] hover:text-[#111827] transition-colors">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/#pricing" className="bg-[#111827] text-white px-6 py-3 rounded-full text-[15px] font-semibold hover:bg-[#374151] transition-colors">
              Start Learning Now
            </Link>
          </div>

          <button className="md:hidden text-[#111827] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-0.5 bg-[#111827] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#111827] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#111827]"></div>
          </button>
        </nav>
      </motion.header>

      {/* 1. HERO / BANNER SECTION */}
      <section className="relative pt-[160px] pb-[100px] px-6 text-center overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[#A78BFA] blur-[120px] opacity-[0.15] z-0 pointer-events-none" />

        <div className="max-w-[900px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm mb-6">
              <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[12px]"><Rocket size={14} className="text-current" /></span>
              BEYOND BASICS
            </span>
            <h1 className="text-[48px] md:text-[68px] font-extrabold tracking-tight mb-6 leading-[1.1] text-[#111827]">
              We Exist to Take Students <span className="text-[#8B5CF6]">Beyond the Basics</span>
            </h1>
            <p className="text-[18px] text-[#6B7280] leading-relaxed font-medium max-w-[700px] mx-auto mb-10">
              Built for 10th, Intermediate & B.Tech students across India — we're not just another ed-tech. We're your academic partner.
            </p>
            <div className="w-full max-w-[800px] h-[400px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative mt-8 border border-[#E5E7EB]">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200&h=600" alt="Students learning" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="w-full h-[350px] lg:h-[500px] rounded-[32px] bg-[#111827] flex items-center justify-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h3 className="text-white text-3xl font-bold tracking-widest uppercase opacity-80 z-10">Our Story</h3>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[2px] uppercase mb-4 block">
              HOW IT STARTED
            </span>
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#111827] leading-[1.15] mb-8">
              From a Single Classroom Idea to 20,000+ Students
            </h2>
            <div className="space-y-6 text-[16px] text-[#4B5563] leading-[1.8] font-medium">
              <p>
                Beyond Basics was born out of a simple frustration — talented students struggling not because they lacked potential, but because they lacked access to the right guidance. We saw Class 10th students losing confidence, Intermediate students drowning in rote learning, and B.Tech freshers overwhelmed by a sudden jump in difficulty.
              </p>
              <p>
                We decided to change that. What started as a small initiative to teach practical skills has grown into a platform trusted by over 20,000 students across Andhra Pradesh and beyond. Every course we create is designed with one question in mind: <strong className="text-[#111827]">"Will this actually help the student succeed?"</strong>
              </p>
              <p>
                Beyond Basics is not just a course platform. It's a movement that believes every student — regardless of their school, college, or background — deserves world-class learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES SECTION */}
      <section className="py-[100px] px-6 bg-white border-y border-[#F3F4F6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[2px] uppercase mb-4 block">WHAT DRIVES US</span>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#111827] mb-16">Our Mission, Vision & Values</h2>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: "Our Mission", desc: "To make high-quality, practical education accessible and affordable for every student in India — from Class 10th to B.Tech." },
              { icon: Rocket, title: "Our Vision", desc: "To become India's most trusted student-first learning platform, where every course delivered creates real, measurable impact in a student's academic and professional life." },
              { icon: Lightbulb, title: "Our Values", desc: "Student First. Always. | Practical over Theoretical | Honesty & Transparency | Affordable Excellence | Community over Competition" }
            ].map((item, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white rounded-[24px] p-8 border border-[#E5E7EB] border-t-4 border-t-[#8B5CF6] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 text-left"
              >
                <div className="w-14 h-14 rounded-full bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-[22px] font-bold text-[#111827] mb-4">{item.title}</h3>
                <p className="text-[#4B5563] leading-[1.7] font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. BY THE NUMBERS / STATS SECTION */}
      <section className="py-[100px] px-6 relative overflow-hidden bg-gradient-to-r from-[#0F3460] to-[#16213E] text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="text-[32px] md:text-[40px] font-extrabold mb-16">Beyond Basics in Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "100+", label: "Courses Available" },
              { val: "20,000+", label: "Students Enrolled" },
              { val: "15+", label: "Expert Instructors" },
              { val: "4.8/5", label: "Average Rating" }
            ].map((stat, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-[40px] md:text-[56px] font-black text-white mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[14px] font-bold text-[#A8B2C8] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO WE SERVE SECTION */}
      <section className="py-[100px] px-6 bg-white border-b border-[#F3F4F6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[2px] uppercase mb-4 block">OUR STUDENTS</span>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#111827] mb-16 max-w-[800px] mx-auto">
            Built for Three Critical Stages of Your Academic Journey
          </h2>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Book, title: "Class 10th Students", desc: "Master foundational concepts, develop early technical skills, and build the confidence that sets you apart in board exams and beyond." },
              { icon: BookOpen, title: "Intermediate Students", desc: "Bridge the gap between school and college. Our courses prepare you for competitive exams, technical interviews, and real-world applications." },
              { icon: GraduationCap, title: "B.Tech Students", desc: "Go beyond your college syllabus. Learn industry-relevant skills, build actual projects, and graduate job-ready." }
            ].map((item, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-[#F9FAFB] rounded-[24px] p-8 border border-[#E5E7EB] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-[#E5E7EB] shadow-sm text-[#0F3460] flex items-center justify-center mb-6">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-4">{item.title}</h3>
                <p className="text-[#6B7280] leading-[1.7] font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. MEET THE TEAM SECTION */}
      <section className="py-[100px] px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[2px] uppercase mb-4 block">THE PEOPLE BEHIND BEYOND BASICS</span>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#111827] mb-6">Meet Our Team</h2>
          <p className="text-[18px] text-[#6B7280] font-medium max-w-[600px] mx-auto mb-16">
            A passionate team of educators, designers, and technologists — all united by one goal: your success.
          </p>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "[Founder Name]", role: "Founder & CEO", bio: "Visionary educator with a passion for making quality learning accessible to every Indian student." },
              { name: "[Name]", role: "Head of Curriculum", bio: "10+ years of teaching experience across B.Tech and Intermediate levels." },
              { name: "[Name]", role: "Lead Instructor — Web Dev", bio: "Working professional & educator who makes JavaScript and UI/UX feel like second nature." },
              { name: "[Name]", role: "Student Success Manager", bio: "Dedicated to ensuring every student gets the support they need to succeed." }
            ].map((member, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white rounded-[24px] p-8 border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-[#F3F4F6] border-4 border-white shadow-md mb-6 overflow-hidden flex items-center justify-center">
                  <div className="text-[#9CA3AF] opacity-50"><GraduationCap size={40} /></div>
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-1">{member.name}</h3>
                <p className="text-[13px] font-bold text-[#8B5CF6] uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-[#6B7280] text-[14px] leading-relaxed font-medium">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. WHY CHOOSE BEYOND BASICS SECTION */}
      <section className="py-[100px] px-6 bg-[#F3F4F6] border-y border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#111827] mb-16 text-center max-w-[700px] mx-auto">
            Why Thousands of Students Choose Beyond Basics
          </h2>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { title: "Practical, Project-Based Learning", desc: "No more theory-only courses. Every lesson comes with real exercises and hands-on projects." },
              { title: "Lifetime Course Access", desc: "Pay once, learn forever. Revisit any lesson any time you need." },
              { title: "Certificate of Completion", desc: "Earn a verified certificate for every course you complete." },
              { title: "Offline Download", desc: "Download lessons and study without internet — anywhere, anytime." },
              { title: "Affordable Pricing", desc: "World-class education at prices that make sense for Indian students." },
              { title: "Active Student Community", desc: "Join 20,000+ students. Ask doubts, share projects, grow together." }
            ].map((feature, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white rounded-[20px] p-6 flex gap-5 border border-[#E5E7EB] hover:border-[#CBD5E1] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#111827] mb-2">{feature.title}</h3>
                  <p className="text-[#6B7280] font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA SECTION (BOTTOM BANNER) */}
      <section className="py-[100px] px-6 text-center text-white relative overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="text-[36px] md:text-[52px] font-extrabold mb-6">Ready to Go Beyond the Basics?</h2>
          <p className="text-[18px] text-[#A8B2C8] font-medium mb-10 max-w-[600px] mx-auto">
            Join 20,000+ students already learning, growing, and succeeding with Beyond Basics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="bg-white text-[#111827] px-8 py-4 rounded-[12px] font-bold hover:bg-[#F3F4F6] transition-colors shadow-lg">
              Explore Courses
            </Link>
            <Link href="/contact" className="bg-[#8B5CF6] text-white px-8 py-4 rounded-[12px] font-bold hover:bg-[#7C3AED] transition-colors shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
