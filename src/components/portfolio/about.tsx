import { GraduationCap, Sparkles, Rocket } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              04 — About
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              About &amp; Mindset
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Left — narrative */}
          <FadeIn delay={0.2} className="md:col-span-3">
            <p className="text-base leading-relaxed text-foreground/80">
              I come from a{" "}
              <span className="font-medium text-foreground">
                Business Information Systems (BIS)
              </span>{" "}
              background — a discipline that lives at the intersection of how
              companies operate and how software gets built. That dual lens lets
              me reason about real business logic first, then translate it into
              clean, well-bounded engineering.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I work as a product-minded builder: I take ownership from
              architecture through to the last pixel. Whether it&apos;s a
              multi-tenant SaaS, a corporate web platform, a browser-based
              multimedia engine, or a 24/7 live streaming pipeline on a Debian VPS,
              my goal is the same — ship a coherent, performant product that holds
              up under real usage.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Modern AI workflows and cloud infrastructure let me operate
              autonomously across the stack. I leverage them to compress the
              distance between an idea and a working deployment — without
              sacrificing the engineering rigor that keeps systems maintainable
              over time.
            </p>
          </FadeIn>

          {/* Right — principle cards */}
          <div className="md:col-span-2">
            <ul className="flex flex-col gap-3">
              <FadeIn delay={0.3}>
                <li className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap strokeWidth={1.5} className="h-4 w-4 text-foreground" />
                    <p className="font-mono text-xs font-medium text-foreground">
                      BIS Background
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Bridges business logic with clean software engineering.
                  </p>
                </li>
              </FadeIn>
              <FadeIn delay={0.4}>
                <li className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Rocket strokeWidth={1.5} className="h-4 w-4 text-foreground" />
                    <p className="font-mono text-xs font-medium text-foreground">
                      End-to-End Shipping
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    From architecture to deployment — autonomous, product-minded
                    delivery.
                  </p>
                </li>
              </FadeIn>
              <FadeIn delay={0.5}>
                <li className="rounded-lg border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Sparkles strokeWidth={1.5} className="h-4 w-4 text-foreground" />
                    <p className="font-mono text-xs font-medium text-foreground">
                      AI-Workflow Native
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Modern tooling and cloud infra to compress time-to-deploy.
                  </p>
                </li>
              </FadeIn>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
