"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Play, Pause, AlertTriangle } from "lucide-react";

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
    accentBg: "rgba(239, 68, 68, 0.1)",
    fps: 24,
    qualityClass: "Low Quality / Frequent Buffering",
  },
  "Fast 4G": {
    name: "Fast 4G",
    speed: "15 Mbps",
    resolution: "720p",
    bitrate: "2400 kbps",
    bufferHealth: 75,
    bufferTime: "14.2s",
    color: "#f59e0b", // Orange
    accentBg: "rgba(245, 158, 11, 0.1)",
    fps: 30,
    qualityClass: "Medium Quality / Stable Streaming",
  },
  "Fiber Optic": {
    name: "Fiber Optic",
    speed: "250+ Mbps",
    resolution: "1080p",
    bitrate: "5800 kbps",
    bufferHealth: 98,
    bufferTime: "29.8s",
    color: "#10b981", // Emerald
    accentBg: "rgba(16, 185, 129, 0.1)",
    fps: 60,
    qualityClass: "High Quality / Instant Scrubbing",
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

    const intervalTime = activeProfile === "Slow 3G" ? 2200 : activeProfile === "Fast 4G" ? 1100 : 500;

    const timer = setInterval(() => {
      setChunks((prev) => {
        const next = [...prev];
        const nextIdx = next.findIndex((c) => c !== "loaded");
        if (nextIdx !== -1) {
          next[nextIdx] = "loaded";
          setChunkIndex(nextIdx);
        } else {
          // Reset array if all loaded
          return Array(10).fill("idle");
        }
        return next;
      });

      // Occasional simulated buffering for slow profile
      if (activeProfile === "Slow 3G" && Math.random() > 0.6) {
        setBuffering(true);
        setTimeout(() => setBuffering(false), 1500);
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

  return (
    <div className="rounded-xl border border-border bg-surface/30 p-6 md:p-10 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Network & Video Panel */}
        <div className="flex-1 space-y-6">
          <div>
            <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">
              1. Select Network Environment
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.keys(PROFILES).map((key) => (
                <button
                  key={key}
                  onClick={() => handleProfileChange(key)}
                  className={`px-3 py-2 text-xs font-mono rounded-lg border text-left transition-all duration-300 flex items-center justify-between ${
                    activeProfile === key
                      ? "border-foreground bg-accent text-foreground"
                      : "border-border text-muted-foreground hover:border-border-hover hover:text-foreground"
                  }`}
                >
                  <span>{key}</span>
                  <span className="text-[10px] opacity-75">{PROFILES[key].speed}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Video Player Box */}
          <div className="relative aspect-video w-full rounded-xl border border-border bg-black overflow-hidden flex items-center justify-center group">
            
            {/* Graphical noise or static grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" />

            {/* Video mock content - animated scanning lines or glowing waves */}
            {isPlaying && !buffering && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-40"
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: `radial-gradient(circle, ${profileData.accentBg} 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            )}

            {/* Buffering/Loading Indicator */}
            <AnimatePresence>
              {(buffering || (isPlaying && activeProfile === "Slow 3G" && chunkIndex % 3 === 0 && buffering)) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/60 z-20 flex flex-col items-center justify-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-8 h-8 rounded-full border-2 border-muted border-t-foreground"
                  />
                  <div className="flex items-center gap-1.5 text-xs font-mono text-red-400">
                    <AlertTriangle size={14} />
                    <span>Insufficient Buffer - Buffering...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Player Control HUD */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10 opacity-100 transition-opacity duration-300 flex items-center justify-between gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              {/* simulated scrubber track */}
              <div className="flex-1 h-1 bg-neutral-800 rounded overflow-hidden relative">
                {/* Buffer Track */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-neutral-600 transition-all duration-300"
                  style={{ width: `${profileData.bufferHealth}%` }}
                />
                {/* Play Progress */}
                <div
                  className="absolute left-0 top-0 bottom-0 transition-all duration-500"
                  style={{
                    width: `${isPlaying ? (chunkIndex + 1) * 10 : 0}%`,
                    backgroundColor: profileData.color,
                  }}
                />
              </div>

              {/* Quality HUD Badge */}
              <span className="text-[10px] font-mono text-foreground bg-black/50 border border-border px-2 py-0.5 rounded">
                {profileData.resolution} @ {profileData.fps}fps
              </span>
            </div>

            {/* Inactive state display */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 text-center p-6 pointer-events-none">
                <Radio size={36} className="text-muted-foreground animate-pulse" />
                <span className="text-sm font-mono text-muted-foreground">Press Play to Stream Chunk Nodes</span>
              </div>
            )}

          </div>
        </div>

        {/* Real-time Streaming Metrics Panel */}
        <div className="w-full lg:w-80 border border-border bg-surface-raised rounded-xl p-5 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
          <div>
            <div className="flex justify-between items-center border-b border-border pb-3 mb-4">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Adaptive Bitrate Telemetry
              </span>
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{ backgroundColor: profileData.color }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: profileData.color }} />
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-xs text-muted-foreground font-mono">Stream Profile Quality</h5>
                <p className="text-sm font-medium mt-0.5" style={{ color: profileData.color }}>
                  {profileData.qualityClass}
                </p>
              </div>

              <div>
                <h5 className="text-xs text-muted-foreground font-mono">Simulated Bandwidth</h5>
                <p className="text-sm font-mono text-foreground mt-0.5 font-bold">
                  {profileData.speed}
                </p>
              </div>

              <div>
                <h5 className="text-xs text-muted-foreground font-mono">Payload Bitrate</h5>
                <p className="text-sm font-mono text-foreground mt-0.5 font-bold">
                  {profileData.bitrate}
                </p>
              </div>

              <div>
                <h5 className="text-xs text-muted-foreground font-mono">Buffered Playback Time</h5>
                <div className="flex items-end justify-between mt-1">
                  <span className="text-sm font-semibold text-foreground">{profileData.bufferTime}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">Max capacity 30s</span>
                </div>
                <div className="h-1.5 w-full bg-accent rounded-full mt-1.5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    animate={{ width: `${profileData.bufferHealth}%` }}
                    style={{ backgroundColor: profileData.color }}
                    transition={{ type: "spring", stiffness: 80 }}
                  />
                </div>
              </div>

              <div>
                <h5 className="text-xs text-muted-foreground font-mono mb-2">Downloaded Segment Queue</h5>
                <div className="grid grid-cols-5 gap-1.5">
                  {chunks.map((state, idx) => (
                    <div
                      key={idx}
                      className={`h-4 rounded border transition-all duration-300 ${
                        state === "loaded"
                          ? "border-neutral-500"
                          : "border-neutral-800 bg-black/20"
                      }`}
                      style={{
                        backgroundColor: state === "loaded" ? profileData.color : "transparent",
                        opacity: state === "loaded" ? 0.8 : 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-3 mt-6 text-[9px] font-mono text-muted-foreground flex justify-between">
            <span>Adaptive mode: dynamic</span>
            <span>Frames: 0 drops</span>
          </div>
        </div>

      </div>
    </div>
  );
}
