import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { FadeIn } from "@/components/fade-in";
import { ArrowLeft, ExternalLink, Code2, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tarteel Studio Case Study — ziadabdelbaqi.dev",
  description: "How we built a zero-cost browser multimedia renderer with AI synchronization.",
};

export default function TarteelStudioCaseStudy() {
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
                  SaaS
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  2023
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight mb-6">
                Tarteel Studio: Zero-Cost Browser Rendering & AI Voice Sync
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A browser-based multimedia editor that empowers users to create professional Quranic recitation videos. By offloading video rendering entirely to the client-side, we achieved infinite scalability with zero rendering infrastructure costs.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://tarteel.studio/"
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
                src="/projects/tarteelstudio.webp"
                alt="Tarteel Studio Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">The Challenge: Server Costs</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional video rendering pipelines rely heavily on server-side processing (e.g., spinning up AWS EC2 instances running FFmpeg). For a consumer-facing application where thousands of users might be exporting videos simultaneously, this approach leads to astronomical cloud computing costs and complex server scaling challenges. We needed a way to provide powerful video creation tools without breaking the bank.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">The Solution: Browser-Native Rendering</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Instead of sending data to a server to be rendered, I architected a solution that pushes the rendering workload entirely to the user's browser. Utilizing modern web APIs (WebCodecs and Canvas API), Tarteel Studio compiles the video, audio, and visual effects locally on the client's device.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>The Result:</strong> The rendering cost dropped by <strong className="text-foreground font-semibold">100% to exactly Zero</strong>. Whether we have 10 users or <strong>10,000 users</strong> exporting videos concurrently, our infrastructure costs remain unchanged, saving thousands of dollars in potential AWS EC2 bills.
                </p>
                <div className="rounded-lg border border-border bg-card p-5 mt-6">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Technical Hurdle: Cross-Device Compatibility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    Client-side rendering is incredibly powerful but highly dependent on the user's hardware. A massive challenge was ensuring the renderer didn't crash or freeze on lower-end devices or mobile phones with limited RAM. I solved this by implementing an intelligent frame-chunking mechanism and meticulous memory management (garbage collection) to keep the browser responsive while rendering heavy multimedia.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">AI Voice Synchronization</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Creating Quranic videos manually requires syncing the text exactly with the reciter's voice—a tedious and time-consuming process. To solve this, I integrated Artificial Intelligence models that automatically analyze the audio track, detect phonetic timestamps, and perfectly synchronize the Quranic verses with the reciter's voice in real-time. This reduced the video creation time for users by <strong>98% (from hours to under 15 seconds)</strong>.
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
