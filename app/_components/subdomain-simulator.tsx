"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Database, Cpu, Layout, Play, RefreshCw } from "lucide-react";

interface TenantData {
  title: string;
  subdomain: string;
  themeColor: string;
  accentBg: string;
  courses: string[];
  students: string;
  status: "ACTIVE" | "BLOCKED" | "REDIRECTED";
}

const PRESETS: Record<string, TenantData> = {
  "ahmed.educenter.tech": {
    title: "Ahmed's Coding Academy",
    subdomain: "ahmed.educenter.tech",
    themeColor: "#10b981", // Emerald
    accentBg: "rgba(16, 185, 129, 0.1)",
    courses: ["Advanced DSA in C++", "Full-Stack Web Dev with Node.js"],
    students: "1,420",
    status: "ACTIVE",
  },
  "fatma.educenter.tech": {
    title: "Fatma's UI/UX Bootcamp",
    subdomain: "fatma.educenter.tech",
    themeColor: "#ec4899", // Pink
    accentBg: "rgba(236, 72, 153, 0.1)",
    courses: ["Design Systems Masterclass", "Interactive Prototyping"],
    students: "890",
    status: "ACTIVE",
  },
  "malicious-crawler.xyz": {
    title: "Request Blocked",
    subdomain: "malicious-crawler.xyz",
    themeColor: "#ef4444", // Red
    accentBg: "rgba(239, 68, 68, 0.1)",
    courses: [],
    students: "0",
    status: "BLOCKED",
  },
};

export default function SubdomainSimulator() {
  const [selectedSubdomain, setSelectedSubdomain] = useState("ahmed.educenter.tech");
  const [customInput, setCustomInput] = useState("");
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<TenantData | null>(null);

  const handleSimulate = async (subdomainToRun: string) => {
    if (simulating) return;
    setSimulating(true);
    setResult(null);

    // Step 0: Request Triggered
    setActiveStep(0);
    await new Promise((r) => setTimeout(r, 600));

    // Step 1: DNS Lookup / Edge Router
    setActiveStep(1);
    await new Promise((r) => setTimeout(r, 700));

    // Step 2: Database config resolution
    setActiveStep(2);
    await new Promise((r) => setTimeout(r, 700));

    // Step 3: Client dashboard render
    setActiveStep(3);
    const mockData = PRESETS[subdomainToRun] || {
      title: "EduCenter Gateway Portal",
      subdomain: subdomainToRun,
      themeColor: "#3b82f6", // Blue (default portal)
      accentBg: "rgba(59, 130, 246, 0.1)",
      courses: ["EduCenter Platforms Explored"],
      students: "250,000+",
      status: "REDIRECTED",
    };
    setResult(mockData);
    setSimulating(false);
  };

  const currentActiveDomain = customInput || selectedSubdomain;

  return (
    <div className="rounded-xl border border-border bg-surface/30 p-6 md:p-10 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Simulator Controls & Flow */}
        <div className="flex-1 space-y-6">
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              1. Choose Domain or Enter Custom Subdomain
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.keys(PRESETS).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setCustomInput("");
                    setSelectedSubdomain(key);
                  }}
                  className={`px-3 py-2 text-xs font-mono rounded-lg border text-left transition-all duration-300 ${
                    currentActiveDomain === key
                      ? "border-foreground bg-accent text-foreground"
                      : "border-border text-muted-foreground hover:border-border-hover hover:text-foreground"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono">Custom:</span>
              <input
                type="text"
                value={customInput}
                placeholder="e.g. malak.educenter.tech"
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 bg-surface-raised border border-border hover:border-border-hover focus:border-foreground rounded-lg px-3 py-1.5 text-xs font-mono text-foreground outline-none transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
              2. DNS Resolving Flow
            </h4>

            {/* Visual Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              
              {/* Step 1: User Request */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 text-center flex flex-col items-center justify-center relative ${
                  activeStep >= 0
                    ? "border-neutral-500 bg-accent/40"
                    : "border-border bg-surface/20"
                }`}
              >
                {activeStep === 0 && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-neutral-400 animate-ping" />
                )}
                <Globe size={18} className="text-muted mb-2" />
                <span className="text-xs font-mono font-semibold block text-foreground truncate max-w-full">
                  {currentActiveDomain}
                </span>
                <span className="text-[10px] text-muted-foreground mt-1">Client request initiated</span>
              </div>

              {/* Step 2: Edge Router */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 text-center flex flex-col items-center justify-center relative ${
                  activeStep >= 1
                    ? "border-neutral-400 bg-accent/60"
                    : "border-border bg-surface/20"
                }`}
              >
                {activeStep === 1 && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-neutral-400 animate-ping" />
                )}
                <Cpu size={18} className="text-muted mb-2" />
                <span className="text-xs font-mono font-semibold block text-foreground">Edge Resolver</span>
                <span className="text-[10px] text-muted-foreground mt-1">Subdomain lookup matching</span>
              </div>

              {/* Step 3: Database config */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 text-center flex flex-col items-center justify-center relative ${
                  activeStep >= 2
                    ? "border-neutral-300 bg-accent/80"
                    : "border-border bg-surface/20"
                }`}
              >
                {activeStep === 2 && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-neutral-400 animate-ping" />
                )}
                <Database size={18} className="text-muted mb-2" />
                <span className="text-xs font-mono font-semibold block text-foreground">Database Scope</span>
                <span className="text-[10px] text-muted-foreground mt-1">Isolated config fetched</span>
              </div>

              {/* Step 4: Client site */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 text-center flex flex-col items-center justify-center relative ${
                  activeStep >= 3
                    ? "border-foreground bg-foreground/5"
                    : "border-border bg-surface/20"
                }`}
              >
                <Layout size={18} className="text-muted mb-2" />
                <span className="text-xs font-mono font-semibold block text-foreground">Active Tenant View</span>
                <span className="text-[10px] text-muted-foreground mt-1">Branded template rendered</span>
              </div>

            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleSimulate(currentActiveDomain)}
              disabled={simulating}
              className="w-full py-3 rounded-lg bg-foreground text-background font-mono text-sm font-semibold flex items-center justify-center gap-2 hover:bg-foreground/90 disabled:opacity-50 transition-all duration-300"
            >
              {simulating ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  Resolving tenant headers...
                </>
              ) : (
                <>
                  <Play size={16} />
                  Simulate Subdomain Edge Resolution
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Tenant Dashboard Simulation Output */}
        <div className="w-full lg:w-80 border border-border bg-surface-raised rounded-xl p-5 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
          {/* Spotlight theme color backdrop preview */}
          {result && (
            <div
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 transition-all duration-500"
              style={{ backgroundColor: result.themeColor }}
            />
          )}

          <div className="relative z-10">
            <div className="flex justify-between items-center border-b border-border pb-3 mb-4">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Tenant Dashboard Mock
              </span>
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.span
                    key={result.status}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold tracking-wider"
                    style={{
                      backgroundColor: result.accentBg,
                      color: result.themeColor,
                    }}
                  >
                    {result.status}
                  </motion.span>
                ) : (
                  <span className="text-[9px] font-mono text-muted-foreground">IDLE</span>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key={result.subdomain}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <h5 className="text-xs text-muted-foreground font-mono">Custom Branding</h5>
                    <p className="text-base font-medium text-foreground mt-0.5" style={{ color: result.themeColor }}>
                      {result.title}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs text-muted-foreground font-mono">Active Subdomain</h5>
                    <p className="text-xs font-mono text-foreground mt-0.5 truncate bg-accent/40 p-1.5 rounded border border-border">
                      {result.subdomain}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs text-muted-foreground font-mono">Courses Available</h5>
                    <ul className="mt-1 space-y-1">
                      {result.courses.length > 0 ? (
                        result.courses.map((course) => (
                          <li
                            key={course}
                            className="text-xs text-foreground bg-accent/20 border border-border px-2 py-1 rounded flex items-center gap-1.5"
                          >
                            <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: result.themeColor }} />
                            {course}
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded">
                          No tenant datasets accessible
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs text-muted-foreground font-mono">Students Enrolled</h5>
                    <p className="text-sm font-semibold text-foreground mt-0.5">{result.students}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground"
                >
                  <Cpu size={32} className="opacity-30 mb-3 animate-pulse" />
                  <p className="text-xs font-mono">Waiting for simulation triggers...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-border pt-3 mt-6 text-[9px] font-mono text-muted-foreground flex justify-between">
            <span>Latency: {result ? "34ms (Edge Cached)" : "--"}</span>
            <span>Security: isolated</span>
          </div>
        </div>

      </div>
    </div>
  );
}
