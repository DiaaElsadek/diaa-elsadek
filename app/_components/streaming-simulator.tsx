"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  Play,
  Pause,
  AlertTriangle,
  RotateCcw,
  Activity,
  Wifi,
  BarChart2,
  Sliders,
} from "lucide-react";

interface ConnectionProfile {
  name: string;
  speed: string;
  resolution: string;
  bitrate: string;
  bufferHealth: number; // 0 to 100
  bufferTime: string;
  color: string;
  accentBg: string;
  fps: number;
  qualityClass: string;
}

const PROFILES: Record<string, ConnectionProfile> = {
  "Slow 3G": {
    name: "Slow 3G",
    speed: "1.2 Mbps",
    resolution: "480p",
    bitrate: "850 kbps",
    bufferHealth: 25,
    bufferTime: "2.8s",
    color: "#ef4444", // Red
    accentBg: "rgba(239, 68, 68, 0.12)",
    fps: 24,
    qualityClass: "Low Quality / Active Throttling",
  },
  "Fast 4G": {
    name: "Fast 4G",
    speed: "18 Mbps",
    resolution: "720p",
    bitrate: "2,400 kbps",
    bufferHealth: 75,
    bufferTime: "14.2s",
    color: "#f59e0b", // Amber
    accentBg: "rgba(245, 158, 11, 0.12)",
    fps: 30,
    qualityClass: "Standard HD / Stable ABR",
  },
  "Fiber Optic": {
    name: "Fiber Optic",
    speed: "250+ Mbps",
    resolution: "1080p",
    bitrate: "5,800 kbps",
    bufferHealth: 98,
    bufferTime: "29.8s",
    color: "#10b981", // Emerald
    accentBg: "rgba(16, 185, 129, 0.12)",
    fps: 60,
    qualityClass: "Full HD 60fps / Instant Scrubbing",
  },
};

export default function StreamingSimulator() {
  const [activeProfile, setActiveProfile] = useState<string>("Fast 4G");
  const [isPlaying, setIsPlaying] = useState(false);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [chunks, setChunks] = useState<string[]>(Array(10).fill("idle"));
  const [buffering, setBuffering] = useState(false);

  const profileData = PROFILES[activeProfile];

  // Chunks downloading simulation loop
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime =
      activeProfile === "Slow 3G" ? 2000 : activeProfile === "Fast 4G" ? 1000 : 450;

    const timer = setInterval(() => {
      setChunks((prev) => {
        const next = [...prev];
        const nextIdx = next.findIndex((c) => c !== "loaded");
        if (nextIdx !== -1) {
          next[nextIdx] = "loaded";
          setChunkIndex(nextIdx);
        } else {
          // Restart queue
          return Array(10).fill("idle");
        }
        return next;
      });

      // Occasional simulated buffering for slow profile
      if (activeProfile === "Slow 3G" && Math.random() > 0.65) {
        setBuffering(true);
        setTimeout(() => setBuffering(false), 1400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, activeProfile]);

  const handleProfileChange = (profileName: string) => {
    setActiveProfile(profileName);
    setChunks(Array(10).fill("idle"));
    setChunkIndex(0);
    setBuffering(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setChunks(Array(10).fill("idle"));
    setChunkIndex(0);
    setBuffering(false);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 font-sans shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Network Select & Video Player */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Wifi size={13} className="text-emerald-500" /> 1. Select Network Environment
              </span>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw size={11} />
                <span>Reset Buffer</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.keys(PROFILES).map((key) => {
                const isSelected = activeProfile === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleProfileChange(key)}
                    className={`px-3 py-2 text-xs font-mono rounded-lg border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-500/10 text-foreground font-semibold shadow-xs"
                        : "border-border text-muted-foreground hover:border-border-hover hover:text-foreground hover:bg-accent/40"
                    }`}
                  >
                    <span>{key}</span>
                    <span className="text-[10px] opacity-75 font-normal">
                      {PROFILES[key].speed}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Simulated Video Player Screen */}
          <div className="relative aspect-video w-full rounded-2xl border border-border bg-black overflow-hidden flex items-center justify-center group shadow-2xl">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Playback Audio Waveform / Particle Simulation */}
            {isPlaying && !buffering && (
              <div className="absolute inset-0 flex items-center justify-center gap-1 pointer-events-none opacity-25">
                {[...Array(18)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 rounded-full"
                    style={{ backgroundColor: profileData.color }}
                    animate={{
                      height: [12, Math.random() * 80 + 20, 12],
                    }}
                    transition={{
                      duration: 0.6 + (i % 5) * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Buffering State */}
            <AnimatePresence>
              {buffering && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/75 z-20 flex flex-col items-center justify-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                    className="w-8 h-8 rounded-full border-2 border-muted border-t-red-500"
                  />
                  <div className="flex items-center gap-1.5 text-xs font-mono text-red-400">
                    <AlertTriangle size={13} />
                    <span>Insufficient Buffer Headroom — Buffering...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Center Play Button Overlay if paused */}
            {!isPlaying && (
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(true)}
                className="z-20 flex flex-col items-center gap-3 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl hover:bg-white/20 transition-all cursor-pointer"
              >
                <Play size={28} className="translate-x-0.5" />
              </motion.button>
            )}

            {/* Top HUD */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/80 z-10 pointer-events-none">
              <span className="bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                Lecture 04: Distributed Consensus
              </span>
              <span
                className="px-2 py-0.5 rounded font-semibold"
                style={{
                  backgroundColor: profileData.accentBg,
                  color: profileData.color,
                }}
              >
                {profileData.resolution} • {profileData.fps}fps
              </span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-10 flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="translate-x-0.5" />}
              </button>

              {/* Scrubber track */}
              <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden relative cursor-pointer">
                {/* Buffer Track */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-neutral-600 transition-all duration-300"
                  style={{ width: `${profileData.bufferHealth}%` }}
                />
                {/* Play progress */}
                <div
                  className="absolute left-0 top-0 bottom-0 transition-all duration-400"
                  style={{
                    width: `${isPlaying ? (chunkIndex + 1) * 10 : 0}%`,
                    backgroundColor: profileData.color,
                  }}
                />
              </div>

              <span className="text-[10px] font-mono text-white/80 shrink-0">
                0{chunkIndex * 6}:00 / 01:00:00
              </span>
            </div>

          </div>
        </div>

        {/* Right Telemetry Column */}
        <div className="w-full lg:w-84 border border-border bg-secondary/30 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden min-h-[340px]">
          <div>
            <div className="flex justify-between items-center border-b border-border pb-3 mb-4">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                <Activity size={12} /> ABR Telemetry
              </span>
              <span className="flex h-2 w-2 relative">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: profileData.color }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: profileData.color }}
                />
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-muted-foreground font-mono uppercase block">
                  Active Stream Profile
                </span>
                <p className="text-sm font-semibold mt-0.5" style={{ color: profileData.color }}>
                  {profileData.qualityClass}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-lg bg-background border border-border">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase block">
                    Bandwidth
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground mt-0.5 block">
                    {profileData.speed}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-background border border-border">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase block">
                    Payload Bitrate
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground mt-0.5 block">
                    {profileData.bitrate}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between mb-1 text-[11px] font-mono">
                  <span className="text-muted-foreground">Buffered Headroom</span>
                  <span className="text-foreground font-semibold">{profileData.bufferTime}</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    animate={{ width: `${profileData.bufferHealth}%` }}
                    style={{ backgroundColor: profileData.color }}
                    transition={{ type: "spring", stiffness: 90 }}
                  />
                </div>
              </div>

              <div>
                <span className="text-[10px] text-muted-foreground font-mono uppercase block mb-1.5">
                  Downloaded 2s Segment Chunks
                </span>
                <div className="grid grid-cols-5 gap-1.5">
                  {chunks.map((state, idx) => (
                    <div
                      key={idx}
                      className={`h-4 rounded border transition-all duration-300 flex items-center justify-center text-[8px] font-mono ${
                        state === "loaded"
                          ? "border-border text-white font-bold"
                          : "border-border/40 bg-secondary text-muted-foreground"
                      }`}
                      style={{
                        backgroundColor: state === "loaded" ? profileData.color : "transparent",
                        opacity: state === "loaded" ? 0.9 : 0.4,
                      }}
                    >
                      #{idx + 1}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-border pt-3 mt-4 text-[10px] font-mono text-muted-foreground flex justify-between">
            <span>Protocol: HLS / m3u8</span>
            <span className="text-emerald-500 font-semibold">0 drops</span>
          </div>
        </div>

      </div>
    </div>
  );
}
