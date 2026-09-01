import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Briefcase,
  ExternalLink,
  Sun,
  Moon,
  ArrowUp,
} from "lucide-react";
import ProgressBarWithPreview from "./components/ProgressBarWithPreview";
import loginScreenImg from "../assets/phone-preview/2.png";
import homeScreenImg from "../assets/phone-preview/3.png";

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
    color: "cool",
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${DI}/express/express-original.svg` },
      { name: "Django", icon: `${DI}/django/django-plain.svg` },
      { name: "Material UI", icon: `${DI}/materialui/materialui-original.svg` },
      {
        name: "Tailwind CSS",
        icon: `${DI}/tailwindcss/tailwindcss-original.svg`,
      },
    ],
    color: "warm",
  },
  {
    category: "Databases & Cloud",
    items: [
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      {
        name: "AWS",
        icon: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
      },
      { name: "Heroku", icon: `${DI}/heroku/heroku-original.svg` },
    ],
    color: "success",
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
      { name: "Vite", icon: `${DI}/vite/vite-original.svg` },
    ],
    color: "warning",
  },
  {
    category: "Testing & Debugging",
    items: [
      {
        name: "BrowserStack",
        icon: `${DI}/browserstack/browserstack-original.svg`,
      },
      { name: "Insomnia", icon: `${DI}/insomnia/insomnia-original.svg` },
      { name: "Telerik Fiddler", icon: "https://www.telerik.com/favicon.ico" },
    ],
    color: "primary",
  },
  {
    category: "AI Powered Development",
    items: [
      { name: "Claude", icon: "data:image/svg+xml,%3Csvg height='1em' style='flex:none;line-height:1' viewBox='0 0 24 24' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z' fill='%23D97757' fill-rule='nonzero'%3E%3C/path%3E%3C/svg%3E" },
      { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/openai.svg" },
      { name: "Glean", icon: "data:image/svg+xml,%3Csvg width='129' height='129' viewBox='0 0 129 129' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='64.5499' cy='64.6205' rx='64.1485' ry='64' fill='%23343CED'/%3E%3Cpath d='M96.0898 83.0051C95.3861 83.9997 94.6363 84.9673 93.8457 85.8938C93.0551 86.8248 92.2276 87.7151 91.3594 88.5735C90.4957 89.4318 89.5908 90.2494 88.6494 91.0305C87.7125 91.8117 86.7388 92.5475 85.7334 93.2424C84.7325 93.9418 83.6999 94.5967 82.6396 95.2053C81.584 95.8093 80.4962 96.3678 79.3857 96.8811C78.2798 97.3943 77.1504 97.8574 75.9941 98.2708C74.8518 98.6885 73.6821 99.0518 72.4941 99.3606C71.3196 99.674 70.1261 99.9378 68.915 100.147C67.7178 100.356 66.5066 100.515 65.2773 100.615C64.071 100.719 62.8509 100.774 61.6172 100.774C60.3832 100.774 59.1626 100.719 57.9561 100.615C56.7268 100.515 55.5111 100.356 54.3184 100.147C53.1073 99.9378 51.9101 99.6739 50.7402 99.3606L53.4316 89.3782C54.3137 89.6189 55.2146 89.8136 56.124 89.968C57.0242 90.1269 57.9383 90.2453 58.8613 90.3225C59.7707 90.3997 60.6895 90.4407 61.6172 90.4407C62.5449 90.4407 63.4636 90.3997 64.373 90.3225C65.2961 90.2453 66.2101 90.127 67.1104 89.968C68.0196 89.8136 68.9199 89.6188 69.8018 89.3782C70.6975 89.1465 71.5757 88.8732 72.4395 88.5598C73.3076 88.251 74.1577 87.9019 74.9893 87.5159C75.8255 87.1299 76.6434 86.7118 77.4385 86.2532C78.2382 85.799 79.0204 85.3039 79.7744 84.7815C80.533 84.2593 81.2641 83.7052 81.9678 83.1194C82.6761 82.5335 83.3572 81.9157 84.0107 81.2708C84.6643 80.6213 85.2907 79.9536 85.8848 79.2542C86.4789 78.5547 87.0451 77.8277 87.5752 77.0784L96.0898 83.0051ZM86.7725 34.9954L80.0264 43.5754C83.5087 47.7136 85.6055 53.0431 85.6055 58.8596C85.6054 72.0259 74.8654 82.6995 61.6172 82.6995C48.3692 82.6992 37.63 72.0257 37.6299 58.8596C37.6299 45.6935 48.3692 35.02 61.6172 35.0198C65.2307 35.0198 68.6572 35.8155 71.7305 37.2375L78.5273 28.593L86.7725 34.9954ZM61.6172 45.2581C54.059 45.2583 47.9316 51.3481 47.9316 58.8596C47.9317 66.371 54.0591 72.46 61.6172 72.4602C69.1755 72.4602 75.3036 66.3712 75.3037 58.8596C75.3037 51.348 69.1756 45.2581 61.6172 45.2581Z' fill='white'/%3E%3C/svg%3E" },
      { name: "GitHub Copilot", icon: `${DI}/github/github-original.svg` },
      { name: "Figma Make", icon: `${DI}/figma/figma-original.svg` },
    ],
    color: "primary",
  },
];

const PROJECTS = [
  {
    id: "01",
    title: "Flying Harry Potter",
    category: "Solo · Vanilla JS Game",
    desc: "A canvas-based browser game built with Vanilla JavaScript, HTML and CSS. Players dodge obstacles and collect trophies to score points — my first solo project, completed in 2 weeks.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    url: "flying-harry-potter.netlify.app",
    live: "https://flying-harry-potter.netlify.app/",
    github: "https://github.com/claudia-pacheco/Project-1",
    image:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=900&h=560&fit=crop&auto=format",
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
    image:
      "https://images.unsplash.com/photo-1549056572-75914d5d5fd4?w=900&h=560&fit=crop&auto=format",
  },
  {
    id: "03",
    title: "Walkies",
    category: "Pair · Full Stack MERN",
    desc: "A full stack MERN app built with a partner over 2 weeks, consuming its own RESTful API. React, HTML and CSS on the frontend + MongoDB, Node.js and Express on the backend.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    url: "walkiessei22.netlify.app",
    live: "https://walkiessei22.netlify.app/",
    github: "https://github.com/claudia-pacheco/walkies-client",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&h=560&fit=crop&auto=format",
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
    image:
      "https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=900&h=560&fit=crop&auto=format",
  },
];

// Phone Preview Component (login/home app screens with toggle)
function PhonePreviewComponent(): React.ReactElement {
  const [activeScreen, setActiveScreen] = useState<"login" | "home">("login");

  const screens: Array<{ key: "login" | "home"; label: string }> = [
    { key: "login", label: "Login" },
    { key: "home", label: "Homepage" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="phone-preview-toggle inline-flex items-center gap-2 rounded-full border p-1.5 backdrop-blur-md">
        {screens.map((screen) => {
          const isActive = activeScreen === screen.key;

          return (
            <button
              key={screen.key}
              type="button"
              onClick={() => setActiveScreen(screen.key)}
              className={`phone-preview-toggle-button relative rounded-full px-5 py-2 text-sm font-medium tracking-[-0.02em] transition-all duration-200 ${
                isActive ? "is-active" : ""
              }`}
            >
              {screen.label}
            </button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto w-full max-w-[220px]"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        {/* Outer phone body with realistic styling */}
        <div
          className="relative w-full h-full mx-auto"
          style={{
            filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.1))',
          }}
        >
          {/* Phone frame - glossy black edge */}
          <div
            className="relative w-full h-full rounded-[clamp(24px,8vw,48px)] border border-black/20 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-[clamp(8px,2.5vw,12px)]"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), inset 0 -1px 2px rgba(0,0,0,0.8)',
            }}
          >
            {/* Screen bezel - thin dark frame */}
            <div className="relative w-full h-full rounded-[clamp(20px,7vw,40px)] bg-black overflow-hidden">
              {/* Notch area background */}
              <div className="absolute left-1/2 top-0 z-10 h-[clamp(20px,4vw,32px)] w-[clamp(80px,20vw,140px)] -translate-x-1/2 rounded-b-[clamp(16px,4vw,24px)] bg-black" />

              {/* Screen content */}
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="relative w-full h-full overflow-hidden rounded-[clamp(18px,6.5vw,36px)]"
              >
                {activeScreen === "login" ? <LoginScreen /> : <HomeScreen />}
              </motion.div>
            </div>

            {/* Notch - realistic iPhone notch design */}
            <div
              className="absolute left-1/2 top-[clamp(10px,2vw,16px)] z-20 h-[clamp(18px,3.5vw,28px)] w-[clamp(75px,18vw,130px)] -translate-x-1/2 rounded-b-[clamp(12px,3vw,20px)] bg-black"
              style={{
                boxShadow: 'inset 0 -1px 3px rgba(0,0,0,0.9)',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LoginScreen() {
  return (
    <img
      src={loginScreenImg}
      alt="Login Screen"
      className="w-full h-full object-cover rounded-[33px]"
    />
  );
}

function HomeScreen() {
  return (
    <img
      src={homeScreenImg}
      alt="Home Screen"
      className="w-full h-full object-cover rounded-[33px]"
    />
  );
}

function BrowserMockup({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url: string;
}) {
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
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

const SKILLS = [
  {
    icon: Code2,
    name: "Frontend Development",
    desc: "Building interactive UIs with React, TypeScript and modern CSS. I focus on performance, accessibility and user experience.",
    color: "cool",
  },
  {
    icon: Database,
    name: "Full Stack Architectures",
    desc: "End-to-end systems using Node.js, Express, Python and Django. Comfortable with both REST and internal platform APIs.",
    color: "warm",
  },
  {
    icon: Palette,
    name: "Scalable Databases",
    desc: "PostgreSQL for structured data, MongoDB for flexibility. Experience deploying and maintaining databases at scale on AWS.",
    color: "success",
  },
  {
    icon: Sparkles,
    name: "Problem Solving",
    desc: "Tackling complex architectural decisions, debugging production issues and collaborating across teams to ship features.",
    color: "warning",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
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
      <style>{`
        @media (min-width: 640px) {
          .hero-text-desktop {
            font-size: clamp(3rem, 1vw, 9rem) !important;
          }
        }

        /* Progress Bar Fill */
        .progress-bar-fill {
          background: linear-gradient(90deg, var(--cool-accent), var(--primary));
          box-shadow: 0 0 12px var(--cool-accent) / 0.4;
        }

        @media (prefers-reduced-motion: reduce) {
          .progress-bar-fill {
            animation: none !important;
          }
        }

        .phone-preview-toggle {
          border-color: color-mix(in srgb, var(--secondary-bright) 18%, transparent);
          background-color: color-mix(in srgb, var(--secondary-bright-light) 72%, var(--background) 28%);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        .phone-preview-toggle-button {
          color: var(--secondary-bright);
          background: var(--secondary-bright-light);
          border: 0;
        }

        .phone-preview-toggle-button.is-active {
          color: var(--primary-foreground);
          background: var(--primary);
          border: 0;
          box-shadow: 0 1px 0 rgba(16, 24, 40, 0.04), 0 4px 12px rgba(240, 139, 179, 0.3);
        }

        .dark .phone-preview-toggle {
          border-color: color-mix(in srgb, var(--secondary-bright) 26%, transparent);
          background-color: color-mix(in srgb, var(--secondary-bright-light) 74%, var(--background) 26%);
          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.28),
            0 0 22px color-mix(in srgb, var(--secondary-bright) 14%, transparent);
        }

        .dark .phone-preview-toggle-button.is-active {
          color: var(--primary-foreground);
          background: var(--primary);
          border: 0;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.18) inset, 0 0 16px rgba(245, 168, 196, 0.32);
        }

        /* Timeline Step: Completed */
        .timeline-step-done {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cool-accent);
          flex-shrink: 0;
        }

        /* Timeline Step: Active */
        .timeline-step-active {
          position: relative;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          border: 2.5px solid var(--secondary-bright);
          background: color-mix(in srgb, var(--secondary-bright) 8%, var(--card) 92%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow:
            0 0 0 4px rgba(240, 139, 179, 0.16),
            0 0 18px rgba(240, 139, 179, 0.7),
            0 0 34px rgba(240, 139, 179, 0.38);
        }

        .timeline-step-active::before {
          content: "";
          position: absolute;
          inset: -0.45rem;
          border-radius: inherit;
          background: radial-gradient(circle, rgba(255, 225, 239, 0.7) 0%, rgba(240, 139, 179, 0.32) 38%, transparent 72%);
          filter: blur(3px);
          opacity: 0.95;
          z-index: -1;
          pointer-events: none;
        }

        .timeline-step-active-indicator {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: var(--secondary-bright);
          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.85),
            0 0 12px rgba(240, 139, 179, 0.8);
        }

        /* Timeline Step: Pending */
        .timeline-step-pending {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          background: var(--secondary);
          flex-shrink: 0;
        }

        /* Timeline Connectors */
        .timeline-connector-done {
          background: var(--cool-accent);
        }

        .timeline-connector-active {
          background: var(--cool-accent) / 0.2;
        }

        .timeline-connector-pending {
          background: var(--border);
        }

        .finance-timeline-line {
          background: var(--border);
        }

        .dark .finance-timeline-line {
          background: var(--border);
        }

        /* Status Badge */
        .status-badge-now {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.375rem 0.75rem;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--secondary-bright), color-mix(in srgb, var(--secondary-bright) 90%, var(--primary) 10%));
          color: white;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 2px 8px var(--secondary-bright) / 0.4;
          border: 1px solid var(--secondary-bright) / 0.5;
        }

        /* In Progress Dot Animation */
        @keyframes flicker-pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 4px var(--cool-accent) / 0.6;
          }
          50% {
            opacity: 0.4;
            box-shadow: 0 0 2px var(--cool-accent) / 0.2;
          }
        }

        .in-progress-dot {
          animation: flicker-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .in-progress-badge {
          padding: 0.375rem 0.625rem;
          border-radius: 9999px;
          background: var(--secondary-bright-light);
          border: 2px solid var(--border);
        }

        .in-progress-badge .section-label {
          color: var(--secondary-bright);
        }

        .in-progress-badge .in-progress-dot {
          animation-name: pink-flicker-pulse;
        }

        @keyframes pink-flicker-pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 4px rgba(240, 139, 179, 0.6);
          }
          50% {
            opacity: 0.4;
            box-shadow: 0 0 2px rgba(240, 139, 179, 0.2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .in-progress-dot {
            animation: none !important;
            opacity: 1;
            box-shadow: 0 0 4px rgba(240, 139, 179, 0.6);
          }
        }

        /* Project Card */
        .project-card {
          background: linear-gradient(135deg, color-mix(in srgb, var(--cool-accent) 4%, var(--card) 96%), color-mix(in srgb, var(--success) 2%, var(--card) 98%));
        }

        /* Section Labels */
        .section-label {
          color: var(--cool-accent);
        }

        /* Progress Container */
        .progress-container {
          background-color: color-mix(in srgb, var(--cool-accent) 6%, transparent);
        }

        .progress-label {
          color: var(--cool-accent);
        }

        .progress-launch-date {
          color: var(--cool-accent);
        }
      `}</style>
      {/* ── Loading screen ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none",
        }}
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
          Welcome to my <em>coding</em> world
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
              { label: "About", href: "#about" },
              { label: "Work", href: "#experience" },
              { label: "Tools", href: "#stack" },
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
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-secondary text-foreground hover:bg-muted"
              aria-label="Toggle dark mode"
            >
              <motion.div
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
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
            <h1
              className="font-[family-name:var(--font-display)] font-light tracking-tight leading-[0.9]"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
            >
              Hi, I’m
              <br />
              <em
                className="text-primary"
                style={{
                  color: "var(--secondary-bright)",
                }}
              >
                Claudia
              </em>
              .
            </h1>
            <p
              className="font-[family-name:var(--font-display)] font-light tracking-tight leading-[0.9] whitespace-nowrap sm:whitespace-normal hero-text-desktop"
              style={{
                fontSize: "clamp(2.3rem, 5vw, 9rem)",
              }}
            >
              I build web applications.
            </p>

            <p className="font-[family-name:var(--font-body)] text-base font-light text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Explore this portfolio to learn more about me and some of the
              projects I have brought to life.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center gap-3 pt-6"
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-body)] text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-xl whitespace-nowrap sm:whitespace-normal"
                style={
                  {
                    "--hover-color": "var(--secondary-bright)",
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--secondary-bright)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--primary)";
                }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                className="px-10 py-4 border-2 border-secondary-bright text-secondary-bright rounded-full font-[family-name:var(--font-body)] text-sm font-medium tracking-wide transition-all duration-300 bg-secondary-bright-light whitespace-nowrap sm:whitespace-normal"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--secondary-bright)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--secondary-bright-light)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--secondary-bright)";
                }}
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
            <h2 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl font-normal mb-4 leading-tight">
              What I <em>Do</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-base text-foreground tracking-wide font-light max-w-2xl mx-auto">
              From building UIs to designing databases, I work across the full
              stack
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => {
              const colorMap = {
                cool: {
                  bg: "var(--cool-accent-light)",
                  icon: "var(--cool-accent)",
                  border: "rgba(93, 139, 138, 0.2)",
                },
                warm: {
                  bg: "var(--warm-accent-light)",
                  icon: "var(--warm-accent)",
                  border: "rgba(212, 116, 79, 0.2)",
                },
                success: {
                  bg: "var(--success-light)",
                  icon: "var(--success)",
                  border: "rgba(74, 157, 111, 0.2)",
                },
                warning: {
                  bg: "var(--warning-light)",
                  icon: "var(--warning)",
                  border: "rgba(212, 168, 79, 0.2)",
                },
              };
              const colors = colorMap[skill.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="bg-card p-8 rounded-2xl border transition-all group"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${colors.bg} 8%, var(--background) 92%)`,
                    borderColor: colors.border,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.icon;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-sm transition-all"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${colors.bg} 40%, var(--background) 60%)`,
                    }}
                  >
                    <skill.icon
                      className="w-7 h-7"
                      style={{ color: colors.icon }}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-light mb-3 leading-snug">
                    {skill.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Currently Exploring ──────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-5xl font-normal leading-tight">
                Currently <em>Exploring</em>
              </h3>
              <p className="font-[family-name:var(--font-body)] text-base text-muted-foreground mt-4 max-w-2xl">
                Areas of active learning and experimentation. These represent both conceptual interests and hands-on projects pushing my skills forward.
              </p>
            </div>

            {/* Exploration Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "TypeScript",
                  desc: "Going deeper with types, interfaces and generics. Building more robust applications by gradually expanding how I use TypeScript across projects.",
                  accent: "var(--warning)",
                },
                {
                  title: "AI-Assisted Development",
                  desc: "Exploring how AI tools can enhance the development process — from accelerating routine tasks to experimenting with agent-based workflows.",
                  accent: "var(--cool-accent)",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-lg border border-border bg-card hover:border-current transition-all duration-300"
                  style={{
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.accent;
                    (e.currentTarget as HTMLElement).style.backgroundColor = "color-mix(in srgb, " + item.accent + " 3%, var(--card) 97%)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card)";
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.accent }}
                    />
                    <h4 className="font-[family-name:var(--font-display)] text-lg font-light">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Personal Finance App Project */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="project-card relative rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-cool-accent/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Progress & Steps */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-2 section-label">What's currently keeping me busy</p>
                    <div className="flex justify-between items-center mb-1">
                      <h2 className="text-2xl font-semibold text-foreground">Financial Planning App for Couples</h2>
                      <div className="in-progress-badge flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full inline-block in-progress-dot" style={{ backgroundColor: 'var(--secondary-bright)' }} />
                        <span className="text-xs font-medium uppercase tracking-wide section-label">In Progress</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="progress-container space-y-3 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium uppercase progress-label">Overall progress</span>
                      <span className="text-lg font-semibold text-foreground">33%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "color-mix(in srgb, var(--cool-accent) 12%, transparent)" }}>
                      <motion.div
                        className="h-full rounded-full progress-bar-fill"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "33%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">2 of 6 steps complete</span>
                      <span className="progress-launch-date">Est. launch: Q3 2026</span>
                    </div>
                  </div>

                  {/* Steps List */}
                  <div className="mt-8 space-y-4 relative">
                    {/* Continuous timeline line - spans from first step center to last step center */}
                    <div className="finance-timeline-line absolute left-[calc(0.625rem-1px)] top-[1.375rem] bottom-[1.375rem] w-[2px] pointer-events-none shadow-sm" />
                    {[
                      { label: "Design & Wireframing", detail: "Brand identity, design tokens, color palette, typography", status: "done" as const },
                      { label: "Core UI Build", detail: "All screens built with static data", status: "done" as const },
                      { label: "Backend & API", detail: "Supabase auth, database schema, real-time partner sync", status: "active" as const },
                      { label: "Integrations", detail: "TrueLayer Open Banking, Monzo Pots API, live data wiring", status: "pending" as const },
                      { label: "Testing & QA", detail: "Unit tests, E2E flows, cross-device on iOS & Android", status: "pending" as const },
                      { label: "Launch", detail: "EAS Build, TestFlight beta, App Store submission", status: "pending" as const },
                    ].map((step, i) => {
                      type StepStatus = "done" | "active" | "pending";
                      const isDone: boolean = step.status === "done";
                      const isActive: boolean = step.status === "active";
                      const isPending: boolean = step.status === "pending";

                      return (
                        <div key={step.label} className="flex gap-4 relative">
                          <div className="flex-shrink-0 pt-1 flex items-start justify-center">
                            {isDone && (
                              <div className="timeline-step-done">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path
                                    d="M1 4L3.5 6.5L9 1.5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                            {isActive && (
                              <div className="timeline-step-active">
                                <div className="timeline-step-active-indicator" />
                              </div>
                            )}
                            {isPending && (
                              <div className="timeline-step-pending" />
                            )}
                          </div>

                          <div className="pt-0 flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p
                                className={`text-sm font-semibold ${
                                  isPending ? "text-muted-foreground" : "text-foreground"
                                }`}
                              >
                                {step.label}
                              </p>
                              {isActive && (
                                <span className="status-badge-now">
                                  NOW
                                </span>
                              )}
                            </div>
                            <p
                              className="text-xs leading-relaxed text-muted-foreground"
                            >
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Phone Preview */}
                <PhonePreviewComponent />
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────── */}

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
                I'm a Full Stack Developer based in London. My interest in
                technology started when I programmed a robot at school and it’s
                been a constant ever since.
              </p>
              <p>
                After studying Computer Science at the University of
                Hertfordshire and completing the Software Engineering Immersive
                Bootcamp at General Assembly, I moved into the industry as a Web
                Developer where I've been building web applications used by
                thousands of people in financial services and wealth management.
              </p>
              <p>
                I’ve worked on large-scale platforms for clients across the UK
                and US as well as internationally collaborating with designers,
                product managers, business analysts and engineers to deliver
                features from concept through to production.
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
                {
                  Icon: Github,
                  label: "GitHub",
                  href: "https://github.com/claudia-pacheco",
                  external: true,
                  color: "cool",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/claudia-pacheco1/",
                  external: true,
                  color: "warm",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  href: `mailto:${EMAIL}`,
                  external: false,
                  color: "success",
                },
              ].map(({ Icon, label, href, external, color }) => {
                const colorMap = {
                  cool: {
                    bg: "var(--cool-accent-light)",
                    text: "var(--cool-accent)",
                    border: "rgba(93, 139, 138, 0.3)",
                  },
                  warm: {
                    bg: "var(--warm-accent-light)",
                    text: "var(--warm-accent)",
                    border: "rgba(212, 116, 79, 0.3)",
                  },
                  success: {
                    bg: "var(--success-light)",
                    text: "var(--success)",
                    border: "rgba(74, 157, 111, 0.3)",
                  },
                };
                const colors = colorMap[color as keyof typeof colorMap];

                return (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--border)",
                      color: "var(--foreground)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${colors.bg} 40%, var(--background) 60%)`;
                      e.currentTarget.style.borderColor = colors.text;
                      e.currentTarget.style.color = colors.text;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--card)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--foreground)";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
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
              Work
              <br />
              <em>Experience</em>
            </h2>
          </motion.div>

          {/* Featured role */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-10 md:p-14 overflow-hidden transition-all duration-300"
            style={{
              border: "1px solid rgba(212, 116, 79, 0.2)",
              backgroundColor:
                "color-mix(in srgb, var(--warm-accent-light) 3%, var(--background) 97%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 116, 79, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(212, 116, 79, 0.2)";
            }}
          >
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
                    "Delivered production features from concept to launch, including a cross-portal team messaging system that improved communication between internal teams and clients.",
                    "Reduced code duplication by 40% through a global configuration system and application refactoring strategy that boosted performance and user experience across platforms.",
                    "Enhanced system security by designing and implementing role‑based access and navigation across 5 applications, ensuring users only accessed appropriate applications and preventing unauthorised access to sensitive financial data.",
                    "Stabilised product releases by partnering with QA and product teams to define acceptance criteria and maintain test environments for UAT and regression testing, catching defects before production deployment.",
                    "Supported smooth production rollouts and hotfixes by preparing detailed deployment notes covering versions, environments and browser compatibility, standardising 50+ deployments with zero rollback delays and 100% consistency across releases.",
                    "Improved production incident response time by 30% through handling a high-volume ticket queue and turning around a significant number of support tickets in 2-3 days while maintaining code quality.",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--secondary-bright)" }} />
                      <span className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Clients */}
                <div className="pt-4 border-t border-border">
                  <p className="font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.16em] uppercase text-primary mb-3">
                    Client Projects Include
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "UBS", region: "UK" },
                      { name: "HSBC", region: "UK" },
                      { name: "Truist", region: "US" },
                      { name: "Capital Group", region: "US" }
                      
                    ].map((client) => (
                      <span
                        key={client.name}
                        className="inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs border border-border rounded-full px-3 py-1"
                      >
                        {client.name}
                        <span className="text-muted-foreground/50 text-[0.6rem]">
                          {client.region}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — meta */}
              <div className="flex flex-row md:flex-col items-start md:items-end gap-6 md:gap-4 md:text-right">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/60 tracking-widest uppercase mb-1">
                    Period
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light">
                    June 2023 – May 2026
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/60 tracking-widest uppercase mb-1">
                    Location
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-light">
                    London, UK
                  </p>
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
            <h3 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-normal mb-8 leading-tight">
              Education
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                school: "General Assembly",
                credential: "Software Engineering Immersive Flex",
                detail:
                  "Intensive full-stack programme covering React, Node.js, databases and four full stack projects.",
                year: "2021 – 2022",
                icon: "G",
              },
              {
                school: "University of Hertfordshire",
                credential: "CertHE in Computer Science",
                detail:
                  "Computer Science — fundamentals of programming, algorithms, data structures and systems design.",
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
                className="flex items-start gap-5 p-6 rounded-2xl border border-border transition-colors duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--secondary-bright)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-[family-name:var(--font-display)] text-lg font-light text-primary leading-none">
                    {edu.school[0]}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="font-[family-name:var(--font-display)] text-lg font-light">
                      {edu.school}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-xs text-primary tracking-wide mb-2">
                    {edu.credential}
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground leading-relaxed">
                    {edu.detail}
                  </p>
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
            className="text-center mb-24"
          >
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light mb-3">
              Languages <em>&amp; Tools</em>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground tracking-wide">
              The tools I use depend on the job. These are my go-tos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {STACK.map((group, i) => {
              const colorMap = {
                cool: {
                  bg: "var(--cool-accent-light)",
                  label: "var(--cool-accent)",
                  border: "rgba(93, 139, 138, 0.15)",
                },
                warm: {
                  bg: "var(--warm-accent-light)",
                  label: "var(--warm-accent)",
                  border: "rgba(212, 116, 79, 0.15)",
                },
                success: {
                  bg: "var(--success-light)",
                  label: "var(--success)",
                  border: "rgba(74, 157, 111, 0.15)",
                },
                warning: {
                  bg: "var(--warning-light)",
                  label: "var(--warning)",
                  border: "rgba(212, 168, 79, 0.15)",
                },
                primary: {
                  bg: "var(--primary)",
                  label: "var(--primary)",
                  border: "rgba(217, 168, 179, 0.2)",
                },
              };
              const colors =
                colorMap[group.color as keyof typeof colorMap] || colorMap.cool;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-card border rounded-2xl p-8 transition-colors duration-300"
                  style={{
                    borderColor: colors.border,
                  }}
                >
                  <p
                    className="font-[family-name:var(--font-body)] text-xs font-medium tracking-[0.2em] uppercase mb-6"
                    style={{ color: colors.label }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <motion.span
                        key={item.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-flex items-center gap-2.5 font-[family-name:var(--font-body)] text-xs border rounded-full px-3 py-2 transition-all duration-200 cursor-default"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${colors.bg} 15%, var(--background) 85%)`,
                          borderColor: `color-mix(in srgb, ${colors.label} 25%, transparent 75%)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 4px 12px ${colors.label}33`;
                          e.currentTarget.style.borderColor = colors.label;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor = `color-mix(in srgb, ${colors.label} 25%, transparent 75%)`;
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-foreground/90">{item.name}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
            className="flex flex-col gap-6 mb-20"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light leading-[0.9]">
                Bootcamp
                <br />
                <em>Projects</em>
              </h2>
              <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground max-w-xs md:text-right leading-relaxed">
                Four projects across 24 weeks — from solo games to full stack
                apps, each one pushing what I knew further.
              </p>
            </div>
            <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground/70 tracking-wide">
              <span style={{ color: "var(--cool-accent)" }}>● Frontend</span>{" "}
              <span style={{ color: "var(--warm-accent)" }}>● Backend</span>{" "}
              <span style={{ color: "var(--success)" }}>● Databases</span>{" "}
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
                whileHover={{ y: -2, scale: 1.01 }}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-center py-12 -mx-5 px-5 rounded-2xl hover:bg-secondary/20 transition-colors duration-300"
                style={{ originX: 0.5, originY: 0.5 }}
              >
                {/* Left — text */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
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
                      className="w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-1"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--foreground)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--warm-accent)";
                        e.currentTarget.style.borderColor =
                          "var(--warm-accent)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--foreground)";
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground leading-relaxed mb-5 max-w-lg">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => {
                      let tagColor = "primary";
                      if (
                        [
                          "JavaScript",
                          "TypeScript",
                          "React",
                          "Vue",
                          "Angular",
                          "HTML5",
                          "CSS3",
                          "Material UI",
                        ].includes(tag)
                      )
                        tagColor = "cool";
                      else if (
                        [
                          "Node.js",
                          "Express",
                          "Python",
                          "Django",
                          "REST API",
                        ].includes(tag)
                      )
                        tagColor = "warm";
                      else if (["MongoDB", "PostgreSQL", "SQL"].includes(tag))
                        tagColor = "success";

                      const colorMap = {
                        cool: {
                          bg: "var(--cool-accent-light)",
                          text: "var(--cool-accent)",
                        },
                        warm: {
                          bg: "var(--warm-accent-light)",
                          text: "var(--warm-accent)",
                        },
                        success: {
                          bg: "var(--success-light)",
                          text: "var(--success)",
                        },
                        primary: {
                          bg: "var(--primary)",
                          text: "var(--primary)",
                        },
                      };
                      const colors =
                        colorMap[tagColor as keyof typeof colorMap];

                      return (
                        <span
                          key={tag}
                          className="font-[family-name:var(--font-body)] text-xs rounded-full px-3 py-1"
                          style={{
                            backgroundColor: `color-mix(in srgb, ${colors.bg} 20%, var(--background) 80%)`,
                            color: colors.text,
                            border: `1px solid color-mix(in srgb, ${colors.text} 20%, transparent 80%)`,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Mobile image */}
                  <div className="mt-6 lg:hidden">
                    <BrowserMockup
                      src={project.image}
                      alt={project.title}
                      url={project.url}
                    />
                  </div>
                </div>

                {/* Right — browser mockup (desktop only) */}
                <div className="hidden lg:block">
                  <BrowserMockup
                    src={project.image}
                    alt={project.title}
                    url={project.url}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-32 px-6 lg:px-12"
        style={{
          backgroundColor: "color-mix(in srgb, var(--primary) 3%, transparent)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2
              className="font-[family-name:var(--font-display)] font-normal leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
            >
              Get in
              <br />
              <em
                className="not-italic block"
                style={{
                  color: "var(--secondary-bright)",
                  marginTop: "-0.1em",
                }}
              >
                Touch
              </em>
            </h2>

            <p className="font-[family-name:var(--font-body)] text-base text-foreground font-light max-w-md mx-auto leading-relaxed">
              <em>Reach out</em> :) I’m always open to connecting with
              like-minded people and exploring new opportunities.
            </p>

            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="mt-6 px-12 py-5 bg-primary text-primary-foreground rounded-full font-[family-name:var(--font-body)] text-sm tracking-wide transition-all inline-flex items-center gap-3"
              style={{
                boxShadow: "0 8px 24px rgba(217, 168, 179, 0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--secondary-bright)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(240, 139, 179, 0.4), 0 0 20px rgba(240, 139, 179, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--primary)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(217, 168, 179, 0.2)";
              }}
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
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <a
              href="https://github.com/claudia-pacheco"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/claudia-pacheco1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>{" "}
          <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground">
            © 2026 Claudia Pacheco
          </p>
        </div>
      </footer>

      {/* ── Back to top ─────────────────────────────────────────────── */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0.8,
          pointerEvents: scrolled ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-200"
        aria-label="Back to top"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--secondary-bright)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 12px 24px rgba(240, 139, 179, 0.4)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--primary)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 4px 12px rgba(217, 168, 179, 0.3)";
        }}
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
