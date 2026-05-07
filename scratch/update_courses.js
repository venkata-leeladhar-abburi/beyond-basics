const fs = require('fs');
const path = require('path');

const dirs = fs.readdirSync('app/courses', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const files = dirs.map(d => path.join('app/courses', d, 'page.tsx')).filter(f => fs.existsSync(f));

const featuredCoursesReplacement = `      {/* ============================================
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
                price: "₹799",
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
                price: "₹799",
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
                price: "₹1,199",
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
                href={\`/courses/\${course.slug}\`}
                className="block group"
              >
                <div
                  className={\`bg-white rounded-[32px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#F3F4F6] flex flex-col transition-all duration-300 cursor-pointer h-full \${course.rotate} hover:shadow-[0_30px_60px_rgba(139,92,246,0.1)] hover:-translate-y-2\`}
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
      </section>`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Remove Framer badge
  content = content.replace(/<Link href="https:\/\/framer\.com"[\s\S]*?<\/Link>/, '');
  content = content.replace(/<a href="https:\/\/framer\.com"[\s\S]*?<\/a>/, '');

  // 2. Replace Featured Courses section
  // Look for Featured Courses section comment block and the <section> following it
  const sectionRegex = /{\/\*\s*={40,}\s*FEATURED COURSES[\s\S]*?={40,}\s*\*\/}\s*<section[\s\S]*?<\/section>/i;
  content = content.replace(sectionRegex, featuredCoursesReplacement);

  // 3. Update Navbar
  const navItemsDesktop = `            {["Courses", "About Us", "Contact Us"].map((label) => (
              <li key={label}>
                <Link href={label === "Courses" ? "/courses" : label === "About Us" ? "/about" : "/contact"} className="text-[15px] font-medium text-[#6B7280] hover:text-[#111827] transition-colors">
                  {label}
                </Link>
              </li>
            ))}`;
            
  const navItemsMobile = `              {["Courses", "About Us", "Contact Us"].map((label) => (
                <Link key={label} href={label === "Courses" ? "/courses" : label === "About Us" ? "/about" : "/contact"} onClick={() => setMobileMenuOpen(false)} className="text-[#6B7280] font-medium text-[16px]">
                  {label}
                </Link>
              ))}`;

  content = content.replace(/{\["Courses",\s*"About Us"\]\.map\(\(label\)\s*=>\s*\(\s*<li[\s\S]*?<\/li>\s*\)\)}/, navItemsDesktop);
  content = content.replace(/{\["Courses",\s*"About Us"\]\.map\(\(label\)\s*=>\s*\(\s*<Link key={label}[\s\S]*?<\/Link>\s*\)\)}/, navItemsMobile);

  // Make sure BookOpen and Clock and ArrowRight are imported
  if (!content.includes('BookOpen')) {
    content = content.replace(/import {([^}]+)} from "lucide-react";/, 'import {$1, BookOpen, Clock, ArrowRight} from "lucide-react";');
  }

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
}
