"use client";

import { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Play,
  Copy,
  Check,
  Terminal,
  RefreshCw,
} from "lucide-react";

// Code-split heavy Monaco editor to keep initial JS bundle small
const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col h-full items-center justify-center text-muted-foreground font-mono text-xs gap-2">
      <Terminal size={20} className="opacity-40 animate-pulse text-primary" />
      <span>Loading interactive IDE...</span>
    </div>
  ),
});

const LANGUAGES = [
  { id: "typescript", name: "TypeScript", language: "typescript", ext: "ts" },
  { id: "javascript", name: "JavaScript", language: "javascript", ext: "js" },
  { id: "json", name: "JSON", language: "json", ext: "json" },
  { id: "cpp", name: "C++", language: "cpp", ext: "cpp" },
  { id: "python", name: "Python", language: "python", ext: "py" },
  { id: "csharp", name: "C#", language: "csharp", ext: "cs" },
];

const CODE_SNIPPETS: Record<string, string> = {
  typescript: `interface Engineer {
  name: string;
  role: string;
  specialization: string[];
  deliverValue(): Promise<string>;
}

class FullStackEngineer implements Engineer {
  name = "Diaa Elsadek";
  role = "Full-Stack Developer";
  specialization = [
    "React & Next.js Ecosystem",
    "ASP.NET Core & SQL Server",
    "Multi-Tenant SaaS Architecture",
    "Healthcare & Booking Marketplaces"
  ];

  async deliverValue(): Promise<string> {
    console.log("-> Architecting scalable, type-safe distributed systems.");
    console.log("-> Bridging deep backend engineering with responsive UI.");
    return "[OK] Systems operational with zero downtime.";
  }
}

const diaa = new FullStackEngineer();
await diaa.deliverValue();`,
  javascript: `const developer = {
  name: "Diaa Elsadek",
  role: "Full-Stack Developer",
  location: "Zagazig, Egypt",
  
  architectSystem() {
    console.log("Designing scalable, robust architectures...");
    return {
      frontend: "React & Next.js (Tailwind CSS)",
      backend: "ASP.NET Core & Node.js/Express",
      databases: "SQL Server & MongoDB",
      status: "Production Ready"
    };
  },
  
  buildUI() {
    return "Delivering clean, responsive, and resilient experiences.";
  }
};

const profile = developer.architectSystem();
console.log(profile);`,
  json: `{
  "name": "Diaa Elsadek",
  "role": "Full-Stack Developer",
  "location": "Zagazig, Egypt",
  "education": "B.Sc. Computer & Information Science, HTI (2022-2026)",
  "frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ],
  "backend": [
    "ASP.NET Core",
    "Node.js",
    "Express.js",
    "SQL Server",
    "MongoDB"
  ],
  "platforms": [
    "EduCenter (Multi-Tenant SaaS Platform)",
    "Al-Anis (Healthcare Service Marketplace)",
    "Z-Sports (Facility Booking Platform)",
    "UniStream22 (University Collaboration Hub)",
    "Apex Gym (Client Shipped Website)"
  ],
  "mission": "Building resilient products that solve real problems."
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

class FullStackEngineer {
public:
    string name = "Diaa Elsadek";
    string role = "Full-Stack Developer";
    
    vector<string> systems = {
        "EduCenter Multi-Tenant Engine",
        "Al-Anis Healthcare Marketplace",
        "Z-Sports Facility Scheduling"
    };

    void execute() {
        cout << "[C++] Optimizing algorithmic memory and data structures." << endl;
        for (const auto& system : systems) {
            cout << "  * Shipped: " << system << endl;
        }
    }
};

int main() {
    FullStackEngineer diaa;
    diaa.execute();
    return 0;
}`,
  python: `class Developer:
    def __init__(self):
        self.name = "Diaa Elsadek"
        self.role = "Full-Stack Developer"
        self.stack = ["React", "Next.js", "ASP.NET Core", "Node.js", "SQL Server"]

    def solve_problems(self):
        print("Translating complex requirements into clean, maintainable code.")
        print("Optimizing multi-tenant database partitioning pipelines.")
        return {"ready_for_production": True, "status": "Shipped"}

diaa = Developer()
result = diaa.solve_problems()
print(result)`,
  csharp: `using System;
using System.Collections.Generic;

namespace Portfolio
{
    public class Developer
    {
        public string Name { get; set; } = "Diaa Elsadek";
        public string Role { get; set; } = "Full-Stack Developer";
        
        public List<string> Skills { get; set; } = new()
        {
            "React", "Next.js", "ASP.NET Core", "SQL Server", "Clean Architecture"
        };

        public void Architect()
        {
            Console.WriteLine("[C#] Building enterprise-grade, compiled ASP.NET Core APIs.");
            Console.WriteLine("[C#] Enforcing clean architecture, EF Core, and OOP domain patterns.");
        }
    }

    class Program
    {
        static void Main()
        {
            var diaa = new Developer();
            diaa.Architect();
        }
    }
}`
};

const EXECUTION_OUTPUTS: Record<string, string[]> = {
  typescript: [
    "-> Architecting scalable, type-safe distributed systems.",
    "-> Bridging deep backend engineering with responsive UI.",
    "[OK] Systems operational with zero downtime.",
  ],
  javascript: [
    "Designing scalable, robust architectures...",
    "{ frontend: 'React & Next.js', backend: 'ASP.NET Core & Node.js', status: 'Production Ready' }",
  ],
  json: [
    "{ status: 200, parsed: true, records: 5, engineer: 'Diaa Elsadek' }",
    "Loaded EduCenter, Al-Anis, Z-Sports & UniStream22 profiles successfully.",
  ],
  cpp: [
    "[C++] Optimizing algorithmic memory and data structures.",
    "  * Shipped: EduCenter Multi-Tenant Engine",
    "  * Shipped: Al-Anis Healthcare Marketplace",
    "  * Shipped: Z-Sports Facility Scheduling",
    "Process exited with code 0 (0.02s).",
  ],
  python: [
    "Translating complex requirements into clean, maintainable code.",
    "Optimizing multi-tenant database partitioning pipelines.",
    "{ 'ready_for_production': True, 'status': 'Shipped' }",
  ],
  csharp: [
    "[C#] Building enterprise-grade, compiled ASP.NET Core APIs.",
    "[C#] Enforcing clean architecture, EF Core, and OOP domain patterns.",
    "Build succeeded. 0 Warning(s), 0 Error(s).",
  ],
};

export default function DeveloperIdentity() {
  const [activeTab, setActiveTab] = useState(LANGUAGES[0]);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[] | null>(null);
  const { resolvedTheme } = useTheme();

  // Spotlight effect for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab.id]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTerminalOutput(null);
    setTimeout(() => {
      setTerminalOutput(EXECUTION_OUTPUTS[activeTab.id] || ["[OK] Executed successfully."]);
      setIsRunning(false);
    }, 400);
  };

  useEffect(() => {
    setTerminalOutput(null);
  }, [activeTab]);

  return (
    <section id="identity" className="section-spacing border-t border-border overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
            00
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            Developer Identity
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Bridging algorithmic rigour with user-focused product engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Cinematic Portrait Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-border bg-card shadow-xl flex flex-col justify-between min-h-[520px]"
            onMouseMove={handleMouseMove}
          >
            {/* Dynamic Spotlight */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-20 mix-blend-plus-lighter dark:mix-blend-screen"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    500px circle at ${mouseX}px ${mouseY}px,
                    var(--glow),
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Next.js Optimized Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-auto flex-1 overflow-hidden">
              <Image
                src="/my_pic.jpg"
                alt="Diaa Elsadek"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                quality={85}
                className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Gradient Overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 transition-opacity duration-700 z-10" />

              {/* Status pill on photo */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[11px] font-mono text-foreground font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online &amp; Active
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Code Editor with dynamic import (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden min-h-[520px]"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/40">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                  <Terminal size={12} />
                  diaa_elsadek.{activeTab.ext}
                </span>
              </div>

              {/* Action Buttons: Run & Copy */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium text-foreground bg-accent hover:bg-accent-hover border border-border transition-colors duration-200"
                  aria-label="Run snippet simulation"
                >
                  {isRunning ? (
                    <RefreshCw size={12} className="animate-spin text-primary" />
                  ) : (
                    <Play size={12} className="text-primary" />
                  )}
                  <span>Run</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="Copy snippet"
                >
                  {copied ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>

            {/* Language Tabs */}
            <div className="flex items-center gap-1 px-2 py-1 border-b border-border bg-surface/40 overflow-x-auto">
              {LANGUAGES.map((lang) => {
                const isSelected = activeTab.id === lang.id;
                return (
                  <button
                    key={lang.id}
                    onClick={() => setActiveTab(lang)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all whitespace-nowrap ${isSelected
                        ? "bg-accent text-primary font-semibold border border-border shadow-xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                      }`}
                  >
                    {lang.name}
                  </button>
                );
              })}
            </div>

            {/* Editor Body */}
            <div className="flex-1 relative p-3 group min-h-[380px]">
              <Editor
                height="100%"
                language={activeTab.language}
                value={CODE_SNIPPETS[activeTab.id]}
                theme={resolvedTheme === "dark" ? "vs-dark" : "vs"}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  fontFamily: "'JetBrains Mono', 'Fira Code', 'Geist Mono', monospace",
                  lineHeight: 22,
                  padding: { top: 12 },
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  readOnly: true,
                  renderLineHighlight: "all",
                  scrollbar: {
                    verticalScrollbarSize: 6,
                    horizontalScrollbarSize: 6,
                  },
                }}
              />
            </div>

            {/* Interactive Output Drawer */}
            <AnimatePresence>
              {terminalOutput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-t border-border bg-secondary/60 p-3.5 font-mono text-xs overflow-hidden"
                >
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5">
                    <span className="flex items-center gap-1">
                      <Terminal size={11} /> Output Terminal
                    </span>
                    <span className="text-emerald-500 font-semibold">Exit Code 0</span>
                  </div>
                  <div className="space-y-1">
                    {terminalOutput.map((line, idx) => (
                      <p key={idx} className="text-foreground text-[11px] leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
