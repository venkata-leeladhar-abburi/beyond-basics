"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, ShieldAlert, Send, MapPin, Globe, Phone, Clock, Plus, Minus, ShieldCheck, Zap, Lock } from 'lucide-react';
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  

  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const faqs = [
    { q: "How do I enrol in a course?", a: "Simply browse our courses at www.shraddha.in, click on the course you want, and click 'Enrol Now'. Complete the payment and you'll get instant access to the course." },
    { q: "I made a payment but didn't get course access. What do I do?", a: "Please wait up to 15 minutes and refresh the page. If you still don't have access, email us at timelly.tech@gmail.com with your Order ID and payment screenshot." },
    { q: "Can I download course videos for offline use?", a: "Yes! Our platform supports offline downloads for all enrolled courses. You can access them from the 'My Courses' section." },
    { q: "How do I get my Certificate of Completion?", a: "Once you complete 100% of the course content and all assessments, your Certificate of Completion is automatically generated and available in your dashboard." },
    { q: "I want a refund. What is the process?", a: "Please review our Refund Policy at www.shraddha.in/refund-policy. If eligible, email timelly.tech@gmail.com with your Order ID and reason within 7 days of purchase." },
    { q: "Can I access a course on mobile?", a: "Yes! Shraddha is fully mobile-friendly. You can access all courses from any smartphone or tablet browser." },
    { q: "I forgot my password. How do I reset it?", a: "Click on 'Forgot Password' on the login page, enter your registered email, and follow the reset link sent to your inbox." }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim() || !/^\\S+@\\S+\\.\\S+$/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.role) errors.role = "Please select your role";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Simulate API call
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-inter overflow-hidden relative selection:bg-[#8B5CF6]/20">
      {/* ============================================
          NAVIGATION
          ============================================ */}
      <Navbar />


      {/* 1. HERO / HEADER SECTION */}
      <section className="relative pt-[160px] pb-[80px] px-6 text-center overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[#A78BFA] blur-[120px] opacity-[0.15] z-0 pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white text-[12px] font-semibold text-[#111827] shadow-sm mb-6">
              <span className="w-5 h-5 rounded-full bg-[#F5F3FF] flex items-center justify-center text-[#8B5CF6] text-[12px]"><MessageCircle size={14} className="text-current" /></span>
              GET IN TOUCH
            </span>
            <h1 className="text-[44px] md:text-[56px] font-extrabold tracking-tight mb-6 leading-[1.1] text-[#111827]">
              We're Here to Help You <span className="text-[#8B5CF6]">Succeed</span>
            </h1>
            <p className="text-[18px] text-[#6B7280] leading-relaxed font-medium mb-10 max-w-[650px] mx-auto">
              Have a question about a course, payment, or your account? Our team is ready to assist you — every step of the way.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Zap, text: "Reply within 24 hours" },
                { icon: Mail, text: "timelly.tech@gmail.com" },
                { icon: MapPin, text: "Bangalore, Karnataka" }
              ].map((pill, i) => (
                <div key={i} className="bg-white border border-[#E5E7EB] rounded-full px-5 py-2 flex items-center gap-2 text-[14px] font-medium text-[#111827] shadow-sm">
                  <pill.icon size={16} className="text-[#8B5CF6]" /> {pill.text}
                </div>
              ))}
            </div>
            
            <div className="w-full max-w-[800px] h-[350px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative mt-12 border border-[#E5E7EB]">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200&h=600" alt="Contact support team" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CARDS ROW */}
      <section className="py-[80px] px-6 relative z-20 -mt-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Mail, title: "Email Support", desc: "For course queries, payment issues, and account help.", info: "timelly.tech@gmail.com", sub: "We respond within 24 business hours", btn: "Send Email", href: "mailto:timelly.tech@gmail.com" },
              { icon: MessageCircle, title: "WhatsApp Support", desc: "Quick answers for urgent queries. Message us directly.", info: "+91 8309115799", sub: "Available Mon–Sat, 9 AM – 6 PM IST", btn: "Chat on WhatsApp", href: "https://wa.me/918309115799" },
              { icon: ShieldAlert, title: "Grievance Officer", desc: "For formal complaints, refund disputes, and escalations.", info: "timelly.tech@gmail.com", sub: "Response within 15 working days (as per IT Act)", btn: "File a Complaint", href: "mailto:timelly.tech@gmail.com" }
            ].map((card, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white rounded-[24px] p-8 border border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-full bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center mb-6">
                  <card.icon size={28} />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-2">{card.title}</h3>
                <p className="text-[#6B7280] font-medium leading-[1.6] mb-4">{card.desc}</p>
                <div className="mt-auto">
                  <p className="text-[#111827] font-bold text-[16px] mb-1">{card.info}</p>
                  <p className="text-[#9CA3AF] text-[13px] font-medium mb-6">{card.sub}</p>
                  <a href={card.href} className="inline-block w-full text-center bg-[#F3F4F6] text-[#111827] px-6 py-3 rounded-[10px] font-bold hover:bg-[#E5E7EB] transition-colors">
                    {card.btn}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CONTACT FORM + INFO SECTION */}
      <section className="py-[60px] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-8">
          
          {/* LEFT: FORM */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#E5E7EB]">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-[#ECFDF5] text-[#10B981] flex items-center justify-center mb-6">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-[28px] font-bold text-[#111827] mb-4">Message Sent!</h3>
                <p className="text-[#6B7280] text-[18px] font-medium max-w-[400px]">
                  Thank you! We've received your message and will reply within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[28px] font-extrabold text-[#111827] mb-2">Send Us a Message</h3>
                <p className="text-[#6B7280] font-medium mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] font-bold text-[#4B5563] mb-2">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full bg-[#F9FAFB] border ${formErrors.name ? 'border-[#8B5CF6]' : 'border-[#E5E7EB]'} rounded-[12px] px-5 py-3.5 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all`} placeholder="Your Name" />
                      {formErrors.name && <p className="text-[#8B5CF6] text-[12px] mt-1.5 font-medium">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#4B5563] mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full bg-[#F9FAFB] border ${formErrors.email ? 'border-[#8B5CF6]' : 'border-[#E5E7EB]'} rounded-[12px] px-5 py-3.5 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all`} placeholder="you@example.com" />
                      {formErrors.email && <p className="text-[#8B5CF6] text-[12px] mt-1.5 font-medium">{formErrors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] font-bold text-[#4B5563] mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full bg-[#F9FAFB] border ${formErrors.phone ? 'border-[#8B5CF6]' : 'border-[#E5E7EB]'} rounded-[12px] px-5 py-3.5 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all`} placeholder="+91 8309115799" />
                      {formErrors.phone && <p className="text-[#8B5CF6] text-[12px] mt-1.5 font-medium">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#4B5563] mb-2">I am a:</label>
                      <select name="role" value={formData.role} onChange={handleInputChange} className={`w-full bg-[#F9FAFB] border ${formErrors.role ? 'border-[#8B5CF6]' : 'border-[#E5E7EB]'} rounded-[12px] px-5 py-3.5 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all appearance-none`}>
                        <option value="">Select your role</option>
                        <option value="Class 10th Student">Class 10th Student</option>
                        <option value="Intermediate Student">Intermediate Student</option>
                        <option value="B.Tech Student">B.Tech Student</option>
                        <option value="Parent">Parent</option>
                        <option value="Other">Other</option>
                      </select>
                      {formErrors.role && <p className="text-[#8B5CF6] text-[12px] mt-1.5 font-medium">{formErrors.role}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#4B5563] mb-2">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className={`w-full bg-[#F9FAFB] border ${formErrors.subject ? 'border-[#8B5CF6]' : 'border-[#E5E7EB]'} rounded-[12px] px-5 py-3.5 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all`} placeholder="How can we help?" />
                    {formErrors.subject && <p className="text-[#8B5CF6] text-[12px] mt-1.5 font-medium">{formErrors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#4B5563] mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className={`w-full bg-[#F9FAFB] border ${formErrors.message ? 'border-[#8B5CF6]' : 'border-[#E5E7EB]'} rounded-[12px] px-5 py-3.5 text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all resize-none`} placeholder="Write your message here..."></textarea>
                    {formErrors.message && <p className="text-[#8B5CF6] text-[12px] mt-1.5 font-medium">{formErrors.message}</p>}
                  </div>

                  <button type="submit" className="w-full bg-[#111827] text-white px-8 py-4 rounded-[12px] font-bold hover:bg-[#374151] transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Send Message <Send size={18} />
                  </button>
                  <p className="text-center text-[12px] text-[#6B7280] font-medium mt-4">
                    <Lock size={14} className="inline mr-1" /> Your information is safe with us. We never share your details.
                  </p>
                </form>
              </>
            )}
          </motion.div>

          {/* RIGHT: INFO PANEL */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-[#111827] rounded-[32px] p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8B5CF6] blur-[100px] opacity-20 rounded-full pointer-events-none" />
            
            <h3 className="text-[24px] font-extrabold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-6 relative z-10 mb-10">
              {[
                { icon: Mail, label: "Email", value: "timelly.tech@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 8309115799" },
                { icon: Clock, label: "Support Hours", value: "Monday – Saturday\n9:00 AM – 6:00 PM IST" },
                { icon: MapPin, label: "Location", value: "Bangalore, Karnataka" },
                { icon: Globe, label: "Website", value: "www.shraddha.in" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#9CA3AF] font-bold uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-[15px] font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8 relative z-10">
              <h4 className="text-[14px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-4 mb-8">
                {["YouTube", "Instagram", "Telegram", "LinkedIn"].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#8B5CF6] flex items-center justify-center transition-colors text-white font-bold text-[12px]">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 relative z-10">
              <p className="text-[13px] text-[#A8B2C8] leading-relaxed">
                For payment gateway or transaction issues, always quote your <strong className="text-white">Order ID</strong> in the email subject.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-[100px] px-6 bg-white border-y border-[#F3F4F6]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#8B5CF6] text-[12px] font-bold tracking-[2px] uppercase mb-4 block">QUICK ANSWERS</span>
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-[#111827] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#6B7280] font-medium text-[16px]">
              Can't find what you're looking for? Email us at <a href="mailto:timelly.tech@gmail.com" className="text-[#8B5CF6] hover:underline">timelly.tech@gmail.com</a>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[16px] font-bold text-[#111827] pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? 'bg-[#F5F3FF] text-[#8B5CF6]' : 'bg-[#F9FAFB] text-[#9CA3AF]'}`}>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-[#4B5563] text-[15px] leading-relaxed font-medium"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESPONSE TIME PROMISE SECTION */}
      <section className="py-[100px] px-6 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#111827] mb-4">Our Response Time Promise</h2>
          <p className="text-[#6B7280] font-medium text-[18px] mb-16 max-w-[600px] mx-auto">
            We respect your time. Here's what you can expect from us:
          </p>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Zap, title: "Email Support", time: "Within 24 hours", desc: "Monday to Saturday, 9 AM – 6 PM IST" },
              { icon: MessageCircle, title: "WhatsApp", time: "Within 4 hours", desc: "For urgent course or payment issues" },
              { icon: ShieldAlert, title: "Grievance", time: "Within 15 working days", desc: "As mandated by the IT Act, 2000" }
            ].map((item, i) => (
              <motion.div 
                key={i} variants={fadeUp}
                className="bg-white rounded-[24px] p-8 border border-[#E5E7EB] border-t-4 border-t-[#8B5CF6] shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#F5F3FF] text-[#8B5CF6] flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[20px] font-extrabold text-[#8B5CF6] mb-2">{item.time}</p>
                <p className="text-[#6B7280] text-[14px] font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}
