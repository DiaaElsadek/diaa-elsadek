"use client";

import { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Editor, { useMonaco } from "@monaco-editor/react";

const LANGUAGES = [
  { id: "json", name: "JSON", language: "json" },
  { id: "javascript", name: "JavaScript", language: "javascript" },
  { id: "typescript", name: "TypeScript", language: "typescript" },
  { id: "cpp", name: "C++", language: "cpp" },
  { id: "python", name: "Python", language: "python" },
  { id: "csharp", name: "C#", language: "csharp" },
];

const CODE_SNIPPETS: Record<string, string> = {
  json: `{
  "name": "Diaa Elsadek",
  "role": "Full Stack Software Engineer",
  "location": "Zagazig, Egypt",
  "frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Framer Motion"
  ],
  "backend": [
    "Node.js",
    "Express",
    "ASP.NET Core",
    "MongoDB",
    "PostgreSQL"
  ],
  "passion": "Crafting premium, scalable digital experiences."
}`,
  javascript: `const developer = {
  name: "Diaa Elsadek",
  role: "Full Stack Engineer",
  location: "Zagazig, Egypt",
  
  architectSystem() {
    console.log("Designing scalable, robust architectures...");
    return {
      frontend: "Next.js & Tailwind",
      backend: "Node.js Microservices",
      status: "Highly Performant"
    };
  },
  
  buildUI() {
    return "Delivering pixel-perfect, cinematic experiences.";
  }
};

developer.architectSystem();`,
  typescript: `interface Engineer {
  name: string;
  role: string;
  skills: string[];
  deliverValue(): void;
}

class FullStackEngineer implements Engineer {
  name = "Diaa Elsadek";
  role = "Full-Stack Software Engineer";
  skills = ["React", "TypeScript", "Node.js", "ASP.NET"];

  deliverValue(): void {
    console.log("Writing clean, maintainable, and type-safe code.");
    console.log("Bridging the gap between engineering and design.");
  }
}

const me = new FullStackEngineer();
me.deliverValue();`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Developer {
public:
    string name = "Diaa Elsadek";
    string role = "Full Stack Engineer";
    
    vector<string> skills = {
        "React",
        "Next.js",
        "Node.js",
        "ASP.NET"
    };

    void code() {
        cout << "Optimizing memory and building fast systems." << endl;
    }
};

int main() {
    Developer dev;
    dev.code();
    return 0;
}`,
  python: `class Developer:
    def __init__(self):
        self.name = "Diaa Elsadek"
        self.role = "Full Stack Engineer"
        self.skills = [
            "React", 
            "Node.js", 
            "MongoDB", 
            "Python"
        ]

    def solve_problems(self):
        print("Translating complex requirements into elegant solutions.")
        return True

diaa = Developer()
diaa.solve_problems()`,
  csharp: `using System;
using System.Collections.Generic;

public class Developer
{
    public string Name { get; set; } = "Diaa Elsadek";
    public string Role { get; set; } = "Full Stack Engineer";
    
    public List<string> Skills { get; set; } = new List<string>
    {
        "React", "Next.js", "ASP.NET Core", "SQL Server"
    };

    public void Architect()
    {
        Console.WriteLine("Building enterprise-grade web applications.");
    }
}

class Program
{
    static void Main()
    {
        var me = new Developer();
        me.Architect();
    }
}`
};

import { useTheme } from "next-themes";

export default function DeveloperIdentity() {
  const [activeTab, setActiveTab] = useState(LANGUAGES[0]);
  const { resolvedTheme } = useTheme();
  const monaco = useMonaco();
  
  // Spotlight effect for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Initialize custom Monaco themes
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('premium-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: '', background: '050505' },
          { token: 'comment', foreground: '6b7280', fontStyle: 'italic' },
          { token: 'keyword', foreground: '6366F1' },
          { token: 'string', foreground: '10B981' },
          { token: 'number', foreground: '8B5CF6' },
          { token: 'type', foreground: '06B6D4' },
        ],
        colors: {
          'editor.background': '#05050500', 
          'editor.lineHighlightBackground': '#ffffff0a',
          'editorCursor.foreground': '#6366F1',
          'editorLineNumber.foreground': '#4b5563',
          'editorIndentGuide.background': '#ffffff10',
          'editor.selectionBackground': '#6366F140',
        }
      });
      monaco.editor.defineTheme('premium-light', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: '', background: 'ffffff' },
          { token: 'comment', foreground: '94a3b8', fontStyle: 'italic' },
          { token: 'keyword', foreground: '4F46E5' },
          { token: 'string', foreground: '059669' },
          { token: 'number', foreground: '7c3aed' },
          { token: 'type', foreground: '0891b2' },
        ],
        colors: {
          'editor.background': '#ffffff00',
          'editor.lineHighlightBackground': '#00000008',
          'editorCursor.foreground': '#4F46E5',
          'editorLineNumber.foreground': '#94a3b8',
          'editorIndentGuide.background': '#00000010',
          'editor.selectionBackground': '#4F46E530',
        }
      });
      monaco.editor.setTheme(resolvedTheme === 'dark' ? 'premium-dark' : 'premium-light');
    }
  }, [monaco, resolvedTheme]);

  return (
    <section id="identity" className="section-spacing border-t border-border overflow-hidden">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
            00
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Developer Identity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Cinematic Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] border border-border/50 bg-card shadow-xl"
            onMouseMove={handleMouseMove}
          >
            {/* Dynamic Spotlight */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-20 mix-blend-plus-lighter dark:mix-blend-screen"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    var(--glow),
                    transparent 80%
                  )
                `,
              }}
            />
            
            {/* Inner Glow Border */}
            <div className="absolute inset-0 z-10 border border-transparent group-hover:border-border transition-colors duration-700 rounded-2xl pointer-events-none" />

            {/* The Image */}
            <img 
              src="my_pic.jpg" 
              alt="Diaa Elsadek"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
            />
            
            {/* Gradient Overlay for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000 z-10" />
            
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-semibold text-foreground mb-1">Diaa Elsadek</h3>
              <p className="text-muted-foreground font-mono text-sm">Full-Stack Software Engineer</p>
            </div>
          </motion.div>

          {/* RIGHT: Premium Code Editor */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden min-h-[500px]"
          >
            {/* MacOS style header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-muted-foreground font-mono flex-1 text-center pr-10">
                diaa_elsadek.{activeTab.id}
              </div>
            </div>

            {/* Language Tabs */}
            <div className="flex flex-wrap border-b border-border bg-card">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveTab(lang)}
                  className={`px-4 py-2 text-xs font-mono transition-colors ${
                    activeTab.id === lang.id
                      ? "text-primary border-b-2 border-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Editor Container */}
            <div className="flex-1 relative p-4 group min-h-[400px]">
              <Editor
                height="100%"
                language={activeTab.language}
                value={CODE_SNIPPETS[activeTab.id]}
                theme={resolvedTheme === 'dark' ? 'premium-dark' : 'premium-light'}
                loading={
                  <div className="flex h-full items-center justify-center text-muted-foreground font-mono text-sm">
                    Initializing workspace...
                  </div>
                }
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  lineHeight: 24,
                  padding: { top: 16 },
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  cursorBlinking: "smooth",
                  cursorSmoothCaretAnimation: "on",
                  formatOnPaste: true,
                  renderLineHighlight: "all",
                  scrollbar: {
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                  },
                }}
              />
              {/* Subtle ambient glow behind the editor */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
