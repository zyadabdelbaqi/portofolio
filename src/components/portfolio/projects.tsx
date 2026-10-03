import { ArrowUpRight, Boxes, Radio, Sparkles, Store, Video, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
  url?: string;
  caseStudy?: string;
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
    image: "/projects/tarteelstudio.webp",
    url: "https://tarteel.studio/",
    caseStudy: "/projects/tarteel-studio",
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
    image: "/projects/amtdad.webp",
    url: "https://amtdad.vercel.app",
    caseStudy: "/projects/amtdad",
  },
  {
    id: "elforma",
    name: "ElForma",
    subtitle: "Multi-Tenant Gym Management SaaS Platform",
    summary:
      "Full-suite management platform for fitness centers with real-time member subscriptions, attendance tracking, and multi-branch administration.",
    tags: ["TanStack Start", "TypeScript", "Tailwind CSS", "Supabase", "PWA"],
    icon: Boxes,
    image: "/projects/elforma.webp",
    url: "https://elforma.vercel.app/",
    caseStudy: "/projects/elforma",
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
    image: "/projects/kayanstream.webp",
    url: "https://www.kayanstream.com/",
    caseStudy: "/projects/kayanstream",
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
    image: "/projects/sirashare.webp",
    url: "https://sirashare.vercel.app",
    caseStudy: "/projects/sirashare",
  },
  {
    id: "amadco",
    name: "Amadco",
    subtitle: "Home Services & Pest Control Corporate Agency",
    summary:
      "Professional corporate website for a leading home services company in Saudi Arabia, featuring a multi-service portfolio, dynamic design, and SEO optimization.",
    tags: [
      "Vanilla JS",
      "HTML5",
      "CSS3",
      "SEO",
      "Responsive Design",
    ],
    icon: Home,
    image: "/projects/amadco.webp",
    url: "https://www.amadco-sa.com/",
    caseStudy: "/projects/amadco",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const href = project.caseStudy || project.url || `#project-${project.id}`;
  const isExternal = !project.caseStudy && !!project.url;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`${project.name} — ${project.subtitle}`}
      className="card-hover group block overflow-hidden rounded-lg border border-border bg-card shadow-sm flex flex-col h-full"
    >
      <div className="relative aspect-[16/9] w-full border-b border-border bg-muted overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.caseStudy && (
          <div className="absolute top-3 right-3 rounded-md bg-background/90 backdrop-blur-sm px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-foreground shadow-sm border border-border/50">
            Case Study
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-foreground">
              <Icon strokeWidth={1.5} className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="truncate text-xs text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
          </div>
          <ArrowUpRight
            strokeWidth={1.5}
            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-foreground"
          />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5 shrink-0">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        <FadeIn delay={0.1}>
          {/* Section header */}
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                02 — Selected Work
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A selection of shipped products spanning SaaS, e-commerce,
              corporate agencies, multimedia automation, AI tooling, and live media.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.id} delay={0.2 + i * 0.1}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
