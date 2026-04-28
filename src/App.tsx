import { ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Mail, 
  MapPin, 
  ExternalLink,
  Monitor,
  Terminal,
  Settings,
  ShieldCheck
} from "lucide-react";

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal website to showcase projects and skills using modern UI principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Student Management System",
    description: "A basic system to manage student records with features like add, delete, and display.",
    tech: ["JavaScript", "Node.js", "CRUD"],
    link: "#"
  },
  {
    title: "Static Business Website",
    description: "Multi-page website for a local business focused on UI/UX and mobile responsiveness.",
    tech: ["HTML", "CSS", "UI/UX"],
    link: "#"
  }
];

const SKILLS = {
  frontend: {
    title: "FRONTEND",
    icon: <Monitor size={14} />,
    items: ["HTML5", "CSS3", "JAVASCRIPT", "TAILWIND"]
  },
  backend: {
    title: "BACKEND",
    icon: <Terminal size={14} />,
    items: ["NODE.JS", "PHP", "REST API"]
  },
  tools: {
    title: "TOOLKIT",
    icon: <Settings size={14} />,
    items: ["GIT", "GITHUB", "VS CODE", "NPM"]
  },
  process: {
    title: "STRATEGY",
    icon: <ShieldCheck size={14} />,
    items: ["PROBLEM SOLVING", "DEBUGGING", "CLEAN CODE"]
  }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg relative pb-12">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-ink origin-left z-50 px-12"
        style={{ scaleX }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12">
        {/* Editorial Header */}
        <header className="relative mb-20">
          <div className="flex items-baseline justify-between border-b border-brand-ink pb-4">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase">PORTFOLIO / CV 2026</span>
            <div className="flex gap-8 text-[10px] tracking-[0.2em] font-bold uppercase">
              <a href="#about" className="hover:opacity-50 transition-opacity">ABOUT</a>
              <a href="#projects" className="hover:opacity-50 transition-opacity">PROJECTS</a>
              <a href="mailto:achsujal11@gmail.com" className="hover:opacity-50 transition-opacity">CONTACT</a>
            </div>
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase hidden sm:block">📍 NEPAL</span>
          </div>
          
          <div className="mt-12 relative overflow-hidden">
            <h1 className="text-[120px] md:text-[180px] font-black leading-[0.7] tracking-tighter italic uppercase opacity-5 absolute -top-8 left-[-0.05em] select-none pointer-events-none">
              Developer
            </h1>
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="font-serif text-7xl md:text-9xl font-black leading-none relative z-10 tracking-tight"
            >
              Sujal Acharya
            </motion.h1>
            <div className="flex gap-4 mt-6 items-center">
              <div className="h-[2px] w-16 bg-brand-ink"></div>
              <p className="text-sm md:text-lg tracking-[0.3em] uppercase font-bold text-brand-accent">
                Web Developer & IT Student
              </p>
            </div>
          </div>
        </header>

        {/* Editorial Grid Content */}
        <main className="editorial-grid min-h-[600px]">
          
          {/* Left Sidebar: About & Objective */}
          <section id="about" className="flex flex-col gap-12 border-r md:border-r-0 border-brand-ink pb-12 lg:pb-0">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-40">OBJECTIVE</h3>
              <p className="text-base leading-relaxed italic font-serif">
                Motivated and detail-oriented developer at Lumbini Engineering College. 
                Passionate about building responsive, user-friendly websites and systems. 
                Seeking opportunities to grow as a professional developer.
              </p>
            </div>
            
            <div className="border-t border-brand-ink pt-8 space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-40">CONNECT</h3>
              <ul className="text-xs space-y-4 font-bold tracking-tight">
                <li className="flex justify-between items-end border-b border-zinc-100 pb-2">
                  <span className="opacity-50 text-[9px] uppercase">EMAIL</span> 
                  <span className="hover:text-brand-accent transition-colors">achsujal11@gmail.com</span>
                </li>
                <li className="flex justify-between items-end border-b border-zinc-100 pb-2">
                  <span className="opacity-50 text-[9px] uppercase">GITHUB</span> 
                  <a href="#" className="underline decoration-brand-accent underline-offset-2">@sujalacharya</a>
                </li>
                <li className="flex justify-between items-end border-b border-zinc-100 pb-2">
                  <span className="opacity-50 text-[9px] uppercase">PHONE</span> 
                  <span>+977 9763658739</span>
                </li>
                <li className="flex justify-between items-end border-b border-zinc-100 pb-2">
                  <span className="opacity-50 text-[9px] uppercase">LOCATION</span> 
                  <span>Butwal 11 Kalikanagar, Nepal</span>
                </li>
              </ul>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-auto p-6 border-2 border-brand-ink flex items-center justify-center bg-white cursor-pointer group"
            >
              <span className="text-[10px] tracking-[0.3em] font-black uppercase text-center group-hover:text-brand-accent transition-colors">
                Available for New Challenges
              </span>
            </motion.div>
          </section>

          {/* Center Column: Projects & Education */}
          <section id="projects" className="lg:border-l lg:border-brand-ink lg:pl-12 space-y-20">
            <div className="space-y-12">
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-40 mb-8 border-b border-brand-ink/10 pb-2 w-fit">SELECTED PROJECTS</h3>
              
              <div className="grid gap-16">
                {PROJECTS.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <span className="text-xl font-serif font-black text-brand-accent italic absolute -left-8 top-0 opacity-20 group-hover:opacity-100 transition-opacity">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-3xl font-black tracking-tighter uppercase leading-none mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-zinc-600 leading-relaxed mb-4 max-w-lg">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="text-[9px] font-bold tracking-widest uppercase border border-zinc-200 px-2 py-0.5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a href={project.link} className="p-2 border border-brand-ink opacity-20 group-hover:opacity-100 transition-all hover:bg-brand-ink hover:text-white rounded-full">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <div className="mt-8 h-[1px] w-full bg-zinc-200 group-hover:bg-brand-ink transition-all duration-700 origin-left" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-brand-ink space-y-12">
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-40 mb-8 border-b border-brand-ink/10 pb-2 w-fit">STUDIES</h3>
              <div className="grid gap-8">
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif italic font-bold">Lumbini Engineering College</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Bachelors in Information Technology</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Focus on modern web architecture and systems design. Actively building personal 
                    and academic projects to master the full software lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Toolkit & Identity */}
          <section className="bg-brand-ink text-brand-bg p-10 flex flex-col h-full lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)]">
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-12 opacity-40">TECHNICAL TOOLKIT</h3>
            
            <div className="space-y-10 flex-grow">
              <SkillSection skill={SKILLS.frontend} />
              <SkillSection skill={SKILLS.backend} />
              <SkillSection skill={SKILLS.tools} />
              <SkillSection skill={SKILLS.process} />
              
              <div className="pt-12 space-y-4">
                <h4 className="text-[9px] font-bold tracking-widest opacity-30">FLAVORS</h4>
                <div className="flex flex-wrap gap-2">
                  {["NEPALI (FLUENT)", "ENGLISH (INTERMEDIATE)"].map(lang => (
                    <span key={lang} className="text-[10px] font-black italic tracking-tighter opacity-80">{lang}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 space-y-2">
              <p className="text-6xl font-serif font-black italic opacity-10 tracking-tighter leading-none select-none">
                SKILLS
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 leading-none">
                  Design • Code • Debug • Repeat
                </p>
                <div className="h-1 w-full bg-brand-accent/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-brand-accent" 
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Editorial Footer */}
        <footer className="mt-24 pt-8 border-t border-brand-ink/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.35em] uppercase opacity-40">
          <div className="flex gap-8">
            <span>BUTWAL / NEPAL</span>
            <span className="hidden sm:inline">•</span>
            <span>Est. 2024</span>
          </div>
          <span>© 2026 Sujal Acharya</span>
          <div className="flex gap-8 text-brand-ink">
            <a href="#" className="hover:opacity-100 transition-opacity">TWITTER</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LINKEDIN</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GITHUB</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SkillSection({ skill }: { skill: { title: string, items: string[], icon: ReactNode } }) {
  return (
    <div className="space-y-4 group">
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <span className="opacity-40 group-hover:opacity-100 transition-opacity">{skill.icon}</span>
        <h4 className="text-[11px] font-black tracking-[0.1em]">{skill.title}</h4>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {skill.items.map(item => (
          <span key={item} className="text-[10px] font-mono tracking-tight opacity-60 hover:opacity-100 hover:text-brand-accent transition-all cursor-crosshair">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

