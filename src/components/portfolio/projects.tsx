import { ArrowUpRight, Boxes, Code2, Radio, Receipt } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  id: string;
  name: string;
  subtitle: string;
  summary: string;
  tags: string[];
  icon: LucideIcon;
};

const PROJECTS: Project[] = [
  {
    id: "elforma",
    name: "ElForma",
    subtitle: "Multi-Tenant Gym Management SaaS Platform",
    summary:
      "Full-suite management platform for fitness centers with offline-first data sync and multi-tenant member administration.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Offline-Sync"],
    icon: Boxes,
  },
  {
    id: "storecraft",
    name: "StoreCraft (امتداد)",
    subtitle: "E-Commerce Storefront Builder",
    summary:
      "Scalable e-commerce creation platform empowering local merchants to quickly spin up custom storefronts and manage inventory.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Cloud Storage", "REST APIs"],
    icon: Code2,
  },
  {
    id: "a4-invoicing",
    name: "A4 Invoicing & QR Engine",
    subtitle: "Tax Invoice Platform",
    summary:
      "Browser-based tax invoice generator featuring automated tax calculations, custom branding, and static QR code generation.",
    tags: ["React", "Client-Side Rendering", "Dynamic QR", "SVG/PNG Export"],
    icon: Receipt,
  },
  {
    id: "rtmp-streaming",
    name: "RTMP Live & Cloud Media Hub",
    subtitle: "Live Media SaaS",
    summary:
      "Live video streaming platform with automated scheduling, cloud media storage, and browser-accelerated rendering.",
    tags: ["Next.js", "Cloudflare R2", "RTMP Ingestion", "Docker", "Debian VPS"],
    icon: Radio,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <a
      href={`#project-${project.id}`}
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
            A selection of shipped products spanning SaaS, e-commerce, billing,
            and live media.
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
