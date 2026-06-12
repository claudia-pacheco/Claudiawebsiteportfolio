import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Code2, Palette, Database, Sparkles, Mail, Github, Linkedin, ArrowUpRight, Briefcase, ExternalLink, Sun, Moon, ArrowUp } from "lucide-react";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const EMAIL = "claudia.pacheco.dev@gmail.com";

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
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${DI}/express/express-original.svg` },
      { name: "Django", icon: `${DI}/django/django-plain.svg` },
      { name: "Material UI", icon: `${DI}/materialui/materialui-original.svg` },
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "Heroku", icon: `${DI}/heroku/heroku-original.svg` },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "GitHub", icon: `${DI}/github/github-original.svg` },
      { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
      { name: "Figma", icon: `${DI}/figma/figma-original.svg` },
      { name: "Jira", icon: `${DI}/jira/jira-original.svg` },
      { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
      { name: "Jest", icon: `${DI}/jest/jest-plain.svg` },
      { name: "Trello", icon: `${DI}/trello/trello-original.svg` },
      { name: "Slack", icon: `${DI}/slack/slack-original.svg` },
    ],
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "BrowserStack", icon: `${DI}/browserstack/browserstack-original.svg` },
      { name: "Insomnia", icon: `${DI}/insomnia/insomnia-original.svg` },
      { name: "Telerik Fiddler", icon: "https://www.telerik.com/favicon.ico" },
    ],
  },
];

const PROJECTS = [
  {
    id: "01",
    title: "Flying Harry Potter",
    category: "Solo · Vanilla JS Game",
    desc: "A canvas-based browser game built with Vanilla JavaScript, HTML, and CSS. Players dodge obstacles and collect trophies to score points — my first solo project, completed in 2 weeks.",
    tags: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
    url: "flying-harry-potter.netlify.app",
    live: "https://flying-harry-potter.netlify.app/",
    github: "https://github.com/claudia-pacheco/Project-1",
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "02",
    title: "Dungeons & Dragons Character Builder",
    category: "Pair · Reactathon",
    desc: "A Reactathon project built in 1 week with a partner, consuming a public API to generate random D&D characters. Styled with plain CSS.",
    tags: ["React", "REST API", "CSS3"],
    url: "dungeons-n-dragons.netlify.app",
    live: "https://dungeons-n-dragons.netlify.app/",
    github: "https://github.com/claudia-pacheco/project-2",
    image: "https://images.unsplash.com/photo-1549056572-75914d5d5fd4?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "03",
    title: "Walkies",
    category: "Pair · Full Stack MERN",
    desc: "A full stack MERN app built with a partner over 2 weeks, consuming its own RESTful API. React, HTML, and CSS on the frontend; MongoDB, Node.js, and Express on the backend.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    url: "walkiessei22.netlify.app",
    live: "https://walkiessei22.netlify.app/",
    github: "https://github.com/claudia-pacheco/walkies-client",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "04",
    title: "Cloud9 Scents",
    category: "Solo · Full Stack",
    desc: "A solo full stack app consuming a Python Django REST API backed by PostgreSQL. Built in 2 weeks using React and Material UI for the frontend.",
    tags: ["React", "Python", "Django", "PostgreSQL", "Material UI"],
    url: "cloud9-scents.netlify.app",
    live: "https://cloud9-scents.netlify.app/",
    github: "https://github.com/claudia-pacheco/perfumes-frontend",
    image: "https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=900&h=560&fit=crop&auto=format",
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
  { icon: Code2, name: "Frontend Development", desc: "React, JavaScript, TypeScript, CSS" },
  { icon: Database, name: "Backend & APIs", desc: "Node.js, Express, Python, Django" },
  { icon: Palette, name: "Databases & Cloud", desc: "PostgreSQL, MongoDB, AWS" },
  { icon: Sparkles, name: "Creative Solutions", desc: "Innovation & Problem Solving" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
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
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          Welcome to my portfolio
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
            {[
              { label: "Work", href: "#experience" },
              { label: "Tools", href: "#stack" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="font-[family-name:var(--font-display)] text-lg font-normal tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
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
              Hi, I’m 
              <br />
              <em className="text-primary">Claudia</em>.
            </h1>

             <p className="font-[family-name:var(--font-display)] font-light tracking-tight leading-[0.9] "style={{ fontSize: "clamp(2rem, 1vw, 9rem)" }}>
              I build web applications.
            </p>

            <p className="font-[family-name:var(--font-body)] text-lg font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
Experience in delivering wealth management and financial services platforms used by thousands of users worldwide.            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <motion.a
                href="#experience"
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
                title: "TypeScript",
                desc: "Working through types, interfaces, and generics to write more robust, self-documenting code — and gradually applying it to existing projects.",
                label: "Learning",
                icon: "✦",
              },
              {
                title: "AI-Assisted Development",
                desc: "Exploring how to integrate AI tooling into day-to-day workflows — from code generation to agentic pipelines — to ship faster without sacrificing quality.",
                label: "Exploring",
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
                    Web Developer
                  </h3>
                  <p className="font-[family-name:var(--font-display)] text-xl text-muted-foreground font-light">
                    InvestCloud Inc.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Delivered end-to-end functionality by engineering web application features on top of an internal platform, utilising front-end components, configuration, and backend integrations.",
                    "Reduced code duplication and enhanced UI maintainability by controlling application behaviour — navigation, permissions, and validation rules — through metadata and configuration files.",
                    "Safeguarded system security by designing and implementing role-based access and navigation, ensuring users exclusively viewed and accessed applications appropriate to their roles.",
                    "Stabilised product releases by partnering with QA and product teams to define acceptance criteria and maintain test environments with frozen builds for UAT and regression testing.",
                    "Facilitated seamless production rollouts and hotfixes by contributing to release and deployment processes, including the preparation of detailed deployment notes regarding versions, environments, and browser coverage.",
                    "Accelerated root-cause analysis by enhancing logging and documentation whilst investigating and resolving production incidents related to UI, configuration, and environment differences.",
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
                  {["HTML", "CSS", "AWS", "Fiddler", "BrowserStack", "Mobile App Dev", "Company Specific Tech"].map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-body)] text-xs bg-secondary/70 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Clients */}
                <div className="pt-4 border-t border-border">
                  <p className="font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.16em] uppercase text-primary mb-3">
                    Client Projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "UBS", region: "UK" },
                      { name: "HSBC", region: "UK" },
                      { name: "Capital Group", region: "US" },
                      { name: "Truist", region: "US" },
                    ].map((client) => (
                      <span
                        key={client.name}
                        className="inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs border border-border rounded-full px-3 py-1"
                      >
                        {client.name}
                        <span className="text-muted-foreground/50 text-[0.6rem]">{client.region}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — meta */}
              <div className="flex flex-row md:flex-col items-start md:items-end gap-6 md:gap-4 md:text-right">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/60 tracking-widest uppercase mb-1">Period</p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light">June 2023 – May 2026</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/60 tracking-widest uppercase mb-1">Location</p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light">London, UK</p>
                </div>
                <motion.a
                  href="https://www.investcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
                credential: "Software Engineering Immersive Flex",
                detail: "Intensive full-stack programme covering React, Node.js, databases, and modern development workflows.",
                year: "2021 – 2022",
                icon: "G",
              },
              {
                school: "University of Hertfordshire",
                credential: "CertHE in Computer Science",
                detail: "Computer Science — fundamentals of programming, algorithms, data structures, and systems design.",
                year: "2021",
                icon: "U",
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
      <section id="stack" className="py-32 px-6 lg:px-12 bg-secondary/30">
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
              Four projects across 24 weeks — from solo games to full stack apps, each one pushing what I knew further.
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
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
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
                I'm a Software Engineer with a strong passion for technology — one that started when I first programmed a robot at school and never really switched off.
              </p>
              <p>
                After studying Computer Science at the University of Hertfordshire and completing the Software Engineering Immersive at General Assembly, I moved into the industry as a Full Stack Developer, where I've been building and shipping web applications in financial services ever since.
              </p>
              <p>
                Outside of work, you'll find me doing martial arts, travelling, cooking, or disappearing into the mountains on a hike.
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
                { Icon: Github, label: "GitHub", href: "https://github.com/claudia-pacheco", external: true },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/claudia-pacheco1/", external: true },
                { Icon: Mail, label: "Email", href: `mailto:${EMAIL}`, external: false },
              ].map(({ Icon, label, href, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
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
              href={`mailto:${EMAIL}`}
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

      {/* ── Back to top ─────────────────────────────────────────────── */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0.8, pointerEvents: scrolled ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
