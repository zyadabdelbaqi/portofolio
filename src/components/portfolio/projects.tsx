import { ArrowUpRight, Boxes, Radio, Sparkles, Store, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  url?: string;
};

const PROJECTS: Project[] = [
  {
    id: "tarteelstudio",
    name: "Tarteel Studio",
    subtitle: "Multimedia Automation & Video Generation SaaS",
    summary:
      "Client-side heavy multimedia SaaS platform for automated Quranic video generation, featuring zero-infrastructure-cost edge architecture, audio-visual sync, and proprietary code obfuscation.",
    tags: [
      "Vanilla JS",
      "Tailwind CSS",
      "Client-Side Video Rendering",
      "Vercel Edge",
      "Code Obfuscation",
    ],
    icon: Video,
    url: "https://tarteel.studio/",
  },
  {
    id: "amtdad",
    name: "Amtdad",
    subtitle: "Multi-Tenant E-Commerce & Storefront Builder SaaS",
    summary:
      "Full-stack multi-tenant e-commerce platform empowering merchants to launch branded online stores, customize visual themes, manage inventory, and process direct WhatsApp orders.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Cloudflare R2",
      "WhatsApp Commerce",
    ],
    icon: Store,
    url: "https://amtdad.vercel.app",
  },
  {
    id: "elforma",
    name: "ElForma",
    subtitle: "Multi-Tenant Gym Management SaaS Platform",
    summary:
      "Full-suite management platform for fitness centers with real-time member subscriptions, attendance tracking, and multi-branch administration.",
    tags: ["TanStack Start", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
    icon: Boxes,
    url: "https://elforma.vercel.app/",
  },
  {
    id: "kayanstream",
    name: "KayanStream",
    subtitle: "Automated Live Streaming & Cloud Media SaaS",
    summary:
      "High-availability platform for scheduling and broadcasting 24/7 live streams to YouTube & RTMP destinations, powered by FFmpeg workers, BullMQ queues, and Cloudflare R2 storage.",
    tags: [
      "Next.js",
      "TypeScript",
      "FFmpeg",
      "BullMQ",
      "Cloudflare R2",
      "Debian VPS",
      "Docker",
    ],
    icon: Radio,
    url: "https://www.kayanstream.com/",
  },
  {
    id: "sirashare",
    name: "SiraShare",
    subtitle: "Interactive CV Platform & AI ATS Scanner",
    summary:
      "Web-based interactive CV builder and portfolio platform featuring public link sharing, dual-language support, and Gemini AI-powered ATS resume optimization.",
    tags: [
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini AI API",
      "ATS Optimization",
    ],
    icon: Sparkles,
    url: "https://sirashare.vercel.app",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <a
      href={project.url || `#project-${project.id}`}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noopener noreferrer" : undefined}
      aria-label={`${project.name} — ${project.subtitle}`}
      className="card-hover group block rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
            <Icon strokeWidth={1.5} className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-neutral-900">
              {project.name}
            </h3>
            <p className="truncate text-xs text-neutral-500">
              {project.subtitle}
            </p>
          </div>
        </div>
        <ArrowUpRight
          strokeWidth={1.5}
          className="h-4 w-4 shrink-0 text-neutral-300 transition-colors group-hover:text-neutral-900"
        />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-700"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
              02 — Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Featured Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-500">
            A selection of shipped products spanning SaaS, e-commerce,
            multimedia automation, AI tooling, and live media.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
