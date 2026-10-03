import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { FadeIn } from "@/components/fade-in";
import { Mermaid } from "@/components/mermaid";
import { ArrowLeft, ExternalLink, Server, Radio, HardDrive, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "KayanStream Case Study — ziadabdelbaqi.dev",
  description: "Scaling a 24/7 live streaming platform with zero-CPU streaming and strict storage quotas.",
};

export default function KayanStreamCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 pt-12 pb-20 sm:px-6 md:pt-16 md:pb-28">
          <FadeIn>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-8"
            >
              <ArrowLeft strokeWidth={1.5} className="h-4 w-4" />
              Back to Projects
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-foreground">
                  Case Study
                </span>
                <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-foreground">
                  SaaS & Infrastructure
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  2024
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight mb-6">
                KayanStream: Zero-CPU Broadcasting & 24/7 Stream Stability
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An automated live streaming platform allowing users to broadcast pre-recorded videos 24/7 to YouTube, Facebook, and custom RTMP destinations. The core challenge was scaling the infrastructure without choking the servers.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.kayanstream.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Visit Live Site
                  <ExternalLink strokeWidth={1.5} className="h-4 w-4" />
                </a>
              </div>
            </header>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted mb-16 shadow-sm">
              <img
                src="/projects/kayanstream.webp"
                alt="KayanStream Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">The Challenge: Server Bottlenecks</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Broadcasting video using FFmpeg typically involves on-the-fly re-encoding (transcoding). If 50 users schedule streams simultaneously on a single Debian VPS, the CPU load would immediately spike to 100%, causing the server to choke, streams to crash, and an unacceptable user experience.
                </p>
                
                <div className="rounded-lg border border-border bg-card p-5 mt-6">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">The Solution: Direct Stream Copy (-c copy)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    To bypass CPU exhaustion, I engineered the FFmpeg pipeline to use the <code>-c copy</code> flag. This command merely copies the audio and video packets into the RTMP stream without re-rendering them. This reduced CPU usage per stream by <strong>over 98% (from ~80% down to &lt;1%)</strong>, allowing a single standard VPS to sustain <strong>up to 100 concurrent 24/7 RTMP streams</strong> effortlessly.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  <strong>The Trade-off & User Education:</strong> The copy operation demands that the uploaded video is strictly formatted for RTMP (e.g., H.264 video and AAC audio). To enforce this, I built a rigid validation layer on the frontend that rejects incompatible files and clearly guides the user on how to export their video in the exact required format before uploading.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.35}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Server strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">System Architecture</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The data pipeline flows seamlessly from the client to our scalable queue system, triggering isolated Docker workers that stream directly from edge storage to the destination RTMP server.
                </p>
                <Mermaid chart={`graph LR
  A[Next.js Client] -->|API: Schedule Stream| B(BullMQ Queue)
  B -->|Dispatch Job| C{Docker Worker}
  C -->|Fetch Video| D[(Cloudflare R2)]
  D -->|Stream Data| C
  C -->|FFmpeg -c copy| E((RTMP/YouTube))
  
  style A fill:#000,stroke:#666,stroke-width:1px,color:#fff
  style B fill:#e67e22,stroke:#d35400,stroke-width:2px,color:#fff
  style C fill:#2980b9,stroke:#2c3e50,stroke-width:2px,color:#fff
  style D fill:#f39c12,stroke:#e67e22,stroke-width:2px,color:#fff
  style E fill:#c0392b,stroke:#a12830,stroke-width:2px,color:#fff`} />
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Radio strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Broadcast Stability & Stuttering</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Keeping a stream running 24/7 without interruption is notoriously difficult. I faced severe challenges with stream buffering (تقطيع البث) and sudden disconnections.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I solved this by tuning FFmpeg's readrate buffers (<code>-re</code>), adjusting thread queue sizes, and using <strong>BullMQ</strong> as a robust background job manager. If a stream drops due to a network hiccup from the destination (like YouTube), BullMQ automatically catches the failure and restarts the FFmpeg process within seconds, maintaining a stellar <strong>99.8% broadcast Uptime</strong> across all channels.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Managing User Storage Quotas</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Video files are massive. Allowing users to upload 24-hour loops meant storage would fill up instantly. I integrated <strong>Cloudflare R2</strong> (an S3-compatible, zero-egress-fee storage provider) to host the media files.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I developed a rigorous storage tracking system that accurately calculates each user's disk usage in real-time. If a user exceeds their subscription tier's quota, the system instantly blocks further uploads. Additionally, automated cron jobs run nightly to clean up orphaned or deleted files, keeping infrastructure costs highly optimized.
                </p>
              </section>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
