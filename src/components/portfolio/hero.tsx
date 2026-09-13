import { ArrowRight, Mail, MapPin, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-neutral-200"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-radial-faded opacity-60"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28 md:py-36">
        {/* Availability badge */}
        <div className="mb-8 flex justify-center sm:mb-10 sm:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-emerald-500/60" />
              <span className="absolute -inset-0.5 rounded-full bg-emerald-500/25" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-900 ring-1 ring-neutral-900/10" />
            </span>
            Available for Remote Work
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl md:text-left">
          Full-Stack Developer
          <br className="hidden sm:block" />
          <span className="block text-neutral-900 sm:mt-2">
            shipping SaaS end-to-end.
          </span>
        </h1>

        {/* Intro paragraph */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-neutral-600 sm:text-lg md:mx-0 md:text-left">
          I&apos;m Ziad Abdelbaqi — a Full-Stack Developer & SaaS Builder
          focused on scalable web applications, cloud-native platforms, and
          high-performance business solutions. From client-side multimedia
          automation to multi-tenant SaaS platforms and 24/7 live streaming
          pipelines, I deliver complete products efficiently.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto"
          >
            View Projects
            <ArrowRight strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-neutral-900 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 sm:w-auto"
          >
            <Mail strokeWidth={1.5} className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/ziadabdelbaqi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 sm:w-auto"
          >
            <Linkedin strokeWidth={1.5} className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        {/* Meta line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-neutral-400 sm:justify-start">
          <span className="inline-flex items-center gap-1.5">
            <MapPin strokeWidth={1.5} className="h-3.5 w-3.5" />
            Available for Remote Roles Worldwide
          </span>
          <span className="font-mono text-neutral-300">·</span>
          <span className="font-mono">Full-Stack · SaaS · Cloud</span>
        </div>
      </div>
    </section>
  );
}
