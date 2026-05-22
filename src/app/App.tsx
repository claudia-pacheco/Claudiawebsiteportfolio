import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Code2, Palette, Database, Sparkles, Mail, Github, Linkedin, ArrowUpRight, Briefcase, ExternalLink, Sun, Moon } from "lucide-react";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const STACK = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
      { name: "SQL", icon: `${DI}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Next.js", icon: `${DI}/nextjs/nextjs-original.svg` },
      { name: "Vue.js", icon: `${DI}/vuejs/vuejs-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${DI}/express/express-original.svg` },
      { name: "FastAPI", icon: `${DI}/fastapi/fastapi-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "Framer Motion", icon: `${DI}/framermotion/framermotion-original.svg` },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "Redis", icon: `${DI}/redis/redis-original.svg` },
      { name: "Supabase", icon: `${DI}/supabase/supabase-original.svg` },
      { name: "Firebase", icon: `${DI}/firebase/firebase-original.svg` },
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Vercel", icon: `${DI}/vercel/vercel-original.svg` },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub Actions", icon: `${DI}/githubactions/githubactions-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "Figma", icon: `${DI}/figma/figma-original.svg` },
      { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
      { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
      { name: "Jira", icon: `${DI}/jira/jira-original.svg` },
      { name: "Storybook", icon: `${DI}/storybook/storybook-original.svg` },
    ],
  },
];

const PROJECTS = [
  {
    id: "01",
    title: "Bloom Commerce",
    category: "Full-Stack · E-Commerce",
    desc: "End-to-end multi-vendor marketplace with real-time inventory, Stripe subscriptions, and a headless storefront serving 12,000+ monthly orders.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    year: "2025",
    url: "bloomcommerce.co",
    image: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "02",
    title: "Studio CMS",
    category: "Web Application · SaaS",
    desc: "Headless content management system for creative agencies with live preview, content branching, and granular role-based access control.",
    tags: ["React", "Sanity", "TypeScript", "Vercel"],
    year: "2024",
    url: "studiocms.io",
    image: "https://images.unsplash.com/photo-1668608321326-5e49742591ad?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "03",
    title: "Pulse Analytics",
    category: "Dashboard · Data Viz",
    desc: "Real-time analytics platform for D2C brands — WebSocket-driven feeds, custom chart builders, and scheduled export pipelines.",
    tags: ["React", "D3.js", "WebSocket", "Express"],
    year: "2024",
    url: "pulsehq.app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "04",
    title: "Aria AI",
    category: "AI Application · ML Ops",
    desc: "Intelligent long-form content generator powered by Claude, with fine-tuned tone presets, multi-model routing, and usage-based billing.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    year: "2023",
    url: "aria.ai",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=900&h=560&fit=crop&auto=format",
  },
];

function BrowserMockup({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-md bg-secondary/50 flex-shrink-0">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border bg-secondary/80">
        <span className="w-2.5 h-2.5 rounded-full bg-primary/25" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/10" />
        <div className="flex-1 mx-3 bg-background/70 rounded-full px-3 py-0.5 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-border flex-shrink-0" />
          <span className="font-[family-name:var(--font-body)] text-[0.6rem] text-muted-foreground/50 truncate">
            {url}
          </span>
        </div>
      </div>
      {/* Screenshot */}
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      </div>
    </div>
  );
}

const SKILLS = [
  { icon: Code2, name: "Frontend Development", desc: "React, Vue, TypeScript" },
  { icon: Database, name: "Backend & APIs", desc: "Node.js, Python, PostgreSQL" },
  { icon: Palette, name: "UI/UX Design", desc: "Figma, Responsive Design" },
  { icon: Sparkles, name: "Creative Solutions", desc: "Innovation & Problem Solving" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">

      {/* ── Loading screen ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "auto" : "none" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] font-light italic text-5xl tracking-wide"
        >
          Claudia Pacheco
        </motion.p>

        {/* Animated line */}
        <div className="relative w-48 h-px bg-border overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: loading ? "100%" : "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-[family-name:var(--font-body)] text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          Portfolio
        </motion.p>
      </motion.div>


      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="w-full px-6 lg:px-16 xl:px-24 py-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-display)] text-2xl font-light italic"
          >
            Claudia Pacheco 
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {["Experience", "Work", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="font-[family-name:var(--font-display)] text-lg font-normal tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-[#f2ecf7] text-[#17121e] hover:bg-white"
                  : "bg-[#17121e] text-[#f2ecf7] hover:bg-[#2a2237]"
              }`}
              aria-label="Toggle dark mode"
            >
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
        

            <h1 className="font-[family-name:var(--font-display)] font-light tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}>
              Crafting Digital
              <br />
              <em className="text-primary">Experiences</em>
            </h1>

            <p className="font-[family-name:var(--font-body)] text-lg font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Blending creativity with code to build beautiful, functional, and user-centered web applications.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-body)] text-sm tracking-wide hover:shadow-lg transition-shadow"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 border border-border rounded-full font-[family-name:var(--font-body)] text-sm tracking-wide hover:bg-secondary/50 transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* ── Skills ──────────────────────────────────────────────────── */}
      <section id="skills" className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light mb-3">
              What I <em>Do</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground tracking-wide">
              Expertise across the full development spectrum
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl mb-2">{skill.name}</h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Currently Working On ────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.16em] uppercase text-primary">
                Currently Working On
              </p>
            </div>
            <div className="hidden md:block flex-1 h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Vibe Coding & AI-Assisted Development",
                desc: "Exploring how to integrate AI tools — LLMs, code generation, and agentic workflows — directly into the development process to build faster and smarter.",
                label: "Learning",
                icon: "✦",
              },
              {
                title: "Getting Acquainted with TypeScript",
                desc: "Starting from the fundamentals — types, interfaces, and type inference — and building up to more complex concepts to level up the quality of my code.",
                label: "Learning",
                icon: "◈",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/30 bg-secondary/10 hover:bg-secondary/25 transition-all duration-300"
              >
                <span className="text-primary text-xl leading-none mt-0.5 flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-[family-name:var(--font-body)] text-[0.6rem] tracking-[0.14em] uppercase text-primary/70 bg-primary/8 px-2 py-0.5 rounded-full">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light mb-2">{item.title}</p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────── */}
      <section id="experience" className="py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4"
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light leading-[0.9]">
              Work<br /><em>Experience</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground max-w-xs md:text-right leading-relaxed">
              Building real-world products used by thousands of people every day.
            </p>
          </motion.div>

          {/* Featured role */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative border border-border rounded-3xl p-10 md:p-14 hover:border-primary/40 transition-colors duration-300 overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 relative">
              {/* Left */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-xs tracking-[0.14em] uppercase text-primary">
                    Current Position
                  </span>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light mb-1">
                    Web Developer <span className="text-muted-foreground font-light">·</span> <em>Front-End</em>
                  </h3>
                  <p className="font-[family-name:var(--font-display)] text-xl text-muted-foreground font-light">
                    FinTech Solutions Inc.
                  </p>
                </div>

                <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Building and maintaining consumer-facing web applications for a rapidly growing fintech platform.
                  Led frontend development for the core dashboard, transaction history, and onboarding flows —
                  serving over 200,000 active users across web and mobile web.
                </p>

                <ul className="space-y-3">
                  {[
                    "Developed responsive React interfaces for the customer-facing dashboard and payment flows",
                    "Integrated third-party payment APIs and real-time transaction streaming via WebSockets",
                    "Improved Lighthouse performance score from 62 to 94 through code splitting and asset optimization",
                    "Collaborated with design and product teams to ship two major product redesigns on schedule",
                    "Established a component library in Figma and Storybook adopted across three product teams",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS", "Figma"].map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-body)] text-xs bg-secondary/70 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — meta */}
              <div className="flex flex-row md:flex-col items-start md:items-end gap-6 md:gap-4 md:text-right">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/60 tracking-widest uppercase mb-1">Period</p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light">2023 – Present</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/60 tracking-widest uppercase mb-1">Location</p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light">Remote</p>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 mt-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-10"
          >
            <p className="font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.16em] uppercase text-primary">
              Education
            </p>
            <div className="hidden md:block flex-1 h-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                school: "General Assembly",
                credential: "Software Engineering Bootcamp",
                detail: "Intensive full-stack program covering React, Node.js, databases, and modern development workflows.",
                year: "2022",
                icon: "generalassembly",
              },
              {
                school: "University of Hertfordshire",
                credential: "Certificate of Higher Education",
                detail: "Computer Science — fundamentals of programming, algorithms, data structures, and systems design.",
                year: "2021",
                icon: "academia",
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-[family-name:var(--font-display)] text-lg font-light text-primary leading-none">
                    {edu.school[0]}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="font-[family-name:var(--font-display)] text-lg font-light">{edu.school}</p>
                    <span className="font-[family-name:var(--font-body)] text-xs text-muted-foreground flex-shrink-0">{edu.year}</span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-primary tracking-wide mb-2">{edu.credential}</p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground leading-relaxed">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────────────────── */}
      <section className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light mb-3">
              Languages <em>&amp; Tools</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground tracking-wide">
              Technologies I reach for to build production-ready software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STACK.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <p className="font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.16em] uppercase text-primary mb-5">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm bg-secondary/50 border border-border rounded-full px-3.5 py-1.5 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-4 h-4 object-contain"
                      />
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────── */}
      <section id="work" className="py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4"
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light leading-[0.9]">
              Bootcamp<br /><em>Projects</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground max-w-xs md:text-right leading-relaxed">
              Purposeful products built with care — from greenfield MVPs to scaled platforms.
            </p>
          </motion.div>

          <div className="divide-y divide-border">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-center py-12 -mx-5 px-5 rounded-2xl hover:bg-secondary/20 transition-colors duration-300"
              >
                {/* Left — text */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/50 tracking-widest">
                      {project.id}
                    </span>
                    <span className="hidden md:inline font-[family-name:var(--font-body)] text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="font-[family-name:var(--font-display)] font-light group-hover:text-primary transition-colors duration-300"
                      style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
                    >
                      {project.title}
                    </h3>
                    <motion.a
                      href="#"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 mt-1"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed mb-5 max-w-lg">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[family-name:var(--font-body)] text-xs bg-secondary/60 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="font-[family-name:var(--font-body)] text-xs text-muted-foreground ml-auto">
                      {project.year}
                    </span>
                  </div>

                  {/* Mobile image */}
                  <div className="mt-6 lg:hidden">
                    <BrowserMockup src={project.image} alt={project.title} url={project.url} />
                  </div>
                </div>

                {/* Right — browser mockup (desktop only) */}
                <div className="hidden lg:block">
                  <BrowserMockup src={project.image} alt={project.title} url={project.url} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────── */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light text-center mb-14">
              About <em>Me</em>
            </h2>

            <div className="font-[family-name:var(--font-body)] text-base leading-relaxed space-y-5 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer who believes that great technology should be invisible — seamlessly integrated into beautiful, intuitive experiences that delight users.
              </p>
              <p>
                With expertise spanning frontend frameworks, backend architectures, and database design, I bring a holistic approach to every project. I thrive at the intersection of aesthetics and functionality, where clean code meets thoughtful design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with the latest web technologies.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-12 flex justify-center gap-5"
            >
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-card rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.92]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}>
              Let&apos;s Create Something
              <br />
              <em className="text-primary">Beautiful Together</em>
            </h2>

            <p className="font-[family-name:var(--font-body)] text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <motion.a
              href="mailto:hello@claudia.dev"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 px-12 py-5 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-body)] text-sm tracking-wide hover:shadow-xl transition-all inline-flex items-center gap-3"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10 px-6 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-display)] text-xl font-light italic">Claudia Pacheco</p>
          <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
