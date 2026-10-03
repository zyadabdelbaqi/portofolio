import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { FadeIn } from "@/components/fade-in";
import { ArrowLeft, ExternalLink, ShieldCheck, ScanLine, Printer, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "ElForma Case Study — ziadabdelbaqi.dev",
  description: "Architecting a comprehensive gym management system with hardware integration and RBAC.",
};

export default function ElFormaCaseStudy() {
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
                  B2B SaaS / ERP
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  2023
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight mb-6">
                ElForma: Bridging Software with Gym Hardware Logistics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A full-suite gym management ERP built to handle the intense operational load of modern fitness centers, featuring strict role-based access, high-speed barcode attendance, and direct hardware integration for printing ID cards.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://elforma.vercel.app/"
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
                src="/projects/elforma.webp"
                alt="ElForma Dashboard Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Role-Based Access Control (RBAC)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Managing a multi-branch gym means managing a diverse workforce—receptionists, personal trainers, accountants, and regional managers. A standard "admin/user" setup wasn't enough.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I architected a granular <strong>RBAC (Role-Based Access Control)</strong> matrix deeply embedded in both the frontend UI and the backend middleware. When an employee logs in, the platform dynamically generates their dashboard. A receptionist can process payments and check-ins but cannot see financial summaries. Simultaneously, all API routes validate the JWT token's permission scope before touching the database, ensuring <strong>100% secure isolation</strong> for thousands of sensitive member and financial records.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <ScanLine strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">High-Speed Barcode Check-In</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During peak hours, gyms experience a massive influx of members. The check-in process must be instantaneous; a slow system creates physical queues at the door.
                </p>
                <div className="rounded-lg border border-border bg-card p-5 mt-6">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Hardware-to-Web Communication</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    I engineered a global event listener system that captures input from physical USB barcode scanners without requiring the receptionist to manually click on an input field. The system instantly captures the payload, queries the database to verify the member's subscription validity (handling freezes, expirations, or unpaid dues), and logs the attendance with a visual and audio cue—all in <strong>under 200 milliseconds</strong>. This architecture easily sustains <strong>10,000+ daily check-ins</strong> effortlessly without UI freezing or network bottlenecks.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Printer strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Automated PVC Card Printing</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Gyms require physical ID cards for members, typically forcing receptionists to use clunky third-party software (like Photoshop or Word templates) to design and print cards for every new registration.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I eliminated this friction entirely. I built a dynamic ID card generator within the browser. Using specialized CSS <code>@media print</code> queries and exact millimeter scaling (e.g., <code>CR80</code> standard card sizes), the system takes the member's photo, generates a unique barcode, and compiles a beautifully styled card. With one click, the browser interfaces directly with the local thermal PVC printer, bypassing external software entirely.
                </p>
              </section>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Users strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Comprehensive Member Lifecycle</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond just entry and exit, the system handles the entire lifecycle of a member. This includes automated reminders for expiring subscriptions, managing freeze periods (pausing memberships), tracking body measurements over time, and assigning members to specific personal training schedules, providing owners with complete operational visibility.
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
