import React, { useState, useEffect } from 'react';
import myProfilePic from './assets/prince.jpeg'; // Add this line!
import blogpreview from './assets/blog.png'; // Add this line!
import supercarepreview from './assets/supercare.png';
const SKILLS = [
  { name: "React", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Node.js", level: "75%" },
  { name: "MongoDB", level: "80%" },
  { name: "Appwrite", level: "70%" },
  { name: "Tailwind CSS", level: "95%" }
];

const PROJECTS = [
  {
    title: "Write-Hub",
    desc: "A scalable online blogging application where people can create their personel blogs.",
    tech: "React • Node.js • MongoDB • Tailwind",
    link: "https://write-hub-your-writing-space.vercel.app/",
    img:blogpreview
  },
  {
    title: "SuperCare",
    desc: "Exceptional care for discerning patients. Modern healthcare web application providing concierge medical team services.",
    tech: "React • Tailwind CSS",
    link: "http://localhost:5174",
    img:supercarepreview
  },
  {
    title: "FinTech Dashboard",
    desc: "Interactive financial dashboard with real-time charts and data visualization.",
    tech: "React • Chart.js • Tailwind",
    link: "#",
    img:""
  }
];

export default function App() {
  const [nameText, setNameText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Prince Sharma";

  // Typing Effect Logic for Name (Looping Back and Forth)
  useEffect(() => {
    let timer;
    
    if (!isDeleting && nameText === fullName) {
      // Pause at the end before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && nameText === "") {
      // Pause at the start before typing again
      timer = setTimeout(() => setIsDeleting(false), 500);
    } else {
      // Handle the typing or deleting action
      const nextText = isDeleting 
        ? fullName.substring(0, nameText.length - 1)
        : fullName.substring(0, nameText.length + 1);
        
      const typingSpeed = isDeleting ? 80 : 150;
      
      timer = setTimeout(() => {
        setNameText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [nameText, isDeleting]);

  // Scroll Animation Logic (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // Animates only once
          }
        });
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Icons (SVGs)
  const Icons = {
    LinkedIn: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    ),
    GitHub: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    Mail: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
    Phone: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    ),
    File: () => (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    ),
    ExternalLink: () => (
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
    )
  };

  return (
    <div className="h-screen overflow-y-auto scroll-smooth bg-gradient-to-br from-[#020617] via-[#081b36] to-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/50 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-wider text-white">
            PORTFOLIO<span className="text-cyan-400">.</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center pt-20 gap-10">
          
          {/* Left Side (Text content) */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left relative z-10 scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-50 animate-pulse -z-10"></div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 min-h-[1.2em] inline-block">
                {nameText}<span className="text-cyan-400 animate-[ping_1s_step-end_infinite]">|</span>
              </span>
            </h1>
            
            <div className="text-xl md:text-3xl font-light text-slate-300 mb-10">
              I am a full stack developer
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <Icons.GitHub />
                <span><a href="https://github.com/princex100" target='blank'>Github</a></span>
              </a>
              <a href="#resume" className="group flex items-center justify-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Icons.File />
                <span>Resume</span>
              </a>
            </div>
          </div>

         {/* Right Side (Photo) */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out">
  
  {/* Adjusted heights: made it shorter for a better aspect ratio */}
  <div className="w-64 h-80 md:w-80 md:h-96 lg:w-[380px] lg:h-[460px] rounded-3xl border-4 border-cyan-500/30 relative overflow-hidden group shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-sm">
    
    {/* Blue overlay has been completely removed */}
    
    {/* Profile Image with direct hover zoom */}
    <img 
      src={myProfilePic} 
      alt="Prince Sharma" 
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
    />
    
  </div>
</div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 flex flex-col items-center text-center scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <p className="max-w-2xl text-lg text-slate-300 leading-relaxed transition-opacity duration-700 opacity-90 hover:opacity-100">
            I am a passionate software developer dedicated to building elegant, high-performance web applications. 
            With a strong eye for design and a focus on writing clean, scalable code, I transform complex problems 
            into intuitive digital experiences. When I'm not coding, I'm exploring new technologies and refining my craft.
          </p>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="py-24 scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center relative">
            Technical Skills
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] flex flex-col items-center text-center"
              >
                <div className="text-xl font-semibold text-white mb-2">{skill.name}</div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-1000 group-hover:opacity-100 opacity-70"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="py-24 scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center relative">
            Featured Projects
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-500 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div 
                key={index}
                className="group flex flex-col bg-[#0f172a]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] hover:border-cyan-500/30"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-blue-900/40 group-hover:scale-110 transition-transform duration-500"></div>
                  <span className="relative z-10 text-slate-500 font-mono text-sm"><img src={project.img} alt="preview" /></span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{project.desc}</p>
                  <p className="text-cyan-400 text-xs font-mono mb-6">{project.tech}</p>
                  
                  <a href={project.link} target='blank' className="inline-flex items-center w-max text-sm text-white font-medium bg-white/5 hover:bg-cyan-500 hover:text-white px-5 py-2.5 rounded-lg border border-white/10 hover:border-cyan-400 transition-all duration-300">
                    View Project <Icons.ExternalLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="py-24 mb-12 scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Let's Connect</h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto relative z-10">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {[
                { name: "GitHub", icon: Icons.GitHub, link: "https://github.com/princex100" },
                { name: "LinkedIn", icon: Icons.LinkedIn, link: "https://www.linkedin.com/feed/" },
                { name: "Email", icon: Icons.Mail, link: "mailto:princeshrm002@gmail.com" },
                { name: "Call", icon: Icons.Phone, link: "tel:+916397345571" }
              ].map((contact, idx) => (
                <a 
                  key={idx}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 bg-[#020617]/50 border border-white/5 rounded-xl hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors mb-3">
                    <contact.icon />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{contact.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Prince Sharma. Designed & Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}