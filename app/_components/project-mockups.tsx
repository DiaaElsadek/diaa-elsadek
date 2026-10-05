"use client";

import React from "react";
import {
  Globe,
  Server,
  Activity,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Shield,
  Users,
  BookOpen,
  Dumbbell,
  Sparkles,
} from "lucide-react";

export function EduCenterMockup() {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-4 shadow-xl font-sans space-y-3 relative overflow-hidden">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-md border border-border/60 truncate max-w-[210px]">
          https://ahmed.educenter.tech
        </div>
        <Globe size={12} className="text-muted-foreground" />
      </div>

      {/* Mock Tenant Card */}
      <div className="p-3 rounded-lg border border-border/60 bg-surface/60 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Ahmed&apos;s Academy
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20">
            SOVEREIGN TENANT
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Students</span>
            <span className="font-bold text-foreground">1,420 Enrolled</span>
          </div>
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Payments</span>
            <span className="font-bold text-emerald-400">Paymob Active</span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-accent/40 border border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Server size={11} className="text-primary" />
          <span>Wildcard Edge Resolved</span>
        </span>
        <span className="text-emerald-500 font-semibold">28ms</span>
      </div>
    </div>
  );
}

export function AlAnisMockup() {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-4 shadow-xl font-sans space-y-3 relative overflow-hidden">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-md border border-border/60 truncate max-w-[210px]">
          https://al-anis.vercel.app
        </div>
        <Activity size={12} className="text-sky-400" />
      </div>

      {/* Healthcare Provider Booking Card */}
      <div className="p-3 rounded-lg border border-border/60 bg-surface/60 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Shield size={12} className="text-sky-400" />
            <span className="text-xs font-semibold text-foreground">
              Sarah Mansour, RN
            </span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20">
            VERIFIED NURSE
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Specialty</span>
            <span className="font-bold text-foreground">ICU &amp; Home Care</span>
          </div>
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Shift Rate</span>
            <span className="font-bold text-foreground">EGP 450 / 8h</span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-accent/40 border border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={11} className="text-sky-400" />
          <span>ASP.NET Core REST API</span>
        </span>
        <span className="text-foreground font-semibold">Swagger Spec</span>
      </div>
    </div>
  );
}

export function ZSportsMockup() {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-4 shadow-xl font-sans space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-md border border-border/60 truncate max-w-[210px]">
          https://z-sports-eta.vercel.app
        </div>
        <Calendar size={12} className="text-emerald-400" />
      </div>

      <div className="p-3 rounded-lg border border-border/60 bg-surface/60 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Arena Court #2 (Football 5v5)
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
            CONFIRMED
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Time Slot</span>
            <span className="font-bold text-foreground">08:00 — 09:30 PM</span>
          </div>
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Scheduling</span>
            <span className="font-bold text-emerald-400">Zero Collision</span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-accent/40 border border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock size={11} className="text-emerald-400" />
          <span>Real-Time Slot Engine</span>
        </span>
        <span className="text-emerald-500 font-semibold">Available</span>
      </div>
    </div>
  );
}

export function UniStreamMockup() {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-4 shadow-xl font-sans space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-md border border-border/60 truncate max-w-[210px]">
          https://uni-stream22.vercel.app
        </div>
        <BookOpen size={12} className="text-purple-400" />
      </div>

      <div className="p-3 rounded-lg border border-border/60 bg-surface/60 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Academic Cohort Hub
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-semibold border border-purple-500/20">
            CENTRALIZED
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Curriculum</span>
            <span className="font-bold text-foreground">Course Syllabi</span>
          </div>
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Collaboration</span>
            <span className="font-bold text-purple-400">Discussion Hub</span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-accent/40 border border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Users size={11} className="text-purple-400" />
          <span>University Cohort Access</span>
        </span>
        <span className="text-foreground font-semibold">Live Production</span>
      </div>
    </div>
  );
}

export function ApexGymMockup() {
  return (
    <div className="rounded-xl border border-border bg-card/90 p-4 shadow-xl font-sans space-y-3 relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-md border border-border/60 truncate max-w-[210px]">
          https://apex-gym-sandy.vercel.app
        </div>
        <Dumbbell size={12} className="text-amber-400" />
      </div>

      <div className="p-3 rounded-lg border border-border/60 bg-surface/60 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Apex Fitness Commercial
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20">
            CLIENT DELIVERED
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Execution</span>
            <span className="font-bold text-foreground">Local + Vercel</span>
          </div>
          <div className="p-2 rounded bg-background border border-border/40">
            <span className="text-muted-foreground block text-[9px]">Client Spec</span>
            <span className="font-bold text-amber-400">100% Shipped</span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-lg bg-accent/40 border border-border/40 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Sparkles size={11} className="text-amber-400" />
          <span>Real Client Project</span>
        </span>
        <span className="text-amber-400 font-semibold">Freelance</span>
      </div>
    </div>
  );
}

export function ProjectMockupPreview({
  mockup,
}: {
  mockup: "educenter" | "alanis" | "zsports" | "unistream" | "apexgym";
}) {
  switch (mockup) {
    case "educenter":
      return <EduCenterMockup />;
    case "alanis":
      return <AlAnisMockup />;
    case "zsports":
      return <ZSportsMockup />;
    case "unistream":
      return <UniStreamMockup />;
    case "apexgym":
      return <ApexGymMockup />;
    default:
      return <EduCenterMockup />;
  }
}
