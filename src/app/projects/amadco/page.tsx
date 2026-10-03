import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { FadeIn } from "@/components/fade-in";
import { ArrowLeft, ExternalLink, Search, Zap, MousePointerClick, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Amadco Case Study — ziadabdelbaqi.dev",
  description: "Engineering a high-performance corporate website optimized for local SEO and lead generation in Saudi Arabia.",
};

export default function AmadcoCaseStudy() {
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
                  Corporate & SEO
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  2023
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight mb-6">
                Amadco: Performance-Driven SEO & Lead Generation
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A highly optimized corporate web presence for a leading home services and pest control company in Saudi Arabia, engineered specifically to dominate local search rankings and maximize customer conversion.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.amadco-sa.com/"
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
                src="/projects/amadco.webp"
                alt="Amadco Website Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Search strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">The Challenge: A Cutthroat Local Market</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The home services and pest control market in Saudi Arabia (spanning Jeddah, Riyadh, and Makkah) is fiercely competitive on Google. Users searching for "pest control" or "tank cleaning" are high-intent customers who need immediate solutions. If a website takes more than 3 seconds to load, or the contact button is hard to find, the customer bounces to a competitor instantly.
                </p>
                
                <div className="rounded-lg border border-border bg-card p-5 mt-6">
                  <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-sm">
                    <Zap strokeWidth={1.5} className="h-4 w-4" />
                    Technical SEO & Core Web Vitals
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    Instead of using bloated visual builders like WordPress/Elementor, which ship massive amounts of unused JavaScript and CSS, I built Amadco using a lean, vanilla architecture (Semantic HTML5, CSS3, and minimal Vanilla JS). This resulted in sub-second load times and a <strong>99+ Google Lighthouse score</strong> across Performance, Accessibility, and SEO. This technical foundation gave Amadco a significant algorithmic advantage in local search rankings.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <MousePointerClick strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Conversion-Optimized UX</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Traffic is useless if it doesn't convert into phone calls or messages. I engineered the User Experience (UX) funnel entirely around lead generation. 
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Knowing that the Saudi market heavily prefers WhatsApp communication over filling out lengthy web forms, I integrated direct WhatsApp CTAs (Call to Actions) strategically throughout the page flow. Persistent floating action buttons ensure that whether the user is reading about steam cleaning or annual contracts, the ability to request a quote is always exactly one thumb-tap away.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Flawless Responsive Execution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Analytics show that over 80% of emergency home service searches occur on mobile devices. I utilized a mobile-first design approach. The layout structure perfectly adapts from large corporate desktop displays down to the smallest smartphone screens without horizontal scrolling, broken text, or misaligned imagery, ensuring trust and professionalism at every touchpoint.
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
