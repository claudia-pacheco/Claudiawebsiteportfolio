import { useState, PointerEvent } from "react";
import { motion } from "motion/react";

interface Step {
  label: string;
  detail: string;
  status: "done" | "active" | "pending";
}

interface Budget {
  name: string;
  used: number;
  color: string;
}

interface Stat {
  label: string;
  value: string;
  delta: string;
  color: string;
}

interface Pot {
  name: string;
  emoji: string;
  amt: string;
}

interface Cursor {
  x: number;
  y: number;
}

const steps: Step[] = [
  {
    label: "Design & Wireframing",
    detail:
      "Brand identity, design tokens, color palette, typography",
    status: "done",
  },
  {
    label: "Core UI Build",
    detail:
      "All screens built with static data — migrating to React Native + Expo",
    status: "done",
  },
  {
    label: "Backend & API",
    detail:
      "Supabase auth, database schema, real-time partner sync",
    status: "active",
  },
  {
    label: "Integrations",
    detail:
      "TrueLayer Open Banking, Monzo Pots API, live data wiring",
    status: "pending",
  },
  {
    label: "Testing & QA",
    detail:
      "Unit tests, E2E flows, cross-device on iOS & Android",
    status: "pending",
  },
  {
    label: "Launch",
    detail:
      "EAS Build, TestFlight beta, App Store submission",
    status: "pending",
  },
];

const doneCount = steps.filter((s) => s.status === "done").length;
const progressPercent = Math.round((doneCount / steps.length) * 100);

const budgets: Budget[] = [
  { name: "Groceries", used: 68, color: "#6366f1" },
  { name: "Eating out", used: 42, color: "#8b5cf6" },
  { name: "Transport", used: 85, color: "#f87171" },
];

const stats: Stat[] = [
  { label: "Spent", value: "£840", delta: "this month", color: "#f87171" },
  { label: "Saved", value: "£420", delta: "in pots", color: "#4ade80" },
];

const pots: Pot[] = [
  { name: "Holiday", emoji: "✈️", amt: "£200" },
  { name: "Emergency", emoji: "🛡️", amt: "£150" },
  { name: "Tech", emoji: "💻", amt: "£70" },
];

function LoginScreen(): JSX.Element {
  return (
    <div className="p-6 space-y-4 bg-white h-full flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-gray-200 rounded-full mb-6" />
        <p className="text-xl font-semibold text-gray-900 mb-1">Welcome back</p>
        <p className="text-sm text-gray-600">Sign in to your account</p>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Email</p>
            <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
              <span className="text-sm text-gray-900">jordan@email.com</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Password</p>
            <div className="px-3 py-2 border border-gray-300 rounded-lg">
              <span className="text-sm text-gray-500">••••••••</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-blue-600 mt-4 cursor-pointer">Forgot password?</p>
      </div>

      <div className="space-y-3">
        <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium">
          Sign In
        </button>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-500">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button className="w-full border border-gray-300 py-2.5 rounded-lg text-sm font-medium text-gray-900 flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded" />
          Continue with Google
        </button>
      </div>

      <p className="text-xs text-gray-600 text-center">
        Don't have an account?{" "}
        <span className="text-blue-600 font-medium">Sign up</span>
      </p>
    </div>
  );
}

function HomeScreen(): JSX.Element {
  return (
    <div className="p-6 space-y-6 bg-white h-full overflow-y-auto">
      <div>
        <p className="text-xs text-gray-600 font-medium mb-1">Total balance</p>
        <p className="text-2xl font-bold text-gray-900">£3,240.50</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((card) => (
          <div key={card.label} className="p-3 bg-gray-50 rounded-lg">
            <p className="text-xs font-medium text-gray-600 mb-1">{card.label}</p>
            <p className="text-lg font-bold text-gray-900">{card.value}</p>
            <p className="text-xs mt-1" style={{ color: card.color }}>
              {card.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-900">Budgets</p>
        {budgets.map((b) => (
          <div key={b.name} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">{b.name}</span>
              <span className="text-xs text-gray-600">{b.used}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${b.used}%`, background: b.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {pots.map((pot) => (
          <div key={pot.name} className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-2xl mb-1">{pot.emoji}</p>
            <p className="text-xs font-medium text-gray-900">{pot.name}</p>
            <p className="text-xs text-gray-600 mt-1">{pot.amt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhonePreview(): JSX.Element {
  const [screen, setScreen] = useState<"login" | "home">("login");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {[
          { id: "login" as const, label: "Login" },
          { id: "home" as const, label: "Home" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              screen === tab.id
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="relative w-56 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900"
        style={{
          aspectRatio: "9 / 19",
        }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />

        <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-xs font-medium text-gray-900 z-20">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-3 h-2 border border-gray-900 rounded-sm" />
          </div>
        </div>

        <div className="h-full pt-8 overflow-hidden relative">
          <div
            className={`transition-all duration-300 ease-in-out absolute inset-0 ${
              screen === "login" ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <LoginScreen />
          </div>
          <div
            className={`transition-all duration-300 ease-in-out absolute inset-0 ${
              screen === "home" ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <HomeScreen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgressBarWithPreview(): JSX.Element {
  const [hovering, setHovering] = useState<boolean>(false);
  const [cursor, setCursor] = useState<Cursor>({ x: 0, y: 0 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative w-full h-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden"
      onPointerEnter={() => setHovering(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHovering(false)}
    >
      <div className="p-8 h-full flex flex-col gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">
              Current Project
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Personal Finance App
            </h2>
            <div className="w-1 h-1 rounded-full bg-blue-600 inline-block mt-3" />
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-600 uppercase">
                Overall progress
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {progressPercent}%
              </span>
            </div>
            <div className="w-full h-2 bg-indigo-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 0 12px rgba(99, 102, 241, 0.4)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-600 font-medium">
              <span>
                {doneCount} of {steps.length} steps complete
              </span>
              <span>Est. launch: Q4 2026</span>
            </div>
          </div>

          {/* Steps List */}
          <div className="mt-5 space-y-3 max-h-48 overflow-y-auto">
            {steps.map((step, i) => {
              const isDone = step.status === "done";
              const isActive = step.status === "active";
              const isPending = step.status === "pending";
              const isLast = i === steps.length - 1;

              const connectorBgColors: Record<
                "done" | "active" | "pending",
                string
              > = {
                done: "linear-gradient(180deg, rgba(74, 222, 128, 0.5) 0%, rgba(74, 222, 128, 0.15) 100%)",
                active: "rgba(99, 102, 241, 0.2)",
                pending: "rgba(203, 213, 225, 0.5)",
              };

              return (
                <div key={step.label} className="flex gap-3.5 relative text-sm">
                  {!isLast && (
                    <div
                      className="absolute left-2 top-5 bottom-0 w-px"
                      style={{
                        background: connectorBgColors[step.status],
                      }}
                    />
                  )}

                  <div className="flex-shrink-0 pt-1">
                    {isDone && (
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
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
                      <div className="w-5 h-5 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      </div>
                    )}
                    {isPending && (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white" />
                    )}
                  </div>

                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${
                          isPending ? "text-gray-400" : "text-gray-900"
                        }`}
                      >
                        {step.label}
                      </span>
                      {isActive && (
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          NOW
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs leading-relaxed mt-0.5 ${
                        isPending ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Phone Preview */}
        <div className="flex justify-end">
          <PhonePreview />
        </div>
      </div>
    </div>
  );
}
