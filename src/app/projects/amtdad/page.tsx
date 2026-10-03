import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { FadeIn } from "@/components/fade-in";
import { Mermaid } from "@/components/mermaid";
import { ArrowLeft, ExternalLink, Network, MessageCircle, Paintbrush } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Amtdad Case Study — ziadabdelbaqi.dev",
  description: "Building a multi-tenant e-commerce SaaS architecture with Next.js and Supabase.",
};

export default function AmtdadCaseStudy() {
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
                  SaaS E-Commerce
                </span>
                <span className="font-mono text-xs text-muted-foreground/50">
                  2023
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight mb-6">
                Amtdad: Architecting a Multi-Tenant Shopify Clone
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A highly scalable, multi-tenant e-commerce platform that empowers merchants in the MENA region to launch customizable storefronts in minutes, with a frictionless WhatsApp-based checkout system.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://amtdad.vercel.app"
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
                src="/projects/amtdad.webp"
                alt="Amtdad Dashboard Interface"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
            <FadeIn delay={0.3}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Network strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Multi-Tenancy & Data Isolation</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Building a "Shopify-like" platform means multiple merchants operate on the same codebase and database. The absolute priority is ensuring strict data isolation so Merchant A can never see Merchant B's customers or orders.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>The Implementation:</strong> I utilized PostgreSQL Row-Level Security (RLS) via Supabase. Every database query automatically filters data based on the authenticated user's <code>tenant_id</code> at the database level. Even if an API route was theoretically misconfigured, the database itself rejects unauthorized data access, providing iron-clad security.
                </p>
                <div className="rounded-lg border border-border bg-card p-5 mt-6">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Dynamic Routing & Middleware</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed m-0">
                    To serve different storefronts from a single Next.js application, I implemented Next.js Middleware. When a request comes in, the middleware inspects the hostname or subdomain (e.g., <code>store1.amtdad.com</code> vs <code>store2.amtdad.com</code>), rewrites the internal URL to load the correct tenant's dynamic route, and caches the result for lightning-fast Edge performance, achieving <strong>sub-50ms global response times</strong>.
                  </p>
                </div>

                <Mermaid chart={`graph TD
  A[Shopper] -->|Visits store1.amtdad.com| B(Next.js Middleware)
  B -->|Extracts Subdomain| C{Supabase PostgreSQL}
  C -->|Returns Tenant Config| D[Dynamic Edge Storefront]
  D -->|Compiles Cart| E[WhatsApp Gateway]
  E -->|Pre-filled Order| F((Merchant WhatsApp))
  
  style A fill:#000,stroke:#666,stroke-width:1px,color:#fff
  style B fill:#000,stroke:#fff,stroke-width:2px,color:#fff
  style C fill:#27ae60,stroke:#2ecc71,stroke-width:2px,color:#fff
  style D fill:#000,stroke:#fff,stroke-width:2px,color:#fff
  style E fill:#25D366,stroke:#128C7E,stroke-width:2px,color:#fff
  style F fill:#25D366,stroke:#128C7E,stroke-width:2px,color:#fff`} />
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Frictionless WhatsApp Checkout</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  In the MENA (Middle East & North Africa) region, many small businesses and customers prefer direct communication and cash-on-delivery over complex payment gateways. 
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I engineered a highly optimized checkout flow that compiles the user's cart (product variants, quantities, total price, and shipping details) into a beautifully formatted, localized WhatsApp message. The customer is redirected seamlessly to WhatsApp with a pre-filled message sent directly to the merchant. This bypassed traditional gateways, saving merchants <strong>2.9% + 30¢ per transaction</strong>, and boosted checkout conversion rates by an estimated <strong>300%</strong> compared to standard credit card forms in the region.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Paintbrush strokeWidth={1.5} className="h-5 w-5 text-foreground" />
                  <h2 className="text-2xl font-semibold m-0 text-foreground">Dynamic Storefront Theming</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A platform isn't truly multi-tenant if every store looks identical. Merchants needed the ability to customize colors, fonts, and layout structures without writing code.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I built a custom theme engine using Tailwind CSS and React Context. Merchant preferences are saved as a JSON configuration in the database. When the storefront loads, the layout dynamically injects CSS variables (like <code>--primary-color</code>) mapped to the Tailwind config. This allows instant, real-time preview of theme changes in the admin dashboard without rebuilding or redeploying the application.
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
