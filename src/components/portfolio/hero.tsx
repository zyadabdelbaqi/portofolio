import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="relative mx-auto max-w-5xl px-5 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-28 md:pt-20 md:pb-36">
        <FadeIn delay={0.1}>
          {/* Availability badge */}
          <div className="mb-8 flex justify-center sm:mb-10 sm:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-500/60" />
              <span className="absolute -inset-0.5 rounded-full bg-emerald-500/25" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground ring-1 ring-border" />
            </span>
            Available for Remote Work
          </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Headline */}
          <h1 className="text-center text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl md:text-left">
          Full-Stack Developer
          <br className="hidden sm:block" />
          <span className="block text-foreground sm:mt-2">
            shipping SaaS & Corporate platforms.
          </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          {/* Intro paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0 md:text-left">
          I&apos;m Ziad Abdelbaqi — a Full-Stack Developer & SaaS Builder
          focused on scalable web applications, cloud-native platforms, and
          high-performance business solutions. From client-side multimedia
          automation to multi-tenant SaaS platforms, corporate web apps, and 24/7
          live streaming pipelines, I deliver complete products efficiently.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            View Projects
            <ArrowRight strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-foreground bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:w-auto"
          >
            <Mail strokeWidth={1.5} className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/ziadabdelbaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:text-foreground sm:w-auto"
          >
            <Linkedin strokeWidth={1.5} className="h-4 w-4" />
            LinkedIn
          </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          {/* Meta line */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:justify-start">
          <span className="inline-flex items-center gap-1.5">
            <MapPin strokeWidth={1.5} className="h-3.5 w-3.5" />
            Available for Remote Roles Worldwide
          </span>
          <span className="font-mono text-muted-foreground/50">·</span>
          <span className="font-mono">Full-Stack · SaaS · Corporate · Cloud</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
