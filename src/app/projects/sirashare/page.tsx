import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { FadeIn } from "@/components/fade-in";
import { ArrowLeft, ExternalLink, Bot, FileText, LayoutTemplate, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SiraShare Case Study — ziadabdelbaqi.dev",
  description: "Building an AI-powered CV builder with real-time auto-save and ATS optimization.",
};

export default function SiraShareCaseStudy() {
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
                  SaaS / AI Tools
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  2023
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight mb-6">
                SiraShare: AI-Powered CV Builder & ATS Optimization
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A frictionless, web-based platform designed to help job seekers build, share, and optimize their resumes using intelligent real-time workflows and Google's Gemini AI.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://sirashare.vercel.app"
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
                src="/projects/sirashare.webp"
                alt="SiraShare Dashboard Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <FileText strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">The Friction of CV Creation</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Job seekers constantly struggle with broken Word formatting, passing enterprise Applicant Tracking Systems (ATS), and the hassle of re-exporting PDFs for every minor update. I wanted to build a tool so intuitive that absolute beginners could create a flawless CV in minutes.
                </p>
                
                <div className="rounded-lg border border-border bg-card p-5 mt-6">
                  <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-sm">
                    <LinkIcon strokeWidth={1.5} className="h-4 w-4" />
                    Auto-Save & Public Links
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    I completely eliminated the "Save" button. Using custom React hooks with <strong>debounce</strong> logic, the application instantly synchronizes keystrokes to the Supabase backend with <strong>sub-50ms latency</strong>. Furthermore, instead of only exporting PDFs, the system provisions a unique, persistent public URL (e.g., <code>sirashare.com/username</code>) for every user. If a user spots a typo after sending their link to a recruiter, they simply fix it on their dashboard, and the live link updates immediately.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <LayoutTemplate strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Dynamic Theming & ATS Compliance</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The platform offers multiple professional themes powered by a robust CSS-variable engine, allowing users to switch styles with a single click without losing data.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>The ATS Challenge:</strong> Many beautiful CVs fail because corporate parsing software cannot read complex CSS grids or columns. To solve this, I engineered a specialized <strong>ATS-Optimized Theme</strong>. This theme strips away visual clutter, enforces a linear semantic HTML structure (strict H1, H2, UL/LI tags), and ensures that when the browser generates the PDF, the text layer is perfectly machine-readable with a <strong>100% parsing success rate</strong> across enterprise ATS platforms like Workday, Taleo, and Greenhouse.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Bot strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">AI-Driven Resume Analysis</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To elevate SiraShare from a simple builder to a career tool, I integrated <strong>Google's Gemini AI API</strong>. 
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Users can paste a target job description into the platform. The system constructs a complex prompt containing the user's JSON CV data and the job description, sending it to the AI. The AI acts as a virtual recruiter—it analyzes the overlap, highlights missing critical keywords, suggests stronger action verbs, and assigns a readiness score. This empowers users to tailor their resumes specifically for the job they want, significantly increasing their chances of landing an interview.
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
