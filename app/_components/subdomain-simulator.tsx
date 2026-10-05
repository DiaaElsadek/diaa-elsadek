"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Database,
  Cpu,
  Layout,
  Play,
  RefreshCw,
  Server,
  ShieldAlert,
  CheckCircle2,
  Activity,
  Terminal,
} from "lucide-react";

interface TenantData {
  title: string;
  subdomain: string;
  themeColor: string;
  accentBg: string;
  courses: string[];
  students: string;
  statusCode: number;
  status: "ACTIVE" | "BLOCKED" | "REDIRECTED";
  headers: Record<string, string>;
  latency: string;
}

const PRESETS: Record<string, TenantData> = {
  "ahmed.educenter.tech": {
    title: "Ahmed's Coding Academy",
    subdomain: "ahmed.educenter.tech",
    themeColor: "#10b981", // Emerald
    accentBg: "rgba(16, 185, 129, 0.12)",
    courses: ["Advanced DSA in C++", "Full-Stack Web Dev with Node.js"],
    students: "1,420 Active",
    statusCode: 200,
    status: "ACTIVE",
    headers: {
      "x-tenant-id": "tnt_ahmed_9420",
      "x-tenant-region": "cairo-eg-1",
      "x-cache-status": "HIT (Edge Key)",
    },
    latency: "24ms",
  },
  "fatma.educenter.tech": {
    title: "Fatma's UI/UX Bootcamp",
    subdomain: "fatma.educenter.tech",
    themeColor: "#ec4899", // Pink
    accentBg: "rgba(236, 72, 153, 0.12)",
    courses: ["Design Systems Masterclass", "Interactive Prototyping"],
    students: "890 Active",
    statusCode: 200,
    status: "ACTIVE",
    headers: {
      "x-tenant-id": "tnt_fatma_3310",
      "x-tenant-region": "cairo-eg-1",
      "x-cache-status": "HIT (Edge Key)",
    },
    latency: "28ms",
  },
  "malicious-crawler.xyz": {
    title: "Request Blocked by Edge Shield",
    subdomain: "malicious-crawler.xyz",
    themeColor: "#ef4444", // Red
    accentBg: "rgba(239, 68, 68, 0.12)",
    courses: [],
    students: "0",
    statusCode: 403,
    status: "BLOCKED",
    headers: {
      "x-tenant-id": "null",
      "x-edge-action": "WAF_DROP_IP",
      "x-security-reason": "Unverified Host Header",
    },
    latency: "6ms",
  },
};

export default function SubdomainSimulator() {
  const [selectedSubdomain, setSelectedSubdomain] = useState("ahmed.educenter.tech");
  const [customInput, setCustomInput] = useState("");
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<TenantData | null>(null);

  const currentActiveDomain = (customInput || selectedSubdomain).trim();

  const handleSimulate = async (subdomainToRun: string) => {
    if (simulating) return;
    setSimulating(true);
    setResult(null);

    // Step 0: User Request
    setActiveStep(0);
    await new Promise((r) => setTimeout(r, 450));

    // Step 1: DNS Lookup / Edge Router
    setActiveStep(1);
    await new Promise((r) => setTimeout(r, 550));

    // Step 2: Database config resolution
    setActiveStep(2);
    await new Promise((r) => setTimeout(r, 550));

    // Step 3: Client dashboard render
    setActiveStep(3);
    const mockData: TenantData = PRESETS[subdomainToRun] || {
      title: `${subdomainToRun.split(".")[0].toUpperCase()} Academy Portal`,
      subdomain: subdomainToRun,
      themeColor: "#6366F1", // Primary Indigo
      accentBg: "rgba(99, 102, 241, 0.12)",
      courses: ["General Curriculum 101", "Orientation Lab"],
      students: "120 Active",
      statusCode: 200,
      status: "ACTIVE",
      headers: {
        "x-tenant-id": `tnt_custom_${Math.floor(Math.random() * 8000 + 1000)}`,
        "x-tenant-region": "cairo-eg-1",
        "x-cache-status": "MISS (Generated On Demand)",
      },
      latency: "42ms",
    };
    setResult(mockData);
    setSimulating(false);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 font-sans shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Simulator Controls & Step Flow */}
        <div className="flex-1 space-y-6">
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Terminal size={12} className="text-primary" /> 1. Select Tenant Subdomain or Enter Custom
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.keys(PRESETS).map((key) => {
                const isSelected = currentActiveDomain === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setCustomInput("");
                      setSelectedSubdomain(key);
                    }}
                    className={`px-3 py-2 text-xs font-mono rounded-lg border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground font-semibold shadow-xs"
                        : "border-border text-muted-foreground hover:border-border-hover hover:text-foreground hover:bg-accent/40"
                    }`}
                  >
                    <span className="truncate pr-1">{key}</span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                        PRESETS[key].status === "BLOCKED"
                          ? "bg-red-500"
                          : "bg-emerald-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-mono shrink-0">
                Custom Domain:
              </span>
              <input
                type="text"
                value={customInput}
                placeholder="e.g. malak.educenter.tech"
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 bg-secondary/50 border border-border hover:border-border-hover focus:border-primary rounded-lg px-3 py-1.5 text-xs font-mono text-foreground outline-none transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-3">
              2. Edge Resolution Pipeline
            </span>

            {/* Visual Steps Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
              
              {/* Step 1: User Request */}
              <div
                className={`p-3.5 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between min-h-[90px] relative ${
                  activeStep >= 0
                    ? "border-primary/60 bg-primary/10"
                    : "border-border bg-secondary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Globe size={16} className={activeStep >= 0 ? "text-primary" : "text-muted-foreground"} />
                  {activeStep === 0 && (
                    <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold block text-foreground truncate">
                    HTTP Request
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground truncate block">
                    {currentActiveDomain}
                  </span>
                </div>
              </div>

              {/* Step 2: Edge Router */}
              <div
                className={`p-3.5 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between min-h-[90px] relative ${
                  activeStep >= 1
                    ? "border-primary/60 bg-primary/10"
                    : "border-border bg-secondary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Cpu size={16} className={activeStep >= 1 ? "text-primary" : "text-muted-foreground"} />
                  {activeStep === 1 && (
                    <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold block text-foreground">
                    Edge Router
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block">
                    Host header match
                  </span>
                </div>
              </div>

              {/* Step 3: Database Scope */}
              <div
                className={`p-3.5 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between min-h-[90px] relative ${
                  activeStep >= 2
                    ? "border-primary/60 bg-primary/10"
                    : "border-border bg-secondary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Database size={16} className={activeStep >= 2 ? "text-primary" : "text-muted-foreground"} />
                  {activeStep === 2 && (
                    <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold block text-foreground">
                    Database Scope
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block">
                    Compound index query
                  </span>
                </div>
              </div>

              {/* Step 4: Tenant View */}
              <div
                className={`p-3.5 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between min-h-[90px] relative ${
                  activeStep >= 3
                    ? "border-emerald-500/60 bg-emerald-500/10"
                    : "border-border bg-secondary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Layout size={16} className={activeStep >= 3 ? "text-emerald-500" : "text-muted-foreground"} />
                  {activeStep === 3 && (
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold block text-foreground">
                    Tenant View
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground block">
                    Branded response 200
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div>
            <button
              onClick={() => handleSimulate(currentActiveDomain)}
              disabled={simulating}
              className="w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 transition-all duration-200 shadow-md shadow-primary/20"
            >
              {simulating ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  Resolving edge headers & tenant scope...
                </>
              ) : (
                <>
                  <Play size={14} />
                  Simulate Subdomain Edge Resolution
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Tenant Dashboard Simulation Output */}
        <div className="w-full lg:w-84 border border-border bg-secondary/30 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden min-h-[340px]">
          {/* Subtle glow */}
          {result && (
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 transition-all duration-500 pointer-events-none"
              style={{ backgroundColor: result.themeColor }}
            />
          )}

          <div className="relative z-10">
            <div className="flex justify-between items-center border-b border-border pb-3 mb-4">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Server size={12} /> Edge Telemetry
              </span>
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.span
                    key={result.status}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider"
                    style={{
                      backgroundColor: result.accentBg,
                      color: result.themeColor,
                    }}
                  >
                    {result.statusCode} {result.status}
                  </motion.span>
                ) : (
                  <span className="text-[10px] font-mono text-muted-foreground">STANDBY</span>
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
                    <span className="text-[10px] text-muted-foreground font-mono uppercase block">
                      Resolved Academy
                    </span>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{ color: result.themeColor }}
                    >
                      {result.title}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-muted-foreground font-mono uppercase block">
                      Active Subdomain
                    </span>
                    <p className="text-xs font-mono text-foreground mt-0.5 truncate bg-background p-1.5 rounded border border-border">
                      {result.subdomain}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-muted-foreground font-mono uppercase block">
                      Available Courses
                    </span>
                    <ul className="mt-1 space-y-1">
                      {result.courses.length > 0 ? (
                        result.courses.map((course) => (
                          <li
                            key={course}
                            className="text-xs text-foreground bg-background border border-border/60 px-2 py-1 rounded flex items-center gap-1.5"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: result.themeColor }}
                            />
                            <span className="truncate">{course}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs text-red-500 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded flex items-center gap-1.5">
                          <ShieldAlert size={12} />
                          <span>Tenant dataset inaccessible (Dropped)</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] text-muted-foreground font-mono uppercase block">
                      Edge Response Headers
                    </span>
                    <div className="mt-1 p-2 rounded bg-background border border-border text-[10px] font-mono space-y-0.5 text-muted-foreground">
                      {Object.entries(result.headers).map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between">
                          <span className="text-muted-foreground">{k}:</span>
                          <span className="text-foreground font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
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
                  <Activity size={28} className="opacity-30 mb-2 animate-pulse text-primary" />
                  <p className="text-xs font-mono">Press simulate to initiate edge resolution...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-border pt-3 mt-4 text-[10px] font-mono text-muted-foreground flex justify-between">
            <span>Latency: {result ? result.latency : "--"}</span>
            <span>Isolation: Strict B-Tree</span>
          </div>
        </div>

      </div>
    </div>
  );
}
