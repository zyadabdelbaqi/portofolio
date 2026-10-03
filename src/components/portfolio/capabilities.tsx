import { Layers, Server, Workflow, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

const CAPABILITIES: Capability[] = [
  {
    title: "Frontend",
    description: "Interface systems, rendering pipelines, and design tokens.",
    icon: Layers,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebGPU / Canvas Rendering",
      "UI/UX Design Systems",
    ],
  },
  {
    title: "Backend & Cloud",
    description: "APIs, datastores, storage, and infrastructure operations.",
    icon: Server,
    items: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Cloudflare R2",
      "Docker",
      "Linux (Debian) VPS Admin",
    ],
  },
  {
    title: "Architecture & Process",
    description: "Product-minded execution across systems and shipping loops.",
    icon: Workflow,
    items: [
      "SaaS System Design",
      "Multi-Tenant Architecture",
      "Code Obfuscation",
      "Product-Minded Execution",
    ],
  },
];

function CapabilityCard({ cap }: { cap: Capability }) {
  const Icon = cap.icon;
  return (
    <article className="card-hover rounded-lg border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted text-foreground">
          <Icon strokeWidth={1.5} className="h-4 w-4" />
        </span>
        <h3 className="font-mono text-sm font-medium text-foreground">
          {cap.title}
        </h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{cap.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {cap.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-muted/60">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        <FadeIn delay={0.1}>
          {/* Header */}
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                03 — Capabilities
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Technical Capabilities
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A monochrome stack: crisp typography, clean borders, and production
              systems built end-to-end.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <FadeIn key={c.title} delay={0.2 + i * 0.1}>
              <CapabilityCard cap={c} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
